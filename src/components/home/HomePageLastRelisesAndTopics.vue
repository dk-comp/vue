<template>
  <div class="home-page-last-relises-and-topics">
    <div class="inner">
      <div class="relises">
        <div class="m-title">
          <h4>Последние релизы</h4>
          <div class="under-header-line">
            <img class="is-hidden-mobile" src="../../img/icons/under-header-line-left.png">
            <img class="is-hidden-tablet" src="../../img/icons/under-header-line.png">
          </div>
        </div>
        <div class="r-items">
          <div class="r-item">
            <a href="#">1С:Бухгалтерия Предприятия 8 ред.3.0</a>
            <span>3.0.58.20 от 30.01.18</span>
          </div>
          <div class="r-item">
            <a href="#">1С:Зарплата и Управление Персоналом 8 ред.3</a>
            <span>3.0.58.20 от 30.01.18</span>
          </div>
          <div class="r-item">
            <a href="#">1С:Бухгалтерия Предприятия 8 ред.3.0</a>
            <span>3.0.58.20 от 30.01.18</span>
          </div>
          <div class="r-item">
            <a href="#">1С:Бухгалтерия Предприятия 8 ред.3.0</a>
            <span>3.0.58.20 от 30.01.18</span>
          </div>
          <div class="r-item">
            <a href="#">1С:Зарплата и Управление Персоналом 8 ред.2.5</a>
            <span>3.0.58.20 от 30.01.18</span>
          </div>
          <div class="r-item">
            <a href="#">1С:Зарплата и Управление Персоналом 8 ред.2.5</a>
            <span>3.0.58.20 от 30.01.18</span>
          </div>
          <div class="r-item">
            <a href="#">1С:Бухгалтерия Предприятия 8 ред.3.0</a>
            <span>3.0.58.20 от 30.01.18</span>
          </div>
        </div>
        <div class="show-more-row">
          <a href="#">
            <span>Все релизы</span>
            <img src="../../img/icons/angle-in-red-circle.png" />
          </a>
        </div>
      </div>
      <div class="topics">
        <div class="m-title">
          <h4>Последние статьи</h4>
          <div class="under-header-line">
            <img class="is-hidden-mobile is-hidden-desktop" src="../../img/icons/under-header-line-left.png">
            <img class="is-hidden-tablet" src="../../img/icons/under-header-line.png">
            <img class="is-hidden-touch" src="../../img/icons/under-header-line-right.png">
          </div>
        </div>
        <div class="last-topics">
          <div class="t-item"
            :style="{'background-image': 'url(' + require('../../img/topic-item-backgroun-1.png') + ')' }"
          >
            <a href="#">
              <h5>Статья о бухгалтерии в программе 1С</h5>
              <p>
                Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться...
              </p>
            </a>
          </div>
          <div class="t-item"
            :style="{'background-image': 'url(' + require('../../img/topic-item-backgroun-2.png') + ')' }"
          >
            <a href="#">
              <h5>Статья о бухгалтерии в программе 1С</h5>
              <p>
                Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться...
              </p>
            </a>
          </div>
        </div>
        <div class="show-more-row">
          <a href="#">
            <span>Все статьи</span>
            <img src="../../img/icons/angle-in-red-circle.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageLastRelisesAndTopics'
}
</script>

<style scoped lang="sass">
.home-page-last-relises-and-topics
  width: 100%
  display: flex
  background-color: #f7f7f7

  .inner
    margin: 0 auto
    max-width: 1170px
    padding: 70px 0
    width: 100%
    display: flex

    .m-title
      display: flex
      flex-direction: column
      margin-bottom: 30px

      h4
        color: #000000
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 36px
        line-height: 36px
        font-weight: 400

      p
        color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 300

    .show-more-row
      display: flex
      justify-content: flex-end
      align-items: center
      margin-top: auto

      a
        cursor: pointer
        display: flex
        align-items: center
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        text-decoration: underline

        span
          margin-right: 10px

    .relises
      display: flex
      flex-direction: column
      max-width: 350px
      margin-right: auto

      .show-more-row
        justify-content: flex-start

      .r-items
        align-items: flex-start
        display: flex
        flex-direction: column

        .r-item
          align-items: flex-start
          display: flex
          flex-direction: column
          margin-bottom: 20px

          span
            padding: 0 10px
            color: #c83636
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 15px
            font-weight: 400
            border-radius: 10px
            background-color: #ffffff

          a
            margin-bottom: 4px
            color: #000000
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700

    .topics
      width: 770px
      display: flex
      align-items: flex-end
      flex-direction: column

      .last-topics
        display: flex
        margin-bottom: 30px

        .t-item
          background-position: center center
          background-size: cover
          width: 370px
          height: 470px

          a
            display: flex
            flex-direction: column
            justify-content: flex-end
            width: 100%
            height: 100%
            padding: 40px 30px
            position: relative


            &::after
              content: ''
              position: absolute
              width: 100%
              height: 100%
              top: 0
              left: 0
              background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75))

            &:hover
              border: 2px solid $mainRed
              padding: 38px 28px

            p
              z-index: 1
              color: #ffffff
              font-family: "Proxima Nova Th", sans-serif
              font-size: 16px
              font-weight: 300

            h5
              z-index: 1
              color: #fefefe
              font-family: "Proxima Nova Rg", sans-serif
              font-size: 30px
              font-weight: 700
              line-height: 30px
              margin-bottom: 25px

          &:first-child
            margin-right: 30px

      .m-title
        align-items: flex-end

    @media (max-width: 1087px)
      max-width: 100%
      padding: 50px 40px
      flex-direction: column
      .topics
        width: 100%
        align-items: flex-start

        .show-more-row
          margin-left: auto
          justify-content: flex-end

        .m-title
          align-items: flex-start

        .last-topics
          .t-item
            flex-basis: 0
            flex-grow: 1
            width: auto
      .relises
        margin-bottom: 30px
        max-width: 100%
        width: 100%

        .show-more-row
          justify-content: flex-end

        .r-items
          max-width: 100%
          display: flex
          justify-content: space-between
          flex-wrap: wrap
          flex-direction: row

          .r-item
            width: 45%

            &:nth-child(odd)
              margin-right: 10%
    @media (max-width: 768px)
      padding: 30px 10px
      .topics
        .m-title
          width: 100%
          align-items: center

          h4
            font-size: 24px

        .last-topics
          flex-direction: column

          .t-item
            &:first-child
              margin-right: 0
              margin-bottom: 10px

      .relises
        .m-title
          width: 100%
          align-items: center

          h4
            font-size: 24px

        .r-items
          justify-content: flex-start
          flex-wrap: nowrap
          flex-direction: column

          .r-item
            width: 100%

            &:nth-child(odd)
              margin-right: 0
</style>