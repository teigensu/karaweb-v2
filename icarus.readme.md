# Hexo 主题 Icarus 文档翻译

<p align="center" class="mb-2">
<img class="not-gallery-item" height="48" src="https://ppoffice.github.io/hexo-theme-icarus/img/logo.svg">
<br> 为静态网站生成器 Hexo 打造的简洁、精致且现代的主题
<br>
<a href="https://ppoffice.github.io/hexo-theme-icarus/">预览</a> |
<a href="https://ppoffice.github.io/hexo-theme-icarus/categories/">文档</a> |
<a href="https://github.com/ppoffice/hexo-theme-icarus/discussions">GitHub 讨论区</a>
<br>
</p>

![](https://ppoffice.github.io/hexo-theme-icarus/gallery/preview.png?1 "Icarus 预览图")

## :cd: 安装指南

```shell
$ npm install hexo-theme-icarus
$ hexo config theme icarus
```

更多详情请参阅 [Icarus 入门指南](https://ppoffice.github.io/hexo-theme-icarus/uncategorized/getting-started-with-icarus/)。

## :gift: 功能特性

### 赛博朋克主题变体

通过新增的赛博朋克主题变体，探索未来赛博世界。灵感源自 [赛博朋克2077](https://www.cyberpunk.net)。

![赛博朋克风格](https://ppoffice.github.io/hexo-theme-icarus/gallery/screenshots/cyberpunk.png "Icarus 赛博朋克主题")

### 丰富的插件支持

Icarus 内置大量搜索、评论、分享等插件，让您的博客功能强大而全面。

**[评论系统](https://ppoffice.github.io/hexo-theme-icarus/categories/Plugins/Comment/)**

畅言 &middot; Disqus &middot; DisqusJS &middot; Facebook &middot; Gitalk &middot; Gitment &middot;
Isso &middot; 来必力 &middot; Utterance &middot; Valine

**[捐赠按钮](https://ppoffice.github.io/hexo-theme-icarus/categories/Plugins/Donation/)**

爱发电 &middot; 支付宝 &middot; Buy me a coffee &middot; Patreon &middot; Paypal &middot; 微信支付

**[搜索功能](https://ppoffice.github.io/hexo-theme-icarus/categories/Plugins/Search/)**

Algolia &middot; 百度 &middot; 谷歌自定义搜索 &middot; Insight

**[分享功能](https://ppoffice.github.io/hexo-theme-icarus/categories/Plugins/Share/)**

AddThis &middot; AddToAny &middot; 百度分享 &middot; Share.js &middot; ShareThis

**[小工具](https://ppoffice.github.io/hexo-theme-icarus/categories/Widgets/)**

Google Adsense &middot; 归档 &middot; 分类 &middot; 外部链接 &middot; 
近期文章 &middot; Google Feedburner &middot; 标签云 &middot; 文章目录

**[网站统计](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Analytics/icarus-user-guide-web-analytics-plugins/)**

百度统计 &middot; Bing站长工具 &middot; 不蒜子计数器 &middot; CNZZ统计 &middot;
谷歌分析 &middot; Hotjar &middot; StatCounter &middot; Twitter转化追踪

**[其他插件](https://ppoffice.github.io/hexo-theme-icarus/categories/Plugins/)**

Cookie许可 &middot; LightGallery相册 &middot; Justified Gallery &middot; KaTeX公式 &middot; MathJax &middot;
浏览器兼容提示 &middot; 页面加载动画

### 多彩代码高亮

Icarus 直接引入 [highlight.js](https://highlightjs.org/) 的样式表，提供超过90种代码高亮主题。

<table>
    <tr>
        <th>Atom One Light</th>
        <th>Monokai</th>
        <th>Kimbie Dark</th>
    </tr>
    <tr>
        <td><img width="266" src="https://ppoffice.github.io/hexo-theme-icarus/gallery/code-highlight/atom-one-light.png?2"></td>
        <td><img width="266" src="https://ppoffice.github.io/hexo-theme-icarus/gallery/code-highlight/monokai.png?2"></td>
        <td><img width="266" src="https://ppoffice.github.io/hexo-theme-icarus/gallery/code-highlight/kimbie-dark.png?2"></td>
    </tr>
</table>

### 灵活的主题配置

支持按页面或布局进行个性化配置。

<div>
<table>
    <tr>
        <th>全局配置 _config.yml</th>
        <th>文章配置 post.md</th>
        <th>页面配置 _config.page.yml</th>
    </tr>
    <tr>
        <td>
<pre>widgets:
  - type: profile
    position: left
  - type: recent_posts
    position: right</pre>
        </td>
        <td>
<pre>widgets:
  - type: profile
    position: left
  - type: recent_posts
    position: left</pre>
        </td>
        <td>
<pre>widgets: null
 
 
 
</pre>
        </td>
    </tr>
    <tr>
        <td><img width="266" src="https://ppoffice.github.io/hexo-theme-icarus/gallery/screenshots/default-config.png"></td>
        <td><img width="266" src="https://ppoffice.github.io/hexo-theme-icarus/gallery/screenshots/post-config.png"></td>
        <td><img width="266" src="https://ppoffice.github.io/hexo-theme-icarus/gallery/screenshots/layout-config.png"></td>
    </tr>
</table>
</div>

### 响应式布局

通过移动端友好的响应式设计，为访客提供最佳浏览体验。

![响应式布局](https://ppoffice.github.io/hexo-theme-icarus/gallery/responsive.png)

## :hammer: 开发架构

本项目基于以下技术构建：

- [Hexo](https://hexo.io/)
- [Inferno.js](https://infernojs.org/)
- [Stylus](https://stylus-lang.com/)
- [Bulma](https://bulma.io/)

实现细节请参考 [开发文档](https://ppoffice.github.io/hexo-theme-icarus/categories/) 和 
[贡献指南](https://github.com/ppoffice/hexo-theme-icarus/blob/master/CONTRIBUTING.md)。

## :tada: 参与贡献

如果您愿意帮助我们打造更好的 Icarus，您可以：

:black_nib: [提交教程](https://github.com/ppoffice/hexo-theme-icarus/new/site/source/_posts) |
:earth_asia: [添加翻译](https://github.com/ppoffice/hexo-theme-icarus/tree/master/languages) |
:triangular_flag_on_post: [报告问题](https://github.com/ppoffice/hexo-theme-icarus/issues) |
:electric_plug: [建议新功能](https://github.com/ppoffice/hexo-theme-icarus/pulls)

## :memo: 开源协议

本项目采用 MIT 许可证 - 详见 [LICENSE](https://github.com/ppoffice/hexo-theme-icarus/blob/master/LICENSE) 文件。