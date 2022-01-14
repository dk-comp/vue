<template>
  <div class="personal-area-menu"

  >
    <div class="touch-menu is-hidden-desktop"
      @click="touchMenuActive = !touchMenuActive"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="avatar-container is-hidden-mobile">
      <div class="avatar">
        <img src="../../img/avatar-pa.png" />
      </div>
    </div>
    <div class="name is-hidden-desktop">Антонов Николай Григорьевич</div>
    <div class="main-menu"
      @mouseleave="touchMenuActive = false"
      :class="{'active': touchMenuActive}"
    >
      <div class="m-item"
        :class="{'active': activeItem === 1}"
        @click="onMenuClick(1)"
      >
        <span>Личные данные</span>
      </div>
      <div class="m-item"
        :class="{'active': activeItem === 2}"
        @click="onMenuClick(2)"
      >
        <span>Смена пароля</span>
      </div>
      <div class="m-item"
        :class="{'active': activeItem === 3}"
        @click="onMenuClick(3)"
      >
        <span>Счета и акты</span>
      </div>
      <div class="m-item"
        :class="{'active': activeItem === 4}"
        @click="onMenuClick(4)"
      >
        <span>Заказы</span>
      </div>
      <div class="m-item"
        :class="{'active': activeItem === 7}"
        @click="onMenuClick(7)"
      >
        <span>Заказ детально</span>
      </div>
      <div class="m-item"
        :class="{'active': activeItem === 5}"
        @click="onMenuClick(5)"
      >
        <span>Загрузки</span>
      </div>
      <div class="m-item"
        :class="{'active': activeItem === 6}"
        @click="onMenuClick(6)"
      >
        <span>Курсы</span>
      </div>
    </div>
    <button class="logout">
      <span class="is-hidden-mobile">Выход</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PersonalAreaMenu',
  data: () => ({
    touchMenuActive: false,
    activeItem: 1,
  }),
  methods: {
    onMenuClick (menuItem) {
      this.activeItem = menuItem
      this.$emit('update:menu', menuItem)
    }
  },
}
</script>

<style scoped lang="sass">
.personal-area-menu
  background-color: white
  display: flex
  flex-direction: column
  max-width: 270px
  width: 100%
  margin-right: 30px
  margin-bottom: 22px

  .touch-menu
    @include button-focus-none
    display: flex
    flex-direction: column
    padding: 4px
    width: 30px
    height: 23px
    justify-content: space-between
    margin-right: 36px
    cursor: pointer

    > div
      height: 3px
      width: 100%
      background-color: black

  .logout
    @include button-focus-none
    background-color: white
    cursor: pointer
    height: 50px
    width: 100%
    padding: 0 20px
    display: flex
    align-items: center
    justify-content: space-between
    color: #565656
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 15px
    font-weight: 700
    transition: all .3s ease

    &::after
      content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAlUlEQVQoU22QwQ1CIRBEZ2hAS/GCiTftQDvQyr4daAd6M5GLpWgDf8yuyw+iXBY2j+UNBIB7zouRPCVptyzl8a/HgC4A5gCeSdoYOJJfvQpeAcwMMDiqXbT1StKazTMtHMwHMh0Hbd1y3pMc6tmqpMOqlKPt24nVqWXd2Sd2YdwpyMnZ4D6MO0Xq6vwT5pykbfePU+8N249fmqEEW6YAAAAASUVORK5CYII=")

  .main-menu
    display: flex
    flex-direction: column
    width: 100%
    border: 2px solid #c83636

    .m-item
      cursor: pointer
      height: 50px
      width: 100%
      padding: 0 20px
      display: flex
      align-items: center
      justify-content: space-between
      color: #565656
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 15px
      font-weight: 700
      transition: all .3s ease

      &:not(:last-child)
        border-bottom: 1px solid #e9e9e9

      &::after
        content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAcElEQVQYV22PyxVAMBBF32yy1gkdoINYJG1RSjpAB3Ri/bJxJsQJxyzfnc8dcc41AMYY4xBCOHCXeO8XAC2AjWSfoVhrK2OMwrqEopN/MIEfuH7BDEBlLnCvyuFOssvHX6Galbqp89HVB0VkImnLB09zBkWPElJdtgAAAABJRU5ErkJggg==")

      &.active
        background-color: #c83636
        color: white
        transition: all .3s ease

        &::after
          content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAZElEQVQYV22P0RFAQAxE33agEzpAB1RGR+iATq6DmLi7mTDyuW93k8jMOmABZkmJMjKzHeiBExgrdNAADtsI5clfWDs/8HgSIbUBfkwGxV3FCxjq8rcopXhudpZfHHjnCkzxwRviYTWfArJpEwAAAABJRU5ErkJggg==")

  .avatar-container
    height: 132px
    width: 100%
    @include flex-center

    .avatar
      @include flex-center
      border-radius: 50%
      overflow: hidden
      width: 80px
      height: 80px

  @media (max-width: 1087px)
    margin-right: 0
    max-width: 100%
    height: 132px
    flex-direction: row
    align-items: center
    position: relative
    border: 2px solid #c83636
    padding: 0 30px
    .logout
      padding: 5px
      height: auto
      width: auto
      margin-left: auto

      span
        margin-right: 14px
    .name
      color: #000000
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 17px
      font-weight: 700
    .touch-menu
      margin-right: 40px
    .avatar-container
      margin-right: 30px
      width: auto
    .main-menu
      z-index: 2
      background-color: white
      top: calc(100% + 2px)
      left: -2px
      overflow: hidden
      max-height: 0
      max-width: 270px
      position: absolute
      transition: all .3s ease
      border: 0 solid transparent
      border-top: none

      &.active
        background-color: white
        border: 2px solid #c83636
        border-top: none
        max-height: 300px
  @media (max-width: 768px)
    height: 82px
    padding: 0 20px
    .main-menu
      max-width: calc(100% + 4px)
      width: calc(100% + 4px)
</style>