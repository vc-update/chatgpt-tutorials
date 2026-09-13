<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

type Product = {
  name: string
  domain: string
  href: string
  label: string
  useCase: string
}

const route = useRoute()

const snakeGPT: Product = {
  name: 'SnakeGPT',
  domain: 'snakegpt.vip',
  href: 'https://www.snakegpt.vip/',
  label: '日常中文推荐',
  useCase: '国内邮箱注册，适合中文问答、写作、翻译与资料整理'
}

const gptCat: Product = {
  name: 'GPTCat',
  domain: 'gptcat.cc',
  href: 'https://gptcat.cc/',
  label: '多模态推荐',
  useCase: '国内邮箱注册，适合多模型、图片、文件、语音与视频任务'
}

const zeoGPT: Product = {
  name: 'ZeoGPT',
  domain: 'zeogpt.com',
  href: 'https://www.zeogpt.com/register?ref=MRNWDKC3',
  label: 'Codex推荐',
  useCase: '适合Codex国内工作流、代码仓库与开发者长任务'
}

const normalizedPath = computed(() => {
  const path = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  return path || '/'
})

const visible = computed(() => {
  const path = normalizedPath.value
  if (path === '/guides/chatgpt') return false
  return (
    /^\/(?:chatgpt|gemini|claude|grok|developers|models)\/[^/]+$/.test(path) ||
    /^\/guides\/(?:chatgpt\/)?[^/]+$/.test(path)
  )
})

const products = computed(() => {
  const path = normalizedPath.value
  if (/(?:api|codex|code|cli|mcp|python|developer)/i.test(path)) {
    return [zeoGPT, gptCat, snakeGPT]
  }
  if (/(?:grok)/i.test(path)) {
    return [gptCat, snakeGPT, zeoGPT]
  }
  if (/(?:image|photo|voice|video|ppt|pdf|file|canvas|multimodal)/i.test(path)) {
    return [gptCat, snakeGPT, zeoGPT]
  }
  return [snakeGPT, gptCat, zeoGPT]
})
</script>

<template>
  <section v-if="visible" class="article-product-router" aria-label="国内第三方AI工具推荐">
    <div class="article-product-router__heading">
      <span>国内使用推荐</span>
      <strong>日常问答、多模态与Codex入口</strong>
    </div>

    <div class="article-product-router__grid">
      <a
        v-for="(product, index) in products"
        :key="product.name"
        class="article-product-router__item"
        :class="{ 'article-product-router__item--primary': index === 0 }"
        :href="product.href"
        target="_blank"
        rel="nofollow sponsored noreferrer"
      >
        <span class="article-product-router__topline">
          <span class="article-product-router__name">{{ product.name }}</span>
          <span class="article-product-router__badge">{{ product.label }}</span>
        </span>
        <span class="article-product-router__use">{{ product.useCase }}</span>
        <span class="article-product-router__domain">打开 {{ product.domain }}</span>
      </a>
    </div>

    <p class="article-product-router__note">
      本站推荐以上工具，链接包含推广关系。它们均为独立第三方平台，不是 OpenAI、Google 或 Anthropic 官方服务；模型、功能与额度以当前页面为准，请使用独立密码并先测试公开、脱敏内容。
    </p>
  </section>
</template>
