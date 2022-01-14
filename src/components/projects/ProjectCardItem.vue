<template>
  <div class="project-card-item">
    <div class="img-container is-hidden-mobile">
      <img src="../../img/project-img.png" alt="Course avatar" />
    </div>
    <div class="c-header">
      <div class="title-badge-container">
        <a href="#" class="c-title">
          Быстрая комплектация номенклатуры для 1С Предприятие 8.2, Управление торговлей 10.3
        </a>
        <div class="badges">
          <div class="left">
            <new-badge />
            <stars-badge />
          </div>
        </div>
      </div>
      <div class="tags-container">
        <tags />
      </div>
    </div>
    <div class="p-images">
      <div class="img-container">
        <img src="../../img/project-img-item.png">
      </div>
      <div class="img-container">
        <img src="../../img/project-img-item.png">
      </div>
      <div class="img-container">
        <img src="../../img/project-img-item.png">
      </div>
      <div class="img-container">
        <img src="../../img/project-img-item.png">
      </div>
    </div>
    <div class="extra">
      <date-views-comments-downloads />
    </div>
  </div>
</template>

<script>
import NewBadge from '../courses/badges/NewBadge'
import StarsBadge from '../courses/badges/StarsBadge'
import Tags from '../courses/Tags'
import DateViewsCommentsDownloads from '../DateViewsCommentsDownloads'

export default {
  name: 'ProjectCardItem',
  components: { DateViewsCommentsDownloads, Tags, StarsBadge, NewBadge }
}
</script>

<style scoped lang="sass">
.project-card-item
  padding-left: 200px
  display: flex
  flex-direction: column
  min-height: 215px
  position: relative

  .p-images
    margin-bottom: 10px
    width: 100%
    display: flex
    flex-wrap: wrap

    .img-container
      max-width: 200px
      @include flex-center
      margin-right: 10px
      margin-bottom: 10px

  .c-header
    width: 100%
    display: flex
    flex-direction: column
    margin-bottom: 20px

    .tags-container
      display: flex
      width: 100%

    .title-badge-container
      display: inline-block
      flex-wrap: wrap
      position: relative
      margin-bottom: 20px

      .c-title
        color: #1b65c0
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 24px
        font-weight: 700
        vertical-align: top
        margin-right: 20px
        line-height: 30px

      .badges
        display: inline-flex
        align-items: center
        flex-grow: 1

        .right
          position: absolute
          right: 0

        .left
          margin-right: 150px

        > *
          display: flex
          align-items: center

          > *
            &:not(:last-child)
              margin-right: 12px

  > .img-container
    width: 170px
    height: 215px
    overflow: hidden
    position: absolute
    left: 0
    top: 0
    @include flex-center

    img
      max-height: 100%

  @media (max-width: 1087px)
    padding-left: 0
    > .img-container
      width: 90px
      height: 115px
    .p-images
      .img-container
        max-width: 160px
        margin-right: 8px
        margin-bottom: 8px

    .c-header
      padding-left: 115px
      min-height: 115px

      .title-badge-container
        display: flex
        flex-direction: column
        margin-bottom: 10px

        .badges
          display: flex
          flex-wrap: wrap
          align-items: center
          width: 100%

          .left
            margin-right: auto

          .right
            position: static

        .c-title
          margin-bottom: 16px
          font-size: 21px
          line-height: 24px
  @media (max-width: 768px)
    .p-images
      .img-container
        padding-right: 10px
        margin-right: auto
        max-width: 150px
    .c-header
      padding-left: 0
      min-height: 0
</style>