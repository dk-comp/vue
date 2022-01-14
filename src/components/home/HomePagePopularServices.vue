<template>
  <div class="home-page-popular-services">
    <div class="inner">
      <div class="first-row">
        <div class="services-carousel">
          <carousel
            :per-page="perPage"
            :paginationEnabled="false"
            :scrollPerPage="false"
          >
            <slide>
              <div class="service-item"
                :style="{'background-image': 'url(' + require('../../img/service-card-background-1.png') + ')' }"
              >
                <a href="#">
                  <span>Абонентское обслуживание<img src="../../img/icons/angle-in-red-circle.png" /></span>
                </a>
                <p>Настройка, поддержка и другие услуги по обслуживанию клиентов</p>
              </div>
            </slide>
            <slide>
              <div class="service-item"
                :style="{'background-image': 'url(' + require('../../img/service-card-background-2.png') + ')' }"
              >
                <a href="#">
                  <span>Переход с 1С 8.2 на 1С 8.3<img src="../../img/icons/angle-in-red-circle.png" /></span>
                </a>
                <p>Обновление 1С с версии 8.2 до версии 8.3</p>
              </div>
            </slide>
            <slide>
              <div class="service-item"
                :style="{'background-image': 'url(' + require('../../img/service-card-background-1.png') + ')' }"
              >
                <a href="#">
                  <span>Абонентское обслуживание<img src="../../img/icons/angle-in-red-circle.png" /></span>
                </a>
                <p>Настройка, поддержка и другие услуги по обслуживанию клиентов</p>
              </div>
            </slide>
            <slide>
              <div class="service-item"
                :style="{'background-image': 'url(' + require('../../img/service-card-background-2.png') + ')' }"
              >
                <a href="#">
                  <span>Переход с 1С 8.2 на 1С 8.3<img src="../../img/icons/angle-in-red-circle.png" /></span>
                </a>
                <p>Обновление 1С с версии 8.2 до версии 8.3</p>
              </div>
            </slide>
            <slide>
              <div class="service-item"
                :style="{'background-image': 'url(' + require('../../img/service-card-background-1.png') + ')' }"
              >
                <a href="#">
                  <span>Абонентское обслуживание<img src="../../img/icons/angle-in-red-circle.png" /></span>
                </a>
                <p>Настройка, поддержка и другие услуги по обслуживанию клиентов</p>
              </div>
            </slide>
            <slide>
              <div class="service-item"
                :style="{'background-image': 'url(' + require('../../img/service-card-background-2.png') + ')' }"
              >
                <a href="#">
                  <span>Переход с 1С 8.2 на 1С 8.3<img src="../../img/icons/angle-in-red-circle.png" /></span>
                </a>
                <p>Обновление 1С с версии 8.2 до версии 8.3</p>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="about-row">
          <div class="a-title">
            <h4>Популярные услуги</h4>
            <div class="under-header-line">
              <img class="is-hidden-mobile is-hidden-desktop" src="../../img/icons/under-header-line-left.png">
              <img class="is-hidden-tablet" src="../../img/icons/under-header-line.png">
              <img class="is-hidden-touch" src="../../img/icons/under-header-line-right.png">
            </div>
          </div>
          <p>
            Несколько строк описания раздела с услугами. Например: «Наши самые популярые услуги, которые люди заказывают
            чаще всего»
          </p>
          <div class="carousel-action-buttons">
            <button class="button"
              disabled
            >
              <img src="../../img/icons/left-arrow_icon.png">
            </button>
            <button class="button">
              <img src="../../img/icons/right-arrow_icon.png">
            </button>
          </div>
        </div>
      </div>
      <div class="second-row">
        <a href="#">
          <span>Все услуги</span>
          <img src="../../img/icons/angle-in-red-circle.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'HomePagePopularServices',
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    windowWidth: 0,
    perPage: 2
  }),
  watch: {
    windowWidth (newWidth, oldWidth) {
      if (newWidth < 500) {
        this.perPage = 1
      } else {
        this.perPage = 2
      }
    }
  },

  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
    this.windowWidth = window.innerWidth
  },
}
</script>

<style scoped lang="sass">
.home-page-popular-services
  width: 100%
  display: flex
  background-color: #ffffff

  .inner
    margin: 0 auto
    max-width: 1170px
    padding: 70px 0
    width: 100%

    .second-row
      display: flex
      justify-content: flex-end
      align-items: center

      a
        cursor: pointer
        display: flex
        align-items: center
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        text-decoration: underline

        span
          margin-right: 10px

    .first-row
      display: flex
      width: 100%
      margin-bottom: 30px

      .about-row
        width: 350px
        margin-left: auto
        display: flex
        justify-content: center
        position: relative
        flex-direction: column
        text-align: right

        .a-title
          display: flex
          flex-direction: column
          margin-bottom: 30px

          h4
            color: #000000
            font-family: "Proxima Nova - Extra Bold", sans-serif
            font-size: 36px
            line-height: 36px
            font-weight: 400
            margin-bottom: 5px

        p
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 15px
          font-weight: 400


        .carousel-action-buttons
          position: absolute
          top: 0
          right: 0
          display: flex

          .button
            @include button-focus-none
            background-color: transparent

            &:first-child
              margin-right: 10px

      .services-carousel
        width: 800px
        position: relative

        &::after
          content: ''
          position: absolute
          width: 30px
          height: 101%
          right: -1px
          top: -1px
          z-index: 1
          background-color: white

        .service-item
          min-width: 250px
          margin-right: 30px
          padding: 28px
          background-color: #dfebf6
          display: flex
          flex-direction: column
          height: 470px
          background-repeat: no-repeat
          background-position: bottom left
          background-size: contain

          &:hover
            box-shadow: inset 2px 2px 0px 0px $mainRed, inset -2px -2px 0px 0px $mainRed

          p
            color: #000000
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 16px
            font-weight: 400

          a
            color: #000000
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 30px
            font-weight: 700
            line-height: 30px
            margin-bottom: 24px

            span
              img
                margin-left: 10px

    @media (max-width: 1087px)
      max-width: 100%
      padding: 50px 40px 40px

      .first-row
        flex-direction: column-reverse

        .services-carousel
          width: calc(100% + 30px)

        .about-row
          width: 100%
          margin-left: 0
          text-align: left
          margin-bottom: 30px
    @media (max-width: 768px)
      padding: 30px 14px

      .first-row
        position: relative

        .services-carousel
          width: calc(100% + 10px)

          &::after
            width: 10px

          .service-item
            margin-right: 10px

        .about-row
          position: static

          .carousel-action-buttons
            width: 100%
            justify-content: space-between
            top: auto
            bottom: 185px

          .a-title
            align-items: center

            h4
              line-height: 15px
              font-size: 24px
              text-align: center
</style>