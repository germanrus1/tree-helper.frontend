<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <b-col v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index" xl="4" sm="12" md=6 class="mb-3 mt-3">
          <card></card>
        </b-col>
      </div>
    </div>
    <div class="main-footer"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'main'
})
</script>

<style>
</style>
