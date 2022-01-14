<template>
  <div class="home-page-carousel-slide-item">
    <div class="inner">
      <div class="main-content">
        <span class="black-title">Обслуживание 1С:</span>
        <span class="red-title">консультации и обновление</span>
        <span class="c-text">
          Своевременно обновим 1С и проконсультируем по всем вопросам.
        </span>
        <button class="button red-action">Заказать услугу</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageCarouselSlideItem'
}
</script>

<style scoped lang="sass">
.home-page-carousel-slide-item
  width: 100%
  background-color: #dfebf6
  display: flex

  .inner
    $background-1: url("../../img/banner-back-img.png") no-repeat 75% 100%
    $background-2: url("../../img/banner-back-mask.png") no-repeat 75% 100%
    margin: 0 auto
    max-width: 1170px
    width: 100%
    height: 480px
    background: $background-1, $background-2
    background-size: 400px, 490px 100%
    display: flex
    align-items: center

    .main-content
      display: flex
      justify-content: center
      flex-direction: column
      align-items: flex-start

      .red-action
        color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        width: 179px
        height: 35px
        background-color: $mainRed
        border: none
        border-radius: 0

        &:focus,
        &:hover
          box-shadow: 0 8px 15px rgba(200, 54, 54, 0.39) !important

      .c-text
        color: #000000
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 18px
        font-weight: 600
        line-height: 24px
        margin-bottom: 46px
        max-width: 415px

      .red-title
        padding: 0 13px
        border-radius: 14px
        background-color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-weight: 700
        color: #c83636
        font-size: 24px
        text-transform: uppercase
        letter-spacing: 0.1px
        margin-bottom: 30px

      .black-title
        text-transform: uppercase
        color: #000000
        font-family: "Proxima Nova Bl", sans-serif
        font-size: 48px
        font-weight: 900
        letter-spacing: 0.19px

    @media (max-width: 1087px)
      height: 400px
      padding: 0 40px
      background-position: calc(100% - 40px) bottom
      background-size: 320px, 400px 100%
      .main-content

        .c-text
          max-width: 330px

        .black-title
          font-size: 36px

        .red-title
          font-size: 21px
    @media (max-width: 768px)
      height: 350px
      background-position: right bottom
      padding: 0
      position: relative
      &::after
        content: ''
        position: absolute
        width: 100%
        height: 100%
        background-color: #e1ecf6
        opacity: .5
      .main-content
        margin: 0 auto
        z-index: 1
        align-items: center
        text-align: center
        padding: 0 10px
        .c-text
          max-width: 330px

        .black-title
          font-size: 24px

        .red-title
          font-size: 18px

</style>