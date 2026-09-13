import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { relative, resolve } from 'node:path'
import { defineConfig } from 'vitepress'

const SITE = 'https://chatgpt-tutorials.com'
const SITE_NAME = 'ChatGPT使用指南'
const EDITOR_NAME = 'ChatGPT教程编辑组'
const EDITOR_URL = `${SITE}/about`
const DEFAULT_OG_IMAGE = `${SITE}/og-image.png`
const DOCS_ROOT = resolve(process.cwd(), 'docs')

function sitemapLastmod(url: string) {
  const route = normalizeRoute(url)
  const candidates = route
    ? [resolve(DOCS_ROOT, `${route}.md`), resolve(DOCS_ROOT, route, 'index.md')]
    : [resolve(DOCS_ROOT, 'index.md')]
  const source = candidates.find((candidate) => existsSync(candidate))
  if (!source) return undefined
  const markdown = readFileSync(source, 'utf8')
  const updated = markdown.match(/^updated:\s*["']?(\d{4}-\d{2}-\d{2})/m)?.[1]
  const published = markdown.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})/m)?.[1]
  const date = updated || published
  return date ? `${date}T00:00:00.000Z` : undefined
}

// AUTO-GENERATED ARTICLE SIDEBAR START
const articleSidebar = [
  {
    "text": "ChatGPT使用教程",
    "collapsed": false,
    "items": [

      {"text":"GPT Images 2.5上线怎么用？GPT Image 2.5 API、Python与使用教程【2026年9月】","link":"/chatgpt/gpt-image-2-5-api-python-edit-price-guide-20260909"},

      {"text":"ChatGPT语音对话怎么用？网页版、手机App与语音输入完整教程【2026年8月更新】","link":"/chatgpt/chatgpt-voice-conversation-how-to-use-mobile-web-guide-2026"},

      {"text":"ChatGPT语音模式无法启动怎么办？麦克风权限、浏览器与网络故障排查【2026年7月更新】","link":"/chatgpt/chatgpt-voice-mode-not-starting-microphone-browser-network-fix-20260731"},

      {"text":"ChatGPT聊天记录怎么导出？网页版数据导出、备份与找回教程【2026年7月更新】","link":"/chatgpt/chatgpt-chat-history-export-backup-recover-web-guide-20260731"},

      {"text":"ChatGPT Projects怎么用？项目指令、文件管理、Canvas与项目消失排查【2026完整指南】","link":"/chatgpt/chatgpt-projects-how-to-use-instructions-files-canvas-missing-2026"},

      {"text":"GPTCat官网入口与使用教程：是什么、怎么用、靠谱吗（2026）","link":"/chatgpt/gptcat-official-entry-how-to-use-review-2026"},

      {"text":"ChatGPT上传文件失败怎么办？PDF、Word、Excel限制与错误排查（2026）","link":"/chatgpt/chatgpt-chinese-web-first-prompt-file-image-task-tutorial-20260724"},

      {"text":"ChatGPT中文版Canvas怎么用？长文编辑、逐段改写、版本核对与导出教程【2026年7月】","link":"/chatgpt/chatgpt-chinese-canvas-long-form-edit-rewrite-version-export-guide-20260720"},

      {"text":"ChatGPT制作PPT全流程指南：聊天、PPT插件、PPTX导出与事实复核","link":"/chatgpt/chatgpt-chinese-ppt-outline-slides-speaker-notes-fact-check-20260719"},

      {"text":"ChatGPT中文版教程：长文章、会议记录和资料整理怎么做成可核对工作流【2026年7月】","link":"/chatgpt/chatgpt-chinese-long-document-meeting-notes-research-review-workflow-20260719"},

      {"text":"ChatGPT怎么提问才好用？新手Prompt公式、追问方法与中文示例【2026年7月】","link":"/chatgpt/chatgpt-how-to-ask-prompt-formula-follow-up-examples-20260719"},
      {"text":"ChatGPT提示词：会议纪要怎么写？行动项、责任人与复核模板【2026年7月】","link":"/chatgpt/chatgpt-meeting-minutes-action-items-owner-review-template-20260716"},
      {"text":"ChatGPT中文版教程：怎么写论文提纲？选题、结构、引用与避坑清单【2026年7月】","link":"/chatgpt/chatgpt-chinese-thesis-outline-citation-avoid-pitfalls-20260713"},
      {"text":"ChatGPT中文版：怎么写PRD？需求整理、用户故事和验收标准模板【2026年7月】","link":"/chatgpt/chatgpt-prd-requirements-user-story-acceptance-template-20260713"},
      {"text":"ChatGPT 官网与中文版使用终极指南（支持 GPT-5、GPT-4o｜国内可用镜像与注册教程）【2026年7月权威更新】","link":"/chatgpt/chatgpt-official-chinese-ultimate-guide-gpt5-gpt4o-mirror-register-20260711"},
      {"text":"GPT-5.6高推理怎么用：研究报告、资料核对和长文总结教程【2026年7月】","link":"/chatgpt/gpt56-high-reasoning-research-report-fact-check-summary-20260711"},
      {"text":"GPT-5.6提示词教程：中文写作、办公、代码与高推理实操【2026年7月】","link":"/chatgpt/gpt56-prompt-tutorial-chinese-writing-office-code-reasoning-20260711"},
       {"text":"ChatGPT中文版怎么用？国内使用与官网入口完整指南【2026年9月】","link":"/chatgpt/openai-chatgpt-chinese-guide-gpt5-o3-models-2026"},
      {"text":"ChatGPT中文版教程：GPT-5.6怎么用，Medium/High推理、网页版入口和常见问题【2026年7月】","link":"/chatgpt/chatgpt-chinese-tutorial-gpt56-medium-high-web-faq-20260711"},
      {"text":"ChatGPT中文版教程：官网入口、网页版镜像、GPT-5.6和GPT-image-2完整流程【2026年最新】","link":"/chatgpt/chatgpt-chinese-tutorial-official-entry-web-mirror-gpt56-gpt-image-2-flow-20260710-2"},
      {"text":"ChatGPT中文版教程：GPT-5.6怎么用、官网入口、网页版镜像网站和注册登录流程【2026年7月更新】","link":"/chatgpt/chatgpt-chinese-tutorial-gpt56-how-to-use-official-web-mirror-login-20260710"},
      {"text":"ChatGPT中文版教程：官网入口、网页版镜像网站、GPT5.5和GPT-image-2完整流程【2026年7月更新】","link":"/chatgpt/chatgpt-chinese-tutorial-official-entry-web-mirror-gpt55-gpt-image-2-flow-20260710-1"},
      {"text":"ChatGPT中文版新手流程：官网入口、网页版镜像、GPT5.5与GPT-image-2避坑【2026年7月】","link":"/chatgpt/chatgpt-chinese-tutorial-official-entry-web-mirror-gpt55-image2-full-flow-20260709-4"},
      {"text":"ChatGPT网页版：国内官网入口、中文版镜像网站和手机浏览器使用教程【2026年7月更新】","link":"/chatgpt/chatgpt-web-domestic-official-entry-chinese-mirror-mobile-browser-20260709-3"},
      {"text":"ChatGPT网页版教程：国内ChatGPT中文版官网入口、镜像网站和手机电脑使用流程【2026年7月更新】","link":"/chatgpt/chatgpt-web-tutorial-chinese-official-entry-mirror-mobile-desktop-20260709-2"},
      {"text":"ChatGPT中文版教程：官网入口、网页版免下载、镜像网站和GPT-image-2使用流程【2026年7月更新】","link":"/chatgpt/chatgpt-chinese-tutorial-official-entry-web-no-download-gpt-image-2-20260709"},
      {"text":"ChatGPT官网入口教程：国内ChatGPT中文版网页版、镜像网站和免下载使用流程【2026年7月更新】","link":"/chatgpt/chatgpt-official-entry-tutorial-chinese-web-mirror-no-download-20260708"},
      {"text":"ChatGPT中文版使用教程：官网入口、网页版免下载和镜像网站完整流程【2026年7月更新】","link":"/chatgpt/chatgpt-chinese-tutorial-official-entry-mirror-2026"},
      {"text":"ChatGPT中文版怎么登录：国内官网入口、网页版镜像网站和GPT5.5使用步骤【2026年7月更新】","link":"/chatgpt/chatgpt-chinese-login-guide-2026"},
      {"text":"ChatGPT网页版教程：国内浏览器打开ChatGPT中文版、官网入口和镜像网站步骤【2026年7月更新】","link":"/chatgpt/chatgpt-webpage-tutorial-china-browser-2026"},
      {"text":"ChatGPT中文版教程：国内ChatGPT官网入口、网页版镜像和GPT-image-2使用指南【2026年7月更新】","link":"/chatgpt/chatgpt-chinese-tutorial-official-entry-web-mirror-gpt-image-2-2026"},
      {"text":"ChatGPT中文版教程：国内ChatGPT官网入口、网页版和镜像网站使用指南【2026年7月更新】","link":"/chatgpt/chatgpt-chinese-tutorial-guide-2026"},
      {"text":"ChatGPT中文版：国内网页版使用教程，支持GPT-5.5、GPT-image-2与中文Prompt【2026年7月】","link":"/chatgpt/chatgpt-chinese-web-guide-gpt55-gpt-image-2-2026"},
      {"text":"ChatGPT生成图片怎么用？GPT-image-2头像、封面和电商图Prompt教程【2026年7月】","link":"/chatgpt/chatgpt-image-generation-gpt-image-2-prompt-tutorial-2026"},
      {"text":"ChatGPT网页版写论文怎么用？选题、大纲、降重避坑与中文Prompt教程【2026年更新】","link":"/chatgpt/chatgpt-web-version-write-thesis-guide-2026"},
      {"text":"ChatGPT写论文怎么用？选题、大纲、查重避坑和中文Prompt教程【2026年7月更新】","link":"/chatgpt/chatgpt-write-thesis-tutorial-2026"},
      {"text":"ChatGPT使用教程：写论文、做PT、翻译和GPT-image-2生成头像Prompt【2026年7月更新】","link":"/chatgpt/chatgpt-tutorial-thesis-ppt-translation-gpt-image-2-avatar-2026"},
      {"text":"ChatGPT生成图片教程：GPT-image-2头像、封面和海报Prompt写法【2026年7月更新】","link":"/chatgpt/chatgpt-image-tutorial-gpt-image-2-avatar-cover-poster-prompt-2026"},
      {"text":"ChatGPT提示词大全：中文版/网页版写作办公Prompt模板与国内使用入口（2026年7月）","link":"/chatgpt/chatgpt-prompt-templates-writing-office-guide-2026"},
      {"text":"ChatGPT 使用教程：国内网页版写论文、做PPT和生成图片 Prompt 完整指南【2026年7月更新】","link":"/chatgpt/chatgpt-tutorial-webpage-thesis-ppt-image-prompt-2026"},
      {"text":"ChatGPT使用教程：网页版免下载写周报、做PPT、写论文和图片生成Prompt大全【2026年7月更新】","link":"/chatgpt/chatgpt-web-tutorial-report-ppt-thesis-image-prompt-2026"},
      {"text":"ChatGPT中文版使用教程：网页版入口、中文提问、Prompt写作与办公实战【2026年7月更新】","link":"/chatgpt/chatgpt-chinese-web-entry-prompt-office-tutorial-2026"},
      {"text":"ChatGPT怎么用？从第一次提问到文件、图片与办公实战","link":"/chatgpt/chatgpt-beginner-tutorial-2026"},
      {"text":"ChatGPT图片生成教程：GPT-image-2生成头像、海报和提示词完整指南【2026年8月更新】","link":"/chatgpt/chatgpt-image-generation-tutorial-gpt-image-2-2026"},
      {"text":"GPT-image-2图片生成教程：手机浏览器打开SnakeGPT生成头像与海报（支持GPT5.5）【2026年7月更新】","link":"/chatgpt/gpt-image-2-tuxiang-shengcheng-jiaocheng-2026"},
      {
        "text": "ChatGPT API实战教程：API Key、价格、调用、ZeoAPI中转和安全配置",
        "link": "/chatgpt/chatgpt-api-practical-tutorial-key-price-call-zeoapi-security-2026-07-02"
      },
      {
        "text": "ChatGPT Plus充值教程：国内购买、代充、共享账号、GPTBuys和退款规则",
        "link": "/chatgpt/chatgpt-plus-recharge-tutorial-domestic-buy-shared-gptbuys-refund-2026-07-02"
      },
      {
        "text": "ChatGPT Prompt提示词教程：办公写作、翻译、代码、图片生成和中文版模板",
        "link": "/chatgpt/chatgpt-prompt-tutorial-office-writing-translation-code-image-chinese-template-2026-07-02"
      },
      {
        "text": "ChatGPT国内使用完整教程：官网、网页版、中文版、镜像、Plus和下载",
        "link": "/chatgpt/chatgpt-china-use-complete-official-web-chinese-mirror-plus-download-2026-07-02"
      },
      {
        "text": "ChatGPT使用教程2026：注册、登录、官网入口、网页版、Prompt和图片生成",
        "link": "/chatgpt/chatgpt-tutorial-2026-register-login-official-web-prompt-image-2026-07-02"
      },
      {
        "text": "Codex CLI安装教程：官网下载、Windows配置、项目实战和ZeoGPT替代方案",
        "link": "/chatgpt/codex-cli-install-tutorial-official-download-windows-project-zeogpt-2026-07-02"
      },
      {
        "text": "ChatGPT提示词大全：办公写作、编程、图片生成和Prompt模板（2026）",
        "link": "/chatgpt/chatgpt-prompt-office-writing-code-image-templates-2026"
      },
      {
        "text": "ChatGPT Plus国内充值教程：购买、代充、GPTBuys、共享账号和退款（2026）",
        "link": "/chatgpt/chatgpt-plus-recharge-domestic-buy-shared-account-refund-2026"
      },
      {
        "text": "ChatGPT API实战教程：Key获取、接口调用、价格、ZeoAPI和安全配置（2026）",
        "link": "/chatgpt/chatgpt-api-practical-key-interface-price-security-zeoapi-2026"
      },
      {
        "text": "ChatGPT API实战教程：API Key、价格、调用、ZeoAPI和安全配置",
        "link": "/chatgpt/chatgpt-api-practical-key-price-call-zeoapi-security-2026-07"
      },
      {
        "text": "ChatGPT Plus充值教程：国内购买、代充、共享账号、退款和GPTBuys避坑",
        "link": "/chatgpt/chatgpt-plus-recharge-domestic-buy-gptbuys-shared-refund-2026-07"
      },
      {
        "text": "ChatGPT Prompt教程：办公写作、代码、图片生成、GPT Image 2和中文版模板",
        "link": "/chatgpt/chatgpt-prompt-office-writing-code-image-gpt-image-2-2026-07"
      },
      {
        "text": "ChatGPT官网入口与中文版使用终极指南：国内可用、支持GPT5.5与GPT-image-2【2026年最新更新】",
        "link": "/chatgpt/chatgpt-guanwang-rukou-zhongwenban-gpt55-gpt-image-2-2026"
      },
      {
        "text": "ChatGPT官网入口最新整理：中文版使用、GPT5.5模型、GPT-image-2绘图与国内访问教程【2026年7月】",
        "link": "/chatgpt/chatgpt-guanwang-rukou-2026"
      },
      {
        "text": "ChatGPT国内使用教程：从官网入口到中文版多模型工具完整流程【2026年7月版】",
        "link": "/chatgpt/chatgpt-china-usage-tutorial-2026"
      },
      {
        "text": "ChatGPT国内怎么用：官网入口、网页版、中文版、镜像和Plus完整教程",
        "link": "/chatgpt/chatgpt-china-use-official-web-chinese-mirror-plus-2026-07"
      },
      {
        "text": "ChatGPT教程：GPT-5.5写作、PPT与GPT-image-2图片生成实战【2026年7月更新】",
        "link": "/chatgpt/chatgpt-tutorial-gpt-5-5-ppt-image-2026"
      },
      {
        "text": "ChatGPT使用教程2026：注册、登录、网页版、下载、Prompt和图片生成",
        "link": "/chatgpt/chatgpt-tutorial-register-login-web-download-prompt-image-2026-07"
      },
      {
        "text": "ChatGPT提示词教程：用GPT-5.5写文章、做PPT、翻译和图片生成完整示例【2026年7月】",
        "link": "/chatgpt/chatgpt-prompt-tutorial-gpt55-writing-ppt-translation-image-2026"
      },
      {
        "text": "ChatGPT新手教程：注册、登录、网页版使用和中文入口完整流程",
        "link": "/chatgpt/chatgpt-beginner-tutorial-signup-login-webapp-chinese-2026"
      },
      {
        "text": "ChatGPT怎么注册？官网账号创建、邮箱验证与登录失败排查【2026年8月更新】",
        "link": "/chatgpt/chatgpt-register-login-tutorial-2026"
      },
      {
        "text": "Codex安装教程：官网入口、下载、CLI配置、Windows和国内使用",
        "link": "/chatgpt/codex-install-official-download-cli-windows-china-guide-2026-07"
      },
      {
        "text": "ChatGPT Plus国内开通指南2026：购买、充值、代充风险、账号共享和退款注意事项",
        "link": "/chatgpt/chatgpt-plus-recharge-gptbuys-china-guide-2026-06"
      },
      {
        "text": "ChatGPT图片生成教程2026：GPT Image 2、提示词、免费额度和国内生图入口",
        "link": "/chatgpt/chatgpt-image-generation-gpt-image-2-prompts-free-2026-06"
      },
      {
        "text": "GPT-Image-2 API 教程 2026：图片生成、图片编辑、参数、价格和 Python 调用",
        "link": "/chatgpt/gpt-image-2-api-tutorial-python-prompt-2026-06"
      },
      {
        "text": "ChatGPT如何在国内使用？官网、网页版与中文版入口教程（2026）",
        "link": "/chatgpt/chatgpt-china-official-mirror-complete-solution-2026-06"
      },
      {
        "text": "ChatGPT 提示词大全 2026：办公、写作、学习、编程和图片生成模板",
        "link": "/chatgpt/chatgpt-prompt-complete-templates-2026-06"
      },
      {
        "text": "ChatGPT Codex编程教程2026：代码解释、调试、脚本和项目协作",
        "link": "/chatgpt/chatgpt-codex-programming-guide-2026-new"
      },
      {
        "text": "ChatGPT Images 2.0 使用教程：图片生成、提示词、额度和国内使用",
        "link": "/chatgpt/chatgpt-images-2-tutorial-prompts-quota-2026-06"
      },
      {
        "text": "ChatGPT Plus国内怎么开通？免费版、Plus、Pro、多模型工具和镜像方案对比2026",
        "link": "/chatgpt/chatgpt-plus-free-pro-china-subscription-guide-2026-06"
      },
      {
        "text": "ChatGPT办公Prompt模板2026：周报、邮件、PPT、表格和会议纪要",
        "link": "/chatgpt/chatgpt-prompt-template-office-2026"
      },
      {
        "text": "ChatGPT官网入口：官方网址、网页版登录与国内使用指南【2026最新】",
        "link": "/chatgpt/chatgpt-official-url-domestic-gpt5-login-entry"
      },
      {
        "text": "ChatGPT官网入口与网页版在线使用2026：GPT官网、官方网址和安全步骤",
        "link": "/chatgpt/chatgpt-official-entry-web-login-2026"
      },
      {
        "text": "ChatGPT国内稳定使用平台怎么选？2026官网、中文站和多模型工具对比",
        "link": "/chatgpt/chatgpt-domestic-stable-platforms-2026"
      },
      {
        "text": "ChatGPT镜像站评测清单2026：速度、模型、隐私和付费风险",
        "link": "/chatgpt/chatgpt-mirror-site-review-checklist-2026"
      },
      {
        "text": "ChatGPT免费版和Plus怎么选？2026国内用户功能、价格和替代方案",
        "link": "/chatgpt/chatgpt-plus-vs-free-china-2026"
      },
      {
        "text": "ChatGPT使用教程：2026最新完整入门到精通指南（新手必看）",
        "link": "/chatgpt/chatgpt-shiyong-jiaocheng-2026-06"
      },
      {
        "text": "ChatGPT提示词大全2026：办公、写作、学习、编程、图片生成和GPT-Image-2模板",
        "link": "/chatgpt/chatgpt-prompt-templates-office-writing-code-image-2026-06"
      },
      {
        "text": "ChatGPT图片Prompt教程2026：生成封面、海报和产品图的写法",
        "link": "/chatgpt/chatgpt-image-prompt-guide-2026-new"
      },
      {
        "text": "ChatGPT网页版使用教程：官网入口、电脑手机登录与中文版使用【2026年9月】",
        "link": "/chatgpt/chatgpt-wangyeban-zaixian-shiyong-zhinan-2026"
      },
      {
        "text": "ChatGPT新手完整教程2026：官网入口、中文版、网页版和提示词",
        "link": "/chatgpt/chatgpt-beginner-complete-tutorial-2026"
      },
      {
        "text": "ChatGPT官方下载与安装教程：全平台、商店搜不到和安装失败排查【2026年9月更新】",
        "link": "/chatgpt/chatgpt-app-download-install-guide-2026-new"
      },
      {
        "text": "ChatGPT中文版国内访问指南：GPT-5.5与GPT-image-2使用方法（2026）",
        "link": "/chatgpt/chatgpt-zhongwenban-guonei-fangwen-gpt55-image2-2026"
      },
      {
        "text": "ChatGPT中文版使用教程2026：国内入口、官网区别和镜像站选择",
        "link": "/chatgpt/chatgpt-chinese-version-use-guide-2026"
      },
      {
        "text": "Codex 编程实战教程：让 AI 修改代码、跑测试、修 Bug 和提交 PR",
        "link": "/chatgpt/codex-programming-practical-guide-2026-06"
      },
      {
        "text": "Codex CLI 安装教程 2026：Windows、macOS、Linux 从零跑通",
        "link": "/chatgpt/codex-cli-install-windows-macos-linux-2026-06"
      },
      {
        "text": "GPT-Image-2 提示词大全：电商图、Logo、海报、漫画、PPT 配图和短视频封面",
        "link": "/chatgpt/gpt-image-2-prompt-templates-design-2026-06"
      },
      {
        "text": "GPT-Image-2使用教程2026：ChatGPT图片生成、中文海报、产品图和提示词大全",
        "link": "/chatgpt/gpt-image-2-chatgpt-prompt-complete-guide-2026-06"
      },
      {
        "text": "ChatGPT镜像网站哪个好？2026稳定平台实测推荐与避坑指南",
        "link": "/chatgpt/chatgpt-jingxiang-wangzhan-shice-tuijian-2026"
      },
      {
        "text": "ChatGPT中文版：2026国内使用指南与稳定入口推荐（支持GPT-5.5/Claude/Gemini/Grok）",
        "link": "/chatgpt/chatgpt-zhongwen-ban-shiyong-zhinan-2026-06"
      }
    ]
  },
  {
    "text": "Prompt技巧",
    "collapsed": false,
    "items": [
      {
        "text": "ChatGPT图片生成与Prompt技巧指南：GPT-image-2、MJ绘图与中文提示词模板",
        "link": "/guides/chatgpt/chatgpt-image-prompt-guide-2026"
      },
      {
        "text": "ChatGPT怎么用？2026年中文使用方法完整指南（新手到高手）",
        "link": "/guides/chatgpt/2026-chatgpt-how-to-use"
      },
      {
        "text": "ChatGPT中文版怎么用？2026国内访问与GPT-5.5、GPT-image-2使用指南",
        "link": "/guides/chatgpt/chatgpt-zhongwenban-zenme-yong-2026-gpt55-image2"
      },
      {
        "text": "ChatGPT使用指南：怎么用、Prompt技巧、图片生成与办公实战",
        "link": "/guides/chatgpt"
      }
    ]
  }
]
// AUTO-GENERATED ARTICLE SIDEBAR END

