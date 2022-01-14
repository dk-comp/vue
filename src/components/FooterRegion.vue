<template>
  <div class="footer-region router-view">
    <div class="inner">
      <div class="first-row">
        <div class="social-block">
          <span class="is-hidden-mobile">Мы в социальных сетях:</span>
          <div class="social-buttons">
            <a class="s-item" href="#">
              <img src="../img/icons/vk-social-network.png">
            </a>
            <a class="s-item" href="#">
              <img src="../img/icons/facebook-social-network.png">
            </a>
            <a class="s-item" href="#">
              <img src="../img/icons/twitter-social-network.png">
            </a>
            <a class="s-item" href="#">
              <img src="../img/icons/whatsapp-social-network.png">
            </a>
            <a class="s-item" href="#">
              <img src="../img/icons/youtube-social-network.png">
            </a>
          </div>
        </div>
        <div class="pay-block">
          <span>Способы оплаты:</span>
          <div class="pay-types">
            <a class="p-item" href="#">
              <img src="../img/icons/visa-pay-logo.png">
            </a>
            <a class="p-item" href="#">
              <img src="../img/icons/mastercard.png">
            </a>
            <a class="p-item" href="#">
              <img src="../img/icons/money.png">
            </a>
          </div>
        </div>
        <div class="contacts-block is-hidden-touch">
          <div class="contacts-column">
            <a href="../../../../index.php" class="email">email@1c-code.ru</a>
            <a href="tel:+74951234567" class="phone">+7 (495) 123-45-67</a>
          </div>
          <button class="call-me-button">
            <img src="../img/icons/phone-receiver-white-icon.png" />
            <span>Заказать звонок</span>
          </button>
        </div>
      </div>
      <div class="second-row">
        <div class="links-block">
          <div class="l-block-item two-columns">
            <div class="block-title">
              Услуги
            </div>
            <div class="links">
              <a href="#" class="l-item">Абонентское обслуживание</a>
              <a href="#" class="l-item">Обслуживание 1с</a>
              <a href="#" class="l-item">Комплексное внедрение 1с</a>
              <a href="#" class="l-item">Перенос данных</a>
              <a href="#" class="l-item">Переход с 8.2 на 8.3</a>
              <a href="#" class="l-item">Абонентское обслуживание</a>
              <a href="#" class="l-item">Обслуживание 1с</a>
              <a href="#" class="l-item">Комплексное внедрение 1с</a>
              <a href="#" class="l-item">Абонентское обслуживание</a>
              <a href="#" class="l-item">Обслуживание 1с</a>
              <a href="#" class="l-item">Обслуживание 1с</a>
              <a href="#" class="l-item all-links">
                <span>Все услуги</span>
                <img src="../img/icons/angle-right-in-gray-circle.png">
              </a>
            </div>
          </div>
          <div class="l-block-item">
            <div class="block-title">
              Решения
            </div>
            <div class="links">
              <a href="#" class="l-item">Интеграция с Roistat</a>
              <a href="#" class="l-item">Интеграция с ABCP</a>
              <a href="#" class="l-item">Интеграция с Elevel</a>
              <a href="#" class="l-item">Интеграция с JivoSite</a>
              <a href="#" class="l-item">Интеграция с Real</a>
              <a href="#" class="l-item all-links">
                <span>Все решения</span>
                <img src="../img/icons/angle-right-in-gray-circle.png">
              </a>
            </div>
          </div>
        </div>
        <div class="contacts-detailed">
          <span class="c-title">Контактная информация</span>
          <span class="bold">Телефон поддержки:</span>
          <a href="tel:+74951234567" class="semi-bold">+7 (495) 123-45-67</a>
          <span>
            <span class="bold">График работы: </span>
            <span class="semi-bold">пн-пт с 9:00 до 20:00</span>
          </span>
          <span>
            <span class="bold">E-mail: </span>
            <a href="../../../../index.php" class="semi-bold email">email@1c-code.ru</a>
          </span>
          <span class="extra">©2018 1c-code.ru</span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterRegion',

}
</script>

