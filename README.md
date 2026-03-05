<h1 align="center">vitepress-theme-teek</h1>

<div align="center">

[Github](https://github.com/Kele-Bingtang/vitepress-theme-teek) ｜ [Gitee](https://gitee.com/kele-bingtang/vitepress-theme-teek) ｜ [Preview](https://notes.teek.top/) ｜[Docs](http://vp.teek.top/)

✨一个轻量、简洁高效、灵活配置、易于扩展的 VitePress       主题。

</div>

<p align="center">
  <a title="Github release" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/releases">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/Kele-Bingtang/vitepress-theme-teek?logo=github">
  </a>

  <a title="Npm Version" target="_blank" href="https://www.npmjs.com/package/vitepress-theme-teek">
    <img src="https://img.shields.io/npm/v/vitepress-theme-teek?logo=npm&color=%09%23bf00ff" alt="https://img.shields.io/npm/v/vitepress-theme-teek?color=%09%23bf00ff">
  </a>

  <img src="https://img.shields.io/badge/v18.x-x?logo=node.js&label=node" alt="node version">
  <img src="https://img.shields.io/github/languages/code-size/Kele-Bingtang/vitepress-theme-teek?logo=Visual Studio Code&logoColor=blue" alt="GitHub code size in bytes">

  <a title="GitHub Discussions" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/discussions">
    <img src="https://img.shields.io/github/discussions/Kele-Bingtang/vitepress-theme-teek?color=9cf&logo=github" alt="GitHub Discussions">
  </a>

  <a title="MIT License" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License">
  </a>
</p>

## 前置应用

- **Git**：[Windows x64](https://github.com/git-for-windows/git/releases/download/v2.53.0.windows.1/Git-2.53.0-64-bit.exe) | [More](https://git-scm.com/install/)
- **Node.js**：[Windows x64](https://nodejs.org/dist/v24.14.0/node-v24.14.0-x64.msi) | [More](https://nodejs.org/zh-cn/download)

## 安装 pnpm

使用 cmd。

```
npm install -g pnpm
```

## 本地运行

### 基本部署

右键文件夹 -> Open Git Bash Here。

项目拉取。

```bash
git clone https://github.com/Garbage-fish/vitepress-theme-teek.git
```

依赖安装。

```bash
pnpm install
```

文档项目启动：输入以下命令或运行 `start.bat`。

```bash
pnpm docs:dev
```

### 配置修改

位于 `/docs/.vitepress/config.ts`，其中引用了许多子文件位于 `/docs/.vitepress/...` 中，建议使用 VS Code 全局搜索功能搜索你想要的配置。

### 资源存储

博客 `*.md` 放在 `/docs` 内，可建任意级子文件夹。

引用资源的根目录为 `/docs/public`，可建任意级子文件夹（注意引用时要填写子文件夹路径）。

## 上传至自己的 Github 仓库

第一次操作时，修改链接仓库。git 地址在仓库主页 -> Code 按键内找到。

```
git remote set-url origin 你的.git地址
```

公式化操作。

```
git add .
git commit -m "引号内填入你对这次修改的介绍"
git push origin main
```

## License

[MIT](./LICENSE) License © 2025 [Teeker](https://github.com/Kele-Bingtang)
