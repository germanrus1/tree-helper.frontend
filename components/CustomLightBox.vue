<template>
  <div>
    <b-carousel
      id="lightbox"
      ref="lightBox"
      v-model="slide"
      :interval="9999999"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :caption="image.caption ? image.caption : ''"
        :img-src="image.src"
      ></b-carousel-slide>
    </b-carousel>
    <ol class="carousel-indicators-img">
      <li
        v-for="(image, index) in images"
        :key="index"
        :data-slide-to="index"
        :class="slide == index ? 'active' : ''"
        v-on:click="setSlide(index)"
      >
        <img class="d-block w-100 img-fluid" :src="image.thumb ? image.thumb : image.src">
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'LightBox',
  props: {
    images: Array
  },
  data () {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    setSlide (index) {
      this.$refs.lightBox.setSlide(index)
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
.carousel-indicators-img {
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
}
.carousel-indicators-img li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 60px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity 0.6s ease;
}
.carousel-indicators-img .active {
  opacity: 1;
}
</style>
