---
title: "Codex安装教程与首次运行：Windows、macOS、Linux登录、项目权限和VS Code验证【2026年8月】"
description: "面向开发者的 Codex CLI 安装与首次运行教程：讲清 Codex CLI、桌面 App 与网页版的区别，覆盖 Windows、macOS、Linux 的依赖检查、官方安装命令、版本验证、首次登录、项目目录最小权限、VS Code 协作与只读验证，并附错误排查与官方来源。"
keywords: "Codex CLI,Codex安装教程,Codex安装,Codex CLI安装,Codex下载,Windows Codex,VS Code Codex"
date: "2026-08-22"
updated: "2026-08-22"
outline: deep
faq:
  - question: "Codex CLI、Codex 桌面 App 和 ChatGPT 里的 Codex 是同一个东西吗？"
    answer: "不是完全相同。Codex CLI 是在终端里运行的命令行工具，桌面 App 与 ChatGPT 里的 Codex 是图形化的编码助手入口，三者共享同一套账号与能力体系，但安装方式、运行位置和权限模型不同。具体功能与可用性以 developers.openai.com/codex 和 github.com/openai/codex 当前说明为准。"
  - question: "Codex CLI 支持哪些操作系统？"
    answer: "官方仓库标注支持 macOS、Windows 和 Linux。Windows 上通常建议配合 PowerShell 或 WSL 使用，具体系统与版本要求以 github.com/openai/codex 的 README 当前内容为准，本文不写死版本号，避免过时。"
  - question: "安装 Codex CLI 需要付费或购买 API Key 吗？"
    answer: "安装工具本身不涉及付费下载。运行时的账号登录方式、可用额度和计费规则由 OpenAI 官方决定，请以 openai.com/codex 与 help.openai.com 的账号页面为准。任何声称提供破解版、绿色版的第三方下载站都应避免使用。"
  - question: "第一次运行 Codex CLI 会不会直接改我的代码？"
    answer: "建议首次运行采用最小权限：先在只读或需要逐步确认的模式下让它解释代码、生成方案，确认无误后再逐步开放写入与执行。不要在未备份、未提交 Git 的目录直接授予自动修改和执行命令的权限。"
  - question: "国内网络环境下安装或登录失败怎么办？"
    answer: "先区分是安装阶段（npm/网络）还是登录阶段（账号/网络）的问题。安装失败多与 npm 源、Node 版本、PATH 有关；登录失败多与账号和网络访问有关。官方入口以 chatgpt.com 和 help.openai.com 为准，第三方开发平台只是可选补充，不能替代官方安装与账号体系。"
productPromo: "manual"
---

# Codex安装教程与首次运行：Windows、macOS、Linux登录、项目权限和VS Code验证【2026年8月】

最后更新：2026-08-22

<div class="product-recommend-box seo-product-promo">

<p class="product-recommend-title">国内 Codex 与多模型 API 开发工具推荐</p>

<p>国内进行 Codex、代码、脚本或多模型 API 开发时，可以按任务选择以下第三方工具：</p>

<ul>
  <li>
    <strong>💻 Codex/编程训练（ZeoGPT）：</strong>
    <a href="https://www.zeogpt.com/register?ref=MRNWDKC3" target="_blank" rel="nofollow sponsored noopener noreferrer">zeogpt.com</a>
    <span>平台标称可同时使用网页端多模型服务，并按套餐提供独立 Codex 开发额度；Plus、Pro 5x、Pro 20x 等档位及具体额度以登录后的实时页面为准，不等同于 OpenAI 官方 API 余额。</span>
    <span>另见 <a href="https://www.zeogpt.com/codex" target="_blank" rel="nofollow sponsored noopener noreferrer">Codex 安装与配置教程</a>（登录后查看）。</span>
  </li>
  <li>
    <strong>🔌 API/脚本接入（ZeoAPI）：</strong>
    <a href="https://www.zeoapi.com/register?aff=Pe3N" target="_blank" rel="nofollow sponsored noopener noreferrer">zeoapi.com</a>
    <span>多模型 API 接入、脚本和原型测试。</span>
  </li>
</ul>

<p class="product-recommend-disclosure">以上均为邀请链接（仅指产品入口）；ZeoGPT Codex 教程链接为平台功能页。ZeoGPT 与 ZeoAPI 均为第三方服务，不是相关模型厂商的官方网站或官方产品；所列套餐、额度、型号与能力来自平台标称，具体功能与可用性以登录后的实际页面为准，第三方开发额度不等同于 OpenAI 官方 API 余额。请勿上传账号密码、API Key、合同或其他敏感资料。</p>

