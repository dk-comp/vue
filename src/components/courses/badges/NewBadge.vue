<template>
  <div class="new-badge">
    <span>новое</span>
  </div>
</template>

<script>
export default {
  name: 'NewBadge'
}
</script>

<style scoped lang="sass">
.new-badge
  width: 60px
  height: 20px
  border-radius: 10px
  background-color: #90ab32
  @include flex-center

  span
    color: #ffffff
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 14px
    font-weight: 400
    line-height: 20px
</style>