const geminiSidebar = [
  {
    text: 'Gemini使用教程',
    collapsed: false,
    items: [
      { text: 'Gemini使用指南目录', link: '/gemini/' },
      { text: 'Gemini官网入口与国内登录', link: '/gemini/gemini-official-entry-china-guide-2026' },
      { text: 'Gemini图片生成与编辑', link: '/gemini/gemini-image-generation-prompt-editing-guide-20260829' },
      { text: 'Gemini国内怎么用：账号地区与报错排查', link: '/gemini/gemini-china-access-complete-solution' },
      { text: 'Gemini中文版怎么用：官网入口、AI Studio与模型选择', link: '/gemini/gemini-3-5-chinese-domestic-3-1-pro-guide-2026' },
      { text: 'Gemini 3.1 Pro 国内使用完全指南（2026年4月最新）', link: '/gemini/gemini-3-1-pro-china-complete-guide-2026' },
      { text: 'Gemini CLI 安装和使用教程（新手入门指南）', link: '/gemini/gemini-cli-install-use-beginner-guide' }
    ]
  }
]

const claudeSidebar = [
  {
    text: 'Claude使用教程',
    collapsed: false,
    items: [
      { text: 'Claude使用指南目录', link: '/claude/' },
      { text: 'Claude官网入口与官方下载', link: '/claude/claude-official-entry-download-login-guide-2026' },
      { text: 'Claude上传文件与分析排错', link: '/claude/claude-file-upload-analysis-troubleshooting-20260829' },
      { text: 'Claude 终极新手指南（2026年3月）', link: '/claude/claude-ultimate-beginner-guide-2026' },
      { text: 'Claude中文版怎么用：中文设置与文件分析', link: '/claude/claude-chinese-china-guide-2026' },
      { text: 'Claude Code教程：安装、MCP与常见报错', link: '/claude/claude-code-how-to-use-install-project-mcp-permissions-2026' },
      { text: 'Windows 10/11 安装 Claude Code 完全指南（2026 年4月最新版）', link: '/claude/claude-code-windows-install-complete-guide-2026' }
    ]
  }
]

