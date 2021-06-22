<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Tree Helper</a>
        <form class="form-inline my-2 my-lg-0" style="width: 100%">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style="width: 90%;">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Найти</button>
        </form>
      </div>
    </nav>
    <row>
      <div>
        <b-nav tabs>
          <b-nav-item v-for="link in linksRoute" :active="$route.path == link.url"><NuxtLink :to="link.url">{{link.name}}</NuxtLink></b-nav-item>
        </b-nav>
      </div>
    </row>
    <search-panel></search-panel>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      linksRoute: [
        { url: '/', name: 'Главная' },
        { url: '/search', name: 'Библиотека' },
        { url: '/about', name: 'О сайте' },
      ]
    }
  }
}
</script>

<style scoped>

</style>
