以下是在您的环境下（Debian 10 VPS + macOS + Yarn + Nginx + acme.sh）**从零部署 Hexo 个人网站（karakara.top，使用端口 8080）** 的完整流程。结构如下：

---

## 一、本地 Hexo 项目初始化（macOS）

### 1. 安装必要环境

```bash
brew install node
npm install -g yarn
yarn global add hexo-cli
```

验证版本：

```bash
node -v
yarn -v
hexo -v
```

---

### 2. 创建 Hexo 项目

```bash
mkdir karakara-blog && cd karakara-blog
hexo init .
yarn install
```

---

### 3. 撰写文章（示例）

```bash
hexo new post "Hello Hexo"
# 编辑 source/_posts/Hello-Hexo.md
```

---

### 4. 选择主题（以 Butterfly 为例）

```bash
cd themes
git clone https://github.com/jerryc127/hexo-theme-butterfly.git butterfly
cd ..
```

修改根目录 `_config.yml`：

```yaml
theme: butterfly
```

安装必要依赖：

```bash
yarn add hexo-generator-searchdb hexo-generator-feed hexo-related-popular-posts
```

---

## 二、VPS 设置部署环境

### 1. VPS 创建部署目录

```bash
sudo mkdir -p /home/karaweb/www
sudo chown -R karaweb:karaweb /home/karaweb/www
```

---

### 2. 在本地项目安装部署插件

```bash
yarn add hexo-deployer-git
```

---

### 3. 本地配置 `_config.yml` 的部署方式

```yaml
deploy:
  type: git
  repo: ssh://karaweb@your.vps.ip:/home/karaweb/www
  branch: master
```

建议设置 SSH 密钥认证，避免频繁输入密码。

---

## 三、构建并部署网站（本地执行）

```bash
hexo clean && hexo g && hexo d
```

会将生成的 `public/` 内容部署至 VPS 的 `/home/karaweb/www` 目录。

---

## 四、VPS 配置 Nginx 服务（监听 8080 端口）

### 1. 创建 Nginx 配置文件

路径：`/etc/nginx/sites-available/karakara.top`

内容如下：

```nginx
server {
    listen 8080;
    server_name karakara.top www.karakara.top;

    root /home/karaweb/www;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### 2. 启用配置并重启 Nginx

```bash
sudo ln -s /etc/nginx/sites-available/karakara.top /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 五、配置 DNS 解析

请前往 **腾讯云解析 karakara.top**，添加如下记录：

| 类型 | 主机记录 | 记录值          | 端口 |
|------|----------|------------------|------|
| A    | @        | VPS公网IP        | 8080 |
| A    | www      | VPS公网IP        | 8080 |

⚠️ 注意：DNS 无法直接指定端口，请使用 `http://karakara.top:8080` 访问，或结合反代解决（见下一步）。

---

## 六（可选）启用主域名 + HTTPS（反向代理）

由于 `443` 端口已用于 VPN，可将访问 `karakara.top` 的请求反向代理到本地 `8080`。

### 1. 使用 acme.sh 获取证书（若尚未申请）

```bash
acme.sh --issue -d karakara.top -d www.karakara.top --standalone
acme.sh --install-cert -d karakara.top \
  --key-file       /etc/nginx/ssl/karakara.top.key \
  --fullchain-file /etc/nginx/ssl/karakara.top.cer \
  --reloadcmd     "systemctl reload nginx"
```

### 2. 配置 Nginx 反向代理（监听 443，转发到 127.0.0.1:8080）

```nginx
server {
    listen 443 ssl;
    server_name karakara.top www.karakara.top;

    ssl_certificate /etc/nginx/ssl/karakara.top.cer;
    ssl_certificate_key /etc/nginx/ssl/karakara.top.key;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

# 可选：http 跳转到 https
server {
    listen 80;
    server_name karakara.top www.karakara.top;
    return 301 https://$host$request_uri;
}
```

重新加载：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## ✅ 完成部署！访问方式

- 内网测试：`http://your.vps.ip:8080`
- 公开访问（含 HTTPS）：`https://karakara.top`

---

是否还需要我为您生成部署脚本、Hexo 模板配置文件或远程自动部署 hook？