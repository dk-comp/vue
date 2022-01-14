<template>
  <div class="home-page-carousel">
    <button class="arrow right is-hidden-touch">
      <img src="../../img/icons/right-arrow_icon.png">
    </button>
    <button class="arrow left is-hidden-touch">
      <img src="../../img/icons/left-arrow_icon.png">
    </button>
    <carousel
      :per-page="1"
      :pagination-active-color="'#f54a4a'"
      :pagination-color="'#000000'"
      :pagination-size="9"
    >
      <slide>
        <home-page-carousel-slide-item />
      </slide>
      <slide>
        <home-page-carousel-slide-item />
      </slide>
    </carousel>
  </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel'
import HomePageCarouselSlideItem from './HomePageCarouselSlideItem'

export default {
  name: 'HomePageCarousel',
  components: {
    HomePageCarouselSlideItem,
    Carousel,
    Slide,
  },
}
</script>

<style scoped lang="sass">
.home-page-carousel
  width: 100%
  position: relative

  .arrow
    position: absolute
    background-color: transparent
    @include button-focus-none
    @include block-vertical-centering
    cursor: pointer
    z-index: 2

    &.left
      left: 40px

    &.right
      right: 40px


</style>