<template>
  <div class="user-popup">
    <div class="popup"
      @mouseover="userPopup = true"
      @mouseout="userPopup = false"
    >
      <div class="absolute"></div>
      <slot></slot>
      <div class="popup-text"
        :class="{'show': userPopup}"
      >
        <fa class="close" icon="times"
          @click="userPopup = false"
        />
        <div class="entry"
          v-if="userPopupState === 'entry'"
        >
          <span class="title">Вход в кабинет</span>
          <input class="input"
            type="text"
            placeholder="Номер телефона"
          />
          <input class="input"
            type="password"
            placeholder="Пароль"
          />
          <div class="action-block">
            <div class="links">
              <span @click="userPopupState = 'restore'">Забыли пароль?</span>
              <span @click="userPopupState = 'registration'">Регистрация</span>
            </div>
            <button class="button p-action">Войти</button>
          </div>
          <div class="social-block">
            <span class="s-text">Или войдите при помощи аккаунта социальных сетей</span>
            <div class="social-icons">
              <fa :icon="['fab', 'facebook']" />
              <fa :icon="['fab', 'google-plus']" />
              <fa :icon="['fas', 'at']" />
              <fa :icon="['fab', 'vk']" />
              <fa :icon="['fab', 'yandex']" />
              <fa :icon="['fab', 'odnoklassniki-square']" />
            </div>
          </div>
        </div>
        <div class="restore" v-if="userPopupState === 'restore'">
          <span class="title">Забыли пароль?</span>
          <input class="input"
            type="text"
            placeholder="Ваш номер телефона"
          />
          <button class="button p-action">Восстановить</button>
        </div>
        <div class="registration" v-if="userPopupState === 'registration'">
          <span class="title">Регистрация</span>

          <input class="input"
            type="text"
            name="name"
            placeholder="ФИО"
          />
          <input class="input"
            type="text"
            name="phone"
            placeholder="Ваш номер телефона"
          />

          <input class="input"
            type="text"
            name="email"
            placeholder="Ваш Email"
          />

          <super-select class="super-select border-none light-gray"
            placeholder="Выбрать"
            :options="options"
            :selected="selected"
            :cancel-field="false"
          />

          <p class="r-text">
            <span class="has-text-weight-bold">Примечание:</span> от вашего выбора
            будут зависеть ваши возможности
            в личном кабинете.</p>

          <div class="action-block">
            <div class="links">
              <span @click="userPopupState = 'restore'">Восстановить пароль</span>
              <span @click="userPopupState = 'entry'">Вход в аккаунт</span>
            </div>
            <button class="button p-action">Зарегестрироватся</button>
          </div>
          <div class="social-block">
            <span class="s-text">Или зарегистрируйтесь при
              помощи аккаунта соц. сетей</span>
            <div class="social-icons">
              <fa :icon="['fab', 'facebook']" />
              <fa :icon="['fab', 'google-plus']" />
              <fa :icon="['fas', 'at']" />
              <fa :icon="['fab', 'vk']" />
              <fa :icon="['fab', 'yandex']" />
              <fa :icon="['fab', 'odnoklassniki-square']" />
            </div>
          </div>
        </div>
      </div>
      <div class="popup-arrow"></div>
    </div>
  </div>
</template>

<script>

import SuperSelect from '../SuperSelect'

export default {
  name: 'UserPopup',

  components: {
    SuperSelect,
  },

  data: () => ({
    userPopup: false,
    userPopupState: 'entry',
    selected: 'Пользователь',
    options: ['Партнер', 'Дизайнер', 'Пользователь'],
  }),

}
</script>

<style scoped lang="sass">
.user-popup
  > .popup
    @include popup
    display: flex
    justify-content: center


    .popup-text
      padding: 30px
      display: flex
      justify-content: center
      top: 50px
      right: 100px
      width: 370px

      @media (max-width: 768px)
        right: 5%
        width: 90%
        max-width: 370px


      &::after
        display: none

      .title
        color: #100c14
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 21px
        font-weight: 400
        line-height: 18px
        margin-bottom: 25px
      .input
        @include button-focus-none
        background-color: #f9f9f9
        height: 40px
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400
        margin-bottom: 20px

      .p-action
        width: 125px
        height: 35px
        background-color: #c83636
        padding: 0 12px
        border: none
        font-weight: 700
        border-radius: 0
        color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px


      .social-block
        align-self: center
        display: flex
        flex-direction: column
        margin-top: 24px
        max-width: 200px

        .s-text
          white-space: normal
          text-align: center
          margin-bottom: 14px
          color: #565656
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 15px
          font-weight: 400

        .social-icons
          display: flex
          justify-content: space-between
          cursor: pointer
          align-items: center

          > *
            height: 25px
            width: 25px
            cursor: pointer

            &:nth-child(1)
              color: #3b5999

            &:nth-child(2)
              color: #dd4b39

            &:nth-child(3)
              color: #168de2

            &:nth-child(4)
              color: #4c75a3

            &:nth-child(5)
              height: 22px
              color: #ff0000

            &:nth-child(6)
              color: #ed812b

      .links
        display: flex
        flex-direction: column
        justify-content: space-between

        span
          color: #c83636
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700
          text-decoration: underline
          cursor: pointer

      .entry
        width: 100%
        display: flex
        flex-direction: column

        .action-block
          display: flex
          justify-content: space-between

      .registration
        width: 100%
        display: flex
        flex-direction: column

        .super-select
          margin-bottom: 16px

          padding-top: 0
          padding-bottom: 10px
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400

        .r-text
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 14px
          white-space: normal
          margin-bottom: 20px

        .action-block
          flex-direction: column
          align-items: flex-start

          .links
            margin-bottom: 11px

            > :first-child
              margin-bottom: 2px

          .p-action
            width: 100%

      .restore
        width: 100%
        display: flex
        flex-direction: column

        .p-action
          width: 100%

    .popup-arrow
      top: 40px !important
</style>
