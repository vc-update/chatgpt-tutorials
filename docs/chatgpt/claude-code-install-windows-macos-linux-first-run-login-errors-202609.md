---
title: "Claude Code安装教程：Windows、macOS、Linux首次运行、登录授权与常见报错排查【2026年9月】"
description: "从零安装 Claude Code 的分系统实操：Windows、macOS、Linux 的前置环境、安装命令、首次启动、cd 进入项目目录、登录授权流程，以及命令找不到、Node 版本过低、登录失败等高频报错排查，全部可照抄核验。"
keywords: "Claude Code,Claude Code安装,claude code安装教程,Claude Code Windows,Claude Code macOS,Claude Code Linux,Claude Code 登录,Claude Code 报错"
date: "2026-09-03"
updated: "2026-09-03"
outline: deep
faq:
  - question: "安装 Claude Code 一定要先装 Node.js 吗？"
    answer: "用 npm 方式安装时需要先装 Node.js 和 npm。官方 overview 要求较新的长期支持版本（例如 Node 18 及以上，具体最低版本以官方文档为准）。你可以用 node -v 和 npm -v 确认是否已安装以及版本是否达标。官方也提供原生安装脚本，具体命令请以 code.claude.com 的 overview 页面为准。"
  - question: "Windows 上为什么建议装 Git for Windows？"
    answer: "官方 overview 指出，在原生 Windows 上推荐安装 Git for Windows，这样 Claude Code 才能使用 Bash 工具。如果没装，部分依赖 Bash 的操作可能无法正常运行。你也可以选择在 WSL 环境里运行，具体以官方文档说明为准。"
  - question: "输入 claude 提示 command not found 或不是内部命令怎么办？"
    answer: "这通常是全局安装目录没有加入 PATH，或安装没有成功。先重开终端，再用 npm list -g 或对应命令确认是否装上；确认 npm 全局 bin 目录在 PATH 中。macOS/Linux 可检查 ~/.zshrc 或 ~/.bashrc，Windows 检查系统环境变量后重启终端。"
  - question: "登录时提示地区不可用怎么处理？"
    answer: "Claude 目前只在部分地区提供服务，遇到 App unavailable in region 提示说明当前地区不在官方支持范围。请以 claude.com/app-unavailable-in-region 的 View supported countries 说明为准。本教程不提供任何绕过地区限制的方法，你可以改用官方支持地区的合规访问方式，或选择第三方多模型平台完成日常任务。"
  - question: "Claude Code 和网页版、桌面端 Claude 是一回事吗？"
    answer: "不是。Claude Code 是运行在终端里的命令行编程工具，能读写你本地代码、执行命令；网页版和桌面端 Claude 是对话式应用。本教程只讲命令行工具从安装到跑通的流程。"
  - question: "安装或登录一直失败，有没有能先用起来的替代方案？"
    answer: "可以先用第三方多模型平台在浏览器里体验 Claude 等模型完成写作、问答类任务，这类平台是第三方邀请入口、非厂商官方产品；等本地环境排查好后再回到 Claude Code 做代码工作。注意不要在任何第三方平台上传账号密码、API Key 等敏感信息。"
faqSchema: true
productPromo: "manual"
---

# Claude Code安装教程：Windows、macOS、Linux首次运行、登录授权与常见报错排查【2026年9月】

最后更新：2026-09-03

<div class="product-recommend-box seo-product-promo">

<p class="product-recommend-title">国内 Claude 与多模型 AI 平台推荐</p>

<p>国内使用 Claude、长文本写作或多模型工具时，可以按任务选择以下第三方平台：</p>

