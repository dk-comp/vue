<template>
  <div class="personal-area-orders">
    <div class="orders-table">
      <div class="title-row">
        <h6>Заказы</h6>
        <div class="show-in-page is-hidden-mobile">
          <span>Выповыдить по:</span>
          <super-select
            class="super-select"
            placeholder="36"
            :selected="['9','18'][0]"
            :options="['9','18']"
            :cancelField="false"
          />
        </div>
      </div>
      <div class="table-header is-hidden-mobile">
        <span>№ заказа</span>
        <span>Дата</span>
        <span>Сумма</span>
        <span>Статус</span>
      </div>
      <div class="fields">
        <div class="field">
          <span class="order-id">23459</span>
          <span class="date">22.02.17</span>
          <span class="sum">6 730 ₽</span>
          <span class="status">
            <span class="done">Выполнен</span>
          </span>
          <a class="more-details" href="#">Подробнее</a>
        </div>
        <div class="field">
          <span class="order-id">23459</span>
          <span class="date">22.02.17</span>
          <span class="sum">6 730 ₽</span>
          <span class="status">
            <span class="fail">Не выполнен</span>
          </span>
          <a class="more-details" href="#">Подробнее</a>
        </div>
        <div class="field">
          <span class="order-id">23459</span>
          <span class="date">22.02.17</span>
          <span class="sum">6 730 ₽</span>
          <span class="status">
            <span class="done">Выполнен</span>
          </span>
          <a class="more-details" href="#">Подробнее</a>
        </div>
        <div class="field">
          <span class="order-id">23459</span>
          <span class="date">22.02.17</span>
          <span class="sum">6 730 ₽</span>
          <span class="status">
            <span class="done">Выполнен</span>
          </span>
          <a class="more-details" href="#">Подробнее</a>
        </div>
        <div class="field">
          <span class="order-id">23459</span>
          <span class="date">22.02.17</span>
          <span class="sum">6 730 ₽</span>
          <span class="status">
            <span class="done">Выполнен</span>
          </span>
          <a class="more-details" href="#">Подробнее</a>
        </div>
        <div class="field">
          <span class="order-id">23459</span>
          <span class="date">22.02.17</span>
          <span class="sum">6 730 ₽</span>
          <span class="status">
            <span class="done">Выполнен</span>
          </span>
          <a class="more-details" href="#">Подробнее</a>
        </div>
        <div class="field">
          <span class="order-id">23459</span>
          <span class="date">22.02.17</span>
          <span class="sum">6 730 ₽</span>
          <span class="status">
            <span class="done">Выполнен</span>
          </span>
          <a class="more-details" href="#">Подробнее</a>
        </div>
        <div class="field">
          <span class="order-id">23459</span>
          <span class="date">22.02.17</span>
          <span class="sum">6 730 ₽</span>
          <span class="status">
            <span class="done">Выполнен</span>
          </span>
          <a class="more-details" href="#">Подробнее</a>
        </div>
        <div class="field">
          <span class="order-id">23459</span>
          <span class="date">22.02.17</span>
          <span class="sum">6 730 ₽</span>
          <span class="status">
            <span class="done">Выполнен</span>
          </span>
          <a class="more-details" href="#">Подробнее</a>
        </div>
      </div>
    </div>
    <div class="pagination-container">
      <pagination class="unfolded" />
    </div>
  </div>
</template>

<script>
import SuperSelect from '../SuperSelect'
import Pagination from '../courses/Pagination'

export default {
  name: 'PersonalAreaOrders',
  components: { Pagination, SuperSelect }
}
</script>

