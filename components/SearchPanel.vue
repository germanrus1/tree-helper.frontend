<template>
  <div>
    <div class="row">
      <b-col sm="12" xl="2" md="3">
        <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
      </b-col>
      <b-col sm="12" xl="2" md="3">
        <b-form-select v-model="selected1" :options="options1" size="sm" class="mt-3"></b-form-select>
      </b-col>
      <b-col sm="12" xl="2" md="3">
        <b-form-select v-model="selected2" :options="options2" size="sm" class="mt-3"></b-form-select>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      selected1: null,
      selected2: null,
      options: [
        { value: null, text: 'Плод' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'c', text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled' }
      ],
      options1: [
        { value: null, text: 'Тип растения' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'c', text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled' }
      ],
      options2: [
        { value: null, text: 'Семейство' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: 'c', text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled' }
      ]
    }
  }
}
</script>

<style>
</style>