const grokSidebar = [
  {
    text: 'Grok使用教程',
    collapsed: false,
    items: [
      { text: 'Grok使用指南目录', link: '/grok/' },
      { text: 'Grok官网入口与grok.com登录', link: '/grok/grok-official-entry-login-guide-2026' },
      { text: 'Grok中文版怎么用：国内访问与安全核验', link: '/grok/grok-chinese-domestic-use-guide-2026' },
      { text: 'Grok怎么用：中文提问与实用功能', link: '/grok/grok-how-to-use-beginner-guide-2026' }
    ]
  }
]

const CORE_ROUTES = {
  start: '/chatgpt/chatgpt-beginner-tutorial-2026',
  chinese: '/chatgpt/openai-chatgpt-chinese-guide-gpt5-o3-models-2026',
  web: '/chatgpt/chatgpt-wangyeban-zaixian-shiyong-zhinan-2026',
  download: '/chatgpt/chatgpt-app-download-install-guide-2026-new',
  official: '/chatgpt/chatgpt-official-url-domestic-gpt5-login-entry',
  prompts: '/chatgpt/chatgpt-prompt-templates-writing-office-guide-2026',
  images: '/chatgpt/chatgpt-image-generation-tutorial-gpt-image-2-2026',
  codex: '/chatgpt/codex-programming-practical-guide-2026-06',
  api: '/chatgpt/chatgpt-api-practical-key-interface-price-security-zeoapi-2026',
  gptcat: '/chatgpt/gptcat-official-entry-how-to-use-review-2026',
  voiceUse: '/chatgpt/chatgpt-voice-conversation-how-to-use-mobile-web-guide-2026',
  voice: '/chatgpt/chatgpt-voice-mode-not-starting-microphone-browser-network-fix-20260731',
  export: '/chatgpt/chatgpt-chat-history-export-backup-recover-web-guide-20260731',
  projects: '/chatgpt/chatgpt-projects-how-to-use-instructions-files-canvas-missing-2026',
  memory: '/chatgpt/chatgpt-memory-how-to-use-settings-delete-2026'
} as const

