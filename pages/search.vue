<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
``        <b-col v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index" xl="4" sm="12" md=6 class="mb-3 mt-3">
          <card></card>
        </b-col>
      </div>
    </div>
    <div class="main-footer"></div>
  </div>
</template>

<script lang="ts">

export default {
  layout: 'main',
  data() {
    return {
      model: {
        id: 0,
        name: 'Маньчжурский орех',
        description: 'Оре́х маньчжу́рский, или Орех думбе́йский, — вид листопадных однодомных' +
          '                деревьев или кустарников рода Орех семейства Ореховые.',
        img: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980'
      }
    }
  }
}
</script>

<style>
</style>
