<template>
  <div class="release-card-item">
    <div class="img-container is-hidden-mobile">
      <img src="../../img/release-img.png" alt="Course avatar" />
    </div>
    <div class="c-header">
      <div class="title-badge-container">
        <a href="#" class="c-title">
          Автоматизация службы доставки - Удобное решение: Служба доставки + Фастфуд 3.0 (Поддержка онлайн-касс, 54-ФЗ,
          ЕГАИС)
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
    <p class="about-text">Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться.
      Современному бухгалтеру без программы «1С:Бухгалтерия» не обойтись. Разработчики фирмы «1С» нашли подход ко всем
      категориям клиентов, продуктом пользуются и малые фирмы, и крупные организации. Это многофункциональный помощник
      ведения учета любой сложности: от первичной документации до составления отчетов и свода баланса. Здравствуйте,
      дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться. Современному бухгалтеру без программы
      «1С:Бухгалтерия» не обойтись.</p>
    <div class="price">14000 руб.</div>
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
  name: 'ReleaseCardItem',
  components: { DateViewsCommentsDownloads, Tags, StarsBadge, NewBadge }
}
</script>

<style scoped lang="sass">
.release-card-item
  padding-left: 200px
  display: flex
  flex-direction: column
  min-height: 215px
  position: relative

  .price
    margin-bottom: 8px
    color: #c83636
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 24px
    line-height: 24px
    font-weight: 400

  .about-text
    color: #000000
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 16px
    font-weight: 400
    line-height: 21px
    margin-bottom: 12px

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
    .c-header
      padding-left: 0
      min-height: 0
</style>