const curatedSidebar = [
  {
    text: '从这里开始',
    collapsed: false,
    items: [
      { text: 'ChatGPT中文版怎么用？GPT-6 Astra国内使用与网页版入口【2026年9月】', link: '/chatgpt/chatgpt-web-online-gpt-6-astra-model-menu-check-2026-09' },
      { text: 'GPT官网入口怎么进？chatgpt.com登录、网页版与OpenAI官网区别核对【2026年9月更新】', link: '/chatgpt/gpt-official-entry-chatgpt-com-login-web-openai-guide-2026-08' },
      { text: 'ChatGPT网页版怎么用？在线翻译、总结、写作与办公实操教程【2026年9月更新】', link: '/chatgpt/chatgpt-web-online-use-free-translate-summary-office-20260723' },
      
      { text: 'ChatGPT镜像网站哪个好？2026稳定平台实测推荐与避坑指南', link: '/chatgpt/chatgpt-jingxiang-wangzhan-shice-tuijian-2026' },
      { text: 'ChatGPT怎么导出聊天记录？网页版导出、本地保存、备份与找回教程【2026年8月】', link: '/chatgpt/chatgpt-chat-history-export-backup-recover-web-guide-20260731' },
      
       { text: 'ChatGPT网页版使用教程：官网入口、电脑手机登录与中文版使用【2026年9月】', link: '/chatgpt/chatgpt-wangyeban-zaixian-shiyong-zhinan-2026' },
      { text: 'ChatGPT教程中心', link: '/chatgpt/' },
      { text: 'ChatGPT官方下载与安装', link: CORE_ROUTES.download },
      { text: '网页版打不开与登录失败', link: '/chatgpt/chatgpt-web-not-working-login-failed-loading-fix-2026' },
      { text: '语音对话怎么用', link: CORE_ROUTES.voiceUse },
      { text: '语音模式无法启动', link: CORE_ROUTES.voice },
      { text: '聊天记录导出与找回', link: CORE_ROUTES.export },
      { text: 'ChatGPT Projects完整指南', link: CORE_ROUTES.projects },
      { text: 'ChatGPT记忆功能设置', link: CORE_ROUTES.memory },
       { text: 'ChatGPT中文版怎么用？国内使用与官网入口完整指南【2026年9月】', link: CORE_ROUTES.chinese },
      { text: 'ChatGPT怎么用？从第一次提问到文件、图片与办公实战', link: CORE_ROUTES.start },
      { text: 'ChatGPT官网入口：官方网址、网页版登录与国内使用指南', link: CORE_ROUTES.official },
      
      { text: 'GPTCat官网入口与使用教程', link: CORE_ROUTES.gptcat },
      { text: 'GPTCat注册登录与验证码', link: '/chatgpt/gptcat-register-login-email-verification-fix-2026' },
      { text: 'GPT-5国内直连专题', link: '/chatgpt/chatgpt-chinese-gpt51-domestic-direct-guide-20260725' }
    ]
  },
  {
    text: '2026国内访问专题',
    collapsed: false,
    items: [
      { text: 'Gemini官网入口怎么进？网页版登录、中文提问与多模态使用实操教程【2026年9月】', link: '/chatgpt/gemini-official-entry-web-login-chinese-multimodal-tutorial-2026-09' },
      { text: 'Claude官网新手教程：从入口核验到网页登录、中文提问与登录失败处理【2026年9月】', link: '/chatgpt/claude-official-web-login-chinese-region-tutorial-2026-09' },
      { text: 'ChatGPT官网入口：官方网址、网页版登录与国内使用指南【2026最新】', link: CORE_ROUTES.official },
      { text: '免费使用与镜像选择', link: '/chatgpt/chatgpt-chinese-free-guide-mirror-gpt52-2026' },
      { text: '如何在国内使用：官网、网页版与中文版', link: '/chatgpt/chatgpt-china-official-mirror-complete-solution-2026-06' },
      { text: '中文版入口与多模型选择', link: '/chatgpt/chatgpt-zhongwen-ban-shiyong-zhinan-2026-06' },
      { text: '中文版注册登录与型号核验', link: '/chatgpt/chatgpt-chinese-tutorial-gpt56-how-to-use-official-web-mirror-login-20260710' },
      { text: 'ChatGPT-5国内使用路线', link: '/chatgpt/chatgpt-chinese-chatgpt5-domestic-use-ultimate-guide-2026' },
      { text: 'GPT-5完整任务教程', link: '/chatgpt/chatgpt-chinese-gpt5-domestic-complete-gpt52-gpt4o-2026' },
      { text: '官方网址与国内中文版', link: CORE_ROUTES.official },
      { text: 'ChatGPT网页版怎么用', link: CORE_ROUTES.web },
       { text: 'ChatGPT官网最新地址：chatgpt.com登录、网页版与中文版使用【2026年9月】', link: '/chatgpt/chatgpt-latest-official-address-domestic-chinese-guide-2026' }
    ]
  },
  {
    text: '实用教程',
    collapsed: false,
    items: [
      { text: '中文 Prompt 模板', link: CORE_ROUTES.prompts },
      { text: 'ChatGPT官方下载与安装', link: CORE_ROUTES.download },
      { text: '文件上传失败排查', link: '/chatgpt/chatgpt-chinese-web-first-prompt-file-image-task-tutorial-20260724' },
      { text: 'ChatGPT搜索与来源核验', link: '/chatgpt/chatgpt-search-how-to-use-sources-verification-20260829' },
      { text: 'ChatGPT深度研究教程', link: '/chatgpt/chatgpt-deep-research-how-to-use-report-verification-20260829' },
      { text: 'ChatGPT记忆功能开启与删除', link: CORE_ROUTES.memory },
      { text: 'ChatGPT制作PPT全流程指南', link: '/chatgpt/chatgpt-chinese-ppt-outline-slides-speaker-notes-fact-check-20260719' },
      { text: '根据PDF做PPT', link: '/chatgpt/chatgpt-pdf-to-ppt-outline-slides-prompts-2026' },
      { text: 'GPT-image-2 图片生成', link: CORE_ROUTES.images },
      { text: 'GPT-5.6 高推理实战', link: '/chatgpt/gpt56-high-reasoning-research-report-fact-check-summary-20260711' },
      { text: 'ChatGPT 写论文', link: '/chatgpt/chatgpt-write-thesis-tutorial-2026' },
      { text: 'ChatGPT 写 PRD', link: '/chatgpt/chatgpt-prd-requirements-user-story-acceptance-template-20260713' }
    ]
  },
  {
    text: '开发者',
    collapsed: true,
    items: [
      { text: 'GPT-6官网入口：ChatGPT Work模式与6 Astra Ultra怎么用？网页版、API与登录教程【2026年9月】', link: '/chatgpt/gpt-6-official-entry-chatgpt-work-astra-ultra-api-guide-202609' },
      { text: 'Claude Code安装教程：Windows、macOS、Linux首次运行、登录授权与常见报错排查【2026年9月】', link: '/chatgpt/claude-code-install-windows-macos-linux-first-run-login-errors-202609' },
      { text: 'Codex安装教程与首次运行：Windows、macOS、Linux登录、项目权限和VS Code验证【2026年8月】', link: '/chatgpt/codex-cli-first-run-windows-macos-linux-vscode-202608' },
      { text: 'Codex 编程实战', link: CORE_ROUTES.codex },
      { text: 'ChatGPT API 安全接入', link: CORE_ROUTES.api }
    ]
  }
]

