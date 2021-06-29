<template>
  <div class="container">
    <b-row class="mb-4">
      <b-col xl="6" sm="12">
        <light-box
          :media="model.images"
          :showLightBox="false"
          :showThumbs="true"
          ref="lightbox"
        ></light-box>
        <img
          :src="model.images[0].src"
          style="width: 100%" :key="0"
          v-lazy="model.images[0].src"
          @click="openGallery(0)"
        >
        Слайдер
      </b-col>
      <b-col xl="6" sm="12">
        <h2 class="text-center">Характеристики:</h2>
<!--        <ul>-->
<!--          <li v-for="prop in model.props"><b-row><b-col><b>{{prop.key}}: </b></b-col><b-col>{{prop.value}}</b-col></b-row></li>-->
<!--        </ul>-->
        <b-table
          :striped="true"
          :outlined="true"
          :small="true"
          :head="false"
          :hover="hover"
          :items="model.props"
          thead-class="d-none"
        ></b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col>{{model.description}}></b-col>
    </b-row>
  </div>
</template>

<script lang="ts">

export default {
  layout: 'main',
  data() {
    return {
      model: {
        name: 'Маньчжурский орех',
        description: 'Оре́х маньчжу́рский, или Орех думбе́йский, — вид листопадных однодомных' +
          ' деревьев или кустарников рода Орех семейства Ореховые.',
        img: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
        fields: ['key', 'value'],
        props: [
          { 'key': 'Семейство', 'value': 'Ореховые'},
          { 'key': 'Светочувствительность', 'value': 'Светолюбивый'},
          { 'key': 'Максимальная высота', 'value': '10м'},
          { 'key': 'Диаметр кроны', 'value': '4м'},
          { 'key': 'Устойчивость к пресной воде', 'value': 'Устойчивый'},
          { 'key': 'Морозостойкость', 'value': '-35 С'},
          { 'key': 'Область обитания', 'value': '300-450'},
          { 'key': 'Плод', 'value': 'Орех'}
        ],
        images: [
          { // For image
            thumb: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?15337379866498',
            src: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?15337379866498',
            caption: 'caption to display. receive <html> <b>tag</b>', // Optional
            // srcset: '...' // Optional for displaying responsive images
          },
          { // For image
            thumb: 'https://bigenc.ru/media/2016/10/27/1235217371/19831.jpg',
            src: 'https://bigenc.ru/media/2016/10/27/1235217371/19831.jpg',
            caption: 'caption to display. receive <html> <b>tag</b>', // Optional
            // srcset: '...' // Optional for displaying responsive images
          }
        ]
      }
    }
  },

  methods: {
    openGallery (index = 0) {
      return index
      // todo - показывает ошибку! Пофиксить.
      // (this.$refs.lightbox as Vue).showImage(index)
    }
  }
}
</script>

<style>
</style>
