<template>
  <div class="basket">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Корзина']" />
      <h4>Корзина</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="basket-table">
        <div class="table-header is-hidden-mobile">
          <span class="is-hidden-touch">Изображение</span>
          <span>Название</span>
          <span>Количество</span>
          <span>Цена</span>
          <span>Сумма</span>
        </div>
        <div class="fields">
          <div class="field">
            <div class="img-container is-hidden-touch">
              <img src="../img/basket-img-example.png" />
            </div>
            <div class="name">
              Абоненское обслуживание
            </div>
            <div class="amounter">
              <button class="amount-btn button left">
                <img src="../img/icons/minus.png" />
              </button>
              <input class="input"
                type="text"
                value="1"
                v-model="amounter"
                :class="{'amounter-size-medium': amounter.length > 4, 'amounter-size-large': amounter.length > 8 }"
              />
              <button class="amount-btn button right">
                <img src="../img/icons/plus-green.png" />
              </button>
            </div>
            <div class="price">6 730 ₽</div>
            <div class="summ">6 730 ₽</div>
            <span class="del-btn">
              <span class="is-hidden-touch">Удалить</span>
              <img src="../img/icons/del-red-icon.png" alt="удалить" />
            </span>
          </div>
          <div class="field">
            <div class="img-container is-hidden-touch">
              <img src="../img/basket-img-example.png" />
            </div>
            <div class="name">
              Абоненское обслуживание
            </div>
            <div class="amounter">
              <button class="amount-btn button left">
                <img src="../img/icons/minus.png" />
              </button>
              <span>1</span>
              <button class="amount-btn button right">
                <img src="../img/icons/plus-green.png" />
              </button>
            </div>
            <div class="price">6 730 ₽</div>
            <div class="summ">6 730 ₽</div>
            <span class="del-btn">
              <span class="is-hidden-touch">Удалить</span>
              <img src="../img/icons/del-red-icon.png" alt="удалить" />
            </span>
          </div>
        </div>
        <div class="table-footer">
          <div class="sum-row">
            <div class="order-sum">
              <span class="name">
                Сумма заказа:
              </span>
              <span class="price">6 730 ₽</span>
            </div>
            <div class="order-sum">
              <span class="name">
                К оплате:
              </span>
              <span class="price red">6 730 ₽</span>
            </div>
          </div>
          <button class="button checkout-btn">
            <img src="../img/icons/small-cart-icon.png" alt="cart" />
            <span>Оформить заказ</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'

export default {
  name: 'Basket',
  components: { Breadcrumbs }
}
</script>

<style scoped lang="sass">
.basket
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto
    max-width: 1170px

    .basket-table
      background-color: white
      width: 100%
      padding: 30px
      display: flex
      flex-direction: column
      margin-bottom: 50px

      .table-footer
        display: flex
        flex-direction: column

        .checkout-btn
          width: 190px
          height: 35px
          margin-left: auto
          display: flex
          align-items: center
          padding: 0 20px
          @include button-focus-none
          color: #ffffff
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700
          background-color: $mainRed

          img
            margin-right: 10px

        .sum-row
          display: flex
          margin-left: auto
          align-items: center
          padding: 20px
          min-height: 50px
          width: 60%
          justify-content: space-between

          .order-sum
            display: flex
            align-items: flex-end

            .price
              color: #000000
              font-family: "Proxima Nova Rg", sans-serif
              font-size: 16px
              font-weight: 700
              line-height: 16px

              &.red
                color: #c83636
                font-size: 24px
                font-weight: 700
                line-height: 18px

            .name
              color: #666666
              font-family: "Proxima Nova Rg", sans-serif
              font-size: 15px
              line-height: 15px
              font-weight: 700
              margin-right: 18px

      .fields
        display: flex
        flex-direction: column

        .field
          display: flex
          align-items: center
          min-height: 64px
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700
          padding: 7px 18px
          border-bottom: 1px solid #dcd9d9
          margin-bottom: 0

          .img-container
            width: 14%

          .name
            width: 27%
            margin-right: 2%

          .amounter
            width: 13%
            display: flex
            align-items: center

            input
              @include button-focus-none
              color: #000000
              font-family: "Proxima Nova Rg", sans-serif
              font-size: 15px
              font-weight: 400
              background-color: #f7f7f7
              min-width: 30px
              text-align: center
              height: 37px
              width: 30px
              padding: 7px 0
              box-shadow: none

              &.amounter-size-medium
                width: 60px

              &.amounter-size-large
                width: 90px

            .amount-btn
              @include button-focus-none
              background-color: #f7f7f7
              height: 37px
              width: 35px


              &.right
                border-radius: 0 18px 18px 0

              &.left
                border-radius: 18px 0 0 18px

          .price
            width: 20%

          .summ
            margin-right: auto

          .del-btn
            cursor: pointer
            color: #666666
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700
            text-decoration: underline
            display: flex
            align-items: center

            span
              margin-right: 4px

      .table-header
        display: flex
        align-items: center
        padding: 0 18px
        height: 38px
        background-color: #f7f7f7

        span
          color: #565656
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700

          &:first-child
            width: 14%

          &:nth-child(2)
            width: 29%

          &:nth-child(3)
            width: 13%

          &:nth-child(4)
            width: 20%

          &:nth-child(5)
            margin-right: auto

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

      .basket-table
        .table-footer
          .sum-row
            width: 70%

        .fields
          .field
            .img-container
              width: 0

            .name
              width: 40%
              margin-right: 3%

            .amounter
              width: 22%

            .price
              width: 16%

            .summ
              margin-right: auto

        .table-header
          span
            &:first-child
              width: 0

            &:nth-child(2)
              width: 43%

            &:nth-child(3)
              width: 22%

            &:nth-child(4)
              width: 16%

            &:nth-child(5)
              margin-right: auto

      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
    @media (max-width: 768px)
      padding: 0 10px
      > h4
        font-size: 24px
      .basket-table
        padding: 0

        .table-footer
          padding-bottom: 20px

          .checkout-btn
            margin-right: 20px

          .sum-row
            width: auto
            flex-direction: column
            align-items: flex-end

            .order-sum
              &:first-child
                margin-bottom: 15px

              .price
                width: 100px
                text-align: right

        .fields
          .field
            padding: 22px
            position: relative
            flex-wrap: wrap
            justify-content: space-between

            > *
              order: 3

            .name
              word-wrap: break-word
              order: 1
              width: 90%
              margin-bottom: 15px

            .del-btn
              order: 1
              width: 5%
              margin-left: auto
              margin-bottom: 15px

            .amounter
              width: auto

            .price
              order: 2
              width: auto

            .summ
              width: auto
              margin-right: 0
</style>