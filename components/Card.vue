<template>
  <div class="card">
    <div class="position-relative">
      <b-row align-content="end"
             style="position: absolute; width: 80%; margin: auto; justify-content: flex-end; bottom: 0px;
                    bottom: 12px;
                    right: 12px;"
      >
        <b-col md="2" cols="2">
          <b-button size="sm" pill variant="primary">
            <b-icon icon="star-fill"></b-icon>
          </b-button>
        </b-col>
      </b-row>
      <img :src="model.img" class="card-img-top" :alt="model.name">
    </div>
    <div class="card-body">
      <NuxtLink :to="'/detail/:id' + model.id">
        <h5 class="card-title">{{model.name}}</h5>
      </NuxtLink>
      <p class="card-text">{{model.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
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
