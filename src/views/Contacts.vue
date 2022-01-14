<template>
  <div class="contacts">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Контакты']" />
      <h4>Контакты</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="contacts-container">
        <div class="first-row">
          <div class="left">
            <div class="contact-item">
              <div class="icon-container">
                <img src="../img/icons/phone-call-icon.png">
              </div>
              <span class="name">Москва:</span>
              <a href="tel:4951234567">(495) 123-45-67</a>
            </div>
            <div class="contact-item">
              <div class="icon-container">
                <img src="../img/icons/phone-call-icon.png">
              </div>
              <span class="name">Россия:</span>
              <a href="tel:4951234567">8-800-1234-567</a>
              <span class="extra"> (многоканальный, бесплатный для регионов)</span>
            </div>
            <div class="contact-item">
              <div class="icon-container">
                <img src="../img/icons/clock-icon.png">
              </div>
              <span class="name">Часы работы:</span>
              <span class="bold">по будням с 09:00 до 19:00 по Москве.</span>
            </div>
          </div>
          <div class="right">
            <div class="contact-item">
              <div class="icon-container">
                <img src="../img/icons/phone-call-icon.png">
              </div>
              <span class="name">E-mail:</span>
              <a class="blue" href="../../../../index.php">support@1c-code.ru</a>
            </div>
            <div class="contact-item">
              <div class="icon-container">
                <img src="../img/icons/chat-icon.png">
              </div>
              <a class="blue" href="#">Служба поддержки</a>
            </div>
            <div class="contact-item">
              <div class="icon-container">
                <img src="../img/icons/placeholder-icon.png">
              </div>
              <span class="name">Адрес офиса:</span>
              <span class="bold">Москва, ул. Заводская, д.5, офис 344</span>
            </div>
          </div>
        </div>
        <div class="second-row">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A70426c03033eabbf56d2283ae665a0e5f80ca2c794cc93da2573b1f3cf2b1467&amp;source=constructor"
            width="100%" height="422" frameborder="0"
          ></iframe>
        </div>
      </div>
      <h4>Реквизиты</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="requisites-table">
        <div class="table-header is-hidden-mobile">
          <span>№ п/п</span>
          <span>Наименование</span>
          <span class="is-hidden-touch">Данные</span>
        </div>
        <div class="fields">
          <div class="field">
            <div class="id">1</div>
            <div class="name">Полное наименование организации</div>
            <div class="data">Общество с ограниченной ответственностью «Инфостарт»</div>
          </div>
          <div class="field">
            <span class="id">2</span>
            <div class="name">Краткое наименование организации</div>
            <div class="data">ООО «Инфостарт»</div>
          </div>
          <div class="field">
            <span class="id">3</span>
            <div class="name">Организационно-правовая форма</div>
            <div class="data">Общество с ограниченной ответственностью</div>
          </div>
          <div class="field">
            <span class="id">4</span>
            <div class="name">Адрес юридический</div>
            <div class="data">190103, г. Санкт-Петербург, Дерптский пер., 9-15</div>
          </div>
          <div class="field">
            <span class="id">5</span>
            <div class="name">Адрес почтовый</div>
            <div class="data">190000, г. Санкт-Петербург, ВОХ-1221</div>
          </div>
          <div class="field">
            <span class="id">6</span>
            <div class="name">ИНН</div>
            <div class="data">7839012930</div>
          </div>
          <div class="field">
            <span class="id">7</span>
            <div class="name">КПП</div>
            <div class="data">783901001</div>
          </div>
          <div class="field">
            <span class="id">8</span>
            <div class="name">ОГРН</div>
            <div class="data">1047836010188</div>
          </div>
          <div class="field">
            <span class="id">9</span>
            <div class="name">Свидетельство о регистрации</div>
            <div class="data">78 004325791 от 19.03.04</div>
          </div>
          <div class="field">
            <span class="id">10</span>
            <div class="name">ОКПО</div>
            <div class="data">72452802</div>
          </div>
          <div class="field">
            <span class="id">11</span>
            <div class="name">ОКОГУ</div>
            <div class="data">49013</div>
          </div>
          <div class="field">
            <span class="id">12</span>
            <div class="name">ОКАТО</div>
            <div class="data">40262566000</div>
          </div>
          <div class="field">
            <span class="id">13</span>
            <div class="name">ОКВЭД</div>
            <div class="data">62.0</div>
          </div>
          <div class="field">
            <span class="id">14</span>
            <div class="name">ОКФС/ОКОПФ</div>
            <div class="data">16/65</div>
          </div>
          <div class="field">
            <span class="id">15</span>
            <div class="name">Наименование банка, в т.ч. место (город) нахождения</div>
            <div class="data">Северо-Западный филиал АО "Банк Интеза" г.Москва</div>
          </div>
          <div class="field">
            <span class="id">16</span>
            <div class="name">Расчетный счет</div>
            <div class="data">40702810300004014305</div>
          </div>
          <div class="field">
            <span class="id">17</span>
            <div class="name">Краткое наименование организации</div>
            <div class="data">30101810100000000710</div>
          </div>
          <div class="field">
            <span class="id">18</span>
            <div class="name">Краткое наименование организации</div>
            <div class="data">044030710</div>
          </div>
          <div class="field">
            <span class="id">19</span>
            <div class="name">Краткое наименование организации</div>
            <div class="data">Генеральный директор, действующий на основании Устава</div>
          </div>
          <div class="field">
            <span class="id">20</span>
            <div class="name">Генеральный директор, действующий на основании Устава</div>
            <div class="data">Шаршатов Сергей</div>
          </div>
          <div class="field">
            <span class="id">21</span>
            <div class="name">Ф.И.О. главного бухгалтера организации</div>
            <div class="data">Шаршатов Сергей</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'

