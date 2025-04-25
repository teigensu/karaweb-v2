配置：hexo，主题为icarus。域名为karakara.top。

构建一个wiki系统，通过karakara.top/wiki进入。

wiki系统掌管多个项目，项目内管理多个文档。

例如项目「sample」，可以通过karakara.top/wiki里的链接进入karakara.top/wiki/sample，进入后能够看到sample里的各个文档。

其中karakara.top/wiki对应的yml文件位于source/_data/wiki/wiki.yml，karakara.top/wiki/sample对应的yml文件位于source/_data/wiki/sample.yml。

sample里的各个文档位于source/wiki/sample/。

此外，各个配置示例如下：
```source/_data/wiki/wiki.yml
- sample
- ···
```
```yaml source/_data/wiki/sample.yml
name: sample
title: 示例文件
subtitle: shiliwenjian
icon: https://raw.githubusercontent.com/teigensu/teigensu.github.io/refs/heads/main/medicalwikipicture/comprohensive-diagnostic-1/medical-history-doctor-svgrepo-com.svg
cover: https://raw.githubusercontent.com/teigensu/teigensu.github.io/refs/heads/main/medicalwikipicture/comprohensive-diagnostic-1/medical-history-doctor-svgrepo-com.svg
description: 这是一个示例文件。
leftbar: 
  - search
  - tree
  - recent_posts
base_dir: /wiki/sample/
tree:
  - index
  - doc1
```
```yaml source/wiki/sample/index.md
---
title: 示例文档的示例文档
project: sample
---
内容。
```