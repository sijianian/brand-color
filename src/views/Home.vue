<template>
  <page class="home" title="Home">
    <HelloWorld msg="Welcome to here"/>
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