</div>

本站为独立教程博客，并非 OpenAI 或 Codex 的官方网站，也不提供 AI 模型对话功能。文中安装命令、系统要求与账号规则均以官方文档为准，手机或电脑上使用时请打开官方产品或对应服务网站，不要在本博客站内运行模型。

## 先给结论：安装 Codex CLI 的正确顺序

如果你只想尽快跑通，记住这条顺序就够了：先确认操作系统与依赖（Node.js 或 Homebrew）→ 按官方文档执行安装命令 → 运行 `codex --version` 验证 → 登录账号 → 进入一个已用 Git 管理的项目目录 → 用只读或需确认的最小权限跑第一个任务。安装工具只从官方渠道获取，不要下载所谓"破解版""绿色版"。首次运行不要一上来就授予自动写文件和执行命令的权限。

Codex CLI 是 OpenAI 提供的官方终端编码代理，运行在你自己的电脑上，能读取项目文件、生成改动、跑测试和执行命令。它和网页里的 Codex、桌面 App 属于同一套体系，但 CLI 的优势是可脚本化、可集成到现有终端与 VS Code 工作流中。

如果你还没搞清楚 Codex 能实际做哪些编程工作，可以先读 [Codex 编程实战教程：让 AI 修改代码、跑测试、修 Bug 和提交 PR](/chatgpt/codex-programming-practical-guide-2026-06)，再回到本页完成安装。

## 安装前先分清 Codex CLI、桌面 App 和网页版

很多"安装失败"其实是装错了对象。三种形态的定位不同：

| 形态 | 运行位置 | 安装方式 | 适合场景 |
| --- | --- | --- | --- |
| Codex CLI | 你的终端（本机） | npm 全局包或 Homebrew 等官方方式 | 脚本化、自动化、深度接入现有开发环境 |
| Codex 桌面 App / IDE 集成 | 图形界面客户端 | 官方安装包或编辑器扩展 | 喜欢可视化操作、边看边确认改动 |
| ChatGPT 里的 Codex | 浏览器 / ChatGPT App | 登录 chatgpt.com 直接使用 | 云端并行任务、无需本地安装 |

