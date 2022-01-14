<template>
  <div class="reviews">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Отзывы']" />
      <h4>Отзывы</h4>
      <div class="under-header-line">
        <img alt="" class="is-hidden-touch" src="../img/icons/under-header-line-left.png" />
        <img alt="" class="is-hidden-desktop" src="../img/icons/under-header-line.png" />
      </div>
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
      <div class="reviews-row">
        <div class="r-item">
          <div class="avatar is-hidden-mobile">
            <img src="../img/reviewer-avatar.png">
          </div>
          <div class="desc-row">
            <div class="reviewer">
              <div class="review-for">
                <span>Отзыв написан к проекту</span>
                <a href="#">«Интеграция и автоматизация БД 1С для фабрики мебели»</a></div>
              <div class="rating">
                <rating-stars rating="4" />
              </div>
              <span class="name">Евгений Ломоносов</span>
            </div>
          </div>
          <div class="r-text-row">
            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».
              Несколько
              строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и услугах,
              которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».</p>

            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять»</p>
          </div>
        </div>
        <div class="r-item">
          <div class="avatar is-hidden-mobile">
            <img src="../img/reviewer-avatar.png">
          </div>
          <div class="desc-row">
            <div class="reviewer">
              <div class="review-for">
                <span>Отзыв написан к проекту</span>
                <a href="#">«Интеграция и автоматизация БД 1С для фабрики мебели»</a></div>
              <div class="rating">
                <rating-stars rating="4" />
              </div>
              <span class="name">Евгений Ломоносов</span>
            </div>
          </div>
          <div class="r-text-row">
            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».
              Несколько
              строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и услугах,
              которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».</p>

            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять»</p>
          </div>
        </div>
        <div class="r-item">
          <div class="avatar is-hidden-mobile">
            <img src="../img/reviewer-avatar.png">
          </div>
          <div class="desc-row">
            <div class="reviewer">
              <div class="review-for">
                <span>Отзыв написан к проекту</span>
                <a href="#">«Интеграция и автоматизация БД 1С для фабрики мебели»</a></div>
              <div class="rating">
                <rating-stars rating="4" />
              </div>
              <span class="name">Евгений Ломоносов</span>
            </div>
          </div>
          <div class="r-text-row">
            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».
              Несколько
              строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и услугах,
              которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».</p>

            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять»</p>
          </div>
        </div>
        <div class="r-item">
          <div class="avatar is-hidden-mobile">
            <img src="../img/reviewer-avatar.png">
          </div>
          <div class="desc-row">
            <div class="reviewer">
              <div class="review-for">
                <span>Отзыв написан к проекту</span>
                <a href="#">«Интеграция и автоматизация БД 1С для фабрики мебели»</a></div>
              <div class="rating">
                <rating-stars rating="4" />
              </div>
              <span class="name">Евгений Ломоносов</span>
            </div>
          </div>
          <div class="r-text-row">
            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».
              Несколько
              строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и услугах,
              которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».</p>

            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять»</p>
          </div>
        </div>
        <div class="r-item">
          <div class="avatar is-hidden-mobile">
            <img src="../img/reviewer-avatar.png">
          </div>
          <div class="desc-row">
            <div class="reviewer">
              <div class="review-for">
                <span>Отзыв написан к проекту</span>
                <a href="#">«Интеграция и автоматизация БД 1С для фабрики мебели»</a></div>
              <div class="rating">
                <rating-stars rating="4" />
              </div>
              <span class="name">Евгений Ломоносов</span>
            </div>
          </div>
          <div class="r-text-row">
            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».
              Несколько
              строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и услугах,
              которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять».</p>

            <p>Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и
              услугах, которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять»</p>
          </div>
        </div>
      </div>
      <div class="pagination-container">
        <pagination class="unfolded" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import SuperSelect from '../components/SuperSelect'
import Pagination from '../components/courses/Pagination'
import RatingStars from '../components/RatingStars'

export default {
  name: 'Reviews',
  components: { RatingStars, Pagination, SuperSelect, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.reviews
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto 50px
    max-width: 1170px

    .reviews-row
      display: flex
      flex-direction: column
      margin-bottom: 30px

      .r-item
        width: 100%
        padding-left: 150px
        position: relative
        display: flex
        flex-direction: column
        border-bottom: 1px solid #dedede
        padding-bottom: 26px

        &:not(:last-child)
          margin-bottom: 30px

        .r-text-row
          display: flex
          flex-direction: column

          p
            color: #000000
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 15px
            font-weight: 400

            &:not(:last-child)
              margin-bottom: 20px

        .desc-row
          display: flex
          align-items: center
          justify-content: space-between
          width: 100%
          margin-bottom: 25px
          position: relative


          .reviewer
            max-width: calc(100% - 140px)
            display: flex
            flex-direction: column
            color: #000000
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 15px
            font-weight: 400


            .rating
              position: absolute
              right: 0
              @include block-vertical-centering
              width: 110px

            .review-for
              display: flex
              align-items: center
              margin-bottom: 8px

              a
                color: #1b65c0

            .name
              color: #000000
              font-family: "Proxima Nova - Extra Bold", sans-serif
              font-size: 15px
              font-weight: 400

        .avatar
          width: 100px
          height: 100px
          border-radius: 50%
          position: absolute
          top: 0
          left: 25px
          overflow: hidden

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
      max-width: 100%
      padding: 0 40px
      margin-bottom: 40px
      .reviews-row
        .r-item
          .desc-row
            align-items: flex-start

            .reviewer
              .rating
                top: 0
                transform: translate(0)

              .review-for
                align-items: flex-start
                flex-direction: column
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
    @media (max-width: 768px)
      padding: 0 10px
      margin-bottom: 20px
      > h4
        font-size: 24px
      .pagination-container
        display: flex
        justify-content: flex-start
      .reviews-row
        margin-bottom: 20px

        .r-item
          flex-direction: row
          flex-wrap: wrap
          padding-left: 0
          padding-bottom: 17px

          &:not(:last-child)
            margin-bottom: 20px

          .desc-row
            width: auto
            flex-direction: column
            align-items: flex-start

            .reviewer
              max-width: 100%

              .rating
                position: static
                margin-bottom: 20px

          .avatar
            width: 64px
            height: 64px
            margin-right: 20px
            position: static

          .r-text-row
            width: 100%
      .sort-row
        flex-wrap: wrap

        .s-item
          &:first-child
            margin-bottom: 15px
            display: flex
            justify-content: flex-start
            width: 100%
            margin-right: 0

            > *
              max-width: 300px
              width: 100%
</style>