---
title: "Claude Code教程：Windows/macOS安装、首次运行、MCP与常见报错（2026）"
description: "Claude Code教程：覆盖Windows、macOS、Linux官方安装、首次运行与项目验证，讲解CLAUDE.md、MCP、权限安全、常见报错和代码工作流。"
date: 2026-07-27
updated: 2026-07-28
outline: deep
head:
  - - meta
    - name: keywords
      content: "Claude Code教程,Claude Code安装,Claude Code Windows,Claude Code macOS,Claude Code MCP,Claude Code报错"
faq:
  - question: "Claude Code怎么安装？"
    answer: "Anthropic当前优先推荐原生安装：macOS、Linux和WSL使用官方install.sh，Windows PowerShell使用官方install.ps1；也可使用Homebrew、WinGet或npm备选路径。"
  - question: "Claude Code需要Node.js吗？"
    answer: "官方原生安装不以Node.js作为前置条件。只有选择npm全局安装时，当前npm包要求Node.js 22或更高版本。"
  - question: "CLAUDE.md有什么用？"
    answer: "CLAUDE.md保存项目架构、构建测试命令和长期约定，Claude Code在会话开始时读取。可以使用/init生成初稿，再人工精简和核对。"
  - question: "Claude Code MCP的local、project和user作用域有什么区别？"
    answer: "local只在当前项目对当前用户生效；project写入项目根目录.mcp.json并可随版本控制共享；user对本机用户的所有项目生效。"
  - question: "Claude Code会自动修改和删除文件吗？"
    answer: "官方权限系统默认对读取较宽松，对文件修改和非只读命令要求审批。用户仍需审查命令、限制工作目录、检查git diff并运行测试。"
---

# Claude Code教程：Windows/macOS安装、首次运行、MCP与常见报错（2026）

<div class="answer-panel">
  <p class="answer-label">直接答案</p>
  <p><strong>Claude Code优先使用Anthropic当前官方原生安装路径，安装后先运行版本与诊断命令，再进入一个可回滚的Git项目完成第一次只读分析。</strong>不要从第三方网盘下载所谓绿色版，也不要一开始批准删除、安装依赖、数据库或部署命令。MCP和自动修改应在理解作用域、权限与数据边界后再启用。</p>
</div>

Claude Code不是普通聊天网页，而是能读取代码库、编辑文件、运行命令，并连接开发工具的智能编码代理。真正有效的用法不是输入一句“帮我写项目”，而是建立一套**安装核验 → 只读分析 → 计划 → 小步修改 → 测试 → diff → 权限复核**的工作流。

最近一次可访问的Anthropic官方文档核验显示其优先推荐**原生安装**。旧教程常见的`npm install -g @anthropic-ai/claude-code`仍可作为备选，但它已经不是唯一主路径；只有选择npm安装时，才需要关注当前Node.js要求。2026年7月28日重新检查官方页面时当前网络请求超时，因此具体命令与版本要求仍应在执行前回到官方快速入门页复核。

