---
title: "Gemini CLI 安装和使用教程（新手入门指南）"
description: "Gemini CLI安装和使用教程，覆盖Node.js环境、npm与npx安装、Google账号登录、项目目录、GEMINI.md、文件分析、脚本模式、MCP和Windows排错。"
date: 2026-07-25
updated: 2026-07-25
outline: deep
head:
  - - meta
    - name: keywords
      content: "Gemini CLI安装,Gemini CLI使用教程,Gemini CLI新手入门,Gemini CLI Windows,Gemini CLI教程"
faq:
  - question: "Gemini CLI是什么？"
    answer: "Gemini CLI是运行在终端中的开源AI代理工具，可在项目目录中理解文件、回答问题并协助执行开发任务。"
  - question: "Gemini CLI需要什么环境？"
    answer: "当前npm包要求Node.js 20或更高版本，具体系统支持、版本和安装方式以项目官方文档为准。"
  - question: "Gemini CLI怎么安装？"
    answer: "可以用npx临时运行，也可以使用npm全局安装@google/gemini-cli；首次启动后按提示登录或配置API。"
  - question: "Gemini CLI会自动修改项目吗？"
    answer: "是否执行文件修改取决于你的指令、工具权限和确认设置。新手应先让它只读分析，再在版本控制和备份基础上修改。"
  - question: "Windows安装失败怎么办？"
    answer: "检查Node.js版本、npm路径、终端权限和网络，重新打开终端后确认gemini命令是否在PATH中。"
---

# Gemini CLI 安装和使用教程（新手入门指南）

Gemini CLI 是 Google Gemini 生态中的终端 AI 工具，适合开发者在项目目录中做代码解释、文件整理、测试辅助和脚本协作。它与浏览器里的 Gemini 对话不同：CLI 需要本地运行环境，并可能接触当前目录的文件，因此安装成功只是第一步，权限、目录和版本控制同样重要。

> 本文按官方公开安装方式整理，命令和额度可能随版本变化。本站不是 Google 官方文档，也不替你执行终端命令。

