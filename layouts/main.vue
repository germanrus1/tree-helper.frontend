<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './main/theHeader'
import TheFooter from './main/theFooter'
import { BIcon, BIconArrowUp } from 'bootstrap-vue'

export default {
  components: { TheHeader, TheFooter }
}

</script>

<style scoped>

</style>
