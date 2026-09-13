---
title: "Windows 10/11 安装 Claude Code 完全指南（2026 年4月最新版）"
description: "Windows 10/11安装Claude Code完整指南，覆盖官方原生安装、WinGet、PowerShell、npm备选、PATH、首次登录、项目启动、Git验证、常见错误和权限安全。"
date: 2026-07-25
updated: 2026-07-25
outline: deep
head:
  - - meta
    - name: keywords
      content: "Windows安装Claude Code,Claude Code Windows 11,Claude Code Windows 10,Claude Code安装教程,Claude CLI Windows"
faq:
  - question: "Windows 10和11都能安装Claude Code吗？"
    answer: "能否使用取决于Claude Code当前官方支持范围、本机Node.js版本、终端和账号条件。安装前应查看官方最新Windows说明。"
  - question: "Windows安装Claude Code需要WSL吗？"
    answer: "当前版本可能支持原生Windows路径，也可在特定场景使用WSL。应优先采用官方当前推荐方式，不要混用多个环境。"
  - question: "为什么安装后找不到claude命令？"
    answer: "常见原因是npm全局目录未加入PATH、终端未重启或存在多个Node.js安装。可用npm config get prefix和where.exe claude排查。"
  - question: "安装Claude Code必须先装Node.js吗？"
    answer: "不必须。Anthropic当前优先推荐Windows原生安装或WinGet；只有使用npm全局安装时，当前npm包才要求Node.js 22或更高版本。"
  - question: "Windows使用Claude Code安全吗？"
    answer: "要在Git或备份环境中工作，限制项目目录和Shell权限，审查删除、安装、网络、数据库和部署命令，并保护密钥。"
---

# Windows 10/11 安装 Claude Code 完全指南（2026 年4月最新版）

在 Windows 10/11 安装 Claude Code，最常见的问题是把旧的 npm 教程、当前原生安装、WinGet、PATH、PowerShell 环境和项目权限混在一起。本文按“环境检查—选择安装方式—登录—项目测试—错误排查—安全设置”的顺序整理，适合第一次配置终端 AI 工具的 Windows 用户。

> **2026-07-27 核验更新**：Anthropic 当前优先推荐原生安装，Windows PowerShell 使用官方 `install.ps1`，也可选择 WinGet；npm 仍可用，但只作为备选路径。官方要求变化时，以 Claude Code 最新文档为准。

