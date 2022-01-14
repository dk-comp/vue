<template>
  <div class="project-in-detail-training-courses">
    <h4>Курсы по обучению</h4>
    <div class="under-header-line">
      <img class="is-hidden-touch" src="../../img/icons/under-header-line-left.png">
      <img class="is-hidden-desktop" src="../../img/icons/under-header-line.png">
    </div>
    <div class="courses">
      <div class="c-item">
        <div class="img-container is-hidden-mobile">
          <img src="../../img/course-img.png" alt="Course avatar" />
        </div>
        <div class="c-header">
          <div class="title-badge-container">
            <a href="#" class="c-title">Курс "Разработка по промышленным стандартам на платформе 1С:Предприятие."
              Часть 2.
              Проф.</a>
            <div class="badges">
              <div class="left">
                <new-badge />
                <stars-badge />
                <paid-badge />
              </div>
              <div class="right">
                <status-badge :status="60" />
              </div>
            </div>
          </div>
          <div class="tags-container">
            <tags />
          </div>
        </div>
        <p class="about-course is-hidden-mobile">
          Данный курс предназначен для разработчиков, имеющих базовые навыки в работе по промышленным стандартам в 1С и
          желающих построить процессы непрерывной интеграции и непрерывного развертывания 1С решений.
        </p>
        <div class="c-footer">
          <div class="actions">
            <a href="#" class="button action-btn">Продолжить обучение</a>
            <a href="#" class="more">Подробнее</a>
          </div>
          <div class="extra is-hidden-mobile">
            <date-views-comments />
          </div>
        </div>
      </div>
      <div class="c-item">
        <div class="img-container is-hidden-mobile">
          <img src="../../img/course-img-2.png" alt="Course avatar" />
        </div>
        <div class="c-header">
          <div class="title-badge-container">
            <a href="#" class="c-title">
              Курс "Администратор 1С" v: 1.3 (Все модули)
            </a>
            <div class="badges">
              <div class="left">
                <new-badge />
                <stars-badge />
              </div>
              <div class="right">
                <status-badge :status="100" />
              </div>
            </div>
          </div>
          <div class="tags-container">
            <tags />
          </div>
        </div>
        <p class="about-course is-hidden-mobile">
          Данный курс предназначен для разработчиков, имеющих базовые навыки в работе по промышленным стандартам в 1С и
          желающих построить процессы непрерывной интеграции и непрерывного развертывания 1С решений.
        </p>
        <div class="c-footer">
          <div class="actions">
            <a href="#" class="button action-btn">Пройти повторно</a>
            <a href="#" class="more">Подробнее</a>
          </div>
          <div class="extra is-hidden-mobile">
            <date-views-comments />
          </div>
        </div>
      </div>
      <div class="c-item">
        <div class="img-container is-hidden-mobile">
          <img src="../../img/course-img.png" alt="Course avatar" />
        </div>
        <div class="c-header">
          <div class="title-badge-container">
            <a href="#" class="c-title">Курс "Разработка по промышленным стандартам на платформе 1С:Предприятие."
              Часть 2.
              Проф.</a>
            <div class="badges">
              <div class="left">
                <new-badge />
                <stars-badge />
              </div>
              <div class="right">
                <!--<status-badge :status="60" />-->
              </div>
            </div>
          </div>
          <div class="tags-container">
            <tags />
          </div>
        </div>
        <p class="about-course is-hidden-mobile">
          Данный курс предназначен для разработчиков, имеющих базовые навыки в работе по промышленным стандартам в 1С и
          желающих построить процессы непрерывной интеграции и непрерывного развертывания 1С решений.
        </p>
        <div class="c-footer">
          <div class="actions">
            <a href="#" class="button action-btn">Пройти курс</a>
            <a href="#" class="more">Подробнее</a>
          </div>
          <div class="extra is-hidden-mobile">
            <date-views-comments />
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-container">
      <pagination class="unfolded-tablet" />
    </div>
  </div>
</template>

<script>
import NewBadge from '../courses/badges/NewBadge'
import StarsBadge from '../courses/badges/StarsBadge'
import PaidBadge from '../courses/badges/PaidBadge'
import StatusBadge from '../courses/badges/StatusBadge'
import Tags from '../courses/Tags'
import DateViewsComments from '../courses/DateViewsComments'
import Pagination from '../courses/Pagination'

export default {
  name: 'ProjectInDetailTrainingCourses',
  components: { Pagination, DateViewsComments, Tags, StatusBadge, PaidBadge, StarsBadge, NewBadge }
}
</script>

<style scoped lang="sass">
.project-in-detail-training-courses
  display: flex
  flex-direction: column
  margin-bottom: 40px

  .courses
    width: 100%
    display: flex
    flex-direction: column
    margin-bottom: 26px

    .c-item
      display: flex
      flex-direction: column
      position: relative
      padding-left: 200px
      min-height: 170px

      &:not(:last-child)
        margin-bottom: 40px

      .c-footer
        display: flex
        flex-direction: column

        .actions
          display: flex
          align-items: center
          max-width: 340px
          margin-bottom: 18px

          .more
            color: #1b65c0
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 15px
            font-weight: 400
            text-decoration: underline

          .action-btn
            margin-right: 42px
            @include button-focus-none
            text-align: center
            color: #ffffff
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700
            padding: 0 18px
            min-height: 35px
            background-color: #565656

      .about-course
        color: #000000
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 400
        line-height: 21px
        margin-bottom: 11px

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

      .img-container
        width: 170px
        height: 170px
        overflow: hidden
        position: absolute
        left: 0
        top: 0
        @include flex-center

        img
          max-height: 100%


  h4
    color: #000000
    font-family: "Proxima Nova - Extra Bold", sans-serif
    margin-bottom: 0
    font-weight: 400
    line-height: 27px
    font-size: 30px
  .under-header-line
    margin-bottom: 30px
  @media (max-width: 1087px)
    margin-bottom: 40px
    .courses
      margin-bottom: 40px
      .c-item
        padding-left: 0

        .c-footer
          justify-content: space-between
          align-items: center
          flex-direction: row-reverse
          .actions
            margin-bottom: 0

        .img-container
          width: 120px
          height: 120px

        .c-header
          padding-left: 150px
          min-height: 120px

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

        &:not(:last-child)
          margin-bottom: 35px
    h4
      text-align: center
    > .under-header-line
      margin-top: 12px
      display: flex
      justify-content: center
  @media (max-width: 768px)
    margin-bottom: 20px
    .courses
      margin-bottom: 20px
      .c-item
        .c-footer
          max-width: 100%
          width: 100%
          flex-direction: row
          .actions
            flex-direction: row-reverse
            width: 100%

            .action-btn
              margin-left: auto
              margin-right: 0

        .c-header
          padding-left: 0
          min-height: 0

          .title-badge-container
            .c-title
              font-size: 18px

            .badges
              flex-direction: column
              align-items: flex-start

              .left
                margin-bottom: 10px

        &:not(:last-child)
          margin-bottom: 30px
    h4
      font-size: 24px
</style>