<style scoped lang="sass">
.footer-region
  width: 100%
  background-color: white
  display: flex

  .inner
    padding: 40px 0
    display: flex
    flex-direction: column
    max-width: 1170px
    width: 100%
    margin: auto

    .second-row
      display: flex

      .contacts-detailed
        display: flex
        flex-direction: column
        align-items: flex-end
        margin-left: auto
        white-space: nowrap

        .extra
          margin-top: auto
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 14px
          font-weight: 400

        .c-title
          color: #000000
          font-size: 15px
          line-height: 24px
          font-family: "Proxima Nova - Extra Bold", sans-serif
          font-weight: 700

        .bold
          color: #000000
          font-size: 15px
          line-height: 24px
          font-family: "Proxima Nova Rg", sans-serif
          font-weight: 700

        .semi-bold
          color: #000000
          font-size: 15px
          line-height: 24px
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-weight: 600

          &.email
            color: $mainRed

      .links-block
        width: 900px
        display: flex
        justify-content: space-between

        .l-block-item
          flex-grow: 1
          display: flex
          flex-direction: column

          .block-title
            font-size: 15px
            line-height: 24px
            font-family: "Proxima Nova - Extra Bold", sans-serif
            font-weight: 700

          .links
            display: flex
            flex-wrap: wrap

            .l-item
              color: #000000
              font-family: "Proxima Nova - Semi Bold", sans-serif
              font-size: 15px
              font-weight: 400
              line-height: 24px
              display: flex
              align-items: center
              width: 100%

              span
                margin-right: 10px

          &.two-columns
            flex-grow: 2

            .links
              .l-item
                width: 50%

    .first-row
      justify-content: space-between
      align-items: center
      display: flex
      margin-bottom: 30px

      .contacts-block
        display: flex
        align-items: center

        .contacts-column
          display: flex
          flex-direction: column
          align-items: flex-start
          margin-right: 22px

          .phone
            color: #000000
            font-family: "Proxima Nova - Semi Bold", sans-serif
            font-size: 18px
            font-weight: 400

          .email
            color: #c83636
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 14px
            font-weight: 700
            text-decoration: underline

        .call-me-button
          border-radius: 0
          display: flex
          justify-content: center
          border: none
          width: 179px
          height: 35px
          color: #ffffff
          font-family: "Proxima Nova", sans-serif
          font-size: 15px
          font-weight: 700
          background-color: $mainRed
          @include button-focus-none

          > *
            &:first-child
              margin-right: 10px

      .social-block,
      .pay-block
        align-items: center
        display: flex

        .pay-types,
        .social-buttons
          display: flex
          align-items: center

          .p-item,
          .s-item
            display: flex

            &:not(:last-child)
              margin-right: 14px

        span
          margin-right: 10px
          color: #000000
          font-family: "Proxima Nova - Extra Bold", sans-serif
          font-size: 15px
          font-weight: 400

    @media (max-width: 1087px)
      padding: 40px
      .second-row
        .contacts-detailed
          flex-grow: 1

        .links-block
          width: auto
          max-width: 500px
          max-height: 190px
          overflow: hidden

          .l-block-item
            flex-basis: 0
            flex-grow: 1

            .links
              position: relative

              .l-item.all-links
                position: absolute
                bottom: 0
                z-index: 1
                background-color: white

            &.two-columns
              flex-grow: 1

              .links
                .l-item
                  width: 100%
    @media (max-width: 768px)
      padding: 24px 14px
      .first-row
        flex-direction: column
        .pay-block
          width: 100%
          justify-content: space-between
        .social-block
          margin-bottom: 25px
          width: 100%
          .social-buttons
            width: 100%
            padding: 0 30px
            justify-content: space-between
      .second-row
        flex-direction: column

        .links-block
          max-width: 100%
          margin-bottom: 30px

        .contacts-detailed
          margin: 0 auto
          align-items: center

          .extra
            margin-top: 24px
    @media (max-width: 500px)
      .second-row
        .links-block
          padding-left: 30px
          justify-content: flex-start
          flex-direction: column
          max-height: 1000px

          .l-block-item
            max-height: 190px
            overflow: hidden
            flex-basis: auto

            &:not(:last-child)
              margin-bottom: 25px

</style>
