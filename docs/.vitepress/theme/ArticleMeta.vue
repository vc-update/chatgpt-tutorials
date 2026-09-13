<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

const visible = computed(() => /^\/(chatgpt|guides|gemini|claude|developers|models)\//.test(route.path))
const verifiedDate = computed(() => {
  const value = frontmatter.value.updated || frontmatter.value.date
  if (!value) return ''
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value).slice(0, 10)
})
</script>

<template>
  <div v-if="visible" class="article-meta" aria-label="文章信息">
    <span>维护：<a href="/about">ChatGPT教程编辑组</a></span>
    <span v-if="verifiedDate">最后核验：{{ verifiedDate }}</span>
    <a href="/editorial-policy">核验方法与推荐链接说明</a>
  </div>
</template>
