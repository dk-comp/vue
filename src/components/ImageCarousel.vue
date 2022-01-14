<template>
  <div class="image-carousel">
    <div class="main-img">
      <button class="arrow right">
        <img src="../img/icons/right-arrow_icon.png">
      </button>
      <button class="arrow left">
        <img src="../img/icons/left-arrow_icon.png">
      </button>
      <carousel
        :per-page="1"
        :pagination-active-color="'#f54a4a'"
        :pagination-color="'#000000'"
        :pagination-size="9"
      >
        <slide>
          <div class="img-container">
            <img src="../img/project-carousel-img.png" />
          </div>
        </slide>
        <slide>
          <div class="img-container">
            <img src="../img/project-carousel-img.png" />
          </div>
        </slide>
      </carousel>
    </div>
    <div class="img-previews is-hidden-mobile">
      <button class="arrow up">
        <img src="../img/icons/arrow-up.png">
      </button>
      <button class="arrow down">
        <img src="../img/icons/arrow-down.png">
      </button>
      <div class="images">
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
        <div class="img-container">
          <img src="../img/avatar-item.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'ImageCarousel',
  components: {
    Carousel,
    Slide,
  },
}
</script>

<style scoped lang="sass">
.image-carousel
  display: flex
  height: 480px
  margin-bottom: 50px

  .img-previews
    min-width: 113px
    width: 113px
    height: 100%
    display: flex
    flex-direction: column
    overflow: hidden
    position: relative

    .arrow
      background-color: transparent
      @include button-focus-none

      position: absolute
      width: 100%
      height: 30px
      @include flex-center
      left: 0
      cursor: pointer

      &.down
        background-image: linear-gradient(to bottom, rgba(247, 247, 247, 0.5), rgba(247, 247, 247, 1))
        bottom: 0

      &.up
        top: 0
        background-image: linear-gradient(to bottom, rgba(247, 247, 247, 1), rgba(247, 247, 247, 0.5))

        img
          transform: rotate(180deg)


    .images
      display: flex
      flex-direction: column
      width: 100%

      .img-container
        width: 100%
        height: 100px
        min-width: 100%
        min-height: 100px
        background-color: white
        cursor: pointer
        @include flex-center

        &:not(:last-child)
          margin-bottom: 10px

        img
          max-height: 100%

  .main-img
    height: 100%
    background-color: white
    margin-right: 50px
    flex-grow: 1
    position: relative

    .img-container
      width: 100%
      height: 100%
      max-width: 100%
      max-height: 100%
      padding: 30px
      @include flex-center

      img
        max-height: 100%

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

  @media (max-width: 768px)
    height: 260px
    > *
      max-height: 100%
    .main-img
      margin-right: 0

      .img-container
        height: 260px
        padding: 8px

</style>