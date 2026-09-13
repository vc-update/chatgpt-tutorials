import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ArticleMeta from './ArticleMeta.vue'
import ArticleProductRouter from './ArticleProductRouter.vue'
import HomeNotice from './HomeNotice.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HomeNotice),
      'doc-before': () => h(ArticleMeta)
    })
  },
  enhanceApp({ app }) {
    app.component('HomeNotice', HomeNotice)
    app.component('ArticleMeta', ArticleMeta)
    app.component('ArticleProductRouter', ArticleProductRouter)
  }
}
