import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const distDir = path.join(root, 'docs', '.vitepress', 'dist')
const vercelPath = path.join(root, 'vercel.json')
const site = 'https://chatgpt-tutorials.com'

const config = JSON.parse(fs.readFileSync(vercelPath, 'utf8'))
const redirectsBySource = new Map()

for (const redirect of config.redirects || []) {
  redirectsBySource.set(redirect.source, redirect)
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(fullPath) : [fullPath]
  })
}

function routeFor(file) {
  const relative = path.relative(distDir, file).replaceAll('\\', '/')
  if (relative === 'index.html') return '/'
  return `/${relative.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`
}

let added = 0
let updated = 0
let removed = 0
for (const file of walk(distDir).filter((file) => file.endsWith('.html') && !file.endsWith('404.html'))) {
  const html = fs.readFileSync(file, 'utf8')
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  if (!canonical?.startsWith(site)) continue

  const source = routeFor(file)
  const canonicalDestination = canonical.slice(site.length) || '/'
  if (source === canonicalDestination) {
    if (redirectsBySource.has(source) && !redirectsBySource.get(source).has) {
      redirectsBySource.delete(source)
      removed += 1
    }
    continue
  }
  const destination = redirectsBySource.has(canonicalDestination)
    ? resolveDestination(canonicalDestination)
    : canonicalDestination
  if (source === '/' || source.endsWith('/index')) continue

  const existing = redirectsBySource.get(source)
  if (!existing) {
    redirectsBySource.set(source, { source, destination, permanent: true })
    added += 1
  } else if (existing.destination !== destination || existing.permanent !== true) {
    redirectsBySource.set(source, { ...existing, source, destination, permanent: true })
    updated += 1
  }
}

function resolveDestination(source) {
  const visited = new Set([source])
  let destination = redirectsBySource.get(source)?.destination

  while (typeof destination === 'string' && destination.startsWith('/') && redirectsBySource.has(destination)) {
    if (visited.has(destination)) {
      throw new Error(`Redirect loop detected from ${source} through ${destination}`)
    }

    visited.add(destination)
    const next = redirectsBySource.get(destination)
    if (next.has) break
    destination = next.destination
  }

  return destination
}

let flattened = 0
for (const [source, redirect] of redirectsBySource) {
  if (redirect.has) continue

  const destination = resolveDestination(source)
  if (destination && destination !== redirect.destination) {
    redirectsBySource.set(source, { ...redirect, destination })
    flattened += 1
  }
}

const hostRedirect = [...redirectsBySource.values()].find((redirect) => redirect.has)
const redirects = [...redirectsBySource.values()]
  .filter((redirect) => !redirect.has)
  .sort((a, b) => a.source.localeCompare(b.source))

if (hostRedirect) redirects.push(hostRedirect)

config.redirects = redirects
fs.writeFileSync(vercelPath, `${JSON.stringify(config, null, 2)}\n`, 'utf8')
console.log(
  `Synced Vercel redirects: ${redirects.length} total, ${added} added, ${updated} updated, ${removed} removed, ${flattened} chains flattened.`
)
