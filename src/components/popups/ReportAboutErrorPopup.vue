<template>
  <div class="report-about-error" title="">
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
        <h3 class="popup-title">Сообщить про ошибку</h3>
        <div class="find-form">
          <span class="f-label">Фио</span>
          <input class="input" type="text" placeholder="" />
          <span class="f-label">E-mail</span>
          <input class="input" type="text" placeholder="" />
          <span class="f-label">Тип ошибки</span>
          <super-select
            class="super-select border-none light-gray"
            placeholder="Тип ошибки"
            :cancelField="false"
            :selected="selectedSortBy"
            :options="sortBy"
          />
          <span class="f-label">Сообщение</span>
          <textarea class="textarea" placeholder="Сообщение"></textarea>
          <div class="button"><span>Отправить</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SuperSelect from '../SuperSelect'

export default {
  name: 'ReportAboutErrorPopup',
  components: { SuperSelect },
  props: {
    active: { type: Boolean, default: () => false }
  },
  data: () => ({
    selectedSortBy: '',
    sortBy: ['Тип жалобы', 'Тип жалобы'],
  }),
}
</script>

<style scoped lang="sass">
.report-about-error
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
      opacity: .7
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
      top: 60%
      transform: translateY(-55%)
      margin: auto
      left: 0
      right: 0
      @media (max-width: 768px)
        max-width: 90%
        top: 10%
        transform: translate(0%, 0%)

      .find-form
        display: flex
        flex-direction: column

        > .input,
        > .textarea
          margin-bottom: 15px

        > .button
          width: 100%

        > .super-select
          padding-top: 0
          padding-bottom: 10px
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400

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

      .textarea
        @include button-focus-none
        background-color: #f9f9f9
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
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

        span
          line-height: 13px
</style>