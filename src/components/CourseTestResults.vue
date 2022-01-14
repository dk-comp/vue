<template>
  <div class="course-test-results">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Курсы',
       ' Основы разработки прикладных решений для 1С:Предприятие 8.1: Информация',
       'Тест №1: Название теста', 'Результаты']"
      />
      <h4>Основы разработки прикладных решений для 1С:Предприятие 8.1</h4>
      <div class="extras">
        <date-views-comments />
        <tags />
        <donate-to-course />
        <share-it />
      </div>
      <h5>Результаты теста</h5>
      <div class="test-result-row">
        <div class="r-item">
          <span class="name">Текущая попытка:</span>
          <span class="value">1</span>
        </div>
        <div class="r-item">
          <span class="name">Дата:</span>
          <span class="value">28 февраля 2018</span>
        </div>
        <div class="r-item">
          <span class="name">Время:</span>
          <span class="value">17:10 - 17:24</span>
        </div>
        <div class="r-item">
          <span class="name">Баллы:</span>
          <span class="value">20 из 100</span>
        </div>
        <div class="r-item">
          <span class="name">Оценка:</span>
          <span class="value red">не сдан (2)</span>
        </div>


      </div>
      <div class="actions-row">
        <a href="#" class="button action-btn">Пересдать тест</a>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from './Breadcrumbs'
import DateViewsComments from './courses/DateViewsComments'
import Tags from './courses/Tags'
import DonateToCourse from './courses/DonateToCourse'
import ShareIt from './courses/ShareIt'
export default {
  name: 'CourseTestResults',
  components: { ShareIt, DonateToCourse, Tags, DateViewsComments, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.course-test-results
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto 50px
    max-width: 1170px

    .test-result-row
      display: flex
      flex-direction: column
      margin-bottom: 12px

      .r-item
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400
        display: flex
        align-items: flex-start
        margin-bottom: 3px

        .name
          width: 150px
          margin-right: 10px

        .value
          width: 150px

          &.red
            color: #c83636


    .actions-row
      display: flex
      padding-left: 160px

      .action-btn
        min-height: 40px
        @include button-focus-none
        background-color: $mainRed
        color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        padding: 11px 28px

    .extras
      margin-bottom: 14px
      display: flex
      flex-direction: column
      align-items: flex-start
      padding-bottom: 18px
      border-bottom: 1px solid #c9c9c9

      > *
        &:first-child
          margin-bottom: 17px

        &:nth-child(2)
          margin-bottom: 18px

        &:nth-child(3)
          margin-bottom: 20px

    > h5
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 30px
      line-height: 30px
      font-weight: 400
      margin-bottom: 22px

    > h4
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 36px
      margin-bottom: 25px
      font-weight: 400
      line-height: 27px

    @media (max-width: 1087px)
      padding: 0 40px
      margin-bottom: 40px
      > h4
        text-align: center
    @media (max-width: 768px)
      padding: 0 14px
      margin-bottom: 20px
      > h5
        font-size: 21px
      > h4
        font-size: 24px
      .extras
        align-items: center

</style>