<ul>
  <li>
    <strong>🔥 国内直连/全能多模型（SnakeGPT）：</strong>
    <a href="https://share.snakegpt.vip/" target="_blank" rel="nofollow sponsored noopener noreferrer">snakegpt.vip</a>
    <span>据平台提供信息已运营三年；平台标称支持 GPT-5.6、Claude 5.0、Gemini 3.1 Pro、Grok 4.5 与 GPT-Image-2，无需翻墙。</span>
  </li>
  <li>
    <strong>🎨 多模型/多种绘图（GPTCat）：</strong>
    <a href="https://share.gptcat.cc/" target="_blank" rel="nofollow sponsored noopener noreferrer">gptcat.cc</a>
    <span>平台标称支持 GPT、Claude、Gemini、DeepSeek、Grok，以及 MJ、Nano Banana 与 GPT-Image-2 绘图。</span>
  </li>
  <li>
    <strong>💻 网页端多模型/Codex 开发额度（ZeoGPT）：</strong>
    <a href="https://www.zeogpt.com/register?ref=MRNWDKC3" target="_blank" rel="nofollow sponsored noopener noreferrer">zeogpt.com</a>
    <span>平台标称可同时使用网页端多模型服务，并按套餐提供独立 Codex 开发额度；Plus、Pro 5x、Pro 20x 等档位及具体额度以登录后的实时页面为准，不等同于 OpenAI 官方 API 余额。</span>
  </li>
</ul>

<p class="product-recommend-disclosure">以上均为邀请链接（仅指产品入口）；SnakeGPT 与 GPTCat 与 ZeoGPT 均为第三方服务，不是相关模型厂商的官方网站或官方产品；所列套餐、额度、型号与能力来自平台标称，具体功能与可用性以登录后的实际页面为准，第三方开发额度不等同于 OpenAI 官方 API 余额。请勿上传账号密码、API Key、合同或其他敏感资料。</p>

</div>

本站为独立教程博客，并非 Anthropic、OpenAI、Google 或 xAI 的官方网站，也不提供 AI 模型对话功能。文中如提到手机或电脑上的使用，均指打开对应官方产品网站或第三方平台，而不是在本博客站内运行模型。

直接回答：在自己的电脑上装好 Claude Code，核心就三步——先准备好前置环境（Node.js/npm，Windows 额外装 Git for Windows），再用官方命令全局安装并验证 `claude` 命令可用，最后 `cd` 到你的项目目录里运行 `claude` 完成登录授权。三大系统的安装命令基本一致，差异主要在终端选择、PATH 检查和权限处理上。下面按系统逐条拆开，附首次跑通验证和高频报错对照表。

## 开始前必读：Claude Code 是什么，和网页版有什么区别

Claude Code 是 Anthropic 面向开发者的命令行编程工具（agentic coding tool）。它运行在你的终端里，能读懂本地代码库、编辑文件、执行命令，帮你完成改代码、跑测试、修 Bug 这类任务。产品说明见官方页面 https://claude.com/product/claude-code 。

它和你平时用的网页版 Claude、桌面端 Claude 不是同一个东西：

- 网页版/桌面端 Claude：对话式应用，你在聊天框里提问、生成内容。
- Claude Code：终端里的命令行 Agent，直接对接你的本地项目文件和命令行。

本教程只讲命令行工具从零安装到第一次跑通的动手流程。如果你还需要核验官方入口真伪、理解权限与安全边界，可以配合阅读本站的 [Codex安装教程与首次运行：Windows、macOS、Linux登录、项目权限和VS Code验证【2026年8月】](/chatgpt/codex-cli-first-run-windows-macos-linux-vscode-202608)，两者在命令行 Agent 的权限授权逻辑上思路相近。

本教程覆盖 Windows、macOS、Linux 三大系统。所有涉及命令的地方我都尽量写成可以照抄的形式，但因为工具版本更新较快，安装命令、最低版本、支持地区等易变化信息，请务必以官方文档为准：中文概述见 https://code.claude.com/docs/zh-CN/overview ，源码与安装说明见 https://github.com/anthropics/claude-code 。

## 前置环境准备：Node.js、npm 与 Git for Windows

用最常见的 npm 方式安装 Claude Code，需要先具备下面的环境：

- Node.js：官方 overview 要求较新的长期支持（LTS）版本，例如 Node 18 及以上；具体最低版本以官方文档为准。
- npm：随 Node.js 一起安装，用于全局安装 Claude Code。
- Windows 额外项：官方 overview 明确指出，在原生 Windows 上推荐安装 Git for Windows，这样 Claude Code 才能使用 Bash 工具。没装可能导致依赖 Bash 的操作无法运行。

先在终端里做一次环境体检：

```bash
node -v
npm -v
git --version
```

