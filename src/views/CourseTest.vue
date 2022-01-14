<template>
  <div class="course-test">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Курсы',
       ' Основы разработки прикладных решений для 1С:Предприятие 8.1: Информация',
       'Тест №1: Название теста']"
      />
      <h4>Основы разработки прикладных решений для 1С:Предприятие 8.1</h4>
      <div class="extras">
        <date-views-comments />
        <tags />
        <donate-to-course />
        <share-it />
      </div>
      <div class="test-header">
        <h5>Тест 1: Название теста</h5>
        <div class="countdown">
          <span class="name">Осталось времени:</span>
          <span class="timer">22 : 02 : 13</span>
        </div>
      </div>
      <div class="test-questions">
        <test-question-item />
        <test-question-item />
        <test-question-item />
        <test-question-item />
        <test-question-item />
      </div>
      <div class="actions-row">
        <a href="#" class="button action-btn">Посмотреть результат</a>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import DateViewsComments from '../components/courses/DateViewsComments'
import Tags from '../components/courses/Tags'
import DonateToCourse from '../components/courses/DonateToCourse'
import ShareIt from '../components/courses/ShareIt'
import TestQuestionItem from '../components/courses/TestQuestionItem'

export default {
  name: 'CourseTest',
  components: { TestQuestionItem, ShareIt, DonateToCourse, Tags, DateViewsComments, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.course-test
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto 50px
    max-width: 1170px

    .actions-row
      display: flex
      justify-content: flex-end

      .action-btn
        min-height: 40px
        @include button-focus-none
        background-color: $mainRed
        color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        padding: 11px 28px


    .test-questions
      margin-bottom: 20px
      width: 100%
      display: flex
      flex-direction: column

      > *
        &:not(:last-child)
          margin-bottom: 10px

    .test-header
      display: flex
      justify-content: space-between
      background-color: white
      align-items: center
      min-height: 51px
      width: 100%
      box-shadow: 0 5px 7px rgba(0, 0, 0, 0.05)
      padding: 10px 30px

      .countdown
        display: flex
        align-items: center

        .timer
          width: 175px
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 36px
          line-height: 36px
          font-weight: 400
          text-align: right

        .name
          color: #000000
          max-width: 62px
          margin-right: 20px
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 14px
          font-weight: 700
          line-height: 14px

      h5
        color: #000000
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 24px
        font-weight: 400
        margin-bottom: 0

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
      > h4
        font-size: 24px
      .test-header
        padding: 20px
        flex-direction: column
        align-items: center

        h5
          text-align: center
          margin-bottom: 5px
          font-size: 21px
      .extras
        align-items: center

</style>