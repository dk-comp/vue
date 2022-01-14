<template>
  <div class="personal-area-courses">
    <h6>Курсы</h6>
    <div class="sort-row">
      <div class="left">
        <div class="found">
          <span>Найдено</span>
          <span class="val"> 2345</span>
        </div>
        <div class="sort-by">
          <super-select
            class="super-select border-none"
            placeholder="Все"
            :selected="['Все','Оплаченые'][0]"
            :options="['Все','Оплаченые']"
            :cancelField="false"
          />
        </div>
      </div>
      <div class="right">
        <div class="show-in-page">
          <span class="is-hidden-mobile">Вывовыдить по:</span>
          <super-select
            class="super-select"
            placeholder="36"
            :selected="['9','18'][0]"
            :options="['9','18']"
            :cancelField="false"
          />
        </div>
        <div class="pagination-container">
          <pagination />
        </div>
      </div>
    </div>
    <div class="courses-row">
      <div class="course-item">
        <div class="c-row">
          <a class="m-title" href="#">
            Курс "Разработка по промышленным стандартам на платформе 1С:Предприятие." Часть 2. Проф.
          </a>
          <div class="badges">
            <div class="b-row">
              <new-badge />
              <stars-badge />
              <paid-badge />
            </div>
            <div class="b-row">
              <status-badge :status="54" />
            </div>
          </div>
        </div>
        <div class="actions-row">
          <a class="more-details" href="#">
            Подробнее
          </a>
          <a class="action-link" href="#">
            Продолжить обучение
          </a>
        </div>
      </div>
      <div class="course-item">
        <div class="c-row">
          <a class="m-title" href="#">
            Курс "Разработка по промышленным стандартам на платформе 1С:Предприятие." Часть 2. Проф.
          </a>
          <div class="badges">
            <div class="b-row">
              <new-badge />
              <stars-badge />
              <paid-badge />
            </div>
            <!--<div class="b-row">-->
            <!--<status-badge :status="54" />-->
            <!--</div>-->
          </div>
        </div>
        <div class="actions-row">
          <a class="more-details" href="#">
            Подробнее
          </a>
          <a class="action-link" href="#">
            Начать обучение
          </a>
        </div>
      </div>
      <div class="course-item">
        <div class="c-row">
          <a class="m-title" href="#">
            Курс "Разработка по промышленным стандартам на платформе 1С:Предприятие." Часть 2. Проф.
          </a>
          <div class="badges">
            <div class="b-row">
              <new-badge />
              <stars-badge />
              <!--<paid-badge />-->
            </div>
            <div class="b-row">
              <status-badge :status="27" />
            </div>
          </div>
        </div>
        <div class="actions-row">
          <a class="more-details" href="#">
            Подробнее
          </a>
          <a class="action-link" href="#">
            Продолжить обучение
          </a>
        </div>
      </div>
      <div class="course-item">
        <div class="c-row">
          <a class="m-title" href="#">
            Курс "Разработка по промышленным стандартам на платформе 1С:Предприятие." Часть 2. Проф.
          </a>
          <div class="badges">
            <div class="b-row">
              <new-badge />
              <stars-badge />
              <!--<paid-badge />-->
            </div>
            <!--<div class="b-row">-->
            <!--<status-badge :status="54" />-->
            <!--</div>-->
          </div>
        </div>
        <div class="actions-row">
          <a class="more-details" href="#">
            Подробнее
          </a>
          <a class="action-link" href="#">
            Начать обучение
          </a>
        </div>
      </div>
      <div class="course-item">
        <div class="c-row">
          <a class="m-title" href="#">
            Курс "Разработка по промышленным стандартам на платформе 1С:Предприятие." Часть 2. Проф.
          </a>
          <div class="badges">
            <div class="b-row">
              <new-badge />
              <stars-badge />
              <paid-badge />
            </div>
            <div class="b-row">
              <status-badge :status="92" />
            </div>
          </div>
        </div>
        <div class="actions-row">
          <a class="more-details" href="#">
            Подробнее
          </a>
          <a class="action-link" href="#">
            Продолжить обучение
          </a>
        </div>
      </div>
    </div>
    <div class="pagination-row">
      <pagination class="unfolded" />
    </div>
  </div>
</template>

<script>
import SuperSelect from '../SuperSelect'
import Pagination from '../courses/Pagination'
import StatusBadge from '../courses/badges/StatusBadge'
import NewBadge from '../courses/badges/NewBadge'
import StarsBadge from '../courses/badges/StarsBadge'
import PaidBadge from '../courses/badges/PaidBadge'

export default {
  name: 'PersonalAreaCourses',
  components: { PaidBadge, StarsBadge, NewBadge, StatusBadge, Pagination, SuperSelect }
}
</script>

<style scoped lang="sass">
.personal-area-courses
  width: 100%
  display: flex
  flex-direction: column
  margin-bottom: 50px

  .courses-row
    display: flex
    flex-direction: column
    margin-bottom: 10px

    .course-item
      width: 100%
      background-color: white
      display: flex
      flex-direction: column
      padding: 20px

      &:not(:last-child)
        margin-bottom: 10px

      .actions-row
        display: flex
        justify-content: space-between

        .action-link
          color: #c83636
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700
          text-decoration: underline

        .more-details
          margin-right: 10px
          color: #1b65c0
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 15px
          font-weight: 400
          text-decoration: underline

      .c-row
        display: flex
        justify-content: space-between

        &:not(:last-child)
          margin-bottom: 30px

        .badges
          display: flex
          flex-direction: column
          align-items: flex-end

          .b-row
            display: flex
            align-items: center

            &:not(:last-child)
              margin-bottom: 7px

            > *
              &:not(:last-child)
                margin-right: 12px

        .m-title
          max-width: 565px
          margin-right: 20px
          color: #1b65c0
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 18px
          font-weight: 700
          line-height: 24px

  .sort-row
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 10px

    .right
      display: flex
      position: relative

      .show-in-page
        display: flex
        align-items: center
        position: absolute
        right: 0
        bottom: 100%
        margin-bottom: 5px

        .super-select
          width: 80px
          color: #565656
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 14px
          font-weight: 400

        > span
          white-space: nowrap
          margin-right: 18px
          color: #565656
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 16px
          font-weight: 700

    .left
      display: flex

      .sort-by
        .super-select
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          width: 210px

          .select-button
            border: none !important

      .found
        margin: 5px 10px 5px 0
        @include flex-center
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400
        background-color: white
        padding: 0 20px

        .val
          margin-left: 5px
          font-family: "Proxima Nova - Extra Bold", sans-serif
          font-weight: 700

  h6
    color: #000000
    font-family: "Proxima Nova - Extra Bold", sans-serif
    font-size: 21px
    margin-bottom: 5px
    font-weight: 400

  @media (max-width: 768px)
    .courses-row
      .course-item
        .c-row
          flex-direction: column

          .badges
            align-items: flex-start

          .m-title
            margin-bottom: 20px
    .sort-row
      align-items: flex-end

      .right
        flex-direction: column
        align-items: flex-end
        padding-bottom: 5px

        .show-in-page
          position: static

      .left
        flex-direction: column
        align-items: flex-start

        .found
          height: 35px
</style>