如果 `node -v` 报错或版本偏低，就先去 Node.js 官网装或升级到 LTS 版本。如果 `git --version` 在 Windows 上报错，说明还没装 Git for Windows。

官方也提供原生安装脚本（不依赖 npm 的方式）。因为脚本地址和写法可能随版本变化，这里不照搬具体命令，请以 https://code.claude.com/docs/zh-CN/overview 页面上给出的当前命令为准。本文后续以通用、稳定的 npm 全局安装作为主线。

## Windows 安装步骤

Windows 上推荐用 PowerShell 或 Windows Terminal 操作，并确认已按上一节装好 Node.js 和 Git for Windows。

1. 打开 PowerShell（建议用 Windows Terminal 里的 PowerShell 标签）。
2. 确认环境：

```powershell
node -v
npm -v
git --version
```

3. 全局安装 Claude Code：

```powershell
npm install -g @anthropic-ai/claude-code
```

4. 验证 `claude` 命令是否可用：

```powershell
claude --version
```

如果第 4 步提示“claude 不是内部或外部命令”，通常是 npm 全局 bin 目录没进 PATH。先完全关闭并重开终端再试；仍不行就检查系统环境变量里是否包含 npm 全局目录，改完后重启终端。

Windows 上的报错排查，也可以参考本站的 [ChatGPT官方下载与安装教程：Windows、Mac、iPhone、Android及安装失败排查【2026年9月更新】](/chatgpt/chatgpt-app-download-install-guide-2026-new)，里面关于 Windows 安装失败的思路（权限、路径、重装顺序）同样适用于命令行工具。

## macOS 安装步骤

macOS 自带终端（Terminal），也可以用 iTerm2。建议先用 Homebrew 或官网安装好 Node.js。

1. 打开终端，检查环境：

```bash
node -v
npm -v
```

2. 全局安装：

```bash
npm install -g @anthropic-ai/claude-code
```

3. 如果安装时提示权限不足（EACCES），不建议直接 `sudo` 硬装。更干净的做法是用 nvm 管理 Node，或调整 npm 全局目录，让当前用户对全局安装目录有写权限。
4. 验证命令并检查 PATH：

```bash
claude --version
which claude
```

如果 `claude --version` 报 command not found，检查你的 shell 配置文件（zsh 用 `~/.zshrc`，bash 用 `~/.bashrc`）里是否包含 npm 全局 bin 目录，改完执行 `source ~/.zshrc` 或重开终端。

## Linux 安装步骤

Linux 上不同发行版差异主要在包管理器和依赖。以常见的 Ubuntu/Debian 为例：

1. 先确保有 Node.js、npm 和 git：

```bash
node -v
npm -v
git --version
```

如缺失，用发行版官方推荐方式安装 Node.js（例如 NodeSource 源或 nvm），不要只依赖系统仓库里过旧的版本。

2. 全局安装 Claude Code：

```bash
npm install -g @anthropic-ai/claude-code
```

3. 权限注意：和 macOS 一样，遇到 EACCES 优先用 nvm 或改 npm 前缀目录，避免全程 `sudo`，否则容易造成后续文件属主混乱。
4. 验证：

```bash
claude --version
```

如果命令找不到，确认 npm 全局 bin（例如 `~/.npm-global/bin` 或 nvm 对应目录）已加入 `PATH`，写进 `~/.bashrc` 或 `~/.profile` 后重新加载。

## 三大系统安装要点对照表

| 步骤 | Windows | macOS | Linux |
| --- | --- | --- | --- |
| 推荐终端 | PowerShell / Windows Terminal | Terminal / iTerm2 | 默认终端 |
| 前置环境 | Node.js + npm + Git for Windows | Node.js + npm | Node.js + npm + git |
| 安装命令 | `npm install -g @anthropic-ai/claude-code` | 同左 | 同左 |
| 验证命令 | `claude --version` | `claude --version` | `claude --version` |
| 权限重点 | PATH/环境变量后重启终端 | 避免 sudo，改用 nvm/改前缀 | 避免 sudo，改用 nvm/改前缀 |
| 特有依赖 | Git for Windows 供 Bash 工具 | 无 | 各发行版 Node 安装源 |

