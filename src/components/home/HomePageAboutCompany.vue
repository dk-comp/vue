<template>
  <div class="about-company-row">
    <div class="inner">
      <h4>О компании</h4>
      <div class="under-header-line">
        <img src="../../img/icons/under-header-line.png">
      </div>
      <div class="a-text"
        :class="{'show-all-parts': mobileFoldable}"
      >
        <p>Современному бухгалтеру без программы «1С:Бухгалтерия» не обойтись. Разработчики фирмы «1С» нашли подход ко
          всем категориям клиентов, продуктом пользуются и малые фирмы, и крупные организации. Это многофункциональный
          помощник ведения учета любой сложности: от первичной документации до составления отчетов и свода баланса.</p>

        <p><span class="has-text-weight-bold">Курсы.</span> Практически в каждом городе существуют методические центры,
          в
          перечень услуг
          которых
          входит
          программа
          обучения по 1С. За установленную сумму здесь научат работать в программе, наглядно объяснят бухгалтерские азы.
          Получается теория и практика, все в одном.</p>

        <p><span class="has-text-weight-bold">Обучающие книги.</span> Выпускается множество самоучителей и путеводителей
          по
          данной теме. В данной литературе
          пошагово описывается каждое действие или проведение операции, дается описание конкретной конфигурации и
          особенности работы в ней.</p>

        <p><span class="has-text-weight-bold">Демо-версия.</span> Обычно диск с демо-версией программы прилагается к
          книге-самоучителю. При запуске с компьютера
          создается имитация того, что вы работаете в настоящей программе. Заносится выдуманная фирма и далее можно
          выполнять любые действия, которые входят в компетенцию программы: заполнять документы, формировать отчеты,
          делать проводки, совершать другие, связанные с бухгалтерией действия.
        </p>
      </div>
      <button class="button show-all is-hidden-tablet"
        @click="mobileFoldable = !mobileFoldable"
      >
        <span>{{ mobileFoldable ? 'Скрыть': 'Читать полностью' }}</span>
        <img src="../../img/icons/angle-in-gray-circle.png"
          :class="{ 'close': mobileFoldable }"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageAboutCompany',
  data: () => ({
    mobileFoldable: false
  }),
}
</script>

<style scoped lang="sass">
.about-company-row
  width: 100%
  display: flex
  background-color: #f7f7f7

  .inner
    margin: 0 auto
    max-width: 1170px
    padding: 50px 0

    .under-header-line
      display: flex
      justify-content: center
      margin-bottom: 30px

    p
      color: #000000
      font-family: "Proxima Nova - Semi Bold", sans-serif
      font-size: 16px
      font-weight: 400

      &:not(:last-child)
        margin-bottom: 20px

      .has-text-weight-bold
        font-family: "Proxima Nova Extra Bold", sans-serif

    h4
      color: #000000
      font-family: "Proxima Nova Extra Bold", sans-serif
      font-size: 36px
      font-weight: 800
      margin-bottom: 5px
      text-align: center

    @media (max-width: 1087px)
      padding: 40px
    @media (max-width: 768px)
      padding: 30px 12px 70px
      position: relative
      h4
        font-size: 24px
      .a-text
        overflow: hidden
        max-height: 380px
        transition: max-height .3s ease

        &.show-all-parts
          max-height: 1000px
      .show-all
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 15px
        font-weight: 400
        line-height: 24px
        text-decoration: underline
        background-color: #f7f7f7
        @include button-focus-none
        bottom: 25px
        position: absolute
        @include block-horizontal-centering

        span
          margin-right: 9px

        img
          transition: all .3s ease
          transform: rotate(0deg)

          &.close
            transform: rotate(180deg)

        &:hover,
        &:focus
          color: black !important
</style>