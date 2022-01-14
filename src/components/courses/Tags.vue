<template>
  <div class="tags">
   <div class="tag-item">#Мир 1С</div>
    <div class="tag-item red">#Технологии</div>
    <div class="tag-item">#Бизнес</div>
  </div>
</template>

<script>
export default {
  name: 'Tags'
}
</script>

<style scoped lang="sass">
.tags
  display: flex
  align-items: center
  flex-wrap: wrap
  white-space: nowrap

  .tag-item
    border-radius: 9px
    background-color: #ffffff
    padding: 0 5px
    color: #000000
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 14px
    font-weight: 400
    margin-right: 10px

    &.red
      color: $mainRed
</style>