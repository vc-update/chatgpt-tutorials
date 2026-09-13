---
title: AI开发者教程：Codex、ChatGPT API、Gemini CLI与Claude Code
description: AI开发者栏目汇总Codex、ChatGPT API、Gemini CLI、Claude Code安装与项目实战，覆盖Key安全、权限边界、测试和代码复核。
date: 2026-07-25
updated: 2026-07-27
outline: deep
---

# AI开发者教程

这里集中整理代码代理、API 和命令行工具。开发者任务不仅要看模型回答，还要控制密钥、文件权限、命令执行范围、测试和最终差异。

## Codex与ChatGPT API

| 教程 | 适合人群 | 主要内容 |
|:---|:---|:---|
| [Codex编程实战](/chatgpt/codex-programming-practical-guide-2026-06) | 需要让AI读取并修改项目的开发者 | 任务拆分、代码修改、测试、diff与提交前复核 |
| [Codex CLI安装指南](/chatgpt/codex-cli-install-windows-macos-linux-2026-06) | Windows、macOS、Linux用户 | 安装、登录、项目目录和常见错误 |
| [ChatGPT API安全接入](/chatgpt/chatgpt-api-practical-key-interface-price-security-zeoapi-2026) | 接入模型接口的个人与团队 | API Key、请求、预算、日志和数据边界 |

## Gemini CLI与Claude Code

| 教程 | 主要内容 |
|:---|:---|
| [Gemini CLI安装和使用](/gemini/gemini-cli-install-use-beginner-guide) | Node.js、npm、项目目录、GEMINI.md与MCP |
| [Claude Code完整教程](/claude/claude-code-how-to-use-install-project-mcp-permissions-2026) | 原生安装、CLAUDE.md、项目修改、测试、MCP与权限 |
| [Windows安装Claude Code](/claude/claude-code-windows-install-complete-guide-2026) | PowerShell、WinGet、npm备选、PATH与安装排错 |

## 开发者最小安全流程

1. 使用环境变量或密钥管理工具保存 Key，不把密钥写进仓库或前端代码。
2. 先让工具只读分析项目，再明确允许修改的目录、文件和命令范围。
3. 在分支或项目副本中工作，修改后检查 `git diff` 并运行测试、构建与静态检查。
4. 数据库、部署、删除、账单和生产环境操作必须由人工确认。
5. 上传代码前核对第三方服务的数据保存、训练使用和退出规则。

## API推荐

[ZeoAPI](https://www.zeoapi.com/register?aff=Pe3N) 是本站导航中标注的第三方 API 推荐入口。它不是 OpenAI 官方服务；接入前请自行核对当前支持模型、接口兼容性、额度、日志与隐私条款。需要 Codex 国内版或开发者向工具，也可在具体 Codex 教程中查看 ZeoGPT 的适用场景。

普通网页使用和中文 Prompt 请返回[ChatGPT教程中心](/chatgpt/)或[使用场景](/guides/)。
