<template>
  <div class="home-page-our-customers">
    <div class="inner">
      <h4>Наши клиенты</h4>
      <div class="under-header-line">
        <img src="../../img/icons/under-header-line.png">
      </div>
      <div class="brands"
        :class="{'show-all-parts': mobileFoldable}"
      >
        <div class="b-item">
          <img src="../../img/brands/cola.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/nbc.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/fedex.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/gelios.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/nestle.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/adidas.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/lexus.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/allianz.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/cola.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/nbc.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/fedex.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/gelios.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/nestle.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/adidas.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/lexus.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/allianz.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/cola.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/nbc.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/fedex.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/gelios.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/nestle.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/adidas.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/lexus.png">
        </div>
        <div class="b-item">
          <img src="../../img/brands/allianz.png">
        </div>
      </div>
      <button class="button show-all is-hidden-tablet"
        @click="mobileFoldable = !mobileFoldable"
      >
        <span>{{ mobileFoldable ? 'Скрыть': 'Показать всех' }}</span>
        <img src="../../img/icons/angle-in-gray-circle.png"
          :class="{ 'close': mobileFoldable }"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageOurCustomers',
  data: () => ({
    mobileFoldable: false
  }),
}
</script>

<style scoped lang="sass">
.home-page-our-customers
  width: 100%
  display: flex
  background-color: #f7f7f7

  .inner
    margin: 0 auto
    max-width: 1170px
    padding: 50px 0
    width: 100%

    .brands
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      width: 100%

      .b-item
        height: 90px
        margin-bottom: 30px
        width: 170px
        background-color: white
        @include flex-center
        border: 2px solid white

        &:hover
          border: 2px solid $mainRed

    .under-header-line
      display: flex
      justify-content: center
      margin-bottom: 30px

    p
      color: #000000
      font-family: "Proxima Nova - Semi Bold", sans-serif
      font-size: 16px
      font-weight: 400

      &:not(:last-child)
        margin-bottom: 20px

      .has-text-weight-bold
        font-family: "Proxima Nova Extra Bold", sans-serif

    h4
      color: #000000
      font-family: "Proxima Nova Extra Bold", sans-serif
      font-size: 36px
      font-weight: 800
      margin-bottom: 5px
      text-align: center

    @media (max-width: 1087px)
      padding: 40px
      .brands
        .b-item
          width: 150px
    @media (max-width: 768px)
      padding: 30px 12px 70px
      position: relative
      h4
        font-size: 24px
      .brands
        overflow: hidden
        max-height: calc(90px * 3 + 10px)
        transition: max-height .3s ease

        .b-item
          margin: 0 10px 5px
          width: 140px

        &.show-all-parts
          max-height: 1000px
      .show-all
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 15px
        font-weight: 400
        line-height: 24px
        text-decoration: underline
        background-color: #f7f7f7
        @include button-focus-none
        bottom: 25px
        position: absolute
        @include block-horizontal-centering

        span
          margin-right: 9px

        img
          transition: all .3s ease
          transform: rotate(0deg)

          &.close
            transform: rotate(180deg)

        &:hover,
        &:focus
          color: black !important
</style>