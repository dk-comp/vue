<template>
  <div class="news">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Новости']" />
      <h4>Новости</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="main-content">
        <div class="left">
          <div class="search-news">
            <div class="inputs-row">
              <input class="input" type="text" placeholder="Поиск по заголовкам новостей" />
              <button class="button search-btn">
                <img src="../img/icons/search-icon-white.png" alt=""/>
                <span class="is-hidden-mobile">Поиск</span>
              </button>
            </div>
            <div class="tags-row">
              <a href="#">#Все </a>
              <a href="#">#Мир 1С </a>
              <a href="#" class="red">#Технологии </a>
              <a href="#">#Бизнес </a>
            </div>
          </div>
          <masonry
            class="news-items"
            :cols="{default: 2,  768: 1}"
            :gutter="{default: '30px', 768: '0'}"
          >
            <div class="n-item">
              <div class="n-row">
                <a href="#" class="main-link">Новость о бухгалтерии в программе 1С</a>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </div>
              <div class="img-container">
                <img src="../img/news-1.png">
              </div>
              <div class="n-row">
                <p>Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться... </p>
              </div>
            </div>
            <div class="n-item">
              <div class="n-row">
                <a href="#" class="main-link">В России хотят запретить зарубежным инвесторам участвовать в
                  ИТ-концессиях</a>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </div>
              <div class="img-container">
                <img src="../img/news-2.png" alt="" />
              </div>
              <div class="n-row">
                <p>Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться... </p>
              </div>
            </div>
            <div class="n-item">
              <div class="n-row">
                <a href="#" class="main-link">Новость о бухгалтерии в программе 1С</a>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </div>
              <div class="img-container">
                <img src="../img/news-1.png">
              </div>
              <div class="n-row">
                <p>Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться... </p>
              </div>
            </div>
            <div class="n-item">
              <div class="n-row">
                <a href="#" class="main-link">В России хотят запретить зарубежным инвесторам участвовать в
                  ИТ-концессиях</a>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </div>
              <div class="img-container">
                <img src="../img/news-2.png" alt="" />
              </div>
              <div class="n-row">
                <p>Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться... </p>
              </div>
            </div>
            <div class="n-item">
              <div class="n-row">
                <a href="#" class="main-link">В России хотят запретить зарубежным инвесторам участвовать в
                  ИТ-концессиях</a>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </div>
              <div class="img-container">
                <img src="../img/news-2.png" alt="" />
              </div>
              <div class="n-row">
                <p>Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться... </p>
              </div>
            </div>
            <div class="n-item">
              <div class="n-row">
                <a href="#" class="main-link">Новость о бухгалтерии в программе 1С</a>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </div>
              <div class="img-container">
                <img src="../img/news-1.png">
              </div>
              <div class="n-row">
                <p>Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться... </p>
              </div>
            </div>

          </masonry>
          <div class="pagination-container">
            <pagination class="unfolded" />
          </div>
        </div>
        <div class="new-news">
          <div class="new-news__header">
            <div>Новые публикации</div>
          </div>
          <div class="new-news-items">
            <div class="new-news-items__item">
              <a href="#">
                <div class="name">
                  Автоматизированное рабочее место аудитора (ЗУП, версия 2.5)
                </div>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </a>
            </div>
            <div class="new-news-items__item">
              <a href="#">
                <div class="name">
                  Автоматизированное рабочее место аудитора (ЗУП, версия 2.5)
                </div>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </a>
            </div>
            <div class="new-news-items__item">
              <a href="#">
                <div class="name">
                  Автоматизированное рабочее место аудитора (ЗУП, версия 2.5)
                </div>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </a>
            </div>
            <div class="new-news-items__item">
              <a href="#">
                <div class="name">
                  Автоматизированное рабочее место аудитора (ЗУП, версия 2.5)
                </div>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </a>
            </div>
            <div class="new-news-items__item">
              <a href="#">
                <div class="name">
                  Автоматизированное рабочее место аудитора (ЗУП, версия 2.5)
                </div>
                <div class="info-row">
                  <span class="date">сегодня, 12,49</span>
                  <span class="watched">
                    250
                  </span>
                  <span class="comments">5</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import Pagination from '../components/courses/Pagination'