export default {
  name: 'Contacts',
  components: { Breadcrumbs }
}
</script>

<style scoped lang="sass">
.contacts
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto
    max-width: 1170px

    .requisites-table
      display: flex
      flex-direction: column
      width: 100%
      margin-bottom: 50px

      .fields
        display: flex
        width: 100%
        flex-direction: column

        .field
          width: 100%
          padding: 0 20px
          min-height: 44px
          background-color: white
          color: #565656
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          display: flex
          align-items: center
          margin-bottom: 0

          &:nth-child(even)
            background-color: #ededed

          .name
            width: 45%

          .data
            width: 44%

          .id
            width: 11%

            &::after
              content: '.'

      .table-header
        width: 100%
        height: 44px
        background-color: #565656
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400
        color: white
        display: flex
        align-items: center
        padding: 0 20px

        > *

          &:first-child
            width: 11%

          &:nth-child(2)
            width: 45%

          &:nth-child(3)
            width: 44%


    .contacts-container
      display: flex
      flex-direction: column
      margin-bottom: 36px

      .second-row
        width: 100%
        height: 422px

      .first-row
        display: flex
        background-color: white
        padding: 28px 26px

        .left
          margin-right: 28px

        > *
          flex-basis: 0
          flex-grow: 1
          display: flex
          flex-direction: column

          .contact-item
            position: relative
            padding-left: 35px
            color: #565656
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 400
            line-height: 36px

            .bold
              color: #565656
              font-family: "Proxima Nova Rg", sans-serif
              font-weight: 700
              margin-right: 3px

            .extra
              font-family: "Proxima Nova Rg", sans-serif
              font-weight: normal

            .name
              font-family: "Proxima Nova - Semi Bold", sans-serif
              margin-right: 3px

            a
              white-space: nowrap
              color: #565656
              font-family: "Proxima Nova Rg", sans-serif
              font-weight: 700
              margin-right: 3px

              &.blue
                font-family: "Proxima Nova - Semi Bold", sans-serif
                font-weight: 600
                color: #1b65c0
                text-decoration: underline

            .icon-container
              position: absolute
              display: flex
              left: 0
              top: 8px

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
      .requisites-table
        margin-bottom: 40px

        .table-header
          > *
            &:first-child
              width: 100px

        .fields
          .field
            position: relative
            flex-direction: column
            padding: 14px 20px 14px 120px
            align-items: flex-start

            .name,
            .data
              width: 100%

            .name
              margin-bottom: 8px

            .id
              left: 0
              padding-left: 20px
              position: absolute
      .contacts-container
        .first-row
          flex-direction: column

          > *
            flex-basis: auto

          .left
            margin-right: 0
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
    @media (max-width: 768px)
      padding: 0 10px
      .requisites-table
        margin-bottom: 20px

        .fields
          .field
            padding-left: 45px

            .id
              padding-left: 15px
      > h4
        font-size: 24px
</style>