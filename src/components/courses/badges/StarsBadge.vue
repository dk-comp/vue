<template>
  <div class="star-badge">
    <div class="icon-container">
      <img src="../../../img/icons/white-badge-star-icon.png">
    </div>
    <span>44</span>
  </div>
</template>

<script>
export default {
  name: 'StarsBadge'
}
</script>

<style scoped lang="sass">
.star-badge
  height: 20px
  border-radius: 10px
  background-color: #c83636
  padding: 0 14px 0 9px
  display: flex
  align-items: center

  .icon-container
    display: flex
    margin-right: 7px

  span
    color: #ffffff
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 14px
    font-weight: 400
    line-height: 18px

</style>