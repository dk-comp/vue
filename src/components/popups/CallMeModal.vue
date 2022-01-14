<template>
  <div class="call-me-modal" title="">
    <div class="is-overlay"
      :class="{'active': active}"
      @click="active = false"
    ></div>
    <div class="popup"
    >
      <div class="popup-text"
        :class="{'show': active}"
      >
        <fa class="close" icon="times"
          @click="active = false"
        />
        <div class="now" v-if="callPopupState=== 'now'">
          <div class="popup-title">Заказать звонок</div>
          <p class="c-text">Мы готовы Вам перезвонить и помочь</p>
          <input class="input" type="text" placeholder="Ваш номер телефона" value="+7" />
          <button class="button c-action">Жду звонка</button>
          <span class="c-link" @click="callPopupState = 'later'">
            <span>Позвоните мне позже</span>
          </span>
        </div>
        <div class="later" v-if="callPopupState=== 'later'">
          <span class="popup-title">Выберите время</span>
          <p class="c-text">удобное для звонка</p>
          <div class="select-time">
            <super-select class="super-select border-none light-gray"
              placeholder="Выбрать"
              :options="weekDays"
              :selected="selectedDay"
              :cancelField="false"
            />
            <super-select class="super-select border-none light-gray"
              placeholder="Выбрать"
              :options="times"
              :selected="selectedTime"
              :scrollMaxHeight="'150px'"
              :cancelField="false"
            />
          </div>
          <input class="input" type="text" placeholder="Ваш номер телефона" />
          <button class="button c-action">Жду звонка</button>
          <span class="c-link" @click="callPopupState = 'now'">Позвоните мне сейчас</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SuperSelect from '../SuperSelect'

export default {
  name: 'CallMeModal',
  components: { SuperSelect },
  props: {
    active: { type: Boolean, default: () => false },
  },
  data: () => ({
    weekDays: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
    selectedDay: 'Вторник',
    times: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    selectedTime: '09:00',
    callPopupState: 'now',
  }),
}
</script>

<style scoped lang="sass">
.call-me-modal
  cursor: default

  .is-overlay
    transition: all .4s step-end, opacity .3s ease
    background-color: black
    position: fixed
    opacity: 0
    max-width: 0
    max-height: 0
    z-index: 11

    &.active
      transition: opacity .3s ease
      opacity: .6
      max-width: 100vw
      max-height: 100vh

  > .popup
    @include popup
    height: 100%
    width: 1px

    .popup-text
      background-color: white
      width: 370px
      padding: 30px
      position: fixed
      z-index: 22
      margin: auto
      left: 0
      right: 0
      @include block-vertical-centering
      @media (max-width: 768px)
        max-width: 90%
        top: 10%
        transform: translate(0%, 0%)
      .super-select
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400

      .c-link
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        text-decoration: underline
        display: flex
        align-items: center
        cursor: pointer

        &::after
          content: ''
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABUUlEQVQ4T62UsU7DMBCG/zMbUgWPgISUgYUuCWEieRJ4A+AFOnRsl07t0Eq0W9+CpEtDMpCuldhAYqJlYasPOTShpCYNIid5OZ8/3519P0FjU9t2iPkSzHUAaimLQRQz0eg8CLz8Mdp0TG37iFarOxA5ugsyH7MngFsriuLUl4FC06xLonsAh4WQ782lYHZTWAJKMpHy8Q+QFJfBEtCDZXkMXJTM5GcYs2dHkUvrklQ2W2a023ju9/Exnxe3TAiXAtPsgOhaF7lvGDhuNPDUbBbCGBjRrrL2ajUYrRZex2MsfP+3zGIKLGsJ4KAodwU76fXw5nl4GQy0oeVB3S4Wk0nSM51VVdqsumZX9vz//ZAE+Gdh6GyOiBrAwtfTNPldMDtq3vJDq+ShLCyDqAu2ZERIOdw1d6ocYr7RykhOlxxIeUVfona63puxEjchhjph+wT9pKwU6dd1OAAAAABJRU5ErkJggg==")
          width: 18px
          height: 18px
          margin-left: 10px

      .select-time
        display: flex
        font-size: 12px
        font-weight: 600
        margin-bottom: 20px

        > :first-child
          flex-grow: 1
          margin-right: 10px

        > :nth-child(2)
          width: 124px

      .c-text
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400
        margin-bottom: 10px

      .popup-title
        margin-bottom: 20px
        color: #100c14
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 21px
        font-weight: 400
        line-height: 18px

      .f-label
        color: #000000
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 16px
        font-weight: 400

      .input
        @include button-focus-none
        background-color: #f9f9f9
        height: 40px
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400
        margin-bottom: 20px

      .button
        height: 34px
        border-radius: 0
        border: none
        background-color: #c83636
        min-width: 42px
        @include flex-center
        color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        width: 100%
        margin-bottom: 10px

        span
          line-height: 13px


</style>