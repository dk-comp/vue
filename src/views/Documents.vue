<template>
  <div class="documents">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Документы']" />
      <h4>Документы</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="documents-table">
        <div class="table-header is-hidden-mobile">
          <span>Наименование</span>
          <span>Тип файла</span>
          <span>Размер</span>
          <span>Скачать</span>
        </div>
        <div class="fields">
          <h6>ОБСЛУЖИВАНИЕ 1С</h6>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
          <h6>РАЗДЕЛ 1С:ПРЕДПРИЯТИЕ 8</h6>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
          <div class="field">
            <div class="name">
              Технические параметры необходмые для установки 1С
            </div>
            <div class="type">exl</div>
            <div class="size">2,31 Мб</div>
            <div class="download">
              <a href="#">Скачать</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'

export default {
  name: 'Documents',
  components: { Breadcrumbs }
}
</script>

<style scoped lang="sass">
.documents
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto
    max-width: 1170px

    .documents-table
      background-color: white
      width: 100%
      padding: 30px
      display: flex
      flex-direction: column
      margin-bottom: 50px

      .fields
        display: flex
        flex-direction: column

        h6
          color: #c83636
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 17px
          font-weight: 700
          padding: 0 18px
          min-height: 60px
          display: flex
          align-items: center
          margin-bottom: 0
          border-top: 1px solid white
          border-bottom: 1px solid white

          &:nth-child(even)
            background-color: #f7f7f7
            border-top: 1px solid #dcd9d9
            border-bottom: 1px solid #dcd9d9


        .field
          margin-bottom: 0
          display: flex
          align-items: center
          min-height: 60px
          padding: 0 18px
          border-top: 1px solid white
          border-bottom: 1px solid white
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700

          .name
            width: 50%
            margin-right: 5%

          .type
            width: 15%
            margin-right: 3%

          .size
            width: 10%
            margin-right: 3%

          .download
            width: 14%


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
                background-image: url("../img/icons/save-file-icon.png")
                background-size: contain
                margin-bottom: 2px


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
            width: 50%
            margin-right: 5%

          &:nth-child(2)
            width: 15%
            margin-right: 3%

          &:nth-child(3)
            width: 10%
            margin-right: 3%

          &:nth-child(4)
            width: 14%

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
      .documents-table
        margin-bottom: 40px
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
      .documents-table
        padding: 0
        margin-bottom: 20px

        .fields
          .field
            padding: 14px 18px
            flex-wrap: wrap
            justify-content: space-between

            .name
              margin-bottom: 10px
              min-width: 100%

            .type,
            .size,
            .download
              width: auto


</style>