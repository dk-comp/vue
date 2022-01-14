<template>
  <div class="super-select"
    @mouseleave="active = false"
  >
    <div class="overlay" v-if="disabled">
      <div class="inner"></div>
    </div>
    <div class="select-button"
      @click="onButtonClick()"
      ref="button"
    >

      <!-- selected option  block-->

      <div class="selected"
        v-if="selectedValue !== ''"
      >
        <!-- selected value -->
        {{ selectedValue }}
      </div>
      <div class="placeholder"
        v-if="selectedValue === ''"
      >
        <!-- placeholder -->
        {{ placeholder }}
      </div>
      <div class="right-side">
        <div class="cancel-icon"
          v-if="selectedValue !== '' && cancelField"
          @click.stop="clearSelected"
        >
          <!-- icon close -->
          <fa icon="times" />
        </div>
        <div class="b-arrow"
          :class="{'active': active}"
        >
          <fa icon="angle-down" />
        </div>
      </div>
    </div>
    <div class="select-body"
      v-if="active"
      :style="{left: bodyLeft, right: bodyRight}"
    >
      <input class="input"
        v-model="search"
        :name="name"
        :placeholder="searchPlaceholder"
        v-if="searchField &&  options.length > minOptionsSearchable"
        type="text"
      >
      <scrollbar class="options-container" :style="{maxHeight: scrollMaxHeight}">
        <!-- Options for select -->
        <ul>
          <li v-for="(item, index) in options"
            :key="index"
            v-if="searchEntryText(item)"
            @click.stop="selectOption(item)"
          >
            {{ getOption(item) }}
          </li>
        </ul>
      </scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuperSelect',

  props: {
    name: { type: String, default: () => '' },
    options: { type: Array, default: () => [] },
    titleName: { type: String, default: () => null },
    disabled: { type: Boolean, default: () => false },
    placeholder: { type: String, default: () => null },
    cancelField: { type: Boolean, default: () => true },
    scrollMaxHeight: { type: String, default: () => '' },
    searchField: { type: Boolean, default: () => false },
    minOptionsSearchable: { type: Number, default: () => 8 },
    selected: { type: [Object, String], default: () => ({}) },
    searchPlaceholder: { type: String, default: () => 'Поиск' },
  },

  data: () => ({
    search: '',
    active: false,
    bodyLeft: '0',
    bodyRight: 'auto'
  }),

  mounted () {
    this.setBodyPosition()
  },
  computed: {
    /**
     * Check if is object empty val
     * @return String
     */
    selectedValue () {
      if (this.titleName !== null && Object.keys(this.selected).length) {
        return this.selected[this.titleName]
      }

      if (this.titleName === null) {
        return this.selected
      }

      return ''
    },
  },

  methods: {
    /**
     * get option by specific property name
     * @param  [Object, String] item
     * @return String
     */
    getOption (item) {
      return this.titleName == null
        ? item
        : item[this.titleName]
    },

    setBodyPosition () {
      let btn = this.$refs.button
      let width = document.body.clientWidth
      let left = btn.getBoundingClientRect().left
      let right = width - btn.getBoundingClientRect().right

      if (left >= right) {
        this.bodyLeft = 'auto'
        this.bodyRight = '0'
      } else {
        this.bodyLeft = '0'
        this.bodyRight = 'auto'
      }
    },
    onButtonClick () {
      this.setBodyPosition()
      this.active = true
    },

    /**
     * Do select option
     * @param  [Object, String] item
     * @return Void
     */
    selectOption (item) {
      this.$emit('onSelect', { data: item })

      this.search = ''
      this.active = !this.active
    },

    /**
     * Clear selected value
     * @return Void
     */
    clearSelected () {
      const emptyVal = this.titleName == null ? '' : {}

      this.$emit('onSelect', { data: emptyVal })
    },

    searchEntryText (item) {
      const text = this.getOption(item)

      return (
        text
          .toString()
          .toLowerCase()
          .indexOf(this.search.toLowerCase()) + 1
      )
    },
  },
}
</script>

<style lang="sass">


.options-container
  max-height: 300px

.super-select
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

    input
      margin: .30em auto
      width: 95%
      padding: .45em
      border: 1px solid #969696
      background-color: #f4f4f4
      border-radius: 0

    .options-container
      li
        padding: .45em
        cursor: pointer

        &:hover
          background-color: #d2d2d2

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
