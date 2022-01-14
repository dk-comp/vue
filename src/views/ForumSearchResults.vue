<template>
  <div class="forum">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Форум']" />
      <h4>Форум</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <forum-search />
      <div class="sort-row">
        <div class="s-item">
          <super-select
            class="super-select border-none"
            placeholder="Новые"
            :selected="['Сортировка: Новые','Новые'][0]"
            :options="['Новые','Новые']"
            :cancelField="false"
          />
        </div>
        <div class="s-item">
          <super-select
            class="super-select border-none"
            placeholder="Все время"
            :selected="['Все время','Все время'][0]"
            :options="['Все время','Все время']"
            :cancelField="false"
          />
        </div>
        <div class="pagination-container">
          <pagination />
        </div>
      </div>
      <div class="result-info">
        <div class="search-word">
          Поиск: Ключевые слова: Курсы
        </div>
        <div class="founded">Всего найдено 245 совпадений</div>
      </div>
      <div class="result-table">
        <div class="table-header is-hidden-touch">
          <span>Тема/Автор</span>
          <span>Последнее сообщение</span>
          <span>Ответов</span>
          <span>Просмотров</span>
          <span>Раздел</span>
        </div>
        <div class="fields">
          <div class="field">
            <div class="name">
              <a href="#">Курсы по 1С: Предприятие</a>
              <span>Алексей Буравченков</span>
            </div>
            <div class="last-post">
              <span><b>Последний ответ</b> от alex</span>
              <span><b>Сегодня</b> в 2:03:35</span>
            </div>
            <div class="replies">244</div>
            <div class="views">588</div>
            <div class="f-section">
              <a href="#">Курсы по 1С</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">Курсы по 1С: Предприятие</a>
              <span>Алексей Буравченков</span>
            </div>
            <div class="last-post">
              <span><b>Последний ответ</b> от alex</span>
              <span><b>Сегодня</b> в 2:03:35</span>
            </div>
            <div class="replies">244</div>
            <div class="views">588</div>
            <div class="f-section">
              <a href="#">Курсы по 1С</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              <a href="#">Курсы по 1С: Предприятие</a>
              <span>Алексей Буравченков</span>
            </div>
            <div class="last-post">
              <span><b>Последний ответ</b> от alex</span>
              <span><b>Сегодня</b> в 2:03:35</span>
            </div>
            <div class="replies">244</div>
            <div class="views">588</div>
            <div class="f-section">
              <a href="#">Курсы по 1С</a>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-container">
        <pagination class="unfolded-tablet" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import ForumSearch from '../components/forum/ForumSearch'
import Pagination from '../components/courses/Pagination'
import SuperSelect from '../components/SuperSelect'

export default {
  name: 'ForumSearchResults',
  components: { SuperSelect, Pagination, ForumSearch, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.forum
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    max-width: 1170px
    margin: 0 auto 50px

    .result-table
      display: flex
      flex-direction: column
      margin-bottom: 20px

      .fields
        display: flex
        flex-direction: column

        .field
          display: flex
          align-items: flex-start
          background-color: white
          padding: 22px 28px
          min-height: 82px
          margin-bottom: 3px

          &:last-child
            margin-bottom: 0

          .f-section
            flex-grow: 1

            a
              color: #1b65c0
              font-family: "Proxima Nova Rg", sans-serif
              font-size: 16px
              font-weight: 700
              line-height: 24px

          .replies,
          .views
            color: #565656
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 14px
            font-weight: 400

          .views
            width: 110px
            margin-right: 10px

          .replies
            width: 80px
            margin-right: 10px

          .last-post
            width: 200px
            margin-right: 20px
            display: flex
            flex-direction: column
            color: #565656
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 14px
            font-weight: 400

            b
              font-family: "Proxima Nova - Extra Bold", sans-serif

          .name
            display: flex
            flex-direction: column
            width: 500px
            margin-right: 10px

            span
              color: #565656
              font-family: "Proxima Nova - Extra Bold", sans-serif
              font-size: 14px
              font-weight: 400

              &::before
                content: 'Автор: '
                color: #000000
                font-family: "Proxima Nova - Semi Bold", sans-serif

            a
              color: #1b65c0
              font-family: "Proxima Nova Rg", sans-serif
              font-size: 18px
              font-weight: 700
              line-height: 24px

      .table-header
        display: flex
        align-items: center
        padding: 0 28px
        height: 34px
        background-color: #f0f0f0

        span
          color: #565656
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700

          &:first-child
            width: 500px
            margin-right: 10px

          &:nth-child(2)
            width: 200px
            margin-right: 20px

          &:nth-child(3)
            width: 80px
            margin-right: 10px

          &:nth-child(4)
            width: 110px
            margin-right: 10px

          &:nth-child(5)
            flex-grow: 1

    .result-info
      background-color: #565656
      display: flex
      justify-content: space-between
      padding: 10px 28px
      color: white
      align-items: center
      margin-bottom: 5px

      .search-word
        line-height: 24px
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 700

      .founded
        line-height: 24px
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 14px
        font-weight: 400

    > .under-header-line
      margin-bottom: 30px

    > h4
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 36px
      margin-bottom: 0
      font-weight: 400
      line-height: 27px

    .sort-row
      display: flex
      align-items: center
      margin-bottom: 16px

      .s-item
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        line-height: 26px
        font-weight: 400
        margin-right: 10px

      .pagination-container
        margin-left: auto


    @media (max-width: 1087px)
      max-width: 100%
      padding: 0 40px
      margin-bottom: 40px
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
      .result-table
        .fields
          .field
            margin-bottom: 10px
            flex-wrap: wrap

            .f-section,
            .replies,
            .views,
            .last-post
              display: flex
              flex-direction: column
              align-items: flex-start

              &::before
                content: ''
                margin-bottom: 8px
                color: #000000
                font-family: "Proxima Nova - Extra Bold", sans-serif
                font-size: 14px
                font-weight: 400

            .last-post
              &::before
                content: 'Последнее сообщение'

            .views
              &::before
                content: 'Просмотров'

            .replies
              &::before
                content: 'Ответов'

            .f-section
              &::before
                content: 'Раздел'

            .name
              width: 100%
              margin-bottom: 16px
    @media (max-width: 768px)
      margin-bottom: 20px
      padding: 0 10px
      > h4
        font-size: 24px
      .result-info
        flex-direction: column
        align-items: flex-start
      .result-table
        .fields
          .field

            .last-post
              width: 100%
              margin-bottom: 16px
            .f-section
              width: 100%
              margin-top: 16px
      .sort-row
        flex-wrap: wrap

        .s-item
          flex-grow: 1
          max-width: 400px

          &:first-child
            margin-bottom: 0
            display: flex
            justify-content: flex-start
            width: 100%
            margin-right: 0
            max-width: 100%

            > *
              max-width: 400px
              width: 100%
</style>