export default {
  name: 'News',
  components: { Pagination, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.news
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    max-width: 1170px
    margin: 0 auto 50px

    > .under-header-line
      margin-bottom: 30px

    > h4
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 36px
      margin-bottom: 0
      font-weight: 400
      line-height: 27px

    .main-content
      width: 100%
      display: flex
      align-items: flex-start

      .search-news
        display: flex
        flex-direction: column
        background-color: white
        padding: 30px
        margin-bottom: 18px

        .tags-row
          display: flex
          align-items: center
          flex-wrap: wrap
          justify-content: flex-start

          a
            color: #000000
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 16px
            font-weight: 400
            margin-right: 18px

            &.red
              color: $mainRed

        .inputs-row
          display: flex
          align-items: center

          &:not(:last-child)
            margin-bottom: 18px

          .search-btn
            height: 45px
            @include button-focus-none
            background-color: #565656
            color: white
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 15px
            font-weight: 600
            display: flex
            align-items: center
            padding: 0 30px
            min-width: 132px

            img
              margin-right: 13px

          .input
            flex-grow: 1
            @include button-focus-none
            background-color: #f0f0f0
            height: 45px
            padding: 0 20px
            color: #000000
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 16px
            font-weight: 300

      .left
        width: 770px
        margin-right: 30px
        display: flex
        flex-direction: column

      .pagination-container
        display: flex
        margin-right: auto

      .news-items
        .n-item
          margin-bottom: 30px
          display: flex
          flex-direction: column
          background-color: white
          padding-bottom: 30px

          p
            color: #000000
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 16px
            font-weight: 300

          .img-container
            width: 100%
            display: flex

            img
              height: 100%
              width: 100%

          .n-row
            padding: 30px 26px 0
            display: flex
            flex-direction: column

          .main-link
            margin-bottom: 20px
            color: #1b65c0
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 24px
            font-weight: 700
            line-height: 24px

          .info-row
            margin-bottom: 25px
            color: #565656
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 14px
            font-weight: 400
            line-height: 18px
            display: flex
            align-items: center

            .comments,
            .watched
              line-height: 15px
              padding-left: 25px
              position: relative

              &:not(:last-child)
                margin-right: 20px

              &::before
                content: ''
                background-image: url("../img/icons/eye.png")
                background-repeat: no-repeat
                background-position: center center
                background-size: contain
                position: absolute
                left: 0
                width: 18px
                height: 11px
                @include block-vertical-centering

            .comments
              &::before
                height: 16px
                background-image: url("../img/icons/comment-icon-black.png")

            .date
              margin-right: auto

      .new-news
        width: 370px
        display: flex
        flex-direction: column
        background-color: white

        &__header
          height: 36px
          width: 100%
          border-top: 2px solid $mainRed

          div
            height: 100%
            width: 200px
            display: flex
            align-items: center
            padding-left: 28px
            background-color: $mainRed
            color: #ffffff
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 16px
            font-weight: 700
            line-height: 24px

        &-items
          display: flex
          flex-direction: column
          width: 100%

          &__item
            display: flex


            &:not(:last-child)
              border-bottom: 1px solid #e9e9e9

            .info-row
              color: #565656
              font-family: "Proxima Nova - Semi Bold", sans-serif
              font-size: 14px
              font-weight: 400
              line-height: 18px
              display: flex
              align-items: center

              .comments,
              .watched
                line-height: 15px
                padding-left: 25px
                position: relative

                &:not(:last-child)
                  margin-right: 25px

                &::before
                  content: ''
                  background-image: url("../img/icons/eye.png")
                  background-repeat: no-repeat
                  background-position: center center
                  background-size: contain
                  position: absolute
                  left: 0
                  width: 18px
                  height: 11px
                  @include block-vertical-centering

              .comments
                &::before
                  height: 16px
                  background-image: url("../img/icons/comment-icon-black.png")

              .date
                margin-right: 25px


            .name
              color: #000000
              font-family: "Proxima Nova Rg", sans-serif
              font-size: 16px
              font-weight: 700
              line-height: 18px
              margin-bottom: 15px

            a
              display: flex
              flex-direction: column
              width: 100%
              height: 100%
              padding: 26px 28px

    @media (max-width: 1087px)
      max-width: 100%
      padding: 0 40px
      margin-bottom: 40px
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
      .main-content
        flex-direction: column

        .pagination-container
          margin-right: 0
          margin-left: auto
          margin-bottom: 40px

        .new-news
          margin-bottom: 40px
          width: 100%

        .left
          width: 100%
          margin-right: 0
          margin-bottom: 10px
    @media (max-width: 768px)
      padding: 0 10px
      margin-bottom: 20px
      > h4
        font-size: 24px
      .main-content
        .search-news
          margin-bottom: 10px
          padding: 10px 10px 16px
          .inputs-row
            .search-btn
              min-width: auto
              img
                margin-right: 0
        .news-items
          .n-item
            padding-bottom: 20px
            margin-bottom: 10px

            .n-row
              padding: 18px 18px 0

            .main-link
              font-size: 21px

</style>