::: tip 先判断你是否真的需要安装
只做中文写作、翻译和总结，可以用 [SnakeGPT](https://snakegpt.vip)；想在网页中比较 Claude、GPT 和 Gemini 的代码解释，可用 [GPTCat](https://gptcat.cc)；需要 Codex 国内版和项目级代码任务，可评估 [ZeoGPT](https://www.zeogpt.com/register?ref=MRNWDKC3)。

这些第三方工具不是 Claude Code 官方 Windows 版。安装 CLI 前先确认你需要读取本地项目和运行终端命令。
:::

## 一、检查Windows版本和终端

建议使用 Windows Terminal 或 PowerShell。按 `Win + R` 输入 `winver` 查看系统版本，再在终端中执行：

```powershell
$PSVersionTable.PSVersion
```

PowerShell 不需要以管理员身份长期运行。普通项目开发优先使用当前用户权限，只有明确的系统安装步骤需要提升权限时才单独确认。

## 二、优先使用官方原生安装

当前官方推荐的 Windows PowerShell 命令是：

```powershell
irm https://claude.ai/install.ps1 | iex
```

执行远程脚本前，应确认域名为 `claude.ai`，并遵守团队的脚本审查政策。公司设备不允许管道执行远程脚本时，可以改用 WinGet：

```powershell
winget install Anthropic.ClaudeCode
```

安装完成后关闭并重新打开终端：

```powershell
claude --version
claude doctor
where.exe claude
```

原生安装会按官方机制更新；WinGet 通常需要执行 `winget upgrade Anthropic.ClaudeCode` 获取新版本。

## 三、npm安装是备选路径

只有选择 npm 全局安装时，才需要先检查 Node.js 22+。

当前 `@anthropic-ai/claude-code` npm 包要求 Node.js 22 或更高版本。检查：

```powershell
node --version
npm --version
where.exe node
where.exe npm
```

如果 `node` 不存在或版本过低，从 Node.js 官方渠道安装受支持版本。安装后关闭所有终端窗口，再打开新的 PowerShell 检查版本。

如果 `where.exe node` 返回多个路径，说明系统中可能同时存在不同来源的 Node.js。先决定保留哪一个，再调整 PATH，避免 npm 全局包安装到 A 环境、命令却从 B 环境查找。

使用 npm 安装：

在普通 PowerShell 中执行：

```powershell
npm install -g @anthropic-ai/claude-code
```

安装成功后：

```powershell
claude --version
claude --help
where.exe claude
```

如果官方当前推荐原生安装方式，可优先使用官方文档中的方案。不要从第三方网盘下载打包版，也不要运行来源不明的 `.ps1` 安装脚本。

不要同时叠加原生安装和 npm 安装。若 `where.exe claude` 返回多个路径，先确认当前终端实际调用哪一个版本。

## 四、安装后找不到claude命令

先查看 npm 全局目录：

```powershell
npm config get prefix
npm root -g
```

再检查环境变量：

```powershell
$env:Path -split ';'
```

如果 npm 全局命令目录不在 PATH，需要通过 Windows“环境变量”界面为当前用户添加正确路径，然后重新打开终端。不要把任意下载目录或整个用户目录加入 PATH。

也可以先确认包是否真的安装：

```powershell
npm list -g --depth=0
```

## 五、首次运行与登录

先创建一个不含敏感资料的测试项目：

```powershell
New-Item -ItemType Directory -Force "$HOME\claude-code-test"
Set-Location "$HOME\claude-code-test"
git init
claude
```

按终端提示完成登录。登录页面打开后，确认浏览器地址和账号主体。不要把验证码、授权链接、Cookie 或 Token 发给任何代安装人员。

## 六、完成第一个只读任务

在测试目录创建一个简单文件后，先让 Claude Code 只读：

```text
请只读检查当前目录，说明有哪些文件、每个文件的用途以及可以如何运行。
不要修改、删除、安装依赖或执行网络命令。
```

确认输出正确后，再给一个小修改任务，并用 Git 检查差异：

```powershell
git status
git diff
```

养成“先读计划、再批准修改、最后看差异”的习惯，比追求全自动更重要。

## 七、在真实项目中使用

进入真实项目之前：

1. 确认 `git status` 干净，或理解已有未提交改动。
2. 创建分支或备份。
3. 检查 `.env`、密钥、客户数据和生产配置是否被排除。
4. 准备测试、lint 和构建命令。
5. 先要求只读分析项目结构。

推荐指令：

```text
这是一个Windows上的【技术栈】项目。
请先只读分析，不修改任何文件。
列出入口、启动命令、测试命令、构建命令、敏感配置和可能的Windows兼容问题。
```

## 八、PowerShell执行策略问题

某些脚本可能受 PowerShell 执行策略影响。先查看当前状态：

```powershell
Get-ExecutionPolicy -List
```

不要为了安装一个工具就把全系统策略永久改成最宽松。优先采用官方支持的安装路径，并理解命令影响；企业设备还应遵守管理员和安全团队要求。

## 九、原生Windows与WSL怎么选

如果官方版本支持原生 Windows，初学者优先在一个环境中完成安装，不要同时在 Windows npm、WSL npm 和多个 Node.js 管理器里重复安装。

WSL 更接近 Linux 工具链，但 Windows 路径、权限、换行和 Git 配置可能与原生环境不同。使用 WSL 时，应把项目放在合适的文件系统位置，并在 WSL 内独立检查 Node.js、npm 和 `claude` 命令。

## 十、常见错误排查表

| 错误 | 可能原因 | 处理方式 |
|:---|:---|:---|
| `node`找不到 | Node.js未安装或PATH未刷新 | 安装后重开终端，检查`where.exe node` |
| Node版本过低 | 使用旧LTS或旧环境 | 升级到当前包要求版本 |
| `claude`找不到 | npm全局目录不在PATH | 检查prefix、全局包和用户PATH |
| 登录页面不打开 | 默认浏览器或账号状态 | 查看终端提示，手动核对官方地址 |
| 项目权限不足 | 目录受保护或属于其他用户 | 移到开发目录或修正权限，不长期用管理员 |
| 修改后项目失败 | 依赖、环境或改动范围不清 | 查看diff，逐步回退并运行测试 |

## 十一、Windows安全设置

- 不在管理员 PowerShell 中长期运行 Claude Code。
- 不允许代理随意读取用户主目录、SSH、浏览器和云凭据。
- `.env`、私钥、证书和生产配置应由权限与忽略规则保护。
- 安装依赖、删除文件、数据库迁移和部署命令逐条确认。
- 公司设备和代码遵守组织 AI、开源和数据政策。
- 使用第三方国内工具时，重新评估服务主体与数据流向。

需要国内项目级开发协作时，[ZeoGPT](https://www.zeogpt.com/register?ref=MRNWDKC3) 可以作为 Codex 类选择；在网页中对比公开代码回答，可用 [GPTCat](https://gptcat.cc)。两者都不应直接读取未经批准的公司仓库。

## 十二、更新与卸载

原生安装通常按官方机制自动更新，也可以结合 `claude doctor` 检查状态。WinGet 更新：

```powershell
winget upgrade Anthropic.ClaudeCode
```

如果使用 npm，更新全局包：

```powershell
npm install -g @anthropic-ai/claude-code@latest
```

更新前查看官方发布说明，并在重要项目任务之间进行，不要在一半修改过程中突然升级。

卸载：

```powershell
npm uninstall -g @anthropic-ai/claude-code
```

再执行 `where.exe claude`，确认没有旧路径残留。如果曾在 WSL 或其他 Node.js 环境安装，需要分别卸载。

## 总结

Windows 10/11 安装 Claude Code 的当前稳定路径是：优先选择官方原生安装或 WinGet，在测试 Git 项目完成登录和只读任务，再逐步进入真实项目。只有明确选择 npm 时才需要维护 Node.js 22+ 和全局 PATH。不要同时混用原生、npm、WSL 多套安装，也不要用管理员权限掩盖路径问题。

## 相关阅读

- [Claude Code怎么用：项目、MCP与权限完整教程](/claude/claude-code-how-to-use-install-project-mcp-permissions-2026)
- [Claude 终极新手指南](/claude/claude-ultimate-beginner-guide-2026)
- [Claude 中文版国内使用指南](/claude/claude-chinese-china-guide-2026)
- [Claude Code Windows安装与权限参考](https://claude-chinese-guide.com/blog/claude-code-install-windows-macos-terminal-first-task-permission-check-20260719)

## 官方参考

- [Claude Code设置文档](https://code.claude.com/docs/en/setup)
- [Claude Code概述](https://code.claude.com/docs/zh-CN/overview)
- [Node.js下载](https://nodejs.org/)
