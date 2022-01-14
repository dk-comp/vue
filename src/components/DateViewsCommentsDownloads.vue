<template>
  <div class="date-views-comments-downloads">
    <span class="date-time">вчера в 16:15</span>
    <span class="watched">
      250
    </span>
    <span class="comments">
      10
    </span>
    <span class="downloads">
      45
    </span>
  </div>
</template>

<script>
export default {
  name: 'DateViewsCommentsDownloads'
}
</script>

<style scoped lang="sass">
.date-views-comments-downloads
  color: #565656
  font-family: "Proxima Nova - Semi Bold", sans-serif
  font-size: 14px
  font-weight: 400
  line-height: 18px
  display: flex
  align-items: center


  .watched,
  .comments,
  .downloads
    line-height: 15px
    padding-left: 25px
    position: relative

    &::before
      content: ''
      background-image: url("../img/icons/eye.png")
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
      background-image: url("../img/icons/comment-icon.png")

  .downloads
    padding-left: 18px
    &::before
      width: 12px
      height: 14px
      background-image: url("../img/icons/download-icon.png")

  > *
    &:not(:last-child)
      margin-right: 26px

</style>