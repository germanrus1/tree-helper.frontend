<template>
  <div class="container">
    <b-row class="mb-4">
      <b-col xl="6" sm="12">
        <div>
          <light-box
            :media="model.images"
            :showLightBox="false"
            :showThumbs="true"
            ref="lightbox"
          ></light-box>
          <custom-light-box :images="model.images"></custom-light-box>
        </div>
        <div class="button-favorite-content">
          <b-button :variant="buttonFavoriteStatus ? 'primary' : 'secondary'" v-on:click="toggleButtonFavoriteStatus()">
            В избранное
            <b-badge variant="light">9 <span class="sr-only"></span></b-badge>
          </b-button>
        </div>
      </b-col>
      <b-col xl="6" sm="12">
        <h2 class="text-center">Характеристики:</h2>
        <b-table
          :striped="true"
          :outlined="true"
          :small="true"
          :head="false"
          hover
          :items="model.props"
          thead-class="d-none"
        ></b-table>
      </b-col>
    </b-row>
    <hr class="mt-5 mb-3">
    <b-card v-for="(description, index) in model.descriptions" :title="description.title" :key="index">
      <b-card-text>
        {{description.value}}>
      </b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts">

export default {
  layout: 'main',
  data() {
    return {
      model: {
        name: 'Маньчжурский орех',
        descriptions: {
          description_main: {
            value: 'Оре́х маньчжу́рский, или Орех думбе́йский, — вид листопадных однодомных' +
              ' деревьев или кустарников рода Орех семейства Ореховые.',
            title: 'Описание'
          },
          description_fruit: {
            value: 'Маньчжурский орех',
            title: 'Плод'
          },
          description_keeping: {
            value: 'Маньчжурский орех',
            title: 'Хранение плода'
          },
          description_history: {
            value: 'Маньчжурский орех',
            title: 'Происхождение'
          }
        },
        images: [
          {
            src: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            thumb: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            caption: 'Маньчжурский орех'
          }, {
            src: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            thumb: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            caption: 'Плод'
          }, {
            src: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            thumb: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            caption: 'Саженец'
          }, {
            src: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            thumb: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            caption: 'Листья'
          }, {
            src: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            thumb: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            caption: 'Семена'
          }, {
            src: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            thumb: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            caption: 'Взрослое дерево'
          }, {
            src: 'https://opt-1088093.ssl.1c-bitrix-cdn.ru/upload/iblock/90a/90ac426482b2c0af95162ebac255fe2a.jpg?153373798664980',
            thumb: '',
            caption: 'Дополнительно'
          }
        ],
        fields: ['key', 'value'],
        props: [
          { 'key': 'Семейство', 'value': 'Ореховые'},
          { 'key': 'Светочувствительность', 'value': 'Светолюбивый'},
          { 'key': 'Максимальная высота', 'value': '10м'},
          { 'key': 'Диаметр кроны', 'value': '4м'},
          { 'key': 'Устойчивость к пресной воде', 'value': 'Устойчивый'},
          { 'key': 'Предельная температура', 'value': 'от -35 С до 40 C'},
          { 'key': 'Область обитания', 'value': '300-450'},
          { 'key': 'Плод', 'value': 'Орех'}
        ]
      },
      buttonFavoriteStatus: false
    }
  },

  methods: {
    openGallery (index = 0) {
      return index
      // todo - показывает ошибку! Пофиксить.
      // (this.$refs.lightbox as Vue).showImage(index)
    },
    toggleButtonFavoriteStatus () {
      if (this.buttonFavoriteStatus == true) {
        if (confirm('Вы уверены, что хотите удалить из избранного?')) {
          this.buttonFavoriteStatus = !this.buttonFavoriteStatus
        }
      } else {
        this.buttonFavoriteStatus = !this.buttonFavoriteStatus
      }
    },
    confirmCancelFavorite () {

    }
  }
}
</script>

<style>
  .container_thumb {
    display: flex;
  }
  .img_thumb {
    width: 90px;
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }
  .button-favorite-content {
    display: flex;
    justify-content: flex-end;
  }
</style>
