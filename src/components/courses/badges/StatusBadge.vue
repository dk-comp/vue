<template>
  <div class="status-badge">
    <div class="ready-indicator"
      :style="{width: `${status}%`}"
    ></div>
    <span>{{status < 100 ?`Выполнен на ${status}%`: 'Курс пройден'}}</span>
  </div>
</template>

<script>
export default {
  name: 'StatusBadge',
  props: {
    status: {
      type: Number, default: () => 0
    }
  }
}
</script>

<style scoped lang="sass">
.status-badge
  width: 140px
  height: 20px
  border-radius: 10px
  background-color: #565656
  position: relative
  overflow: hidden

  span
    position: absolute
    @include block-centering
    color: #ffffff
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 14px
    max-height: 20px
    font-weight: 400
    white-space: nowrap

  .ready-indicator
    border-radius: 10px
    background-image: linear-gradient(to right, #689724 0%, #90ab32 100%)
    height: 100%
    width: 0

</style>