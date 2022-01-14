<template>
  <div class="price-list">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Прайс-лист']" />
      <h4>Прайс-лист</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="price-list-table">
        <div class="table-header is-hidden-mobile">
          <span>Наименование</span>
          <span>Стоимость</span>
          <span>Включено</span>
          <div><span class="is-hidden-touch">В корзину</span></div>
        </div>
        <div class="fields">
          <h6>ОБСЛУЖИВАНИЕ 1С</h6>
          <div class="field">
            <a class="name" href="#">
              Технические параметры необходмые для установки 1С
            </a>
            <div class="price">6 730 ₽</div>
            <div class="services">
              <span class="installation" title="Установка"></span>
              <span class="shipped" title="Доставка"></span>
              <span class="support" title="Техподдержка"></span>
            </div>
            <a class="to-cart" href="#"><span class="is-hidden-touch">Добавить</span></a>
          </div>
          <div class="field">
            <a class="name" href="#">
              Технические параметры необходмые для установки 1С
            </a>
            <div class="price">6 730 ₽</div>
            <div class="services">
              <span class="installation" title="Установка"></span>
              <span class="shipped" title="Доставка"></span>
              <span class="support" title="Техподдержка"></span>
            </div>
            <a class="to-cart" href="#"><span class="is-hidden-touch">Добавить</span></a>
          </div>
          <div class="field">
            <a class="name" href="#">
              Технические параметры необходмые для установки 1С
            </a>
            <div class="price">6 730 ₽</div>
            <div class="services">
              <span class="installation" title="Установка"></span>
              <span class="shipped" title="Доставка"></span>
              <span class="support" title="Техподдержка"></span>
            </div>
            <a class="to-cart" href="#"><span class="is-hidden-touch">Добавить</span></a>
          </div>
          <div class="field">
            <a class="name" href="#">
              Технические параметры необходмые для установки 1С
            </a>
            <div class="price">6 730 ₽</div>
            <div class="services">
              <span class="installation" title="Установка"></span>
              <span class="shipped" title="Доставка"></span>
              <span class="support" title="Техподдержка"></span>
            </div>
            <a class="to-cart" href="#"><span class="is-hidden-touch">Добавить</span></a>
          </div>
          <div class="field">
            <a class="name" href="#">
              Технические параметры необходмые для установки 1С
            </a>
            <div class="price">6 730 ₽</div>
            <div class="services">
              <span class="installation" title="Установка"></span>
              <span class="shipped" title="Доставка"></span>
              <span class="support" title="Техподдержка"></span>
            </div>
            <a class="to-cart" href="#"><span class="is-hidden-touch">Добавить</span></a>
          </div>
          <div class="field">
            <a class="name" href="#">
              Технические параметры необходмые для установки 1С
            </a>
            <div class="price">6 730 ₽</div>
            <div class="services">
              <span class="installation" title="Установка"></span>
              <span class="shipped" title="Доставка"></span>
              <span class="support" title="Техподдержка"></span>
            </div>
            <a class="to-cart" href="#"><span class="is-hidden-touch">Добавить</span></a>
          </div>
          <h6>РАЗДЕЛ 1С:ПРЕДПРИЯТИЕ 8</h6>
          <div class="field">
            <a class="name" href="#">
              Технические параметры необходмые для установки 1С
            </a>
            <div class="price">6 730 ₽</div>
            <div class="services">
              <span class="installation" title="Установка"></span>
              <span class="shipped" title="Доставка"></span>
              <span class="support" title="Техподдержка"></span>
            </div>
            <a class="to-cart" href="#"><span class="is-hidden-touch">Добавить</span></a>
          </div>
          <div class="field">
            <a class="name" href="#">
              Технические параметры необходмые для установки 1С
            </a>
            <div class="price">6 730 ₽</div>
            <div class="services">
              <span class="installation" title="Установка"></span>
              <span class="shipped" title="Доставка"></span>
              <span class="support" title="Техподдержка"></span>
            </div>
            <a class="to-cart" href="#"><span class="is-hidden-touch">Добавить</span></a>
          </div>
          <div class="field">
            <a class="name" href="#">
              Технические параметры необходмые для установки 1С
            </a>
            <div class="price">6 730 ₽</div>
            <div class="services">
              <span class="installation" title="Установка"></span>
              <span class="shipped" title="Доставка"></span>
              <span class="support" title="Техподдержка"></span>
            </div>
            <a class="to-cart" href="#"><span class="is-hidden-touch">Добавить</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'

export default {
  name: 'PriceList',
  components: { Breadcrumbs }
}
</script>

