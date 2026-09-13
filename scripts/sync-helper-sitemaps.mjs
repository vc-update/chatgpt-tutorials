import { existsSync } from 'node:fs'
import { readFile, stat, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('../', import.meta.url))
const docsDir = join(rootDir, 'docs')
const distDir = join(docsDir, '.vitepress', 'dist')
const publicDir = join(docsDir, 'public')
const site = 'https://chatgpt-tutorials.com'

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function routeFor(url) {
  return decodeURIComponent(new URL(url).pathname).replace(/^\/+|\/+$/g, '')
}

function firstExisting(paths) {
  return paths.find((path) => existsSync(path))
}

function sourcePathFor(route) {
  if (!route) return join(docsDir, 'index.md')
  return firstExisting([
    join(docsDir, `${route}.md`),
    join(docsDir, route, 'index.md')
  ])
}

function outputPathFor(route) {
  if (!route) return join(distDir, 'index.html')
  return firstExisting([
    join(distDir, `${route}.html`),
    join(distDir, route, 'index.html')
  ])
}

async function pageMetadata(url) {
  const route = routeFor(url)
  const sourcePath = sourcePathFor(route)
  const outputPath = outputPathFor(route)
  const html = outputPath ? await readFile(outputPath, 'utf8') : ''
  const markdown = sourcePath ? await readFile(sourcePath, 'utf8') : ''
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i)
  const updatedMatch = markdown.match(/^updated:\s*["']?(\d{4}-\d{2}-\d{2})/m)
  const dateMatch = markdown.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})/m)
  const metaDateMatch = html.match(/property="article:modified_time" content="(\d{4}-\d{2}-\d{2})/i)
  let modified = updatedMatch?.[1] || dateMatch?.[1] || metaDateMatch?.[1]

  if (!modified && sourcePath) {
    modified = (await stat(sourcePath)).mtime.toISOString().slice(0, 10)
  }

  return {
    url,
    route,
    title: titleMatch ? decodeHtml(titleMatch[1].trim()) : route || '首页',
    modified: modified || new Date().toISOString().slice(0, 10),
    isHub: !route || !route.includes('/') || route === 'guides/chatgpt'
  }
}

function sectionFor(route) {
  if (!route) return '首页'
  if (route === 'blog' || route === 'latest') return '内容索引'
  if (route === 'about' || route === 'privacy' || route === 'disclaimer' || route === 'editorial-policy') return '站点信息'
  if (route === 'chatgpt' || route.startsWith('chatgpt/')) return 'ChatGPT教程'
  if (route === 'models' || route.startsWith('models/')) return 'AI模型'
  if (route === 'developers' || route.startsWith('developers/')) return '开发者'
  if (route === 'gemini' || route.startsWith('gemini/')) return 'Gemini教程'
  if (route === 'claude' || route.startsWith('claude/')) return 'Claude教程'
  if (route === 'grok' || route.startsWith('grok/')) return 'Grok教程'
  if (route === 'guides' || route.startsWith('guides/')) return '使用场景'
  return '其他页面'
}

const sitemapPath = join(distDir, 'sitemap.xml')
if (!existsSync(sitemapPath)) {
  throw new Error('Missing docs/.vitepress/dist/sitemap.xml. Run the VitePress build first.')
}

const sitemapXml = await readFile(sitemapPath, 'utf8')
const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeHtml(match[1]))
const entries = await Promise.all([...new Set(urls)].map(pageMetadata))
const sectionOrder = ['首页', '内容索引', 'ChatGPT教程', '使用场景', 'AI模型', '开发者', 'Gemini教程', 'Claude教程', 'Grok教程', '站点信息', '其他页面']

const groups = sectionOrder
  .map((section) => ({
    section,
    entries: entries
      .filter((entry) => sectionFor(entry.route) === section)
      .sort((a, b) => Number(b.isHub) - Number(a.isHub) || b.modified.localeCompare(a.modified) || a.url.localeCompare(b.url))
  }))
  .filter((group) => group.entries.length > 0)

const generatedDate = new Date().toISOString().slice(0, 10)
const textSitemap = `${entries.map((entry) => entry.url).join('\n')}\n`
const htmlSections = groups.map(({ section, entries: sectionEntries }) => `
<section>
  <h2>${escapeHtml(section)}</h2>
  <ul>
${sectionEntries.map((entry) => `    <li><a href="${escapeHtml(entry.url)}">${escapeHtml(entry.title)}</a><span>${entry.modified}</span></li>`).join('\n')}
  </ul>
</section>`).join('\n')

const htmlSitemap = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="${site}/sitemap">
  <title>ChatGPT教程全站索引</title>
  <meta name="description" content="ChatGPT使用指南的全站canonical页面索引，包含ChatGPT教程、使用场景、AI模型与开发者实操内容。">
  <meta name="robots" content="index,follow">
  <style>
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.7;margin:0;background:#fff;color:#1f2328}
    main{max-width:1080px;margin:0 auto;padding:32px 20px 56px}
    h1{font-size:28px;margin:0 0 8px}p{margin:0 0 24px;color:#57606a}
    section{border-top:1px solid #d8dee4;padding-top:22px;margin-top:22px}h2{font-size:20px;margin:0 0 12px}
    ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}li{display:grid;grid-template-columns:minmax(0,1fr) 104px;gap:16px;align-items:start}
    a{color:#0969da;text-decoration:none}a:hover{text-decoration:underline}span{color:#6e7781;font-size:13px;text-align:right}
    @media (max-width:640px){li{grid-template-columns:1fr}span{text-align:left}}
  </style>
</head>
<body>
<main>
  <h1>ChatGPT教程全站索引</h1>
  <p>共 ${entries.length} 个 canonical 页面，更新于 ${generatedDate}。抓取入口：<a href="${site}/sitemap.xml">XML Sitemap</a> · <a href="${site}/sitemap.txt">Text Sitemap</a></p>${htmlSections}
</main>
</body>
</html>
`

const llmsTxt = [
  '# ChatGPT 使用指南',
  '',
  '> 独立中文 ChatGPT 教程站，提供 ChatGPT 中文版、网页版、官网入口辨别、Prompt、图片生成、办公场景和开发者实操指南。本站不是 OpenAI 官方网站。',
  '',
  ...groups.flatMap(({ section, entries: sectionEntries }) => [
    `## ${section}`,
    '',
    ...sectionEntries.map((entry) => `- [${entry.title}](${entry.url})`),
    '',
  ]),
].join('\n')

await Promise.all([
  writeFile(join(publicDir, 'sitemap.txt'), textSitemap, 'utf8'),
  writeFile(join(publicDir, 'sitemap.html'), htmlSitemap, 'utf8'),
  writeFile(join(publicDir, 'llms.txt'), llmsTxt, 'utf8'),
  writeFile(join(distDir, 'sitemap.txt'), textSitemap, 'utf8'),
  writeFile(join(distDir, 'sitemap.html'), htmlSitemap, 'utf8'),
  writeFile(join(distDir, 'llms.txt'), llmsTxt, 'utf8')
])

console.log(`Synced helper sitemaps with ${entries.length} canonical URLs.`)