const duplicateCanonicalRules: Array<[RegExp, string]> = [
  [/^chatgpt-how-to-use$/, CORE_ROUTES.start],
  [/^chatgpt-tutorial-2026$/, CORE_ROUTES.start],
  [/^chatgpt-chinese-guide$/, CORE_ROUTES.chinese],
  [/^chatgpt\/chatgpt-complete-tutorial-2026$/, CORE_ROUTES.start],
  [/^chatgpt\/chatgpt-how-to-use-chinese-beginner-practice-translate-summary-email-table-20260721$/, CORE_ROUTES.start],
  [/^chatgpt\/(?:chatgpt-beginner-complete-tutorial|chatgpt-beginner-tutorial-signup-login|chatgpt-shiyong-jiaocheng|chatgpt-tutorial-2026-register-login|chatgpt-tutorial-register-login)/, CORE_ROUTES.start],
  [/^guides\/chatgpt\/2026-chatgpt-how-to-use$/, CORE_ROUTES.start],
  [/^chatgpt\/(?:chatgpt-china-official-mirror-complete|chatgpt-china-usage|chatgpt-china-use-complete|chatgpt-china-use-official)/, CORE_ROUTES.start],
  [/^chatgpt\/(?:chatgpt-chinese-login-guide|chatgpt-chinese-version|chatgpt-chinese-tutorial-guide|chatgpt-chinese-tutorial-official-entry|chatgpt-chinese-web-entry|chatgpt-chinese-web-guide|chatgpt-zhongwenban|chatgpt-zhongwen-ban|chatgpt-official-chinese-ultimate|chatgpt-tutorial-gpt-5-5)/, CORE_ROUTES.chinese],
  [/^chatgpt\/chatgpt-chinese-free-entry-web-online-beginner-tutorial-20260724$/, '/chatgpt/chatgpt-chinese-free-guide-mirror-gpt52-2026'],
  [/^chatgpt\/chatgpt-chinese-tutorial-gpt56-how-to-use/, CORE_ROUTES.chinese],
  [/^guides\/chatgpt\/chatgpt-zhongwenban-zenme-yong/, CORE_ROUTES.chinese],
  [/^chatgpt\/chatgpt-web-version-tutorial-2026$/, CORE_ROUTES.web],
  [/^chatgpt\/(?:chatgpt-web-domestic|chatgpt-webpage|chatgpt-web-tutorial|chatgpt-wangyeban|chatgpt-web-version-tutorial-2026-)/, CORE_ROUTES.web],
  [/^chatgpt\/chatgpt-web-version-write-thesis-guide/, '/chatgpt/chatgpt-write-thesis-tutorial-2026'],
  [/^chatgpt\/(?:chatgpt-guanwang-rukou-2026|chatgpt-guanwang-rukou-guonei-fangwen-zhinan-2026|chatgpt-guanwang-rukou-zhongwenban|chatgpt-official-entry)/, CORE_ROUTES.official],
  [/^chatgpt\/(?:chatgpt-prompt-complete|chatgpt-prompt-office|chatgpt-prompt-template-office|chatgpt-prompt-templates-office|chatgpt-prompt-tutorial)/, CORE_ROUTES.prompts],
  [/^chatgpt\/(?:chatgpt-tutorial-thesis-ppt|chatgpt-tutorial-webpage-thesis)/, CORE_ROUTES.prompts],
  [/^chatgpt\/(?:chatgpt-image-generation-gpt-image-2-prompts|chatgpt-image-generation-gpt-image-2-prompt|chatgpt-image-prompt-guide|chatgpt-images-2|chatgpt-image-tutorial|gpt-image-2-chatgpt|gpt-image-2-prompt)/, CORE_ROUTES.images],
  [/^guides\/chatgpt\/chatgpt-image-prompt-guide/, CORE_ROUTES.images],
  [/^chatgpt\/chatgpt-xiazai-anzhuang/, '/chatgpt/chatgpt-app-download-install-guide-2026-new'],
  [/^chatgpt\/(?:chatgpt-codex-programming|codex-cli-install|codex-install)/, CORE_ROUTES.codex],
  [/^chatgpt\/chatgpt-api-practical-(?:key-price|tutorial-key-price)/, CORE_ROUTES.api]
]