::: tip 先判断你需要哪种工具
- 要在本地项目里读取文件、改代码和运行测试：使用官方 Claude Code，并遵守当前账号与地区条件。
- 暂时只想在网页比较 Claude、GPT、Gemini、Grok 的公开代码回答：可评估 [GPTCat](https://gptcat.cc/)。
- 更偏 Codex、仓库级开发和国内开发者工作流：可评估 [ZeoGPT](https://www.zeogpt.com/register?ref=MRNWDKC3)。
- 只是中文写作、翻译和总结：使用 [SnakeGPT](https://www.snakegpt.vip/) 这类第三方网页通常更简单。

后三者不是Anthropic官方Claude Code，不能把网页聊天能力等同于本地终端权限。普通中文问答和文件总结应优先使用网页工具，只有明确需要读取本地仓库、修改文件和运行命令时才安装Claude Code。
:::

## Claude Code能做什么

官方当前将 Claude Code 定义为可在终端、IDE、桌面应用和浏览器中使用的 agentic coding tool。开发者常用它完成：

- 阅读项目结构和解释现有代码；
- 定位 Bug、提出修改计划并编辑多个文件；
- 运行测试、lint、构建和 Git 命令；
- 根据 issue 或需求实现功能；
- 创建或维护 `CLAUDE.md` 项目说明；
- 通过 MCP 连接 issue tracker、监控、设计、数据库或内部工具；
- 在权限边界内自动执行重复开发任务。

它能运行命令，不代表你应该批准所有命令。数据库迁移、删除、部署、安装依赖、网络请求和生产环境操作仍需要人工判断。

## Claude Code安装方式怎么选

| 安装方式 | 平台 | 特点 |
|:---|:---|:---|
| 官方原生安装 | Windows、macOS、Linux、WSL | 当前推荐；原生安装可后台自动更新 |
| WinGet | Windows | 安装直观，但需手动升级或配置更新 |
| Homebrew | macOS | 可选稳定或最新通道，通常手动升级 |
| npm全局包 | 多平台 | 适合已有Node环境；当前npm包要求Node.js 22+ |
| 桌面应用/IDE | 图形界面或编辑器 | 适合不想只在终端工作的用户 |

不要从第三方网盘下载所谓“Claude Code绿色版”，也不要运行来源不明的 PowerShell 脚本。以下命令均来自 Anthropic 当前官方文档，执行前仍应查看链接域名与脚本内容是否符合你的安全要求。

## Windows安装Claude Code

### PowerShell原生安装

在普通用户 PowerShell 中执行：

```powershell
irm https://claude.ai/install.ps1 | iex
```

如果团队不允许直接管道执行远程脚本，应先下载并审查脚本，或使用 WinGet：

```powershell
winget install Anthropic.ClaudeCode
```

安装后重新打开终端：

```powershell
claude --version
claude doctor
```

官方建议原生 Windows 安装 Git for Windows，这样 Claude Code 可以使用 Bash 工具；没有安装时，会改用 PowerShell 作为 Shell 工具。更细的 Windows、PATH 和 WSL 排错见[Windows 10/11安装Claude Code指南](/claude/claude-code-windows-install-complete-guide-2026)。

## macOS、Linux和WSL安装

官方原生安装命令：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

macOS 也可以使用 Homebrew：

```bash
brew install --cask claude-code
```

使用 WSL 时，Node、Git、Claude Code 和项目目录都应在同一个环境中管理。不要一半命令在 Windows PowerShell，一半命令在 WSL，却共用不同的依赖和路径。

## npm安装什么时候使用

已有稳定 Node.js 环境时，可以使用：

```bash
npm install -g @anthropic-ai/claude-code
```

截至本次核验，npm 包要求 Node.js 22 或更高版本。不要使用 `sudo npm install -g` 掩盖权限问题。升级 npm 安装应使用：

```bash
npm install -g @anthropic-ai/claude-code@latest
```

原生安装和 npm 安装不应重复叠加。先用 `where.exe claude` 或 `which claude` 检查实际运行的是哪一个路径。

## 第一次登录和项目启动

先在一个不含敏感资料的 Git 测试目录中开始：

```bash
mkdir claude-code-test
cd claude-code-test
git init
claude
```

按终端提示完成登录。浏览器打开授权页时，核对 Anthropic 或 Claude 官方域名，不把授权链接、验证码、Cookie 或 Token 发给代安装人员。

进入会话后，第一条任务建议只读：

```text
请只读分析当前目录：
1. 列出文件和用途；
2. 说明项目如何启动和测试；
3. 指出可能的敏感配置；
4. 不修改文件，不安装依赖，不执行网络或删除命令。
```

## 真实项目的标准工作流

### 第一步：检查项目状态

```bash
git status
git branch --show-current
```

理解已有未提交修改，不要让代理把用户正在做的工作回退掉。重要项目先创建分支或工作树。

### 第二步：要求只读分析

让 Claude Code 识别入口、关键模块、测试命令和影响范围。大型项目不要一开始就让它遍历用户主目录或所有仓库。

### 第三步：先看计划

复杂任务先进入计划或只读讨论阶段：

```text
先不要修改代码。请根据问题给出最小修改计划，
列出涉及文件、行为变化、测试方法和可能回归。
```

计划不准确时先修计划，比修改后大面积回滚更省时间。

### 第四步：限制修改范围

```text
只修改 src/auth 和对应测试，不改依赖版本、数据库、部署配置或无关格式。
修改完成后列出每个文件的改动原因。
```

### 第五步：运行验证

根据项目执行现有测试、lint 和构建。不要为了让测试通过而删除测试、放宽断言或屏蔽错误。

### 第六步：检查差异

```bash
git status
git diff --stat
git diff
```

检查是否包含密钥、生成文件、无关重构和意外删除，再决定是否提交。

## CLAUDE.md怎么写

`CLAUDE.md` 是 Claude Code 每次会话都会读取的长期项目说明。适合保存：

- 项目架构和入口；
- 开发、测试、lint、构建命令；
- 代码风格和命名约定；
- 不允许修改的目录或生成文件；
- 必须执行的验证步骤；
- 团队长期适用的安全规则。

可以在会话中运行 `/init` 生成初稿。官方说明中，`/init` 会分析代码库并提出可审查的 `CLAUDE.md` 建议；已有文件时应提出改进，而不是直接覆盖。

示例：

```md
# Project instructions

- Install dependencies with `npm ci`.
- Run `npm test` and `npm run build` after behavior changes.
- Do not edit generated files under `dist/`.
- Never commit `.env`, API keys, customer data, or production logs.
- Keep changes scoped to the requested feature.
```

不要把一次性任务、长篇背景或密钥写进 `CLAUDE.md`。个人本地偏好可放在 `CLAUDE.local.md` 并加入 `.gitignore`；团队共享规则才适合进入仓库。

## Claude Code权限系统怎么理解

官方当前权限文档把常见行为分为三层：

| 工具类型 | 默认行为 | 你应该检查什么 |
|:---|:---|:---|
| 工作目录内只读操作 | 通常无需逐次批准 | 是否越界读取敏感目录 |
| Bash或PowerShell命令 | 非内置只读命令通常需要批准 | 命令影响、网络、安装、删除和生产资源 |
| 文件编辑与写入 | 需要批准，部分模式可在会话内放宽 | 修改范围、生成文件和敏感配置 |

选择“以后不再询问”会扩大未来会话的权限。不要对 `rm`、部署、数据库、包管理器和任意 Shell 命令做过宽的长期放行。

推荐原则：

- 只给完成当前任务所需的最小权限；
- 在专用项目目录启动，不从用户主目录启动；
- 对额外目录读取逐个批准；
- 使用 `/sandbox` 时明确文件和网络边界；
- 定期检查仓库里的 `.claude/settings.local.json`；
- 公司环境使用组织管理策略，而不是依赖个人习惯。

## MCP是什么，什么时候需要

MCP（Model Context Protocol）允许 Claude Code 连接外部工具和数据源，例如 GitHub、issue tracker、监控、设计工具和数据库。只有当你反复从另一个工具复制数据，且确实需要 Claude 直接读取或操作时，才值得连接。

连接 MCP 会扩大数据和操作面。先确认服务器来源、权限、认证和 prompt injection 风险，不要因为目录里有一个 `.mcp.json` 就直接批准全部连接。

## MCP三种作用域

| 作用域 | 生效范围 | 是否共享 | 存储位置 | 适合场景 |
|:---|:---|:---:|:---|:---|
| local | 当前项目、当前用户 | 否 | `~/.claude.json` | 实验服务器、个人凭据 |
| project | 当前项目 | 是 | 项目根目录 `.mcp.json` | 团队共享工具配置 |
| user | 当前用户所有项目 | 否 | `~/.claude.json` | 多项目通用个人工具 |

本地作用域是默认选项：

```bash
claude mcp add --transport http example --scope local https://example.com/mcp
```

团队共享配置：

```bash
claude mcp add --transport http example --scope project https://example.com/mcp
```

跨项目个人配置：

```bash
claude mcp add --transport http example --scope user https://example.com/mcp
```

项目作用域会生成 `.mcp.json`，可以进入版本控制，但**密钥不能直接写进文件**。官方支持 `${VAR}` 和 `${VAR:-default}` 环境变量展开，应把敏感值放在本机或组织密钥系统中。

## MCP安全检查清单

添加服务器前检查：

1. 服务器是否来自可信厂商或团队；
2. 它能读取哪些数据、执行哪些写操作；
3. 是否需要数据库、工单、邮箱或云平台权限；
4. 凭据是否通过环境变量或安全认证提供；
5. 项目配置是否会被提交给所有成员；
6. 外部内容是否可能携带 prompt injection；
7. 是否有撤销授权、日志审计和删除方式。

数据库 MCP 默认应使用只读、最小权限账号。生产写入、邮件发送、工单变更和云资源操作，不应因为“方便”就长期自动批准。

## 常见问题排查

| 问题 | 先检查什么 |
|:---|:---|
| `claude`命令找不到 | 安装是否完成、PATH、终端是否重启、实际二进制路径 |
| Windows安装脚本报错 | 是否在PowerShell中使用PowerShell命令，网络和脚本策略 |
| npm出现EBADENGINE | Node.js版本；或改用官方原生安装 |
| 登录页面不打开 | 默认浏览器、账号状态和官方地址 |
| 项目分析范围太大 | 启动目录、额外目录权限和任务边界 |
| 修改了无关文件 | 重新限定目录，检查CLAUDE.md与git diff |
| MCP没有加载 | 作用域、配置位置、服务器状态和项目批准 |
| MCP泄露密钥 | 立即撤销并轮换凭据，清理Git历史和日志 |
| 命令批准太频繁 | 只对白名单中的低风险命令设置窄规则 |

### 安装完成后的首次验证清单

不要以“终端里没有红字”作为安装成功的唯一标准。首次运行至少完成：

1. 检查版本与诊断输出；
2. 确认当前目录是准备测试的Git仓库；
3. 运行`git status`，记录原有修改；
4. 要求Claude Code只读解释项目，不修改文件；
5. 检查它识别出的构建、测试和入口文件是否正确；
6. 只批准一个小范围、可回滚的修改；
7. 运行测试并人工查看`git diff`。

若第一次任务就要求全盘访问、安装大量依赖或执行生产命令，应先停止并缩小任务边界。

## Claude Code与Codex怎么选

两者都是代码代理，选择应基于你的项目、账号、工具链和权限需求，而不是只看模型榜单。

- 已经使用 Claude 生态、需要 `CLAUDE.md`、MCP 和 Anthropic 工作流：优先测试 Claude Code。
- 使用 OpenAI/Codex 工作流或更关注 Codex 国内替代路径：参考[Codex编程实战](/chatgpt/codex-programming-practical-guide-2026-06)。
- 只做公开代码解释，不需要本地权限：网页多模型工具风险更低。

不论选谁，都要坚持分支、最小权限、测试和 diff 复核。

## 常见问题FAQ

### Claude Code一定要Node.js吗？

不一定。官方当前推荐的原生安装不要求你先配置 Node.js；只有选择 npm 全局包时，需要满足当前 Node.js 版本要求。

### Windows应该用原生安装还是npm？

新用户优先按官方文档使用原生 PowerShell 安装或 WinGet。已经有稳定 Node.js 22+ 环境并理解 npm 全局路径时，再考虑 npm。

### CLAUDE.md可以提交到Git吗？

团队共享的项目规则可以提交。个人机器地址、临时偏好和敏感信息应放在本地文件或环境变量中，不进入仓库。

### MCP服务器安全吗？

安全性取决于服务器、权限和数据来源。只连接可信服务器，先用最小权限，警惕外部内容中的 prompt injection，并保留撤销和审计路径。

### Claude Code会直接部署生产吗？

只有在获得相应命令和凭据权限后才可能执行。部署、数据库、删除和生产操作应保持人工确认，不应设置宽泛自动批准。

## 相关阅读

- [Windows 10/11安装Claude Code完全指南](/claude/claude-code-windows-install-complete-guide-2026)
- [Claude终极新手指南](/claude/claude-ultimate-beginner-guide-2026)
- [Claude中文版国内使用指南](/claude/claude-chinese-china-guide-2026)
- [Claude Code项目权限与测试工作流](https://claude-chinese-guide.com/blog/claude-code-read-project-task-split-test-permission-workflow-20260719)
- [Claude Code MCP本地工具安全](https://claude-chinese-guide.com/blog/claude-code-mcp-local-tools-permission-connection-security-guide-20260720)

## 官方参考与核验范围

- [Claude Code概述](https://code.claude.com/docs/en/overview)
- [Claude Code安装与系统要求](https://code.claude.com/docs/en/setup)
- [Claude Code CLAUDE.md说明](https://code.claude.com/docs/en/memory)
- [Claude Code MCP文档](https://code.claude.com/docs/en/mcp)
- [Claude Code权限文档](https://code.claude.com/docs/en/permissions)
- [Claude Code安全说明](https://code.claude.com/docs/en/security)

本文按 2026 年 7 月 27 日 Anthropic 官方文档编写。安装命令、版本、账号、地区和权限行为可能继续更新，执行前应重新查看官方页面。
