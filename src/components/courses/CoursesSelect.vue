<template>
  <div class="courses-select"
    @mouseleave="active = false">
    <div class="select-button"
      @click="onButtonClick()"
      ref="button"
    >

      <!-- selected option  block-->

      <div class="selected">
        <!-- selected value -->
        Курсы 1С: Предприятие 2
      </div>

      <div class="right-side">
        <div class="b-arrow"
          :class="{'active': active}"
        >
          <fa icon="angle-down" />
        </div>
      </div>
    </div>
    <div class="select-body"
      v-if="active"
    >
      <div class="s-item">
        <button class="item-btn"
          @click="itemActive = !itemActive"
        >
          <span>Курсы 1С</span>
          <span class="right-side">
            <span class="b-arrow"
              :class="{'active': itemActive}"
            >
              <fa icon="angle-down" />
            </span>
          </span>
        </button>
        <div class="item-body" v-if="itemActive">
          <ul>
            <li> Курсы 1С: Предприятие</li>
            <li> Курсы 1С: Предприятие 2</li>
          </ul>
        </div>
        <div class="item-footer">Курсы 1С (приобритенные)</div>
      </div>
      <div class="s-item">
        <button class="item-btn"
          @click="itemActive = !itemActive"
        >
          <span>Администрирование 1С</span>
          <span class="right-side">
            <span class="b-arrow"
              :class="{'active': itemActive}"
            >
              <fa icon="angle-down" />
            </span>
          </span>
        </button>
        <div class="item-body" v-if="itemActive">
          <ul>
            <li> Администрирование 1С</li>
            <li> Администрирование БД </li>
          </ul>
        </div>
        <div class="item-footer">Администрирование 1С (приобритенные)</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CoursesSelect',
  props: {
    placeholder: { type: String, default: () => null },
    selected: { type: [Object, String], default: () => ({}) },
    options: { type: Array, default: () => [] },
    footerTitle: { type: String, default: () => '' }
  },
  data: () => ({
    active: false,
    itemActive: false
  }),
  methods: {
    onButtonClick () {
      this.active = !this.active
    },
  }
}
</script>

<style scoped lang="sass">
.courses-select
  color: $mainDark
  position: relative
  padding: 5px 0

  .overlay
    padding: 5px 0
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 1

    .inner
      cursor: not-allowed
      width: 100%
      height: 100%
      background-color: #d3d3d3
      opacity: 0.5

  .select-body
    position: absolute
    top: 100%
    background-color: white
    z-index: 9
    left: 0
    min-width: 100%
    border: 1px solid #d2d2d2
    border-top: none
    width: min-content
    display: flex
    flex-direction: column
    max-width: 300px

    .s-item
      display: flex
      flex-direction: column

      .item-footer
        padding: 12px 20px
        background-color: #f0f0f0
        color: #000000
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 400

      .item-btn
        cursor: pointer
        display: flex
        justify-content: space-between
        @include button-focus-none
        min-height: 35px
        width: 100%
        padding: 12px 20px
        background-color: #e4e4e4
        color: #000000
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 400

        .right-side
          display: flex
          align-items: center
          margin-left: 10px

          .b-arrow
            transition: all .3s ease
            transform: rotate(0deg)

            &.active
              transition: all .3s ease
              transform: rotate(180deg)


    ul, li
      background-color: #e4e4e4
      list-style: none

    li
      cursor: pointer
      display: flex
      align-items: center
      padding: .45em 20px
      cursor: pointer

      &:hover,
      &.active
        color: $mainRed

        &::before
          background-color: $mainRed

      &::before
        content: ''
        margin-right: 10px
        width: 5px
        height: 5px
        background-color: #9d9d9d
        border-radius: 50%

    input
      margin: .30em auto
      width: 95%
      padding: .45em
      border: 1px solid #969696
      background-color: #f4f4f4
      border-radius: 0

    .options-container
      li
        position: relative
        padding: .45em
        cursor: pointer

        &:hover
          background-color: #d2d2d2

  .footer-title
    background-color: #f0f0f0
    color: #000000
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 16px
    font-weight: 400
    border-top: 1px solid #d2d2d2
    border-bottom: 1px solid #d2d2d2

  .select-button
    background-color: white
    padding: .45em 20px
    border: 1px solid #d2d2d2
    display: flex
    justify-content: space-between
    align-items: center
    cursor: pointer
    position: relative
    height: inherit

    .right-side
      display: flex
      align-items: center
      margin-left: 10px

    .b-arrow
      transition: all .3s ease
      transform: rotate(0deg)

      &.active
        transition: all .3s ease
        transform: rotate(180deg)

    .cancel-icon
      cursor: pointer
      margin-right: 5px
      font-size: 14px

    .placeholder
      color: #757575

    .selected
      width: 100%
      overflow: hidden
      white-space: nowrap
      color: #000000
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 16px
      font-weight: 400

  &.light-gray
    .select-button,
    .select-body
      background-color: #f0f0f0

  &.dark
    .select-button,
    .select-body
      color: white
      background-color: #565656

  &.border-none
    .select-body,
    .select-button
      border: none

  &.placeholder-desktop-hidden
    @media (min-width: 1088px)
      .select-button
        .right-side
          margin-left: auto

        .placeholder
          display: none
</style>