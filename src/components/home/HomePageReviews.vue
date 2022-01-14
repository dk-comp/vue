<template>
  <div class="home-page-reviews">
    <div class="inner">
      <div class="first-row">
        <div class="about-block">
          <h4>Отзывы</h4>
          <div class="under-header-line">
            <img class="is-hidden-mobile" src="../../img/icons/under-header-line-left.png">
            <img class="is-hidden-tablet" src="../../img/icons/under-header-line.png">
          </div>
          <p>
            Несколько строк описания раздела отзывов. Например: «Почитайте мнение людей о нашей компании и услугах,
            которые мы предоставляем. Отзывы являются подленными, потому им стоит доверять»
          </p>
        </div>
        <div class="reviews">
          <div class="actions-row">
            <div class="review-counter">
              <div class="current-review">1</div>
              <div class="quantity">/4</div>
            </div>
            <div class="carousel-action-buttons">
              <button class="button"
                disabled
              >
                <img src="../../img/icons/left-arrow_icon.png">
              </button>
              <button class="button">
                <img src="../../img/icons/right-arrow_icon.png">
              </button>
            </div>
          </div>
          <div class="reviews-carousel">
            <carousel
              :per-page="1"
              :paginationEnabled="false"
            >
              <slide>
                <div class="slide-item">
                  <div class="avatar is-hidden-mobile">
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
              </slide>
              <slide>
                <div class="slide-item">
                  <div class="avatar is-hidden-mobile">
                    <img src="../../img/reviewer-avatar.png">
                  </div>
                  <div class="desc-row">
                    <div class="reviewer">
                      <span>Отзыв написан:</span>
                      <span class="name">Евгений Ломоносов</span>
                    </div>
                    <div class="rating">
                      <rating-stars rating="5" />
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
              </slide>
              <slide>
                <div class="slide-item">
                  <div class="avatar is-hidden-mobile">
                    <img src="../../img/reviewer-avatar.png">
                  </div>
                  <div class="desc-row">
                    <div class="reviewer">
                      <span>Отзыв написан:</span>
                      <span class="name">Евгений Ломоносов</span>
                    </div>
                    <div class="rating">
                      <rating-stars rating="3" />
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
              </slide>
            </carousel>
          </div>
        </div>
      </div>
      <div class="second-row">
        <a href="#">
          <span>Все отзывы</span>
          <img src="../../img/icons/angle-in-red-circle.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import RatingStars from '../RatingStars'

export default {
  components: {
    RatingStars,
    Carousel,
    Slide,
  },
  name: 'HomePageReviews'
}
</script>

<style scoped lang="sass">
.home-page-reviews
  width: 100%
  display: flex
  background-color: #f7f7f7

  .inner
    margin: 0 auto
    max-width: 1170px
    padding: 70px 0 40px

    .second-row
      a
        cursor: pointer
        display: flex
        align-items: center
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        text-decoration: underline

        span
          margin-right: 10px


    .first-row
      display: flex
      margin-bottom: 10px

      .reviews
        width: 740px
        display: flex
        flex-direction: column

        .reviews-carousel
          width: 100%

          .slide-item
            width: 100%
            padding-left: 150px
            position: relative
            display: flex
            flex-direction: column

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


        .actions-row
          padding-left: 150px
          width: 100%
          display: flex
          justify-content: space-between
          margin-bottom: 20px

          .carousel-action-buttons
            display: flex

            .button
              @include button-focus-none
              background-color: transparent

              &:first-child
                margin-right: 10px

          .review-counter
            display: flex
            align-items: flex-end

            .current-review
              text-shadow: 4px 6px 14px rgba(0, 0, 0, 0.08)
              color: #ffffff
              font-family: "Proxima Nova Bl", sans-serif
              font-size: 72px
              font-weight: 400
              line-height: 52px
              margin-right: 10px

            .quantity
              color: #000000
              font-family: "Proxima Nova Rg", sans-serif
              font-size: 30px
              font-weight: 400
              line-height: 28px

      .about-block
        display: flex
        flex-direction: column
        width: 350px
        margin-right: 80px

        p
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 15px
          font-weight: 400

        h4
          color: #000000
          font-family: "Proxima Nova Extra Bold", sans-serif
          font-size: 36px
          font-weight: 800
          margin-bottom: 5px
          text-align: left

        .under-header-line
          display: flex
          justify-content: flex-start
          margin-bottom: 30px

    @media (max-width: 1087px)
      max-width: 100%
      padding: 40px 40px

      .first-row
        flex-direction: column
        margin-bottom: 30px

        .about-block
          width: 100%
          margin-bottom: 30px

        .reviews
          width: 100%
      .second-row
        display: flex
        justify-content: flex-end
    @media (max-width: 768px)
      padding: 30px 12px
      .first-row
        .about-block
          h4
            font-size: 24px
            text-align: center

          .under-header-line
            justify-content: center

        .reviews
          .actions-row
            padding-left: 0

          .reviews-carousel
            .slide-item,
            .actions-row
              padding-left: 0

</style>