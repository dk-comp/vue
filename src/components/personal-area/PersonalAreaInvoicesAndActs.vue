<template>
  <div class="invoices-and-acts">
    <div class="title-sort-row">
      <h6>Счета и акты</h6>
      <div class="sort">
        <span>Фильтровать по</span>
        <div class="by-type">

          <span class="label">типу:</span>
          <super-select
            class="super-select border-none"
            placeholder="счет"
            :selected="['счет','акт'][0]"
            :options="['счет','акт']"
            :cancelField="false"
          />
        </div>
        <div class="by-period">
          <span class="label">периоду:</span>
          <div class="datepicker-container">
            <b-datepicker
              :mobile-native="false"
              placeholder="11.12.2018"
              icon="calendar-today"
            >
            </b-datepicker>
          </div>
          <img class="defis is-hidden-mobile" alt="-" src="../../img/icons/defis.png">
          <div class="datepicker-container">
            <b-datepicker
              :mobile-native="false"
              placeholder="11.12.2018"
              icon="calendar-today"
            >
            </b-datepicker>
          </div>
        </div>
      </div>
    </div>
    <div class="main-table">
      <div class="table-header is-hidden-mobile">
        <span>№</span>
        <span>Тип документа</span>
        <span>Дата</span>
        <span>Сумма</span>
        <span>Скачать</span>
      </div>
      <div class="fields">
        <div class="field">
          <div class="id">1</div>
          <div class="type">
            Счет
          </div>
          <div class="date">22.02.17</div>
          <div class="sum">6 730</div>
          <div class="download">
            <a href="#">
              <span class="is-hidden-mobile">Скачать</span></a>
          </div>
        </div>
        <div class="field">
          <div class="id">1</div>
          <div class="type">
            Счет
          </div>
          <div class="date">22.02.17</div>
          <div class="sum">6 730</div>
          <div class="download">
            <a href="#">
              <span class="is-hidden-mobile">Скачать</span></a>
          </div>
        </div>
        <div class="field">
          <div class="id">1</div>
          <div class="type">
            Счет
          </div>
          <div class="date">22.02.17</div>
          <div class="sum">6 730</div>
          <div class="download">
            <a href="#">
              <span class="is-hidden-mobile">Скачать</span></a>
          </div>
        </div>
        <div class="field">
          <div class="id">1</div>
          <div class="type">
            Счет
          </div>
          <div class="date">22.02.17</div>
          <div class="sum">6 730</div>
          <div class="download">
            <a href="#">
              <span class="is-hidden-mobile">Скачать</span></a>
          </div>
        </div>
        <div class="field">
          <div class="id">1</div>
          <div class="type">
            Счет
          </div>
          <div class="date">22.02.17</div>
          <div class="sum">6 730</div>
          <div class="download">
            <a href="#">
              <span class="is-hidden-mobile">Скачать</span></a>
          </div>
        </div>
        <div class="field">
          <div class="id">1</div>
          <div class="type">
            Счет
          </div>
          <div class="date">22.02.17</div>
          <div class="sum">6 730</div>
          <div class="download">
            <a href="#">
              <span class="is-hidden-mobile">Скачать</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import SuperSelect from '../SuperSelect'

export default {
  name: 'PersonalAreaInvoicesAndActs',
  components: { SuperSelect }
}
</script>

<style scoped lang="sass">
.invoices-and-acts
  margin-bottom: 50px
  padding: 30px
  background-color: white

  .main-table
    display: flex
    flex-direction: column

    .fields
      display: flex
      flex-direction: column

      .field
        margin-bottom: 0
        display: flex
        align-items: center
        min-height: 60px
        padding: 0 18px
        border-bottom: 1px solid #dcd9d9
        color: #000000
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700

        > *
          &.id
            width: 5%
            margin-right: 2%

          &.type
            width: 18%
            margin-right: 2%

          &.date
            width: 19%
            margin-right: 2%

          &.download
            margin-left: auto
            width: 13%

        .download

          a
            color: #666666
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700
            text-decoration: underline
            position: relative
            margin-right: 28px

            &::after
              content: ''
              width: 18px
              height: 18px
              position: absolute
              bottom: 0
              left: calc(100% + 10px)
              background-repeat: no-repeat
              background-position: right
              background-image: url("../../img/icons/save-file-icon.png")
              background-size: contain
              margin-bottom: 2px

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
          width: 5%
          margin-right: 2%

        &:nth-child(2)
          width: 18%
          margin-right: 2%

        &:nth-child(3)
          width: 19%
          margin-right: 2%

        &:nth-child(5)
          margin-left: auto
          width: 13%

  .title-sort-row
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 5px

    .sort
      display: flex
      align-items: center

      .by-period
        display: flex
        align-items: center

        .defis
          margin: 0 15px

        .datepicker-container
          width: 96px
          height: 31px
          background-color: #ffffff


      .label
        margin-right: 16px
        margin-bottom: 0
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 700

      .by-type
        display: flex
        align-items: center
        margin-right: 30px
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 700

      > span
        margin-right: 10px
        color: #c83636
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 700

    h6
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 21px
      margin-bottom: 0
      font-weight: 400

  @media (max-width: 1087px)
    margin-bottom: 40px
    .title-sort-row
      flex-direction: column
      align-items: flex-start
  @media (max-width: 768px)
    margin-bottom: 20px
    padding: 20px
    .main-table
      .fields
        .field
          justify-content: space-between

          > *
            flex-basis: 0
            flex-grow: 1
            margin: 0 10px
            width: auto !important
            white-space: nowrap

            &:first-child
              text-align: left
              min-width: 20px
              margin-right: 5px
              flex-basis: auto
              flex-grow: 0
              margin-left: 0

            &:last-child
              flex-basis: auto
              min-width: 20px
              flex-grow: 0
              margin-right: 0
    .title-sort-row
      .sort
        align-items: flex-start
        flex-direction: column

        .datepicker-container
          width: 100%
          max-width: 96px

          &:not(:last-child)
            margin-right: 16px
</style>