## 第一次启动 Claude Code

装好并验证 `claude --version` 有输出后，就能启动了。最小可用性确认：

```bash
claude
```

首次运行时，工具通常会显示欢迎信息，并引导你完成登录授权（见下一节）。如果直接在一个空目录里启动，它虽然能跑，但没有可操作的代码上下文，意义不大。更推荐的做法是先进入项目目录再启动。

## 进入项目目录：先 cd 再运行

Claude Code 是围绕“当前工作目录”来理解你的代码库的。所以正确姿势是先 `cd` 到项目根目录，再运行 `claude`：

```bash
cd /path/to/your-project
claude
```

- Windows 示例：`cd C:\Users\you\projects\your-project`，再运行 `claude`。
- 为什么要在项目根目录：这样 Claude 才能看到完整的目录结构、配置文件和源码，改动和执行命令都发生在这个范围内，避免它在错误的位置读写文件。

如果你对“命令行 Agent 在项目里改代码、跑测试、提交改动”的完整工作流感兴趣，可以看本站的 [Codex 编程实战教程：让 AI 修改代码、跑测试、修 Bug 和提交 PR](/chatgpt/codex-programming-practical-guide-2026-06)，里面的项目内协作思路对使用 Claude Code 同样有参考价值。

## 登录与授权

第一次在项目里运行 `claude`，工具会引导你完成账号登录授权。根据官方说明，登录通常会打开浏览器完成，需要一个可用的 Claude 账号；不同套餐或使用 Anthropic 开发者控制台方式的具体差异，请以官方文档为准（https://code.claude.com/docs/zh-CN/overview 与 https://github.com/anthropics/claude-code ）。

关于地区可用性：Claude 目前只在部分地区提供服务。如果登录时看到 “App unavailable in region” 之类提示，说明当前地区不在官方支持范围内。官方说明与支持国家列表见 https://claude.com/app-unavailable-in-region （页面上的 View supported countries）。

本教程不提供任何绕过地区限制的方法。如果你在官方支持地区之外，建议使用官方支持地区的合规访问方式；或者在本地环境还没跑通、只想先做写作问答类任务时，改用浏览器里的第三方多模型平台过渡（这类平台是第三方邀请入口、非厂商官方产品）。国内访问相关的一般性说明，可参考本站 [ChatGPT如何在国内使用？官网、网页版与中文版入口教程（2026）](/chatgpt/chatgpt-china-official-mirror-complete-solution-2026-06)。

安全提醒：登录授权只在官方入口完成，不要把账号密码、Token 或 API Key 贴到任何第三方页面或聊天框里。

## 首次跑通验证

登录成功后，做一次最小验证，确认工具链真的能读文件、提改动：

1. 在项目根目录启动 `claude`。
2. 让它读取并总结项目：例如输入“请读取当前项目的 README 并用三句话概括这个项目在做什么”。
3. 让它提一个小改动：例如“在 README 里补一段安装说明的占位标题，只给出改动内容，先不要直接写入”。
4. 观察它能否正确列出文件、给出改动建议，并按工具流程请求你确认后再落盘。

只要它能读到你的真实文件、给出针对性的回答，并在写文件/执行命令前走确认流程，就说明安装、登录和项目上下文都正常了。涉及执行命令或写文件时，逐条确认，不要一次性放行所有权限。

## 常见报错排查对照表

| 现象 | 可能原因 | 排查方向 |
| --- | --- | --- |
| `claude: command not found` / 不是内部命令 | 全局 bin 未进 PATH，或没装成功 | 重开终端；确认 npm 全局目录在 PATH；重装 |
| 安装报 Node 版本过低 | Node.js 低于官方要求 | 升级到 LTS 版本（如 18+，以官方为准）后重装 |
| 安装报 EACCES 权限错误 | 全局目录当前用户无写权限 | 用 nvm 或改 npm 前缀目录，避免 sudo 硬装 |
| Windows 部分功能报 Bash 相关错误 | 未装 Git for Windows | 安装 Git for Windows 后重开终端 |
| 登录打不开浏览器或授权失败 | 网络问题或地区不可用 | 检查网络；参考官方地区支持说明 |
| 提示 App unavailable in region | 当前地区不在支持范围 | 以官方支持国家列表为准，改用合规访问方式 |
| 启动后没有项目上下文 | 没有 cd 到项目目录 | 先 `cd` 到项目根目录再运行 `claude` |

