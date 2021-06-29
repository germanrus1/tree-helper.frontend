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

export default {
  components: { TheHeader, TheFooter }
}

</script>

<style scoped>

</style>