<style scoped lang="sass">
.personal-area-orders
  display: flex
  flex-direction: column
  width: 100%
  margin-bottom: 40px

  .orders-table
    background-color: white
    display: flex
    flex-direction: column
    padding: 30px
    width: 100%
    margin-bottom: 20px

    .fields
      width: 100%
      display: flex
      flex-direction: column

      .field
        padding: 12px 18px
        display: flex
        align-items: center
        min-height: 35px
        border-bottom: 1px solid #dcd9d9

        .status
          .fail
            display: flex
            &::before
              content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAqUlEQVQoU12QsQ3CQAxFv12c6MgGMEKai5IOJiFMAKPABIRJoCMiRWCDsEHSoStsdNGddKKxJf8n/29Tn+eZM+YgzNeqbQcAeJTlmkV2xrkztUXhhysAI6tuPSBENwAZgFcKeG30JYi+f+hpbS5EdwDLIMY2seqGZk9rayK6pICq7quua+KG6Jkyc6b/DFMgot2QArNnuCJmepP/w9eYI5ib9A8QqRfOnX5D7EZ+HVLuiwAAAABJRU5ErkJggg==")
              margin-right: 16px

          .done
            display: flex
            &::before
              content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAAA9ElEQVQoU42QMUvDYBCGn0vQTSe7dRS0flIUnQW3fFtHFxeHbmnapbO7oom7goIgFkRQ2jTVWehqzF9wFXESkhOFiohVb717X+55hH+M310uue5rRwv25K97v1stO04+AOYR6fwaCHrVOSS/AcqKHj0+m/rYQCtZXC0K7QEzorobelkbQWX73Ew+TTkrob2/G73XiM26wCUwjUo7sunOaCdBbK4BD9iKvIeTZr9SU3XOgAlU6pFND79yStCvrKHO1XubKMcqbAK5qGyENr34LuWDoZmYJS1IgBLwoqq1A5vd/mTwE7oVL8zmyKmL+vteNhyn+w23yFH+TJCipwAAAABJRU5ErkJggg==")
              margin-right: 10px

        a
          margin-left: auto
          color: #6c6c6c
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700
          text-decoration: underline

          &::after
            content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAcElEQVQYV22PyxVAMBBF32yy1gkdoINYJG1RSjpAB3Ri/bJxJsQJxyzfnc8dcc41AMYY4xBCOHCXeO8XAC2AjWSfoVhrK2OMwrqEopN/MIEfuH7BDEBlLnCvyuFOssvHX6Galbqp89HVB0VkImnLB09zBkWPElJdtgAAAABJRU5ErkJggg==")
            margin-left: 10px

        > span
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700

          &:nth-child(1)
            width: 14%
            margin-right: 2%

          &:nth-child(2)
            width: 12%
            margin-right: 2%

          &:nth-child(3)
            width: 19%
            margin-right: 2%

    .table-header
      width: 100%
      height: 38px
      background-color: #f7f7f7
      display: flex
      align-items: center
      padding: 0 18px

      span
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700

        &:nth-child(1)
          width: 14%
          margin-right: 2%

        &:nth-child(2)
          width: 12%
          margin-right: 2%

        &:nth-child(3)
          width: 19%
          margin-right: 2%

    .title-row
      justify-content: space-between
      align-items: center
      display: flex
      margin-bottom: 10px

      .show-in-page
        display: flex
        align-items: center

        .super-select
          width: 80px
          color: #565656
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 14px
          font-weight: 400

        > span
          margin-right: 18px
          color: #565656
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 16px
          font-weight: 700

      h6
        margin-bottom: 0
        color: #000000
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 21px
        font-weight: 400

  @media (max-width: 768px)
    .orders-table
      padding: 20px

      .fields
        .field
          padding: 12px 0
          flex-direction: column
          align-items: flex-start

          > span
            width: 100% !important
            display: flex
            justify-content: space-between
            align-items: center
            text-align: right
            &:not(:last-child)
              margin-bottom: 5px

            &::before
              content: ''
              color: #565656
              font-family: "Proxima Nova Rg", sans-serif
              font-size: 15px
              font-weight: 700

          .status
            &::before
              content: 'Статус'

          .sum
            &::before
              content: 'Сумма'

          .date
            &::before
              content: 'Дата'

          .order-id
            &::before
              content: '№ заказа'


</style>