const independentSearchRoutes = new Set([
  'chatgpt/chatgpt-chinese-tutorial-gpt56-how-to-use-official-web-mirror-login-20260710',
  'chatgpt/chatgpt-zhongwen-ban-shiyong-zhinan-2026-06',
  'chatgpt/chatgpt-china-official-mirror-complete-solution-2026-06',
  'chatgpt/gpt-official-entry-chatgpt-com-login-web-openai-guide-2026-08',
  'chatgpt/chatgpt-web-not-working-login-failed-loading-fix-2026',
  'chatgpt/chatgpt-pdf-to-ppt-outline-slides-prompts-2026',
  'chatgpt/gptcat-register-login-email-verification-fix-2026',
  'chatgpt/chatgpt-voice-conversation-how-to-use-mobile-web-guide-2026',
  'chatgpt/chatgpt-voice-mode-not-starting-microphone-browser-network-fix-20260731',
  'chatgpt/chatgpt-chat-history-export-backup-recover-web-guide-20260731',
  'chatgpt/chatgpt-projects-how-to-use-instructions-files-canvas-missing-2026',
  'chatgpt/chatgpt-app-download-install-guide-2026-new'
])

const noindexRules = [
  /^chatgpt\/chatgpt-plus-recharge/,
  /^chatgpt\/chatgpt-plus-free-pro/,
  /^chatgpt\/chatgpt-plus-vs-free/
]

function normalizeRoute(url: string) {
  return url.replace(/^https?:\/\/[^/]+\//, '').replace(/^\//, '').replace(/\/?(?:index\.html)?$/, '').replace(/\.html$/, '')
}

function canonicalPathFor(route: string) {
  const normalized = normalizeRoute(route)
  if (independentSearchRoutes.has(normalized)) return `/${normalized}`
  const match = duplicateCanonicalRules.find(([pattern]) => pattern.test(normalized))
  return match?.[1] || (normalized ? `/${normalized}` : '/')
}

function shouldNoindex(route: string) {
  const normalized = normalizeRoute(route)
  return noindexRules.some((pattern) => pattern.test(normalized))
}

function shouldExcludeFromSitemap(route: string) {
  const normalized = normalizeRoute(route)
  return shouldNoindex(normalized) || canonicalPathFor(normalized) !== (normalized ? `/${normalized}` : '/')
}

function compactSidebarItems<T extends { link?: string }>(items: T[]) {
  const seen = new Set<string>()
  return items
    .filter((item) => {
      const link = item.link || ''
      if (!link || seen.has(link)) return false
      seen.add(link)
      return true
    })
}

type SidebarItem = { text: string; link: string }
type SidebarGroup = { text: string; collapsed?: boolean; items: SidebarItem[] }

const sidebarDateCache = new Map<string, string>()

function markdownFiles(dir: string, files: string[] = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = resolve(dir, entry.name)
    if (entry.isDirectory()) markdownFiles(fullPath, files)
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(fullPath)
  }
  return files
}

