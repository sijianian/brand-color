<template>
  <page class="home" title="Home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/hello-world.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
}
</script>