::: tip 国内开发者的选择
- 只想在浏览器里用中文问答和多模型比较，可先看 [GPTCat](https://gptcat.cc)。
- 日常写作、翻译和资料总结不需要 CLI，可用 [SnakeGPT](https://snakegpt.vip) 这类中文网页工具练习。
- 需要 Codex 国内版、代码项目和长任务工作流，可评估 [ZeoGPT](https://www.zeogpt.com/register?ref=MRNWDKC3)。

CLI 更适合愿意管理 Node.js、项目目录和权限的开发者，第三方平台与 Google CLI 的账号和数据规则不同。
:::

## 安装前检查Node.js和npm

先打开 PowerShell、Windows Terminal、macOS Terminal 或 Linux Shell，执行：

```bash
node --version
npm --version
```

当前 `@google/gemini-cli` npm 包要求 Node.js 20 或更高版本。若版本过低，应从 Node.js 官方渠道安装当前稳定版，再关闭并重新打开终端。

检查 npm 全局目录是否可写：

```bash
npm config get prefix
where.exe npm
```

Windows 上如果多个 Node.js 路径混在一起，可能出现“已经安装但命令找不到”。这时先统一 Node.js 来源，再处理 PATH，不要反复安装多个版本。

## 两种安装方式

### 方式一：npx临时运行

不想立刻全局安装，可以先试：

```bash
npx @google/gemini-cli
```

首次运行会下载或调用包，并进入登录或配置流程。临时运行适合快速体验和偶尔使用。

### 方式二：npm全局安装

经常使用时，可以安装全局命令：

```bash
npm install -g @google/gemini-cli
```

安装完成后验证：

```bash
gemini --help
gemini --version
```

如果系统提示找不到 `gemini`，通常是 npm 全局 bin 目录没有加入 PATH。先执行 `npm config get prefix`，再按当前系统的环境变量设置方式补充路径。

## 首次启动与登录

在终端中运行：

```bash
gemini
```

根据屏幕提示选择登录方式。官方项目公开说明包含 Google 账号 OAuth、API Key 和 Vertex AI 等路径，具体选项可能因版本和地区变化。

不要把 API Key 写进代码仓库，也不要把终端截图上传到公开工单。若使用环境变量，至少保持在本机或安全的 CI 密钥系统中：

```bash
# PowerShell 示例，仅对当前会话生效
$env:GEMINI_API_KEY = "YOUR_API_KEY"
gemini
```

使用完毕后，可以关闭终端会话；长期环境应使用密钥管理器和权限最小化策略。

## 在项目目录中开始第一项任务

先进入一个可以安全试验的项目副本：

```bash
cd path/to/your-project
gemini
```

第一条指令建议只读：

```text
请先只读分析当前项目：
1. 说明技术栈和入口文件
2. 列出主要目录和依赖
3. 找出可能的启动命令
4. 不修改任何文件，不执行删除或发布操作
```

确认它理解项目后，再让它解释一个具体文件或测试失败原因。不要一开始就给“重构整个项目”这类开放任务。

## 文件分析、代码修改和测试流程

推荐采用四阶段工作流：

1. **Read**：读取目录、配置和相关文件。
2. **Plan**：输出修改计划、影响范围和风险。
3. **Edit**：只修改指定文件，并保留差异。
4. **Verify**：运行 lint、测试和构建，汇报实际结果。

可以直接这样要求：

```text
请修复这个测试失败。
先列出复现命令和可能原因，不要修改文件。
得到确认后，只改动与错误直接相关的文件。
完成后运行对应测试，并说明仍未验证的风险。
```

涉及真实项目时先 `git status`、创建分支或复制目录。AI 输出的命令可能包含删除、迁移、安装和发布操作，应逐条审查。

## GEMINI.md怎么用

Gemini CLI 支持在项目中放置 `GEMINI.md` 作为持久化上下文。可以写：

- 项目启动和测试命令。
- 代码风格和目录约定。
- 哪些文件不能修改。
- 输出语言和提交规范。
- 安全边界和敏感目录。

示例：

```markdown
# Project instructions
- Use npm run build before reporting completion.
- Do not edit generated files.
- Keep public text in Simplified Chinese.
- Never print secrets or modify production configuration.
```

不要把密码、Token、客户资料或内部密钥写进 `GEMINI.md`。它可能随项目被读取或提交。

## 非交互脚本模式

Gemini CLI 可以用于一次性提示和自动化脚本。官方示例使用 `-p` 传入提示词：

```bash
gemini -p "Explain the architecture of this codebase"
```

需要结构化结果时，可以使用 JSON 输出选项：

```bash
gemini -p "List the project entry points" --output-format json
```

自动化时要处理退出码、超时、错误输出和敏感日志。不要把模型生成的文本直接当作部署命令或数据库迁移结果。

## MCP和扩展能力

Gemini CLI 支持 MCP 等扩展方式。扩展工具可能访问文件、Shell、网络或第三方服务，因此安装前要看来源、权限、版本和维护状态。

建议先在测试项目配置 MCP：

1. 记录服务器来源和版本。
2. 只授予当前任务需要的权限。
3. 用无敏感数据验证读写行为。
4. 观察日志和网络请求。
5. 不要把未知扩展直接接到生产仓库。

如果你不需要终端工具，只想比较多个模型的代码解释，可以用 [GPTCat](https://gptcat.cc) 做同一段公开代码的输出对比；真正需要项目级修改时再使用 CLI 或 [ZeoGPT](https://www.zeogpt.com/register?ref=MRNWDKC3)。

## Windows常见问题

### `node`或`npm`不是内部命令

说明 Node.js 没安装或 PATH 未刷新。重新安装稳定版后关闭并打开终端，执行版本检查。

### `gemini`命令找不到

检查全局安装是否成功，以及 npm 全局 bin 目录是否在 PATH。也可以先用 `npx @google/gemini-cli` 验证包本身。

### 登录页面无法打开

检查默认浏览器、账号状态、网络和终端输出，不要把登录链接复制给陌生人，也不要代收验证码。

### 访问项目文件权限不足

确认当前终端用户有目录读取权限，并把项目复制到可控的开发目录。不要为了方便用管理员权限运行所有命令。

### 生成代码不能运行

要求 CLI 先说明依赖、版本、测试命令和假设，在隔离环境里运行。把“生成成功”与“项目验证通过”分开。

## 卸载方式

如果使用 npm 全局安装，可以执行：

```bash
npm uninstall -g @google/gemini-cli
```

然后确认 `gemini --version` 不再指向旧路径。不要直接手动删除 Node.js 全局目录，以免影响其他工具。

## 总结

Gemini CLI 安装和使用的核心是 Node.js 环境、正确的 npm 包、账号或 Key 管理、项目目录权限和验证流程。新手先用只读任务熟悉工具，再逐步开放编辑、Shell 和 MCP 权限。普通中文用户无需为了写作和翻译安装 CLI；多模型对比可看 GPTCat，日常中文任务可看 SnakeGPT，代码与 Codex 类重任务可评估 ZeoGPT。

## 相关阅读

- [Gemini国内怎么用：账号地区、镜像方案与报错排查](/gemini/gemini-china-access-complete-solution)
- [Gemini 3.1 Pro 国内使用完全指南](/gemini/gemini-3-1-pro-china-complete-guide-2026)
- [Gemini CLI代码协作参考](https://www.gemini-cn-guide.com/gemini/gemini-cli-code-assist-guide)

## 官方参考

- [Gemini CLI GitHub](https://github.com/google-gemini/gemini-cli)
- [Gemini CLI 文档](https://geminicli.com/docs/)
