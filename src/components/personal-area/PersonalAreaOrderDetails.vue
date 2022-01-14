<template>
  <div class="personal-area-order-details">
    <div class="orders-table">
      <h6>Заказ №23459</h6>

      <div class="table-header is-hidden-mobile">
        <span>№</span>
        <span>Название</span>
        <span>Цена</span>
        <span>Количество</span>

        <span>Сумма</span>
      </div>
      <div class="fields">
        <div class="field">
          <div class="id">
            1
          </div>
          <div class="name">
            Абоненское обслуживание
          </div>
          <div class="price">6 730 ₽</div>
          <div class="amounter">
            <button class="amount-btn button left">
              <img src="../../img/icons/minus.png" />
            </button>
            <input class="input"
              :class="{'amounter-size-medium': amounter.length > 4, 'amounter-size-large': amounter.length > 8 }"
              type="text" value="1"
              v-model="amounter"

            />
            <button class="amount-btn button right">
              <img src="../../img/icons/plus-green.png" />
            </button>
          </div>

          <div class="summ">6 730 ₽</div>
          <button class="del-btn">
            <img src="../../img/icons/del-red-icon.png" alt="удалить" />
          </button>
        </div>
        <div class="field">
          <div class="id">
            1
          </div>
          <div class="name">
            Абоненское обслуживание
          </div>
          <div class="price">6 730 ₽</div>
          <div class="amounter">
            <button class="amount-btn button left">
              <img src="../../img/icons/minus.png" />
            </button>
            <input class="input"
              :class="{'amounter-size-medium': amounter.length > 4, 'amounter-size-large': amounter.length > 8 }"
              type="text" value="1"
              v-model="amounter"

            />
            <button class="amount-btn button right">
              <img src="../../img/icons/plus-green.png" />
            </button>
          </div>

          <div class="summ">6 730 ₽</div>
          <button class="del-btn">
            <img src="../../img/icons/del-red-icon.png" alt="удалить" />
          </button>
        </div>
        <div class="field">
          <div class="id">
            1
          </div>
          <div class="name">
            Абоненское обслуживание
          </div>
          <div class="price">6 730 ₽</div>
          <div class="amounter">
            <button class="amount-btn button left">
              <img src="../../img/icons/minus.png" />
            </button>
            <input class="input"
              :class="{'amounter-size-medium': amounter.length > 4, 'amounter-size-large': amounter.length > 8 }"
              type="text" value="1"
              v-model="amounter"

            />
            <button class="amount-btn button right">
              <img src="../../img/icons/plus-green.png" />
            </button>
          </div>

          <div class="summ">6 730 ₽</div>
          <button class="del-btn">
            <img src="../../img/icons/del-red-icon.png" alt="удалить" />
          </button>
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
        <div class="actions-row">
          <button class="cancel">
            <span>Отменить</span>
          </button>
          <button class="button checkout-btn">
            <img src="../../img/icons/small-cart-icon.png" alt="cart" />
            <span>Оплатить</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalAreaOrderDetails',
  data: () => ({
    amounter: 1
  })
}
</script>

<style scoped lang="sass">
.personal-area-order-details
  .orders-table
    background-color: white
    width: 100%
    padding: 30px
    display: flex
    flex-direction: column
    margin-bottom: 50px

    h6
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 21px
      font-weight: 400
      margin-bottom: 20px

    .table-footer
      display: flex
      flex-direction: column

      .actions-row
        margin-left: auto
        display: flex
        align-items: center

        .cancel
          cursor: pointer
          background-color: transparent
          display: flex
          align-items: center
          color: #565656
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700
          margin-right: 40px
          @include button-focus-none

          &::before
            content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAiElEQVQoU02PsQ3CMBRE7+wCyqzABGEBpLBBOtbMBjEbJAMgVkhJCuej71Nkd5bv6d19fl6PBaCFPTxvU9oA4DsO3XE5Zn9TAHqAi0P+qdDuRrwpOqcTcsBDAGvY48CqPKFClNArG0BaGVRXgDpIWgF1UzNSWo1UHYFUACO2+Itje2a+5omG7g99Ck7r4PN3PAAAAABJRU5ErkJggg==")
            margin-right: 10px

        .checkout-btn
          width: 140px
          height: 35px
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

        .id
          width: 5%
          margin-right: 2%

        .name
          width: 29%
          margin-right: 2%

        .amounter
          width: 22%
          margin-right: 2%
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
          width: 16%
          margin-right: 2%

        .summ
          margin-right: auto

        .del-btn
          @include button-focus-none
          padding: 5px
          background-color: transparent
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

        &:nth-child(1)
          width: 5%
          margin-right: 2%

        &:nth-child(2)
          width: 29%
          margin-right: 2%

        &:nth-child(4)
          width: 22%
          margin-right: 2%

        &:nth-child(3)
          width: 16%
          margin-right: 2%

        &:nth-child(5)
          margin-right: auto

  @media (max-width: 768px)
    .orders-table
      padding: 20px

      .table-footer

        .actions-row
          .cancel
            margin-right: 10px

        .sum-row
          width: auto
          flex-direction: column
          align-items: flex-end
          padding: 20px 0

          .order-sum
            &:first-child
              margin-bottom: 15px

            .price
              width: 100px
              text-align: right

      .fields
        .field
          padding: 20px 0
          position: relative
          flex-wrap: wrap
          justify-content: space-between

          > *
            order: 3

          .id
            width: 5%
            order: 1
            margin-bottom: 15px

          .name
            word-wrap: break-word
            order: 1
            width: 80%
            margin-bottom: 15px

          .del-btn
            order: 1
            min-width: 5%
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