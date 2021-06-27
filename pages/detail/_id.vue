<template>
  <div class="container">
    <b-row>
      <b-col>
        <img :src="model.img">
        Слайдер
      </b-col>
      <b-col>
        <h2 class="text-center">Характеристики:</h2>
        <ul>
          <li v-for="prop in model.props"><b-row><b-col><b>{{prop.key}}: </b></b-col><b-col>{{prop.value}}</b-col></b-row></li>
        </ul>
      </b-col>
    </b-row>
    <b-row>
      {{model.description}}>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'main',
  data() {
    return {
      model: {
        name: 'Маньчжурский орех',
        description: 'Оре́х маньчжу́рский, или Орех думбе́йский, — вид листопадных однодомных\n' +
          '                деревьев или кустарников рода Орех семейства Ореховые.',
        img: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
        props: [
          { 'key': 'Семейство', 'value': 'Ореховые'},
          { 'key': 'Светочувствительность', 'value': 'Светолюбивый'},
          { 'key': 'Максимальная высота', 'value': '10м'},
          { 'key': 'Диаметр кроны', 'value': '4м'},
          { 'key': 'Устойчивость к пресной воде', 'value': 'Устойчивый'},
          { 'key': 'Морозостойкость', 'value': '-35 С'},
          { 'key': 'Область обитания', 'value': '300-450'},
          { 'key': 'Плод', 'value': 'Орех'}
        ]
      }
    }
  }
})
</script>

<style>
</style>
