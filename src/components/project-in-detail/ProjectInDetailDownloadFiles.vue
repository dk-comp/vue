<template>
  <div class="project-in-detail-download-files">
    <h6>Скачать файлы</h6>
    <div class="documents-table">
      <div class="table-header is-hidden-mobile">
        <span>Наименование</span>
        <span>Тип файла</span>
        <span>Размер</span>
        <span>Стоимость</span>
        <span>Скачать</span>
      </div>
      <div class="fields">
        <h6>Инструкции</h6>
        <div class="field">
          <div class="name">
            Технические параметры необходмые для установки 1С
          </div>
          <div class="type">exl</div>
          <div class="size">2,31 Мб</div>
          <div class="price">4000 руб.</div>
          <div class="buy">
            <button>
              Купить
            </button>
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
        <h6>Файлы программы</h6>
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
</template>

<script>
export default {
  name: 'ProjectInDetailDownloadFiles'
}
</script>

<style scoped lang="sass">
.project-in-detail-download-files
  display: flex
  flex-direction: column
  margin-bottom: 50px

  .documents-table
    background-color: white
    width: 100%
    padding: 30px
    display: flex
    flex-direction: column

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

        .price
          width: 11%
          margin-right: 3%

        .name
          width: 45%
          margin-right: 3%

        .type
          width: 11%
          margin-right: 3%

        .size
          width: 10%
          margin-right: 3%


        .buy,
        .download
          width: 11%
          margin-left: auto

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

        .buy
          > button
            width: 100%
            cursor: pointer
            color: #ffffff
            font-family: "Proxima Nova Rg", sans-serif
            font-size: 15px
            font-weight: 700
            text-align: center
            @include button-focus-none
            min-height: 33px
            background-color: #c83636

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
          width: 45%
          margin-right: 3%

        &:nth-child(2)
          width: 11%
          margin-right: 3%

        &:nth-child(3)
          width: 10%
          margin-right: 3%

        &:nth-child(4)
          width: 11%
          margin-right: 3%

        &:nth-child(5)
          width: 11%


  h6
    color: #2e2e2e
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 24px
    font-weight: 700
    line-height: 24px
    margin-bottom: 18px

  @media (max-width: 1087px)
    margin-bottom: 40px
    h6
      text-align: center
      font-size: 24px

  @media (max-width: 768px)
    margin-bottom: 10px
    h6
      text-align: center
      font-size: 21px
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

          .buy
            width: 100%
            display: flex
            justify-content: flex-end
            margin-top: 10px

            > button
              width: 91px
              height: 33px

          .download
            margin-left: 0

          .type,
          .size,
          .download,
          .price
            width: auto
</style>