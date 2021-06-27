<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <b-col xl="4" sm="12" md=6 class="mb-3 mt-3" v-for="item in [1,2,3,4,5,6,7,8,9,10]">
          <div class="card">
            <div>
              <div class="input-group" style="
                  position: absolute;
                  bottom: 178px;
                  right: 5px;
                  width: 86%;
                  opacity: 0.95;"
              >
                <b-button size="sm" variant="primary">
                  <b-icon icon="star-fill"></b-icon>
                </b-button>
                <input type="text" class="form-control" placeholder="Добавить в избранное"
                       aria-label="Input group example" aria-describedby="basic-addon1">
              </div>
              <img v-bind:src="model.img" class="card-img-top" v-bind:alt="model.name">
            </div>
            <div class="card-body">
              <NuxtLink :to="'/detail/:id' + model.id">
                <h5 class="card-title">{{model.name}}</h5>
              </NuxtLink>
              <p class="card-text">{{model.description}}</p>
            </div>
          </div>
        </b-col>
      </div>
    </div>
    <div class="main-footer"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
})
</script>

<style>
</style>
