<template>
  <div class="share-it">
    <span>Поделится:</span>
    <div class="social-buttons">
      <a class="s-item" href="#">
        <img src="../../img/icons/vk-social-network.png">
      </a>
      <a class="s-item" href="#">
        <img src="../../img/icons/facebook-social-network.png">
      </a>
      <a class="s-item" href="#">
        <img src="../../img/icons/twitter-social-network.png">
      </a>
      <a class="s-item" href="#">
        <img src="../../img/icons/whatsapp-social-network.png">
      </a>
      <a class="s-item" href="#">
        <img src="../../img/icons/youtube-social-network.png">
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ShareIt'
}
</script>

<style scoped lang="sass">
.share-it
  display: flex
  align-items: center

  .social-buttons
    display: flex
    align-items: center

    .s-item
      display: flex
      &:not(:last-child)
        margin-right: 15px

  span
    color: #000000
    line-height: 15px
    font-family: "Proxima Nova - Extra Bold", sans-serif
    font-size: 15px
    font-weight: 400
    margin-right: 17px
</style>