避坑清单：

- 不要一遇到权限报错就 `sudo` 全局安装，容易把文件属主搞乱，后续更难修。
- Windows 改完 PATH 一定要重开终端或重启，改动才生效。
- 不要在网络异常时反复重装，先确认能不能正常访问官方登录页。
- 不要把任何真实密钥写进命令或配置示例，占位符统一用 `<YOUR_API_KEY>` 这类形式。

## 卸载与重装/升级

想清理旧版本或重装，用 npm 全局卸载再装：

```bash
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code
```

- 升级：多数情况下重新执行一次全局安装命令即可拿到较新版本，具体升级方式以官方文档说明为准。
- 重装后仍报 command not found：说明是 PATH 问题而非安装问题，回到上面的 PATH 检查步骤。
- 如果你用原生安装脚本装的，卸载方式可能不同，请按官方 overview 给出的对应方法处理。

## 事实边界说明

- 本文的安装命令、Node.js 最低版本、Git for Windows 依赖、登录方式和支持地区，均以官方页面为准；工具更新较快，请在动手前用官方文档核对当前信息。
- 官方来源：产品页 https://claude.com/product/claude-code 、中文概述 https://code.claude.com/docs/zh-CN/overview 、源码仓库 https://github.com/anthropics/claude-code 、地区可用性 https://claude.com/app-unavailable-in-region 。
- 本文不承诺任何服务在特定地区长期可用，也不提供绕过地区限制的方法。
- 本站为独立教程站点，不代表 Anthropic 或其他厂商发布官方声明。

## 常见问题

问：安装 Claude Code 一定要先装 Node.js 吗？
答：用 npm 方式安装时需要先装 Node.js 和 npm。官方 overview 要求较新的长期支持版本（例如 Node 18 及以上，具体以官方文档为准）。用 `node -v`、`npm -v` 确认是否达标。官方也提供原生安装脚本，命令以 code.claude.com 的 overview 页面为准。

问：Windows 上为什么建议装 Git for Windows？
答：官方 overview 指出，在原生 Windows 上推荐安装 Git for Windows，Claude Code 才能使用 Bash 工具。不装可能导致依赖 Bash 的操作无法运行。你也可以在 WSL 环境里运行，具体以官方文档为准。

问：输入 `claude` 提示 command not found 或不是内部命令怎么办？
答：多半是全局安装目录没进 PATH，或安装没成功。先重开终端，再确认是否装上；确认 npm 全局 bin 目录在 PATH 中。macOS/Linux 检查 `~/.zshrc` 或 `~/.bashrc`，Windows 检查系统环境变量后重启终端。

问：登录时提示地区不可用怎么处理？
答：Claude 目前只在部分地区提供服务，遇到 App unavailable in region 说明当前地区不在支持范围。请以 https://claude.com/app-unavailable-in-region 的支持国家列表为准。本教程不提供绕过方法，可改用官方支持地区的合规访问方式，或用第三方多模型平台完成日常任务。

问：Claude Code 和网页版、桌面端 Claude 是一回事吗？
答：不是。Claude Code 是运行在终端里的命令行编程工具，能读写本地代码、执行命令；网页版和桌面端 Claude 是对话式应用。本教程只讲命令行工具从安装到跑通。

问：安装或登录一直失败，有没有能先用起来的替代方案？
答：可以先用第三方多模型平台在浏览器里体验 Claude 等模型做写作、问答类任务，这类平台是第三方邀请入口、非厂商官方产品；等本地环境排查好后再回到 Claude Code 做代码工作。注意不要在任何第三方平台上传账号密码、API Key 等敏感信息。

下一步：环境跑通后，建议先在一个小项目里练习“读文件—提改动—确认执行”的流程，把权限确认习惯养成，再逐步让 Claude Code 参与更复杂的改代码、跑测试任务。遇到不确定的功能或套餐信息，始终回到官方文档复核。
