<template>
  <div class="header-region router-view">
    <call-me-modal :active="activeCallMeModal"
    />
    <write-to-us-popup :active="writeToUsModal"
    />
    <div class="first-row">
      <div class="inner">
        <div class="left">
          <div class="menu-btn is-hidden-desktop">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="logo-container is-hidden-mobile">
            <a href="/"> <img src="../img/logo.png" /></a>
          </div>
        </div>
        <div class="right">
          <div class="contacts is-hidden-mobile">
            <a class="phone"
              href="tel:+74951234567"
            >+7 (495) 123-45-67</a>
            <a class="email"
              href="../../../../index.php"
            >
              email@1c-code.ru
            </a>
          </div>
          <div class="call-request">
            <button class="desktop-call button is-hidden-touch" @click="openCallMeModal()">
              <img src="../img/icons/phone-receiver-white-icon.png" />
              <span>Заказать звонок</span>
            </button>
            <button class="touch-call button is-hidden-desktop" @click="openCallMeModal()">
              <img src="../img/icons/phone-red-icon.png">
            </button>
          </div>
          <div class="write-to-us">
            <button class="button desktop-b is-hidden-touch"
              @click="openWriteToUsModal"
            >Написать нам
            </button>
            <button class="button touch-b is-hidden-desktop"
              @click="openWriteToUsModal"
            >
              <img src="../img/icons/envelope-icon.png" />
            </button>
          </div>
          <user-popup>
            <div class="icon-btn-container">
              <button class="button">
                <img src="../img/icons/user-icon.png" />
              </button>
            </div>
          </user-popup>
          <div class="icon-btn-container">
            <button class="button">
              <img src="../img/icons/cart-icon.png" />
              <div class="badge">5</div>
            </button>
          </div>
        </div>
      </div>

    </div>
    <div class="mobile-logo is-hidden-tablet">
      <div class="inner">
        <a href="/"><img src="../img/logo.png"></a>

      </div>
    </div>
    <div class="is-hidden-touch header-menu">
      <div class="menu-items">
        <a href="#" class="m-item"><span>О компании</span></a>
        <a href="#" class="m-item"><span>Контакты</span></a>
        <a href="#" class="m-item"><span>Проекты</span></a>
        <div class="m-item"
          @mouseover="solutionsMenu = true"
          @mouseleave="solutionsMenu = false"
        >
          <span>Решения</span>


          <solutions-menu :active="solutionsMenu" />

        </div>
        <a href="#" class="m-item"><span>Услуги</span></a>
        <a href="#" class="m-item"><span>Прайс-лист</span></a>
        <a href="#" class="m-item"><span>Курсы</span></a>
        <a href="#" class="m-item"><span>Форум</span></a>
        <a href="#" class="m-item"><span>Отзывы</span></a>
      </div>
    </div>
  </div>
</template>

<script>
import CallMeModal from './popups/CallMeModal'
import WriteToUsPopup from './popups/WriteToUsPopup'
import UserPopup from './popups/UserPopup'
import SolutionsMenu from './popups/SolutionsMenu'

export default {
  name: 'HeaderRegion',
  components: { SolutionsMenu, UserPopup, WriteToUsPopup, CallMeModal },
  data: () => ({
    activeCallMeModal: false,
    writeToUsModal: false,
    solutionsMenu: false
  }),
  methods: {
    openCallMeModal () {
      this.activeCallMeModal = true
    },
    openWriteToUsModal () {
      this.writeToUsModal = true
    }
  }
}
</script>

<style scoped lang="sass">
.header-region
  background-color: white
  position: sticky
  top: 0
  font-family: "Proxima Nova Rg", sans-serif
  font-weight: 400
  display: flex
  flex-direction: column
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.11)
  z-index: 10

  > .header-menu
    width: 100%
    display: flex

    .menu-items
      padding: 0 40px
      margin: auto
      height: 60px
      width: 100%
      max-width: 1170px
      display: flex
      justify-content: space-between
      position: relative

      .m-item
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 17px
        font-weight: 700
        height: 100%
        border-bottom: 2px solid transparent
        @include flex-center
        cursor: pointer

        &.active,
        &:hover
          border-bottom: 2px solid $mainRed

  > .mobile-logo
    width: 100%
    height: 53px
    display: flex
    align-items: center

    .inner
      @include flex-center
      width: 100%

      a
        display: flex


  > .first-row
    width: 100%
    border-bottom: 1px solid #e9e9e9

    .inner
      display: flex
      flex-direction: row
      align-items: center
      justify-content: space-between
      height: 55px
      color: $mainDark
      white-space: nowrap
      margin: auto
      width: 100%
      max-width: 1170px
      @media (max-width: 1087px)
        padding: 0 40px
      @media (max-width: 768px)
        padding: 0 20px

      > .left
        display: flex
        flex-direction: row
        margin-right: 24px
        align-items: center

        .menu-btn
          display: flex
          flex-direction: column
          width: 22px
          height: 15px
          justify-content: space-between
          margin-right: 36px
          cursor: pointer

          > div
            height: 3px
            width: 100%
            background-color: black

        .logo-container
          display: flex

          a
            display: flex


      > .right
        margin-left: auto
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: center

        > *
          &:not(:last-child)
            margin-right: 16px

        .icon-btn-container
          display: flex

          .button
            position: relative
            @include button-focus-none
            border: none
            @include flex-center

            .badge
              left: 60%
              top: 40%
              position: absolute
              background-color: $mainRed
              border-radius: 50%
              color: #ffffff
              font-size: 14px
              font-weight: 500
              width: 23px
              height: 23px


        > .write-to-us
          display: flex

          .touch-b
            @include button-focus-none
            border: none
            @include flex-center

          .desktop-b
            margin-right: 20px
            border-radius: 0
            display: flex
            border: none
            width: 169px
            height: 35px
            color: #ffffff
            font-family: "Proxima Nova", sans-serif
            text-align: center
            font-size: 15px
            font-weight: 700
            background-color: $darkGray
            @include button-focus-none


        > .call-request
          display: flex

          .touch-call
            @include button-focus-none
            border: none
            @include flex-center

          .desktop-call
            border-radius: 0
            display: flex
            border: none
            width: 179px
            height: 35px
            color: #ffffff
            font-family: "Proxima Nova", sans-serif
            font-size: 15px
            font-weight: 700
            background-color: $mainRed
            @include button-focus-none

            > *
              &:first-child
                margin-right: 10px

        > .contacts
          flex-direction: column
          display: flex
          margin-right: 50px

          > a
            color: black

            &.email
              font-size: 14px
              font-weight: 400
              text-decoration: underline
              line-height: 13px

            &.phone
              margin-bottom: 3px
              line-height: 17px
              font-size: 18px
              font-family: "Proxima Nova - Semi Bold", sans-serif


</style>
