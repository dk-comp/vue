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
      <div class="forum-row">
        <div class="f-container">
          <div class="f-header">Обучение</div>
          <div class="f-items">
            <div class="f-item">
              <div class="f-body">
                <div class="left">
                  <a href="#">Курсы по 1С</a>
                  <span>Обсуждение курсов по 1С</span>
                </div>
                <div class="right">
                  <div class="about-forum">
                    <span>13 007 Сообщений</span>
                    <span>829 Тем</span>
                  </div>
                  <div class="last-post">
                    <span><b>Последний ответ</b> от alex</span>
                    <span><b>Сегодня</b> в 2:03:35</span>
                  </div>
                </div>
              </div>
              <div class="f-footer">
                <span>Подразделы:</span>
                <div class="subsections">
                  <a href="#">Курсы по 1С:Бухгалтерии</a>
                  <a href="#">Курсы по 1С:Предпринимательство</a>
                </div>
              </div>
            </div>
            <div class="f-item">
              <div class="f-body">
                <div class="left">
                  <a href="#">Курсы offline</a>
                  <span>Обсуждение offline курсов по 1С</span>
                </div>
                <div class="right">
                  <div class="about-forum">
                    <span>13 007 Сообщений</span>
                    <span>829 Тем</span>
                  </div>
                  <div class="last-post">
                    <span><b>Последний ответ</b> от alex</span>
                    <span><b>Сегодня</b> в 2:03:35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="f-container">
          <div class="f-header">Решения</div>
          <div class="f-items">
            <div class="f-item">
              <div class="f-body">
                <div class="left">
                  <a href="#">Курсы по 1С</a>
                  <span>Обсуждение курсов по 1С</span>
                </div>
                <div class="right">
                  <div class="about-forum">
                    <span>13 007 Сообщений</span>
                    <span>829 Тем</span>
                  </div>
                  <div class="last-post">
                    <span><b>Последний ответ</b> от alex</span>
                    <span><b>Сегодня</b> в 2:03:35</span>
                  </div>
                </div>
              </div>
              <div class="f-footer">
                <span>Подразделы:</span>
                <div class="subsections">
                  <a href="#">Курсы по 1С:Бухгалтерии</a>
                  <a href="#">Курсы по 1С:Предпринимательство</a>
                </div>
              </div>
            </div>
            <div class="f-item">
              <div class="f-body">
                <div class="left">
                  <a href="#">Курсы offline</a>
                  <span>Обсуждение offline курсов по 1С</span>
                </div>
                <div class="right">
                  <div class="about-forum">
                    <span>13 007 Сообщений</span>
                    <span>829 Тем</span>
                  </div>
                  <div class="last-post">
                    <span><b>Последний ответ</b> от alex</span>
                    <span><b>Сегодня</b> в 2:03:35</span>
                  </div>
                </div>
              </div>
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
  name: 'Forum',
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

    .forum-row
      display: flex
      flex-direction: column
      margin-bottom: 20px

      .f-container
        display: flex
        flex-direction: column

        &:not(:last-child)
          margin-bottom: 10px

        .f-items
          display: flex
          flex-direction: column

          .f-item
            display: flex
            flex-direction: column

            &:not(:last-child)
              margin-bottom: 5px

            .f-footer
              padding: 10px 21px
              background-color: #f0f0f0
              display: flex
              align-items: center
              flex-wrap: wrap

              span
                color: #000000
                font-family: "Proxima Nova - Extra Bold", sans-serif
                font-size: 14px
                font-weight: 400
                margin-right: 10px

              .subsections
                display: flex
                flex-wrap: wrap

                a
                  margin-right: 10px
                  color: #000000
                  font-family: "Proxima Nova - Semi Bold", sans-serif
                  font-size: 14px
                  font-weight: 400
                  text-decoration: underline

            .f-body
              background-color: white
              padding: 25px 30px
              display: flex
              align-items: center

              .left
                width: 700px
                display: flex
                flex-direction: column

                span
                  color: #000000
                  font-family: "Proxima Nova - Semi Bold", sans-serif
                  font-size: 14px
                  font-weight: 400

                a
                  color: #1b65c0
                  font-family: "Proxima Nova Rg", sans-serif
                  font-size: 18px
                  font-weight: 700
                  line-height: 24px

              .right
                flex-grow: 1
                display: flex
                align-items: center

                > *
                  width: 50%

                .last-post
                  display: flex
                  flex-direction: column
                  color: #565656
                  font-family: "Proxima Nova - Semi Bold", sans-serif
                  font-size: 14px
                  font-weight: 400

                  b
                    font-family: "Proxima Nova - Extra Bold", sans-serif

                .about-forum
                  color: #565656
                  font-family: "Proxima Nova - Semi Bold", sans-serif
                  font-size: 14px
                  font-weight: 400
                  display: flex
                  flex-direction: column
                  text-align: center


        .f-header
          min-height: 45px
          width: 100%
          background-color: #565656
          color: #ffffff
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 18px
          line-height: 18px
          font-weight: 700
          padding: 14px 27px
          margin-bottom: 5px

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
      margin-bottom: 30px

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

      .forum-row
        .f-container
          .f-items
            .f-item
              .f-body
                flex-direction: column

                .right
                  width: 100%

                  .about-forum
                    text-align: left

                .left
                  width: 100%
                  margin-bottom: 20px

    @media (max-width: 768px)
      margin-bottom: 20px
      padding: 0 10px
      > h4
        font-size: 24px
      .forum-row
        .f-container
          .f-items
            .f-item
              .f-footer
                flex-direction: column
                align-items: flex-start

                .subsections
                  flex-direction: column

              .f-body
                .right
                  flex-direction: column

                  .about-forum
                    margin-bottom: 20px

                  > *
                    width: 100%
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