<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <component :is="layout"/>
    <footer v-if="($page.path.startsWith('/guide/'))" class="custom-global-footer footer-guide-styling">
      <p class="imprint"> <a href="/imprint">Impressum</a> </p>
      <p>© 2021 <a href="https://frankzinsli.ch" target="_blank">Frank Zinsli</a></p>
    </footer>
    <footer v-else class="custom-global-footer">
      <p class="imprint"> <a href="/imprint">Impressum</a> </p>
      <p>© 2021 <a href="https://frankzinsli.ch" target="_blank">Frank Zinsli</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    },
  }
}
</script>

<style>
.custom-global-footer {
  padding: 2.5rem;
  border-top: 1px solid #ced4da;
  text-align: center;
  color: #606b76;
  margin-top: 3rem;
}

@media (min-width: 720px) {
  .footer-guide-styling {
    padding-left: 20rem;
  }
}

.custom-global-footer a {
  text-decoration: none;
  color: #606b76;
}

.custom-global-footer .imprint a {
  text-decoration: underline;
  color: #f3722c;
}
.custom-global-footer a:hover {
  font-weight: 600;
}
</style>
