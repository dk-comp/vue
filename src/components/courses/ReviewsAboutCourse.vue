<template>
  <div class="reviews-about-course">
    <h5>Отзывы</h5>
    <div class="under-header-line">
      <img class="is-hidden-touch" src="../../img/icons/under-header-line-left.png">
      <img class="is-hidden-desktop" src="../../img/icons/under-header-line.png">
    </div>
    <div class="reviews-block">
      <div class="r-item">
        <div class="avatar">
          <img src="../../img/reviewer-avatar.png">
        </div>
        <div class="desc-row">
          <div class="reviewer">
            <span>Отзыв написан:</span>
            <span class="name">Евгений Ломоносов</span>
          </div>
          <div class="rating">
            <rating-stars rating="4" />
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
        <div class="avatar">
          <img src="../../img/reviewer-avatar.png">
        </div>
        <div class="desc-row">
          <div class="reviewer">
            <span>Отзыв написан:</span>
            <span class="name">Евгений Ломоносов</span>
          </div>
          <div class="rating">
            <rating-stars rating="4" />
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
        <div class="avatar">
          <img src="../../img/reviewer-avatar.png">
        </div>
        <div class="desc-row">
          <div class="reviewer">
            <span>Отзыв написан:</span>
            <span class="name">Евгений Ломоносов</span>
          </div>
          <div class="rating">
            <rating-stars rating="4" />
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
        <div class="avatar">
          <img src="../../img/reviewer-avatar.png">
        </div>
        <div class="desc-row">
          <div class="reviewer">
            <span>Отзыв написан:</span>
            <span class="name">Евгений Ломоносов</span>
          </div>
          <div class="rating">
            <rating-stars rating="4" />
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
    <h5>Добавление отзыва</h5>
    <div class="under-header-line">
      <img class="is-hidden-touch" src="../../img/icons/under-header-line-left.png">
      <img class="is-hidden-desktop" src="../../img/icons/under-header-line.png">
    </div>
    <form class="add-review-block">
      <div class="forms-row">
        <div class="f-item">
          <span class="label">Ваше имя</span>
          <input class="input" type="text" placeholder="Иванов Иван">
        </div>
        <div class="f-item">
          <span class="label">E-mail</span>
          <input class="input" type="text" placeholder="ivanov@mail.ru">
        </div>
      </div>
      <div class="forms-row">
        <div class="f-item">
          <span class="label">Ваше сообщение</span>
          <textarea class="textarea" placeholder="Текст сообщения"></textarea>
        </div>
        <div class="actions">
          <div class="a-row">
            <span class="label">Оценка</span>
            <div class="evaluate">
              <evaluate-rating-stars />
              <span>очень плохо/плохо/удовлетворенно/хорошо/превосходно</span>
            </div>
          </div>
          <div class="a-row">
            <span class="label">Введите текст с картинки</span>
            <div class="send-review">
              <div class="captcha">
                <img src="../../img/captcha.png" alt="captcha">
              </div>
              <input class="input" type="text" />
              <button class="button">Добавить отзыв</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import RatingStars from '../RatingStars'
import EvaluateRatingStars from '../home/EvaluateRatingStars'

export default {
  name: 'ReviewsAboutCourse',
  components: { EvaluateRatingStars, RatingStars }
}
</script>

<style scoped lang="sass">
.reviews-about-course
  display: flex
  flex-direction: column
  width: 100%

  .add-review-block
    display: flex
    flex-direction: column
    background-color: white
    padding: 30px

    .forms-row
      display: flex
      align-items: flex-start

      &:not(:last-child)
        margin-bottom: 24px

      .actions
        display: flex
        flex-direction: column
        flex-basis: 0
        flex-grow: 1
        align-self: stretch
        justify-content: space-between

        .send-review
          display: flex
          align-items: flex-end

          .button
            @include button-focus-none
            width: 180px
            min-width: 180px
            height: 45px
            background-color: #c83636
            color: #ffffff
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700

          .input
            @include button-focus-none
            flex-grow: 1
            max-width: 260px
            height: 45px
            color: #000000
            font-family: "Proxima Nova Rg", sans-serif
            padding: 0 20px
            font-size: 16px
            font-weight: 400
            background-color: #f0f0f0
            margin: 0 24px

          .captcha
            display: flex
            width: 150px
            min-width: 150px
            height: 60px
            justify-content: flex-start
            align-items: flex-end

            img
              max-height: 100%


        .evaluate
          display: flex
          align-items: center

          span
            color: #000000
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 14px
            font-weight: 400

          > *
            &:first-child
              margin-right: 15px
              width: 110px

        .a-row
          display: flex
          flex-direction: column
          width: 100%

          .label
            color: #000000
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 16px
            font-weight: 400
            margin-bottom: 9px

      .f-item
        flex-basis: 0
        flex-grow: 1
        display: flex
        flex-direction: column

        .label
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          margin-bottom: 9px

        .input,
        .textarea
          @include button-focus-none
          width: 100%
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          padding: 0 20px
          font-size: 16px
          font-weight: 400
          background-color: #f0f0f0

        .input
          height: 45px

        .textarea
          height: 172px
          padding: 20px


        &:first-child
          margin-right: 30px

  .reviews-block
    display: flex
    flex-direction: column
    margin-bottom: 40px

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

        .rating
          width: 110px


        .reviewer
          display: flex
          flex-direction: column
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 15px
          font-weight: 400

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

  > .under-header-line
    margin-bottom: 25px

  > h5
    color: #000000
    font-family: "Proxima Nova - Extra Bold", sans-serif
    margin-bottom: 0
    font-weight: 400
    line-height: 27px
    font-size: 30px

  @media (max-width: 1087px)
    .add-review-block
      .forms-row
        flex-direction: column

        .f-item
          flex-basis: auto
          width: 100%

          &:first-child
            margin-right: 0
            margin-bottom: 24px

        .actions
          flex-basis: auto

          .a-row
            &:not(:last-child)
              margin-bottom: 24px
    > h5
      text-align: center
    > .under-header-line
      margin-top: 12px
      display: flex
      justify-content: center
  @media (max-width: 768px)
    > h5
      font-size: 24px
    .add-review-block
      padding: 20px
      .forms-row
        .actions
          .a-row
            flex-direction: row
            justify-content: space-between
            align-items: flex-start
            flex-wrap: wrap

            .send-review
              flex-direction: column
              width: 100%
              align-items: flex-start
              > *
                max-width: 100%
                width: 100%
                margin: 0 0 14px 0
                justify-content: center

            .evaluate
              align-items: flex-end
              flex-direction: column
              text-align: right
              max-width: calc(100% - 60px)

              > *
                &:first-child
                  margin-right: 0
                  margin-bottom: 10px


    .reviews-block
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

        .avatar
          width: 64px
          height: 64px
          margin-right: 20px
          position: static

        .r-text-row
          margin-top: 20px
          width: 100%
</style>