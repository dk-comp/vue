<template>
  <div class="test-question-item">
    <div class="question-row">
      <div class="q-id">Вопрос №1</div>
      <p class="q-text">
        В каком режиме работы программы осуществляется исполнение прикладного решения, предназначенного для
        автоматизации учетной деятельности организаций?
      </p>
      <div class="extra-info">
        (Отметьте один правильный вариант ответа.)
      </div>
    </div>
    <div class="answers-row">
      <div class="a-item">
        <div class="field radio-style">
          <b-checkbox>
            в режиме 1С:Предприятие
          </b-checkbox>
        </div>
      </div>
      <div class="a-item">
        <div class="field radio-style">
          <b-checkbox>
            в режиме 1С:Предприятие и в режиме 1С:Конфигуратор
          </b-checkbox>
        </div>
      </div>
      <div class="a-item">
        <div class="field radio-style">
          <b-checkbox>
            в режиме 1С:Организация
          </b-checkbox>
        </div>
      </div>
      <div class="a-item">
        <div class="field radio-style">
          <b-checkbox>
            в режиме Конфигуратор
          </b-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestQuestionItem'
}
</script>

<style scoped lang="sass">
.test-question-item
  width: 100%
  border-top: 2px solid $mainRed
  display: flex
  flex-direction: column
  background-color: white

  .answers-row
    width: 100%
    display: flex
    flex-direction: column
    padding: 30px

    .a-item
      color: #000000
      font-family: "Proxima Nova - Semi Bold", sans-serif
      font-size: 16px
      font-weight: 400
      line-height: 36px

  .question-row
    width: 100%
    border-bottom: 2px solid #d4d4d4
    display: flex
    flex-direction: column
    padding: 30px 30px 20px

    .extra-info
      color: #000000
      font-family: "Proxima Nova - Semi Bold", sans-serif
      font-size: 14px
      font-weight: 400
      line-height: 21px

    .q-text
      color: #000000
      font-family: "Proxima Nova - Semi Bold", sans-serif
      font-size: 18px
      font-weight: 400
      line-height: 21px
      margin-bottom: 16px

    .q-id
      color: #c83636
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 16px
      font-weight: 700
      line-height: 21px
      margin-bottom: 16px

      &::after
        content: ':'

  @media (max-width: 1087px)
    .question-row
      padding: 30px 20px 15px 20px
</style>