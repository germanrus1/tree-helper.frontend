import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import LightBox from 'vue-image-lightbox'
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
require('vue-image-lightbox/dist/vue-image-lightbox.min')

Vue.use(VueLazyLoad)
Vue.component('light-box', LightBox)
