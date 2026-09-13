# chatgpt-tutorials.com SEO 行动计划

> 版本：2026-08-29
>
> 目标：恢复可抓取与正式发布链路，收敛页面意图，提升 Bing 对核心专题的理解和点击潜力。SEO 不保证排名；所有删除、合并、改日期和部署动作都应保留证据。

## 结论先行

现在最该做的是 **发布一致性修复 + 页面地图收敛 + Bing 数据接入**。目前不建议继续批量新增 ChatGPT 官网/中文版/国内使用近似页，也不建议为了“新鲜度”批量把日期改成今天。

## P0：今天到 48 小时

### 1. 发布并验证本地已完成页面

- **动作**：在用户明确授权后执行正式 Vercel 部署；部署前运行 `npm run build`。
- **目标 URL**：`/grok`、两篇 ChatGPT 搜索/深度研究页、Gemini 图片页、Claude 文件页，以及本地 sitemap 中正式站缺失的页面。
- **验收**：正式域名每个目标 URL HTTP 200；canonical 自指；title/description/H1 与主题一致；Article/Breadcrumb JSON-LD 存在；正式 sitemap URL 数与本地 canonical 集合一致；`llms.txt` 与 helper sitemap 同步。
- **原因**：当前本地 78 个 URL、线上 68 个 URL，线上新页面 404 是已确认的发布阻断。

### 2. 保证发现链路同步

- **动作**：确认 `docs/index.md`、`docs/chatgpt/index.md`、`docs/latest/index.md`、`docs/blog/index.md`、`docs/.vitepress/config.mts`、`docs/public/llms.txt`、`docs/public/sitemap.txt`、`docs/public/sitemap.html` 与构建产物一致。
- **验收**：每个新页面至少从一个栏目页和一个相关文章入口可达；不依赖只有 sidebar 的发现；不存在指向线上 404 的重要导航链接。

### 3. 接入 Bing Webmaster 数据

- **动作**：导出最近 28 至 90 天的 Search Performance、Index Explorer、Sitemap、Crawl Information。
- **最低字段**：URL、查询词、展示、点击、CTR、平均位置、抓取状态、最后抓取时间。
- **验收**：建立 URL 级 Keep / Merge / Repurpose / Noindex / Remove 表。
- **原因**：没有这些数据，不能判断惩罚、收录缺失、内耗或页面真实价值。

## P1：本周

### 4. 确立唯一主页面与支持页面

保留以下主意图：官网入口、网页版、中文版/国内使用、新手怎么用、官方下载、图片生成、API/Codex。为每个主意图指定一个 canonical 主页面，支持页必须有不同任务价值和明确内链。

建议优先审查的主页面：

| 意图 | 主页面 |
|:---|:---|
| 官网入口 | `/chatgpt/chatgpt-official-url-domestic-gpt5-login-entry` |
| 网页版 | `/chatgpt/chatgpt-wangyeban-zaixian-shiyong-zhinan-2026` |
| 中文版/国内 | `/chatgpt/openai-chatgpt-chinese-guide-gpt5-o3-models-2026` |
| 新手使用 | `/chatgpt/chatgpt-beginner-tutorial-2026` |
| 下载 | `/chatgpt/chatgpt-app-download-install-guide-2026-new` |
| 图片生成 | `/chatgpt/chatgpt-image-generation-tutorial-gpt-image-2-2026` |

### 5. 对旧页面执行数据驱动的合并决策

- 有展示但低 CTR：先改首段、标题/description 与答案块，保留 URL。
- 有展示且查询词独特：改为支持页并链接主页面，不要直接 301。
- 无展示、无入链、与主页面高度重复：在确认没有外链后，再考虑 301/noindex/remove。
- 有外链或历史点击：优先保留 URL，用实质改写和单跳 301 保护信号。

### 6. 修复事实与来源边界

- 检查 Claude 文章失效的官方帮助链接。
- 所有模型版本、功能、地区可用性和第三方服务声明都标明核验日期与来源。
- SnakeGPT、GPTCat、ZeoGPT、ZeoAPI 继续标明第三方服务，使用 `nofollow sponsored noreferrer`；产品推荐按场景变化，不机械复制。
- 删除未能公开核验的星级、运营年限、稳定性和“官方/平替”强断言。

### 7. 修复元数据一致性

- 逐页确保只有一个 `keywords` meta；keywords 只做辅助，不堆砌。
- 每页 title、H1、description、URL 服务同一个搜索意图。
- `/guides/chatgpt` 补真实 `updated` 日期。
- 文章更新时间只有发生实质修订时才更新，并在页面中记录变化。

## P2：两到四周

### 8. 增强每个核心页的第一手价值

每个主页面补一段可复核的“核验记录”：日期、设备/浏览器或客户端、检查的官方 URL、实际可见入口、错误现象和未覆盖范围。增加真实截图时使用描述性 alt，避免为了 SEO 添加装饰图。

### 9. 补齐 Gemini、Claude、Grok 专题集群

优先把已经存在的入口页、基础使用页和一个高需求功能/故障页发布并互链，再根据 Bing 查询数据扩展。不要先复制 ChatGPT 的 100 多篇规模；专题深度和页面独立价值比数量更重要。

### 10. 处理安全响应头与性能测量

- 在 Vercel/Cloudflare 层评估 HSTS `includeSubDomains`、CSP、X-Content-Type-Options、Referrer-Policy、Permissions-Policy 和 X-Frame-Options。
- 用 PageSpeed mobile/desktop 与真实用户数据测 LCP、INP、CLS；没有测量结果时不写速度承诺。

## P3：持续维护

### 11. 建立每周 Bing 监控表

记录固定关键词的日期、地区、设备、前十 URL、本站 URL、平均位置变化；将 SERP 抽样作为趋势，不把一次搜索当作排名事实。

### 12. 建立内容更新规则

- 新闻/版本变更：有实际变化才更新。
- Evergreen 教程：季度复核官方链接和步骤。
- 每次更新写清“改了什么”，不要只改日期。
- 每次发布后检查正式域名、sitemap、robots、canonical、JSON-LD 和关键内链。

## 暂不建议做的事

1. 不要继续批量生成标题只差一个模型版本的入口页。
2. 不要把所有旧页面 canonical 到首页。
3. 不要把“前十没有本站”直接表述为 Bing 惩罚。
4. 不要复制同行标题和正文、虚构评测、星级、价格、版本或官方关系。
5. 不要在没有 Bing Webmaster 数据时批量删除、noindex 或改日期。
6. 不要把本地 build 成功或 Vercel READY 当成正式站已验证；必须检查自定义域名。

## 验收清单

- [ ] `npm run build` 退出码为 0
- [ ] 本地 canonical sitemap 与 helper 文件一致且无重复
- [ ] 目标页面 HTML 有一个 H1、一个 canonical、唯一 title/description/keywords
- [ ] 文章页有正确 Article/Breadcrumb JSON-LD，FAQ 与可见内容一致
- [ ] 目标页面正式域名 HTTP 200，旧 URL 为相关单跳 301
- [ ] `/robots.txt` 仅声明 XML sitemap，未误挡重要页面
- [ ] `/sitemap.xml`、`/llms.txt` 和首页/栏目页发现链路已同步
- [ ] 390px 移动端无页面级横向溢出
- [ ] Bing Webmaster 已提交 sitemap 并记录抓取/查询数据