<style scoped lang="sass">
.price-list
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto
    max-width: 1170px

    .price-list-table
      background-color: white
      width: 100%
      padding: 30px
      display: flex
      flex-direction: column
      margin-bottom: 50px

      .fields
        display: flex
        flex-direction: column

        h6
          color: #c83636
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 17px
          font-weight: 700
          padding: 0 18px
          min-height: 60px
          display: flex
          align-items: center
          margin-bottom: 0
          border-top: 1px solid white
          border-bottom: 1px solid white

          &:nth-child(even)
            background-color: #f7f7f7
            border-top: 1px solid #dcd9d9
            border-bottom: 1px solid #dcd9d9

        .field
          margin-bottom: 0
          display: flex
          align-items: center
          min-height: 60px
          padding: 0 18px
          border-top: 1px solid white
          border-bottom: 1px solid white
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700

          .name
            color: #1b65c0
            width: 70%
            margin-right: 3%

          .price
            width: 13%
            margin-right: 2%

          .services
            width: 18%
            margin-right: 3%
            display: flex
            align-items: center

            > *
              &:not(:last-child)
                margin-right: 10px

            .support
              width: 23px
              height: 23px
              background-image: url("../img/icons/login-icon.png")
              background-repeat: no-repeat
              background-size: contain

            .shipped
              background-image: url("../img/icons/shipped-icon.png")
              background-repeat: no-repeat
              background-size: contain
              width: 31px
              height: 21px


            .installation
              background-image: url("../img/icons/computer-icon.png")
              background-repeat: no-repeat
              background-size: contain
              width: 22px
              height: 23px


          .to-cart
            width: 14%
            margin-left: auto
            color: #666666
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700
            text-decoration: underline
            display: flex

            span
              margin-right: 7px

            &::after
              content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAACQElEQVQ4T7WUMWgUQRiF39s9ghaKhYKiUYKCFikuJPPvXMAyYHeFRCwCFkZRSSCiWKSwSCOiqIWIoki0MnpgIAQsVZDbmSUkIFYiGImFhYHYaHF3v2xM4Dj2ksuBUy077//+x9vHMo6iMajeRd0h8CXy/kj9u3ae+b6nZ8+2XG7/+rCSBxSYAdlpnVtqB7o+w6zhWOQHgNeqGv8P+CyA4wCW24TvBLA907kTGVFgxHp/rB14LPIQqvsy4UlfX3c1CD6C3GudSyNq+ShAZ8wSyeuZ8FWByE+Q561zpZbJALwxpkY6kNnOU1gsMg3VJZskI1uBx1E0AdUB630h0/kq/F//h6333VuCiyyAnLLO3dgI3gvVpBaGu/vL5ZZa86G//1BYqXwNVLslST41hb8cHAwPLi4uEzgTeT/divuyyCiBMev94VTfFL6W+xsAvQC+twIH0AnV5zZJLm8KdyLjClwAeadFeCqbtc593hReNuYcyUdQfYcgKEXOPSCgjYvS6sbGjJIsKrCCILhZiGPXNBZvTL5GegCpaF6BsyAnlXzVCGetdhrAEFQfg+wicKIahqZ5W4y5jyA4ap0bWM3fmEsg019zR0ZEFQUuFrx/kt45kbequtAcLvKMQBh5P7TW+5NQnbTe72iExyK/VfVUIUlm1rQvAPzaqOdFqJZU9UpAflPgFgG3vqx+gROZUiAP8hqALqjeJlDcuIpRdBWq4wBSt9O5anW4b25updH5fD6/609Hx9MUiPSDkhPWuXt/AWhb4Q+uIpU0AAAAAElFTkSuQmCC")
              width: 23px
              height: 19px


          &:nth-child(even)
            background-color: #f7f7f7
            border-top: 1px solid #dcd9d9
            border-bottom: 1px solid #dcd9d9

      .table-header
        display: flex
        align-items: center
        padding: 0 18px
        height: 38px
        background-color: #dddddd

        span,
        div
          color: #565656
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700
          white-space: nowrap

          &:first-child
            width: 70%
            margin-right: 3%

          &:nth-child(2)
            width: 13%
            margin-right: 2%

          &:nth-child(3)
            width: 18%
            margin-right: 3%

          &:nth-child(4)
            width: 14%
            margin-left: auto

    > .under-header-line
      margin-bottom: 30px

    > h4
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 36px
      margin-bottom: 0
      font-weight: 400
      line-height: 27px

    @media (max-width: 1087px)
      max-width: 100%
      padding: 0 40px
      .price-list-table
        margin-bottom: 40px
        .fields
          .field

            .name
              color: #1b65c0
              width: 55%
              margin-right: 2%

            .price
              width: 15%
              margin-right: 2%

            .services
              width: 25%
              margin-right: 0
              display: flex

            .to-cart
              width: 5%

              a
                margin-right: 0
                width: 24px

        .table-header
          span,
          div
            &:first-child
              width: 55%
              margin-right: 2%

            &:nth-child(2)
              width: 15%
              margin-right: 2%

            &:nth-child(3)
              width: 25%
              margin-right: 0

            &:nth-child(4)
              width: 5%
              margin-left: auto

      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
    @media (max-width: 768px)
      padding: 0 14px
      > h4
        font-size: 24px
      .price-list-table
        padding: 0
        margin-bottom: 20px

        .fields
          .field
            padding: 14px 18px
            flex-wrap: wrap
            justify-content: space-between

            .name
              margin-bottom: 10px
              min-width: 100%
            .to-cart
              margin-left: 0
            .price,
            .services,
            .to-cart
              width: auto

</style>