function sidebarMetadata(link: string) {
  const normalized = normalizeRoute(link)
  const candidates = [resolve(DOCS_ROOT, `${normalized}.md`), resolve(DOCS_ROOT, normalized, 'index.md')]
  const sourcePath = candidates.find((candidate) => existsSync(candidate))
  if (!sourcePath) return { title: link, date: '' }

  const source = readFileSync(sourcePath, 'utf8')
  const title =
    source.match(/^title:\s*["']?([^"'\r\n]+)["']?\s*$/m)?.[1]?.trim() ||
    source.match(/^#\s+(.+)$/m)?.[1]?.trim() ||
    link
  const date =
    source.match(/^updated:\s*["']?([^"'\r\n]+)["']?\s*$/m)?.[1]?.trim() ||
    source.match(/^date:\s*["']?([^"'\r\n]+)["']?\s*$/m)?.[1]?.trim() ||
    ''

  return { title, date }
}

function sidebarSourceExists(link: string) {
  const normalized = normalizeRoute(link)
  const candidates = normalized
    ? [resolve(DOCS_ROOT, `${normalized}.md`), resolve(DOCS_ROOT, normalized, 'index.md')]
    : [resolve(DOCS_ROOT, 'index.md')]
  return candidates.some((candidate) => existsSync(candidate))
}

function sidebarDate(link: string) {
  const cached = sidebarDateCache.get(link)
  if (cached !== undefined) return cached
  const date = sidebarMetadata(link).date
  sidebarDateCache.set(link, date)
  return date
}

function canonicalChatgptSidebarItems() {
  return markdownFiles(resolve(DOCS_ROOT, 'chatgpt'))
    .filter((file) => !file.endsWith(`${resolve(DOCS_ROOT, 'chatgpt', 'index.md')}`))
    .map((file) => {
      const relativePath = relative(DOCS_ROOT, file).replace(/\\/g, '/')
      const link = `/${relativePath.replace(/\.md$/, '').replace(/\/index$/, '')}`
      return { text: sidebarMetadata(link).title, link }
    })
    .filter((item) => !shouldExcludeFromSitemap(item.link))
}

function chatgptSidebarGroupIndex(item: SidebarItem) {
  const value = `${item.link} ${item.text}`.toLowerCase()
  if (/api|codex|developer|python/.test(value)) return 3
  if (/prompt|image|canvas|ppt|thesis|meeting|long-document|ask|file|pdf|office|translate|summary|workflow/.test(value)) return 2
  if (/beginner|register|complete-tutorial|how-to-use-chinese/.test(value)) return 0
  if (/mirror|domestic|china|chinese|zhongwen|official|login|free-entry|stable-platform/.test(value)) return 1
  return 2
}

function buildChatgptSidebar(source: SidebarGroup[]) {
  const groups = source.map((group) => ({ ...group, items: [] as SidebarItem[] }))
  const seen = new Set<string>()

  source.forEach((group, groupIndex) => {
    for (const item of group.items) {
      const normalized = normalizeRoute(item.link)
      const link = normalized ? `/${normalized}` : '/'
      if (
        seen.has(link) ||
        (!/^https?:\/\//.test(item.link) && !sidebarSourceExists(link)) ||
        (link.startsWith('/chatgpt/') && shouldExcludeFromSitemap(link))
      ) continue
      seen.add(link)
      groups[groupIndex].items.push({ ...item, link })
    }
  })

  for (const item of canonicalChatgptSidebarItems()) {
    if (seen.has(item.link)) continue
    seen.add(item.link)
    groups[chatgptSidebarGroupIndex(item)].items.push(item)
  }

  return groups.map((group) => ({
    ...group,
    items: group.items.sort((a, b) => {
      if (a.link === '/chatgpt') return -1
      if (b.link === '/chatgpt') return 1
      return sidebarDate(b.link).localeCompare(sidebarDate(a.link)) || a.text.localeCompare(b.text, 'zh-CN')
    }),
  }))
}

const chatgptSidebar = buildChatgptSidebar(curatedSidebar)

function sidebarByPrefix(source: typeof articleSidebar, prefix: string, text: string) {
  return source
    .map((group) => ({
      ...group,
      text,
      collapsed: false,
      items: compactSidebarItems(group.items.filter((item) => item.link === prefix || item.link.startsWith(prefix))),
    }))
    .filter((group) => group.items.length > 0)
}

export default defineConfig({
  title: 'ChatGPT使用指南',
  titleTemplate: false,
  description:
    '面向中文用户的第三方ChatGPT教程站，提供中文版、网页版、官网入口、Prompt、图片生成、办公场景与开发者实操指南。',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    config(md) {
      const renderHeadingClose = md.renderer.rules.heading_close
      md.renderer.rules.heading_close = (tokens, index, options, env, self) => {
        const rendered = renderHeadingClose
          ? renderHeadingClose(tokens, index, options, env, self)
          : self.renderToken(tokens, index, options)

        if (tokens[index].tag !== 'h1' || env.frontmatter?.productPromo === 'manual') return rendered
        return `${rendered}\n<ArticleProductRouter />\n`
      }
    }
  },

  sitemap: {
    hostname: SITE,
    transformItems: (items) => {
      return items.filter((item) => !shouldExcludeFromSitemap(item.url || '')).map((item) => {
        const url = item.url || ''
        const normalizedUrl = url && url !== '/' ? url.replace(/\/$/, '') : url
        const lastmod = sitemapLastmod(normalizedUrl)
        let priority = 0.6
        let changefreq: 'daily' | 'weekly' | 'monthly' = 'monthly'
        if (normalizedUrl === '' || normalizedUrl === '/' || normalizedUrl === 'index.html') {
          priority = 1.0
          changefreq = 'weekly'
        } else if (/^(chatgpt|guides|guides\/chatgpt|models|developers|gemini|claude|grok|blog|latest)$/.test(normalizedUrl) || /\/index\.html$/.test(normalizedUrl)) {
          priority = 0.8
          changefreq = 'weekly'
        }
        return {
          ...item,
          url: normalizedUrl,
          ...(lastmod ? { lastmod } : {}),
          changefreq: item.changefreq || changefreq,
          priority: item.priority ?? priority
        }
      })
    }
  },

  head: [
    ['meta', { name: 'msvalidate.01', content: '283F4ED132291BB65C882E27214A15B8' }],
    ['meta', { name: 'author', content: SITE_NAME }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: DEFAULT_OG_IMAGE }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: DEFAULT_OG_IMAGE }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#10a37f' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['link', { rel: 'icon', href: '/logo.svg' }],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE,
        description: '面向中文用户的第三方ChatGPT教程、使用场景、模型与开发者指南。',
        inLanguage: 'zh-CN'
      })
    ]
  ],

  transformHead({ pageData }) {
    const rel = (pageData.relativePath || '')
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, '')
      .replace(/\/$/, '')
    const canonicalPath = canonicalPathFor(rel)
    const url = `${SITE}${canonicalPath}`
    const isHome = !rel || rel === ''
    const isCanonicalPage = canonicalPath === (rel ? `/${rel}` : '/')
    const hubRoutes = new Set(['chatgpt', 'guides', 'models', 'developers', 'gemini', 'claude', 'grok', 'blog', 'latest'])
    const isHub = !isHome && isCanonicalPage && hubRoutes.has(rel)
    const isArticle = !isHome && isCanonicalPage && !isHub && /^(chatgpt|guides|models|developers|gemini|claude|grok)\//.test(rel)
    const fm = pageData.frontmatter || {}
    const pageTitle = fm.title || pageData.title || (isHome ? 'ChatGPT 使用指南 | ChatGPT中文版教程' : '')
    const pageDesc =
      fm.description ||
      pageData.description ||
      (isHome
        ? 'ChatGPT使用指南提供2026中文版、网页版、官网入口辨别、国内访问、中文Prompt、图片生成与Codex教程。'
        : '')
    const ogImage = fm.image || fm.ogImage || DEFAULT_OG_IMAGE
    const publishedMs = fm.date ? Date.parse(fm.date) : (pageData as any).lastUpdated
    const modifiedMs = fm.updated ? Date.parse(fm.updated) : (pageData as any).lastUpdated || publishedMs
    const datePublishedISO = publishedMs ? new Date(publishedMs).toISOString() : undefined
    const dateModifiedISO = modifiedMs ? new Date(modifiedMs).toISOString() : datePublishedISO
    const keywordValue = Array.isArray(fm.keywords)
      ? fm.keywords.filter(Boolean).join(',')
      : typeof fm.keywords === 'string'
        ? fm.keywords.trim()
        : ''
    const hasKeywordHead = Array.isArray(fm.head) && fm.head.some((entry: any) => {
      const attrs = Array.isArray(entry) ? entry[1] : undefined
      return attrs && typeof attrs === 'object' && attrs.name === 'keywords'
    })

    const head: any[] = [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', {
        name: 'robots',
        content: shouldNoindex(rel)
          ? 'noindex,follow'
          : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
      }]
    ]

    if (keywordValue && !hasKeywordHead) {
      head.push(['meta', { name: 'keywords', content: keywordValue }])
    }

    if (pageTitle) {
      head.push(['meta', { property: 'og:title', content: pageTitle }])
      head.push(['meta', { name: 'twitter:title', content: pageTitle }])
    }
    if (pageDesc) {
      head.push(['meta', { name: 'description', content: pageDesc }])
      head.push(['meta', { property: 'og:description', content: pageDesc }])
      head.push(['meta', { name: 'twitter:description', content: pageDesc }])
    }
    if (ogImage) {
      head.push(['meta', { property: 'og:image', content: ogImage }])
      head.push(['meta', { name: 'twitter:image', content: ogImage }])
    }

    if (isArticle) {
      head.push(['meta', { property: 'og:type', content: 'article' }])
      if (datePublishedISO) head.push(['meta', { property: 'article:published_time', content: datePublishedISO }])
      if (dateModifiedISO) head.push(['meta', { property: 'article:modified_time', content: dateModifiedISO }])

      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: pageTitle,
          description: pageDesc,
          url,
          image: ogImage,
          inLanguage: 'zh-CN',
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          author: { '@type': 'Organization', name: EDITOR_NAME, url: EDITOR_URL },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE,
            logo: { '@type': 'ImageObject', url: `${SITE}/logo.svg` }
          },
          ...(datePublishedISO ? { datePublished: datePublishedISO } : {}),
          ...(dateModifiedISO ? { dateModified: dateModifiedISO } : {})
        })
      ])
      const parts = rel.split('/')
      const sectionMap: Record<string, string> = {
        chatgpt: 'ChatGPT 教程',
        models: 'AI 模型',
        developers: '开发者',
        gemini: 'Gemini 教程',
        claude: 'Claude 教程',
        grok: 'Grok 教程',
        guides: '使用场景',
        blog: 'Blog'
      }
      const items: any[] = [{ '@type': 'ListItem', position: 1, name: '首页', item: `${SITE}/` }]
      let acc = SITE
      parts.forEach((seg, i) => {
        acc += `/${seg}`
        const isLast = i === parts.length - 1
        items.push({
          '@type': 'ListItem',
          position: i + 2,
          name: i === 0 ? sectionMap[seg] || seg : isLast ? pageTitle || seg : seg,
          item: acc
        })
      })
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items
        })
      ])

      const faqItems = Array.isArray(fm.faq)
        ? fm.faq.filter((item: any) => item?.question && item?.answer)
        : []
      if (fm.faqSchema === true && faqItems.length >= 2) {
        head.push([
          'script',
          { type: 'application/ld+json' },
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item: any) => ({
              '@type': 'Question',
              name: String(item.question),
              acceptedAnswer: {
                '@type': 'Answer',
                text: String(item.answer)
              }
            }))
          })
        ])
      }
    } else if (isHub) {
      head.push(['meta', { property: 'og:type', content: 'website' }])
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: pageTitle,
          description: pageDesc,
          url,
          inLanguage: 'zh-CN',
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE },
          author: { '@type': 'Organization', name: EDITOR_NAME, url: EDITOR_URL },
          dateModified: dateModifiedISO
        })
      ])
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '首页', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: pageTitle, item: url }
          ]
        })
      ])
    } else if (isHome) {
      head.push(['meta', { property: 'og:type', content: 'website' }])
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: pageTitle,
          description: pageDesc,
          url,
          inLanguage: 'zh-CN',
          isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE },
          about: [
            { '@type': 'Thing', name: 'ChatGPT网页版' },
            { '@type': 'Thing', name: 'ChatGPT中文版' },
            { '@type': 'Thing', name: 'ChatGPT使用教程' }
          ],
          publisher: { '@type': 'Organization', name: EDITOR_NAME, url: EDITOR_URL },
          ...(dateModifiedISO ? { dateModified: dateModifiedISO } : {})
        })
      ])
    } else {
      head.push(['meta', { property: 'og:type', content: 'website' }])
    }

    return head
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: SITE_NAME,
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    nav: [
      {
        text: 'ChatGPT',
        items: [
          { text: '教程中心', link: '/chatgpt/' },
          { text: '官方下载', link: CORE_ROUTES.download },
          { text: '网页版教程', link: CORE_ROUTES.web },
          { text: '中文版指南', link: CORE_ROUTES.chinese },
          { text: '新手入门', link: CORE_ROUTES.start },
          { text: '官网入口', link: CORE_ROUTES.official }
        ]
      },
      {
        text: '实用教程',
        items: [
          { text: '场景教程目录', link: '/guides/' },
          { text: 'ChatGPT下载与安装', link: CORE_ROUTES.download },
          { text: '中文 Prompt 模板', link: CORE_ROUTES.prompts },
          { text: '文件上传失败排查', link: '/chatgpt/chatgpt-chinese-web-first-prompt-file-image-task-tutorial-20260724' },
          { text: 'ChatGPT搜索与来源核验', link: '/chatgpt/chatgpt-search-how-to-use-sources-verification-20260829' },
          { text: 'ChatGPT深度研究教程', link: '/chatgpt/chatgpt-deep-research-how-to-use-report-verification-20260829' },
          { text: 'ChatGPT记忆功能设置', link: CORE_ROUTES.memory },
          { text: '语音对话怎么用', link: CORE_ROUTES.voiceUse },
          { text: '语音模式故障排查', link: CORE_ROUTES.voice },
          { text: '聊天记录导出与找回', link: CORE_ROUTES.export },
          { text: 'Projects项目工作区', link: CORE_ROUTES.projects },
          { text: 'PPT制作', link: '/chatgpt/chatgpt-chinese-ppt-outline-slides-speaker-notes-fact-check-20260719' },
          { text: '论文与长文', link: '/chatgpt/chatgpt-write-thesis-tutorial-2026' },
          { text: '图片生成', link: CORE_ROUTES.images }
        ]
      },
      {
        text: '模型与工具',
        items: [
          { text: '模型教程总览', link: '/models/' },
          { text: 'Gemini教程', link: '/gemini/' },
          { text: 'Claude教程', link: '/claude/' },
          { text: 'Grok教程', link: '/grok/' },
          { text: 'GPTCat教程', link: CORE_ROUTES.gptcat }
        ]
      },
      {
        text: '开发者',
        items: [
          { text: '开发者教程目录', link: '/developers/' },
          { text: 'Codex编程实战', link: CORE_ROUTES.codex },
          { text: 'ChatGPT API安全接入', link: CORE_ROUTES.api },
          { text: 'Claude Code', link: '/claude/claude-code-how-to-use-install-project-mcp-permissions-2026' }
        ]
      },
      { text: 'ZeoAPI（API工具）', link: 'https://www.zeoapi.com/register?aff=Pe3N', target: '_blank', rel: 'nofollow sponsored noreferrer' }
    ],
    sidebar: {
      '/chatgpt/': chatgptSidebar,
      '/guides/': [
        {
          text: '使用场景',
          collapsed: false,
          items: [
            { text: '场景教程目录', link: '/guides/' },
            { text: '中文 Prompt 模板', link: CORE_ROUTES.prompts },
            { text: '文件上传失败排查', link: '/chatgpt/chatgpt-chinese-web-first-prompt-file-image-task-tutorial-20260724' },
            { text: '语音对话怎么用', link: CORE_ROUTES.voiceUse },
            { text: '语音模式故障排查', link: CORE_ROUTES.voice },
            { text: '聊天记录导出与找回', link: CORE_ROUTES.export },
            { text: 'Projects项目工作区', link: CORE_ROUTES.projects },
            { text: '记忆功能开启与删除', link: CORE_ROUTES.memory },
            { text: 'ChatGPT 制作 PPT', link: '/chatgpt/chatgpt-chinese-ppt-outline-slides-speaker-notes-fact-check-20260719' },
            { text: '根据 PDF 做 PPT', link: '/chatgpt/chatgpt-pdf-to-ppt-outline-slides-prompts-2026' },
            { text: 'ChatGPT 写论文', link: '/chatgpt/chatgpt-write-thesis-tutorial-2026' },
            { text: '会议纪要与行动项', link: '/chatgpt/chatgpt-meeting-minutes-action-items-owner-review-template-20260716' },
            { text: '图片生成教程', link: CORE_ROUTES.images }
          ]
        }
      ],
      '/models/': [
        {
          text: 'AI模型',
          collapsed: false,
          items: [
            { text: '模型使用指南', link: '/models/' },
            { text: 'ChatGPT教程', link: '/chatgpt/' },
            { text: 'Gemini教程', link: '/gemini/' },
            { text: 'Gemini官网入口与国内登录', link: '/gemini/gemini-official-entry-china-guide-2026' },
            { text: 'Gemini图片生成与编辑', link: '/gemini/gemini-image-generation-prompt-editing-guide-20260829' },
            { text: 'Claude教程', link: '/claude/' },
            { text: 'Claude官网入口与官方下载', link: '/claude/claude-official-entry-download-login-guide-2026' },
            { text: 'Claude上传文件与分析排错', link: '/claude/claude-file-upload-analysis-troubleshooting-20260829' },
            { text: 'Grok教程', link: '/grok/' },
            { text: 'Grok官网入口与登录', link: '/grok/grok-official-entry-login-guide-2026' }
          ]
        }
      ],
      '/developers/': [
        {
          text: '开发者教程',
          collapsed: false,
          items: [
            { text: '开发者教程目录', link: '/developers/' },
            { text: 'Codex 编程实战', link: CORE_ROUTES.codex },
            { text: 'Codex CLI 安装', link: '/chatgpt/codex-cli-install-windows-macos-linux-2026-06' },
            { text: 'ChatGPT API 安全接入', link: CORE_ROUTES.api },
            { text: 'Gemini CLI', link: '/gemini/gemini-cli-install-use-beginner-guide' },
            { text: 'Claude Code安装与报错教程', link: '/claude/claude-code-how-to-use-install-project-mcp-permissions-2026' },
            { text: 'Claude Code Windows', link: '/claude/claude-code-windows-install-complete-guide-2026' }
          ]
        }
      ],
      '/gemini/': geminiSidebar,
      '/claude/': claudeSidebar,
      '/grok/': grokSidebar,
      '/blog/': sidebarByPrefix(articleSidebar, '/blog/', 'Blog')
    },
    footer: {
      message: '<a href="/about">关于本站</a> · <a href="/editorial-policy">内容与评测政策</a> · <a href="/privacy">隐私声明</a> · <a href="/disclaimer">免责声明</a>',
      copyright: 'Copyright © 2026 ChatGPT教程编辑组'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: 'deep',
      label: '本页目录'
    }
  }
})
