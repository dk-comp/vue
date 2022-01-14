<template>
  <div class="project-in-detail-watch-video">
    <div class="title-container">
      <h5>Также смотрите
        видео о решении
      </h5>
    </div>
    <div class="video-frame">
      <div class="video-preview-example">
        <img class="video-preview" src="../../img/video-img.png" alt="" />
        <img class="play-btn" src="../../img/play-rounded-button.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectInDetailWatchVideo'
}
</script>

<style scoped lang="sass">
.project-in-detail-watch-video
  width: 100%
  align-items: center
  display: flex
  margin-bottom: 40px

  .video-frame
    width: 670px
    min-width: 670px
    height: 377px
    display: flex
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.03)
    border: 3px solid #c83636
    background-color: #838383


  .video-preview-example
    width: 100%
    height: 100%
    position: relative
    @include flex-center

    .video-preview
      max-height: 100%

    .play-btn
      cursor: pointer
      position: absolute
      @include block-centering
      max-height: 100%
      max-width: 100%

  .title-container
    flex-grow: 1
    @include flex-center
    padding: 0 70px

    h5
      text-align: center
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 36px
      font-weight: 400

  @media (max-width: 1087px)
    flex-direction: column
    padding: 0 30px
    .title-container
      width: 100%
      padding: 0
      margin-bottom: 18px
      h5
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 30px
        font-weight: 400

    .video-frame
      height: auto
      min-width: 0
      width: 100%
  @media (max-width: 1087px)
    padding: 0
    .title-container
      margin-bottom: 28px
      h5
        font-size: 24px

</style>