它们共享同一账号与能力体系，但权限模型完全不同：CLI 直接操作你本机的文件系统，因此对目录选择和权限授予要格外谨慎；网页版的 Codex 则在云端环境里运行。本文聚焦 CLI 的安装与首次运行。三者的差异和当前功能范围，请以 [developers.openai.com/codex](https://developers.openai.com/codex/) 与 [openai.com/codex](https://openai.com/codex/) 的说明为准。

如果你只是想在浏览器里用 ChatGPT，而不是装终端工具，可以参考 [ChatGPT官方下载入口：Windows、Mac、iPhone、Android安装教程（2026）](/chatgpt/chatgpt-app-download-install-guide-2026-new)。

## Windows、macOS、Linux 安装前检查

安装前的环境检查决定了后面是否顺利。按平台分别确认：

- 通用：确认你有稳定的网络环境能访问 npm 源与官方登录页；确认目标项目已用 Git 管理，方便随时回滚。
- macOS：确认已安装 Node.js（可用 `node -v`、`npm -v` 检查），或已安装 Homebrew（`brew -v`）。二选一即可，按官方 README 提供的方式选择。
- Windows：建议使用 PowerShell，或在 WSL（Windows Subsystem for Linux）里以 Linux 方式安装。先用 `node -v` 确认 Node.js 是否可用；如果命令找不到，说明 Node 未安装或未进 PATH。
- Linux：确认发行版的包管理器可正常安装 Node.js，或使用 nvm 管理 Node 版本，再执行安装命令。

关于具体的 Node 最低版本、是否推荐 WSL、是否支持 Homebrew 安装，请直接看 [github.com/openai/codex](https://github.com/openai/codex) 的 README，因为这些要求会随版本变化，本文不写死数字以免误导。

## 按官方文档安装 Codex CLI 并验证版本

最常见、也最推荐的方式是通过 npm 全局安装官方包。执行前请确认 Node.js 与 npm 已就绪：

```bash
## 通过 npm 全局安装（以官方仓库当前包名为准）
npm install -g @openai/codex

## 安装完成后验证版本
codex --version
```

macOS 用户如果偏好 Homebrew，官方仓库也可能提供 `brew` 安装方式：

```bash
## 若官方 README 提供 Homebrew 方式
brew install codex
codex --version
```

只要 `codex --version` 能打印出版本号，说明可执行文件已经在 PATH 中、安装成功。如果提示"命令未找到"，先看下一节的 PATH 排查。

请务必从官方渠道获取工具：包名、安装命令、支持系统都应对照 [github.com/openai/codex](https://github.com/openai/codex) 与 [developers.openai.com/codex](https://developers.openai.com/codex/) 的当前内容确认。不要使用第三方下载站提供的所谓"完整版""破解版"安装包，那类文件可能带来账号、代码和本地文件的安全风险。

## 首次登录、项目目录与最小权限设置

安装成功后，第一次运行的目标不是让它立刻改代码，而是先安全地跑通链路。

1. 登录账号：在终端里运行 `codex`，按提示完成账号登录。登录方式、额度与计费由官方决定，请以 [help.openai.com](https://help.openai.com/) 和账号页面为准。
2. 进入正确目录：切换到一个已经用 Git 管理、且已提交当前改动的项目目录，例如 `cd ~/projects/demo`。这样即使 AI 产生了不想要的改动，也能用 `git restore` 或 `git checkout` 回滚。
3. 采用最小权限：首次运行选择只读或"每步需确认"的模式，让 Codex 先解释代码结构、给出方案，而不是直接写文件或执行命令。确认它理解正确后，再逐步开放写入与命令执行权限。
4. 不要在敏感目录运行：避免在包含密钥、`.env`、生产配置或未备份资料的目录直接授予自动执行权限。

涉及 API Key、Token 时，只用占位符处理，例如：

```bash
## 示例：设置环境变量时使用占位符，切勿粘贴真实密钥
export OPENAI_API_KEY="<YOUR_API_KEY>"
```

如果你需要系统学习 API Key 的获取、调用与安全配置，可参考 [ChatGPT API实战教程：Key获取、接口调用、价格、ZeoAPI和安全配置（2026）](/chatgpt/chatgpt-api-practical-key-interface-price-security-zeoapi-2026)。

## VS Code 终端协作与第一次只读任务

Codex CLI 不必替代你的编辑器，最顺手的方式是让它和 VS Code 并排工作：

- 在 VS Code 里打开项目，用内置终端（Ctrl+` / Cmd+`）运行 `codex`，这样左侧看文件、右侧下达指令，改动实时可见。
- 保持 Git 面板可见，每一次 Codex 产生改动后，先在源代码管理里查看 diff，再决定是否保留。这比盲目信任自动写入安全得多。
- 第一次只读任务示例：让它"阅读当前项目并用中文说明目录结构和主要模块职责，不要修改任何文件"。这类任务能验证它是否正确读到了你的代码，同时零风险。
- 确认可靠后，再交给它带写入的小任务，比如"给 `utils.js` 里的函数补充中文注释"，并在提交前逐行检查。

需要提醒的是：编辑器扩展、终端集成的具体名称与配置方式请以官方文档为准；VS Code 中是否有官方 Codex 扩展、如何连接，都以 [developers.openai.com/codex](https://developers.openai.com/codex/) 当前说明为准。

## 常见安装失败、PATH 和登录报错排查

按阶段定位问题，能省下大量时间：

- `codex: command not found`：多为 npm 全局目录未加入 PATH。用 `npm config get prefix` 查看全局路径，把对应的 `bin` 目录加入你的 shell 配置（`.zshrc`/`.bashrc` 或 Windows 环境变量），重开终端再试。
- 安装时权限报错（EACCES）：不要盲目用 `sudo`，优先用 nvm 管理 Node，或修正 npm 全局目录权限，避免污染系统目录。
- Node 版本过低导致安装失败：升级到官方 README 要求的 Node 版本，建议用 nvm 切换。
- Windows 上命令行为异常：优先在 PowerShell 或 WSL 环境中运行，避免老旧的 cmd 带来的兼容问题。
- 登录失败或长时间转圈：先排查是否为网络访问问题，再确认账号状态；官方账号与登录问题以 [help.openai.com](https://help.openai.com/) 为准。
- npm 下载缓慢或中断：可能是 npm 源与网络问题，可切换到可用的镜像源，但工具包本身仍应是官方包名，不要替换成来路不明的同名包。

## 跨平台命令和使用方式对比表

下表汇总三大平台从检查到验证的关键动作，便于对照执行：

| 步骤 | Windows（PowerShell/WSL） | macOS | Linux |
| --- | --- | --- | --- |
| 检查依赖 | `node -v`、`npm -v` | `node -v` 或 `brew -v` | `node -v`、`npm -v` |
| 安装 | `npm install -g @openai/codex` | npm 或 `brew install codex` | `npm install -g @openai/codex` |
| 验证 | `codex --version` | `codex --version` | `codex --version` |
| 首次运行 | 在 WSL/PowerShell 里 `codex` | 终端里 `codex` | 终端里 `codex` |
| 常见坑 | PATH 未配置、建议用 WSL | Homebrew 与 npm 路径冲突 | Node 版本、全局目录权限 |

表中命令为通用示例，最终以官方仓库 README 当前提供的命令为准。

## 错误与避坑清单

- 别装错对象：想要终端工具就装 CLI，想要图形界面就用桌面 App 或网页版，别把三者混为一谈。
- 别用第三方破解包：只从官方 npm 包或官方渠道安装，避免账号与代码泄露。
- 别在无 Git、无备份的目录直接授予写入权限：先提交、先备份，再让它改。
- 别把真实密钥写进命令或截图：一律用 `<YOUR_API_KEY>` 这类占位符，`sk-` 开头的真实字符串绝不外泄。
- 别忽略 diff：每次改动都要在提交前查看，不要盲目信任自动写入。
- 别把第三方开发平台当成官方安装入口：它们只是可选补充，官方安装与账号体系不可替代。

## 事实边界与官方来源

本文的操作流程基于公开的官方文档整理，但有几点必须说清：Codex 的支持系统、版本要求、登录方式、可用额度和地区可用性都可能随官方更新而变化，本文不对具体版本号、套餐和额度做承诺，请在动手前对照官方页面复核。以下是建议核对的官方入口：

- Codex 开发者文档：[https://developers.openai.com/codex/](https://developers.openai.com/codex/)
- Codex 官方仓库（安装命令与 README）：[https://github.com/openai/codex](https://github.com/openai/codex)
- Codex 产品页：[https://openai.com/codex/](https://openai.com/codex/)
- ChatGPT 官网：[https://chatgpt.com/](https://chatgpt.com/)
- 官方帮助中心：[https://help.openai.com/](https://help.openai.com/)
- ChatGPT 应用下载页：[https://openai.com/chatgpt/download/](https://openai.com/chatgpt/download/)

本站与 OpenAI 无隶属关系，文中提到的 ZeoGPT、ZeoAPI 为第三方邀请链接服务，不能替代官方安装流程，也不是模型厂商官方产品。

## 常见问题

**Codex CLI、Codex 桌面 App 和 ChatGPT 里的 Codex 是同一个东西吗？**
不是完全相同。Codex CLI 是在终端里运行的命令行工具，桌面 App 与 ChatGPT 里的 Codex 是图形化的编码助手入口，三者共享同一套账号与能力体系，但安装方式、运行位置和权限模型不同。具体功能与可用性以 developers.openai.com/codex 和 github.com/openai/codex 当前说明为准。

**Codex CLI 支持哪些操作系统？**
官方仓库标注支持 macOS、Windows 和 Linux。Windows 上通常建议配合 PowerShell 或 WSL 使用，具体系统与版本要求以 github.com/openai/codex 的 README 当前内容为准，本文不写死版本号，避免过时。

**安装 Codex CLI 需要付费或购买 API Key 吗？**
安装工具本身不涉及付费下载。运行时的账号登录方式、可用额度和计费规则由 OpenAI 官方决定，请以 openai.com/codex 与 help.openai.com 的账号页面为准。任何声称提供破解版、绿色版的第三方下载站都应避免使用。

**第一次运行 Codex CLI 会不会直接改我的代码？**
建议首次运行采用最小权限：先在只读或需要逐步确认的模式下让它解释代码、生成方案，确认无误后再逐步开放写入与执行。不要在未备份、未提交 Git 的目录直接授予自动修改和执行命令的权限。

**国内网络环境下安装或登录失败怎么办？**
先区分是安装阶段（npm/网络）还是登录阶段（账号/网络）的问题。安装失败多与 npm 源、Node 版本、PATH 有关；登录失败多与账号和网络访问有关。官方入口以 chatgpt.com 和 help.openai.com 为准，第三方开发平台只是可选补充，不能替代官方安装与账号体系。
