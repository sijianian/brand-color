<template>
  <input
    class="algolia-search-input el-input__inner"
    id="algolia-search-input"
    placeholder="search">
</template>

<script>
import 'docsearch.js/dist/cdn/docsearch.min.css'
import docsearch from 'docsearch.js'

export default {
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      docsearch(
        Object.assign(this.options, {
          appId: 'AWY4E0DT23',
          apiKey: '859013c2ceb492a86f0a8bfc4e154d5e',
          indexName: 'blog',
          inputSelector: '#algolia-search-input',
          debug: true, // Set debug to true if you want to inspect the dropdown
        })
      )
    },
  },
  watch: {
    options(newValue) {
      this.$el.innerHTML = `<input class="form-control
        d-flex ml-2 mr-auto algolia-search-input search-query"
        id="asalgolia-search-input"
        placeholder="搜索文档">`
      this.initialize(newValue)
    },
  },
}
</script>

<style lang="scss">
.algolia-search-input {
  background-image: url(./../assets/search.svg) !important;
  background-repeat: no-repeat;
  background-size: 1.4em;
  background-position: 90% 50%;
  border-radius: 20px !important;
  width: 260px !important;
}
.algolia-autocomplete .ds-dropdown-menu [class^='ds-dataset-'] {
  position: fixed !important;
}
</style>
