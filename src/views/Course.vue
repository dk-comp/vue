<template>
  <div class="course">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная',
       ' Основы разработки прикладных решений для 1С:Предприятие 8.1: Информация',]"
      />
      <div class="header-row">
        <h4>Основы разработки прикладных решений
          для 1С:Предприятие 8.3: Информация</h4>
        <div class="status-block">
          <div class="badges-row">
            <new-badge />
            <stars-badge />
          </div>
          <div class="badges-row">
            <status-badge :status="90" />
          </div>
        </div>
      </div>
      <div class="extras">
        <div class="author">
          Евгений Ломоносов
        </div>
        <div class="info-row">
          <div class="left">
            <div class="img-container">
              <img src="../img/course-img-example.png" alt="img" />
            </div>
            <div class="share">
              <share-it />
            </div>
          </div>
          <div class="right">
            <div class="form-of-study">
              <div class="f-item">
                <span class="name">Форма обучения:</span>
                <span class="value">дистанционная</span>
              </div>
              <div class="f-item">
                <span class="name">Доступ:</span>
                <span class="value">свободный</span>
              </div>
              <div class="f-item">
                <span class="name">Уровень:</span>
                <span class="value">для всех</span>
              </div>
              <div class="f-item">
                <span class="name">Длительность:</span>
                <span class="value">6:22:00</span>
              </div>
              <div class="f-item">
                <span class="name">Качество курса:</span>
                <span class="value">4.62 | 4.38</span>
              </div>
            </div>
            <div class="begin-donate-course">
              <div class='question'>
                <span>Вам нравится?</span>
                <span>Нравится 82 студентам</span>
              </div>
              <div class="btn-container">
                <button class="button begin-btn">
                  <span>Пройти курс</span>
                </button>
                <button class="button donate-btn">
                  <img src="../img/icons/coins-icon.png" alt="coins" />
                  <span>Поддержать курс</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <about-course />
      <lessons-plan />
      <reviews-about-course />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import NewBadge from '../components/courses/badges/NewBadge'
import StarsBadge from '../components/courses/badges/StarsBadge'
import StatusBadge from '../components/courses/badges/StatusBadge'
import ShareIt from '../components/courses/ShareIt'
import AboutCourse from '../components/courses/AboutCourse'
import LessonsPlan from '../components/courses/LessonsPlan'
import ReviewsAboutCourse from '../components/courses/ReviewsAboutCourse'

export default {
  name: 'Course',
  components: { ReviewsAboutCourse, LessonsPlan, AboutCourse, ShareIt, StatusBadge, StarsBadge, NewBadge, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.course
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto 50px
    max-width: 1170px

    .extras
      margin-bottom: 32px
      display: flex
      flex-direction: column


      .info-row
        display: flex

        .right
          margin-bottom: 40px
          display: flex
          flex-direction: column
          flex-grow: 1

          .form-of-study
            display: flex
            flex-direction: column
            margin-bottom: 30px

            .f-item
              display: flex
              color: #000000
              font-size: 16px
              font-weight: 400
              line-height: 24px

              .value
                font-family: "Proxima Nova - Rg", sans-serif
                font-weight: 400

              .name
                width: 200px
                margin-right: 20px
                font-family: "Proxima Nova - Semi Bold", sans-serif
                font-weight: 600

          .begin-donate-course
            width: 100%
            display: flex
            align-items: center
            position: relative

            .btn-container
              flex-grow: 1
              display: flex
              align-items: center

              .begin-btn
                height: 35px
                @include button-focus-none
                color: #ffffff
                font-family: "Proxima Nova Rg", sans-serif
                font-size: 15px
                font-weight: 700
                background-color: $mainRed
                margin-right: auto
                padding: 0 18px

              .donate-btn
                @include button-focus-none
                width: 190px
                height: 35px
                color: #ffffff
                font-family: "Proxima Nova Rg", sans-serif
                font-size: 15px
                font-weight: 700
                background-color: #565656

                img
                  margin-right: 10px

            .question
              height: 35px
              margin-right: 50px
              display: flex
              flex-direction: column
              justify-content: space-between
              color: #000000
              font-family: "Proxima Nova - Semi Bold", sans-serif
              font-size: 16px
              font-weight: 400

              span
                line-height: 15px

                &:first-child
                  color: #1b65c0

        .left
          min-width: 470px
          width: 470px
          margin-right: 30px
          display: flex
          flex-direction: column

          .img-container
            flex-grow: 1
            margin-bottom: 19px
            background-color: white
            padding: 0 30px
            display: flex
            align-items: center

      .author
        margin-bottom: 16px
        color: #000000
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 15px
        font-weight: 400

        &::before
          content: 'Автор: '
          color: #565656
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 14px
          font-weight: 600

    .header-row
      display: flex
      align-items: flex-start
      justify-content: space-between
      margin-bottom: 22px

      .status-block
        display: flex
        flex-direction: column

        > *
          display: flex
          justify-content: flex-end
          align-items: flex-start

        .badges-row
          display: flex

          &:not(:last-child)
            margin-bottom: 12px

          > *
            &:not(:last-child)
              margin-right: 12px

      > h4
        margin-bottom: 0
        max-width: 750px
        color: #000000
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 36px
        font-weight: 400
        line-height: 42px

    @media (max-width: 1087px)
      padding: 0 40px
      margin-bottom: 40px
      .extras
        .info-row
          .right
            margin-bottom: 0

            .begin-donate-course
              flex-direction: column
              align-items: flex-start

              .btn-container
                width: 100%

              .question
                margin-bottom: 27px

          .left
            min-width: 270px
            width: 270px

            .img-container
              margin-bottom: calc(27px + 35px - 21px)

      .header-row
        flex-direction: column

        .status-block
          width: 100%
          flex-direction: row
          justify-content: space-between

          .badges-row
            display: flex

            &:not(:last-child)
              margin-right: 12px
              margin-bottom: 0

        > h4
          margin-bottom: 16px
          max-width: 100%
          text-align: center
    @media (max-width: 768px)
      padding: 0 14px
      margin-bottom: 20px
      .extras
        position: relative
        padding-bottom: 21px
        margin-bottom: 150px

        .info-row
          flex-direction: column

          .right
            .begin-donate-course
              position: static

              .btn-container
                position: absolute
                top: calc(100% + 20px)
                left: 0
                align-items: flex-end
                flex-direction: column

                .begin-btn
                  margin-right: 0
                  margin-bottom: 20px

          .left
            width: 100%
            max-width: 100%
            margin-right: 0

            .share
              position: absolute
              bottom: 0

            .img-container
              justify-content: center
              height: 190px
              flex-grow: 0
              padding: 0 20px
      .header-row
        flex-direction: column

        .status-block
          justify-content: flex-start


        > h4
          font-size: 24px
</style>