<template>
  <div class="paid-badge">
    <span>Оплачен</span>
  </div>
</template>

<script>
export default {
  name: 'PaidBadge'
}
</script>

<style scoped lang="sass">
.paid-badge
  width: 78px
  height: 20px
  border-radius: 10px
  background-color: #f67528
  @include flex-center

  span
    color: #ffffff
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 14px
    font-weight: 400
    line-height: 20px
</style>