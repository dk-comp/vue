<template>
  <div class="actual-releases">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Актуальные релизы 1С']" />
      <h4>Актуальные релизы 1С</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="releases-table">
        <div class="table-header is-hidden-mobile">
          <span>Название программного продукта</span>
          <span>Релиз</span>
          <span>Дата</span>
        </div>
        <div class="fields">
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для России»</a>
              <span>(ред.2.0)</span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для России.
                Базовая версия» </a>
              <span>(ред.1.2)</span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для бюджетных учреждений России»</a>
              <span></span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для России»</a>
              <span>(ред.2.0)</span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для России.
                Базовая версия» </a>
              <span>(ред.1.2)</span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для бюджетных учреждений России»</a>
              <span></span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для России»</a>
              <span>(ред.2.0)</span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для России.
                Базовая версия» </a>
              <span>(ред.1.2)</span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для бюджетных учреждений России»</a>
              <span></span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">«1С:Предприятие 8. Бухгалтерия для бюджетных учреждений России»</a>
              <span></span>
            </div>
            <div class="version">1.2.44.1</div>
            <div class="date">26.01.2018</div>
          </div>
        </div>
      </div>
      <h4>Как узнать номер релиза 1С</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="instructions">
        <div class="check-version-instruction">
          <h6>Для версии 8</h6>
          <p>
            В главном меню программы выбрать пункт «Справка» — «О программе…»:
          </p>
          <div class="img-container">
            <img src="../img/1c-version-8.png" />
          </div>

        </div>
        <div class="check-version-instruction">
          <h6>Для версии 7.7</h6>
          <p>
            В главном меню программы выбрать пункт «Справка» — «О программе…»:
          </p>
          <div class="img-container">
            <img src="../img/1c-version-7.png" />
          </div>
        </div>
      </div>
      <div class="recommendation">
        <h6>Последняя ли у Вас версия 1С?</h6>
        <p>
          Сравните Ваш релиз конфигурации и последнюю версию программы. Если они различаются, настоятельно рекомендуется
          обновить конфигурацию до актуального релиза. Сделать это можно двумя способами:
        </p>
        <span>обратиться к <a href="#">услугам специалистов 1С;</a></span>
        <span>самостоятельно — <a href="#">инструкция по обновлению 1С.</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'

export default {
  name: 'ActualReleases',
  components: { Breadcrumbs }
}
</script>

<style scoped lang="sass">
.actual-releases
  display: flex
  background-color: #f7f7f7
  width: 100%

  .inner
    width: 100%
    margin: 0 auto
    max-width: 1170px

    .recommendation
      display: flex
      flex-direction: column
      width: 100%
      margin-bottom: 40px

      > span
        color: black
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400
        line-height: 21px

        a
          color: #286bc2

      > p
        color: #000000
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 400
        line-height: 21px
        margin-bottom: 14px

      > h6
        color: #000000
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 18px
        font-weight: 400
        line-height: 21px
        margin-bottom: 12px

    .instructions
      display: flex
      margin-bottom: 30px

      > *
        flex-basis: 0
        flex-grow: 1

        &:first-child
          margin-right: 50px

      .check-version-instruction
        display: flex
        flex-direction: column

        .img-container
          max-height: 400px

          img
            max-height: 100%

        > p
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 16px
          font-weight: 400
          margin-bottom: 19px

        > h6
          margin-bottom: 14px
          color: #000000
          font-family: "Proxima Nova Bl", sans-serif
          font-size: 16px
          font-weight: 400
          line-height: 21px

    .releases-table
      background-color: white
      width: 100%
      padding: 30px
      display: flex
      flex-direction: column
      margin-bottom: 50px

      .fields
        display: flex
        flex-direction: column

        .field
          margin-bottom: 0
          display: flex
          align-items: center
          min-height: 60px
          padding: 0 18px
          border-top: 1px solid white
          border-bottom: 1px solid white

          .name
            line-height: 15px
            margin-right: 6%
            width: 70%
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700

            a
              margin-right: 5px
              color: #1b65c0

            span
              color: #000000

          .version
            color: #000000
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700
            width: 13%

          .date
            color: #666666
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700
            width: 11%

          &:nth-child(even)
            background-color: #f7f7f7
            border-top: 1px solid #dcd9d9
            border-bottom: 1px solid #dcd9d9

      .table-header
        display: flex
        align-items: center
        padding: 0 18px
        height: 38px
        background-color: #dddddd

        span
          color: #565656
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700

          &:first-child
            width: 76%

          &:nth-child(2)
            width: 13%

          &:nth-child(3)
            width: 11%

    > .under-header-line
      margin-bottom: 30px

    > h4
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 36px
      margin-bottom: 0
      font-weight: 400
      line-height: 27px

    @media (max-width: 1087px)
      padding: 0 40px
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
    @media (max-width: 768px)
      padding: 0 14px
      > h4
        font-size: 24px
      .recommendation
        margin-bottom: 20px
      .instructions
        margin-bottom: 20px
        flex-direction: column

        > *
          flex-basis: auto

          &:first-child
            margin-bottom: 30px
            margin-right: 0
      .releases-table
        padding: 0

        .fields
          .field
            padding: 14px 18px
            flex-wrap: wrap
            justify-content: space-between

            .name
              margin-bottom: 10px
              min-width: 100%

            .version,
            .date
              min-width: 50%

            .date
              text-align: right

</style>