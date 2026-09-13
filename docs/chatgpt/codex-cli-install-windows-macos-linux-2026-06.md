---
title: "Codex CLI 安装教程 2026：Windows、macOS、Linux 从零跑通"
description: "一步步讲解 OpenAI Codex CLI 在 Windows、macOS、Linux 上的安装方式、登录方式、npm 安装、Homebrew 安装、常见报错和国内用户注意事项。"
date: 2026-06-26
updated: 2026-06-29
outline: deep
head:
  - - meta
    - name: keywords
      content: Codex CLI安装,Codex安装教程,OpenAI Codex CLI,Windows安装Codex,macOS安装Codex,Linux安装Codex,Codex国内使用
---

# Codex CLI 安装教程 2026：Windows、macOS、Linux 从零跑通

> 更新时间：2026-06-26。本文是面向新手的 Codex CLI 实操教程，重点解决安装、登录、运行、报错排查和国内使用注意事项。

搜索「Codex CLI 安装」的人通常不想看概念，而是想马上跑起来。下面按 Windows、macOS、Linux、npm、Homebrew 五条路径写，你可以按自己的系统选择一种。

<!-- product-entry-2026-06-29:start -->
::: tip Codex 快速入口
如果你主要是写代码、改项目、跑脚本、解释报错或使用 Codex 类能力，优先看 [ZeoGPT](https://www.zeogpt.com/register?ref=MRNWDKC3)。这类文章只推荐 ZeoGPT，不混推普通聊天工具；使用前仍建议先脱敏代码、移除密钥和生产配置。
:::
<!-- product-entry-2026-06-29:end -->

## 安装前先确认三件事

| 检查项 | 为什么重要 | 怎么确认 |
| --- | --- | --- |
| 官方来源 | 避免下载假安装包 | 优先看 OpenAI 文档、GitHub openai/codex、npm @openai/codex |
| 终端环境 | Codex CLI 需要在命令行运行 | Windows 用 PowerShell，macOS/Linux 用 Terminal |
| 登录方式 | 决定额度和权限 | 优先按官方提示使用 ChatGPT 登录，API Key 方式要看文档 |

官方入口建议先收藏：

- [Codex CLI 文档](https://developers.openai.com/codex/cli)
- [openai/codex GitHub 仓库](https://github.com/openai/codex)
- [@openai/codex npm 包](https://www.npmjs.com/package/@openai/codex)

## Windows 安装 Codex CLI

打开 PowerShell，执行官方安装命令：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

安装完成后执行：

```powershell
codex
```

如果提示找不到命令，先关闭 PowerShell 重新打开，再执行：

```powershell
where codex
```

仍然找不到时，通常是 PATH 没刷新、安装脚本没有写入成功，或当前终端权限不足。

## macOS / Linux 安装 Codex CLI

打开 Terminal：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

安装后运行：

```bash
codex
```

如果你不想直接执行远程脚本，可以优先查看 GitHub Release 或使用 npm/Homebrew 安装方式。

## npm 安装方式

如果你已经有 Node.js 环境，可以用 npm：

```bash
npm install -g @openai/codex
```

验证：

```bash
codex --version
codex
```

国内用户如果 npm 安装慢，先确认网络和 registry 状态，不要随便换来源不明的包名。正确包名是 `@openai/codex`。

## Homebrew 安装方式

macOS 用户也可以使用：

```bash
brew install --cask codex
```

验证：

```bash
codex
```

## 第一次运行怎么登录？

运行 `codex` 后，根据官方提示选择登录方式。普通用户建议优先选择 ChatGPT 账号登录，因为它更适合跟 ChatGPT 计划、产品入口和使用额度对应起来。

API Key 方式也可以使用，但要特别注意：

1. 不要把 API Key 写进文章、截图或公开仓库。
2. 不要把 API Key 粘贴到来源不明的网站。
3. 使用环境变量或官方推荐方式保存密钥。
4. 如果密钥泄露，立刻去平台后台撤销。

## 第一个测试任务

安装好以后，不要直接在重要项目里试。建议新建一个临时目录：

```bash
mkdir codex-test
cd codex-test
```

创建一个简单任务：

```text
请创建一个 README.md，说明这个目录用于测试 Codex CLI，并生成一个 hello.js。
要求 hello.js 运行后输出 hello codex。
完成后告诉我运行命令。
```

然后人工检查文件，再执行命令验证。这个流程可以确认 Codex 是否能读写当前目录、是否能给出清楚的验证步骤。

## 常见报错排查

| 报错或现象 | 可能原因 | 处理建议 |
| --- | --- | --- |
| codex: command not found | PATH 未刷新或安装失败 | 重开终端，检查安装日志 |
| PowerShell 执行策略报错 | Windows 脚本策略限制 | 使用官方命令里的 ExecutionPolicy 参数 |
| npm 安装失败 | Node 版本、网络、权限 | 升级 Node，检查 npm 权限和网络 |
| 登录打不开浏览器 | 默认浏览器或网络异常 | 复制登录链接到浏览器，换无痕窗口 |
| 运行任务不改文件 | 当前目录权限或授权限制 | 确认在项目目录内，并阅读权限提示 |

## 国内用户注意事项

1. 搜索结果里出现的「Codex 中文版」「Codex 国内版下载」不一定是官方服务。
2. 安装包要优先来自官方脚本、GitHub Release、npm 或 Homebrew。
3. 不要把公司私有代码直接交给不清楚数据边界的平台。
4. 用第三方教程时，安装命令必须回到官方来源核对。
5. 如果只是想学习 AI 编程，可以先看教程，不急着绑定敏感仓库。

## 和 ChatGPT 编程有什么区别？

| 对比 | ChatGPT 编程问答 | Codex CLI |
| --- | --- | --- |
| 使用位置 | 浏览器对话框 | 本地终端 |
| 项目上下文 | 手动粘贴 | 更适合读取当前项目 |
| 文件修改 | 你复制粘贴 | 可按授权写入文件 |
| 验证方式 | 你自己运行 | 可围绕命令结果迭代 |

如果你只是写一段函数，用 ChatGPT 就够；如果你想让 AI 改真实项目，Codex CLI 更适合。

## 相关阅读

- [ChatGPT Codex 编程教程](/chatgpt/chatgpt-codex-programming-guide-2026-new)
- [Codex 编程实战教程](/chatgpt/codex-programming-practical-guide-2026-06)
- [GPT Home：ChatGPT Codex 和 Cursor、Claude Code 对比](https://gpthomechat.com/chatgpt/chatgpt-codex-vs-cursor-claude-code-2026.html)

## FAQ

### Codex CLI 是免费的吗？

是否可用、额度和计费取决于你的 ChatGPT/OpenAI 账号计划以及官方当前政策。安装命令本身不等于无限免费使用。

### Windows 能用 Codex CLI 吗？

可以。官方 README 已给出 Windows PowerShell 安装命令，但实际体验还取决于终端、网络、权限和账号状态。

### 能不能用镜像安装？

不建议安装来源不明的镜像包。教程可以参考，安装包和登录入口应回到官方来源核验。
