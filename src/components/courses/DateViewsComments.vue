<template>
  <div class="date-views-comments">
    <span class="date-time">вчера в 16:15</span>
    <span class="watched">
      250
    </span>
    <span class="comments">
      10
    </span>
  </div>
</template>

<script>
export default {
  name: 'DateViewsComments'
}
</script>

<style scoped lang="sass">
.date-views-comments
  color: #565656
  font-family: "Proxima Nova - Semi Bold", sans-serif
  font-size: 14px
  font-weight: 400
  line-height: 18px
  display: flex
  align-items: center

  &.revert
    flex-direction: row-reverse

    .watched,
    .date-time,
    .comments
      margin-right: 26px


  .watched,
  .comments
    line-height: 15px
    padding-left: 25px
    position: relative

    &::before
      content: ''
      background-image: url("../../img/icons/eye.png")
      background-repeat: no-repeat
      background-position: center center
      background-size: contain
      position: absolute
      left: 0
      width: 19px
      height: 11px
      @include block-vertical-centering

  .comments
    &::before
      height: 17px
      width: 18px
      background-image: url("../../img/icons/comment-icon.png")

  .watched,
  .date-time
    margin-right: 26px

</style>