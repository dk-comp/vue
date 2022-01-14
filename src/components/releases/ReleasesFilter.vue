<template>
  <div class="releases-filter">
    <div class="main-container">
      <div class="search-row">
        <div class="customize-input">
          <input type="text" placeholder="Поиск по названию" />
        </div>
        <button class="search-btn"><span class="is-hidden-mobile">Искать</span></button>
      </div>
      <div class="f-container"
        :class="{ 'active': filtersVisibility, 'overflow': overflowActive }"
      >
        <div class="filters"
        >
          <div class="f-item">
            <div class="label is-hidden-touch">Отрасль</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden"
              placeholder="Отрасль"
              :selected="['','Все время'][0]"
              :options="['Категории','Категории']"
              :cancelField="false"
            />
          </div>
          <div class="f-item">
            <div class="label is-hidden-touch">Вид учета</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden"
              placeholder="Вид учета"
              :selected="['','Все время'][0]"
              :options="['Категории','Категории']"
              :cancelField="false"
            />
          </div>
          <div class="f-item">
            <div class="label is-hidden-touch">Раздел учета</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden "
              placeholder="Раздел учета"
              :selected="['','Все время'][0]"
              :options="['Категории','Категории']"
              :cancelField="false"
            />
          </div>
          <div class="actions">
            <a class="clear" href="#">Очистить</a>
            <button class="filter-btn">Фильтр</button>
          </div>
          <div class="links">
            <a href="#" class="l-item">Автомобили, автосервисы (16)</a>
            <a href="#" class="l-item">1С:Франчайзи, автоматизация бизнеса (6)</a>
            <a href="#" class="l-item">Горнодобывающая промышленность (1)</a>
            <a href="#" class="l-item">Легкая промышленность, мода и одежда (1)</a>
            <a href="#" class="l-item">Здравоохранение, медицина, стоматология (19)</a>
            <a href="#" class="l-item">Гостиничный бизнес (5)</a>
            <a href="#" class="l-item">Издательство, полиграфия, упаковка (2)</a>
            <a href="#" class="l-item">Лесное и деревообрабатывающее хозяйство (1)</a>
            <a href="#" class="l-item">Аудит и бухгалтерские услуги, юриспруденция (3)</a>
            <a href="#" class="l-item">Государственные, бюджетные структуры (19)</a>
            <a href="#" class="l-item">ИТ-компания (4)</a>
            <a href="#" class="l-item">Машиностроение и приборостроение (3)</a>
            <a href="#" class="l-item">Бытовые услуги, сервис (9)</a>
            <a href="#" class="l-item">Домашние учет и финансы (3)</a>
            <a href="#" class="l-item">Кадровые агентства, подбор персонала (1)</a>
            <a href="#" class="l-item">Металлургическая промышленность (1)</a>
          </div>
        </div>
      </div>
    </div>
    <button class="drop-trigger"
      @click="filtersVisibility = !filtersVisibility"
    >{{ filtersVisibility ? 'Свернуть фильтры': 'Показать фильтры' }}
    </button>
  </div>
</template>

<script>
import SuperSelect from '../SuperSelect'

export default {
  name: 'ReleasesFilter',
  components: { SuperSelect },
  data: () => ({
    filtersVisibility: true,
    overflowActive: true
  }),
  watch: {
    filtersVisibility (val) {
      if (val) {
        setTimeout(() => {
          this.overflowActive = true
        }, 500)

      } else {
        this.overflowActive = false
      }
    }
  }
}
</script>

<style scoped lang="sass">
.releases-filter
  margin-bottom: 30px

  .drop-trigger
    @include button-focus-none
    width: 175px
    height: 30px
    text-align: center
    background-color: #c83636
    cursor: pointer
    color: #ffffff
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 15px
    font-weight: 700
    margin-top: -2px

  .main-container
    background-color: white
    padding: 30px
    display: flex
    flex-direction: column
    border-bottom: 2px solid #c83636

    .f-container
      width: 100%
      max-height: 0
      overflow: hidden
      transition: max-height .5s ease

      &.overflow
        overflow: auto

      &.active
        max-height: 1500px
        transition: max-height .5s ease


    .filters
      margin-top: 30px
      display: flex
      flex-wrap: wrap
      align-items: center


      .links
        width: 100%
        display: flex
        flex-wrap: wrap
        align-items: flex-start

        .l-item
          color: #1b65c0
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          line-height: 30px
          text-decoration: underline
          width: calc(95% / 4)
          margin-right: calc(5% / 3)

          &:nth-of-type(4n)
            margin-right: 0

      .actions
        display: flex
        align-items: center
        justify-content: space-between
        margin-left: auto
        width: calc(94% / 4)

        .filter-btn
          @include button-focus-none
          height: 45px
          width: 130px
          color: #ffffff
          font-family: "Proxima Nova Rg", sans-serif
          text-align: center
          font-size: 15px
          font-weight: 700
          background-color: #c83636
          cursor: pointer

        .clear
          color: #565656
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 700
          text-decoration: underline


        &:not()
          margin-left: auto

      .f-item
        width: calc(94% / 4)
        margin-right: calc(6% / 3)
        display: flex
        flex-direction: column
        align-items: flex-start
        margin-bottom: 20px

        .label
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          margin-bottom: 0

        .super-select
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          width: 100%
          line-height: 31px

        &:nth-of-type(4n)
          margin-right: 0

    .search-row
      display: flex
      align-items: center
      width: 100%

      .search-btn
        min-width: 130px
        @include button-focus-none
        background-color: #565656
        color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        text-align: center
        height: 45px
        cursor: pointer

      .customize-input
        flex-grow: 1
        height: 45px
        position: relative

        &::after
          content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABlUlEQVQ4T6XTT4iOURTH8c9YKKsRYZKaDYWoKbOQktI0MmVBSVEWNmRWljKJzGKyGpnBUsmKWUrCwp+UEgsLSokSsiAp01ig83bu233f9M47ufXUfe4953vP+Z1zerSuHuzFQWzFCnzDS9zAVfxq82n8hmNZa9I4AD/wAB+xDNuxCm9xAM/aYQUUkKcZwWlcwGxlvAiHMIklGMKTGhag+OJwC3bj/r9Cz7N1eIzfWI/vxTYg+zCDk5joAClXI7iFszhTg25iODWo0+nEDI16ERE2xf6AF9jTRTTFZBynsBxfS9XmsqxHFwAaxRQ24HUBfcYj7F8AaAznsBqfCuguNudhVKObdS99+vCngCKlKziMa11QBvAclxEpNsVejFdYmmPxpgMsKhU9149NeFeDYj+IhzkaR7JP2nkRyXVsxJ1s3kZaJbWy35aNGXlH6LdTyJi1HdiJn9nZu1KO47VG9csR+omcq7XVxZd85Dze4xKO1bB6+ttTiUhW5jxFizTTyPlsgXUCzVfA8C2w6f8BFY0vxqz+BQIEUILaotgbAAAAAElFTkSuQmCC')
          position: absolute
          left: 15px
          top: 13px

        input
          @include button-focus-none
          background-color: #f0f0f0
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 16px
          font-weight: 300
          padding: 0 20px 0 50px
          height: 100%
          width: 100%

  @media (max-width: 1087px)
    .main-container
      .filters
        .actions
          width: calc(94% / 2)
        .links
          .l-item
            width: calc(94% / 2)
            margin-right: 6%

            &:nth-of-type(4n)
              margin-right: 6%

            &:nth-of-type(2n)
              margin-right: 0

        .f-item

          width: calc(94% / 2)
          margin-right: 6%

          &:nth-of-type(4n)
            margin-right: 6%

          &:nth-of-type(2n)
            margin-right: 0
  @media (max-width: 900px)
    .main-container
      .filters
        .actions
          width: calc(94% / 2)
        .links

          .l-item
            width: calc(94% / 2)
            margin-right: calc(6% / 1)

            &:nth-of-type(3n)
              margin-right: calc(6% / 1)

            &:nth-of-type(2n)
              margin-right: 0

        .f-item
          width: calc(94% / 2)
          margin-right: calc(6% / 1)

          &:nth-of-type(4n)
            margin-right: calc(6% / 1)

          &:nth-of-type(3n)
            margin-right: calc(6% / 1)

          &:nth-of-type(2n)
            margin-right: 0
  @media (max-width: 768px)
    .main-container
      padding: 10px

      .filters
        flex-direction: column
        margin-top: 10px

        .actions
          order: 2
          flex-direction: row
          align-items: center
          width: 100%
          max-width: 300px
          padding-left: 10px

          .clear
            margin-bottom: 0

        .links
          order: 1
          width: 100%
          justify-content: space-between
          padding-left: 10px
          margin-bottom: 10px

          .l-item
            width: 100%
            margin-right: 0

            &:nth-of-type(3n)
              margin-right: 0

        .f-item
          width: 100%
          margin-right: 0 !important
          margin-bottom: 0

          &:nth-of-type(3n)
            margin-right: 0

      .search-row
        .customize-input
          input
            padding: 0 15px

          &::after
            content: ""

        .search-btn
          padding-top: 13px
          padding-bottom: 14px
          min-width: 46px
          height: 45px

          &::after
            content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABtUlEQVQ4T5XUPciOYRjG8d9hUCYiH0lZKEQpBikpiSgDJUUZLMRkFIkYZCKfo5IJoyQMPlJKDAZKiRJvBpIiBpeup+t5ul+9H95zurvu+/qfx3F+3NGJUkqwFTuxCjPxFS9xHVeS/O7e6T/Xi70opcxrH1fAdzzAR0zHGszGW+xI8uxfWA/UIE+bgqM4m+RnJ8kk7MIZTMH6JE+6sDQ79XAFNiW5P5L0lnAhHuMPFiX5NrBWStmGmziU5NRokI66zbiF40mOdUE3sKHWoGtnLGAppdZoapKqsBfV2ge8SLJlPDUdVSdxGDOSfOmDfrW27p0A6ADOY3GS133QEB4l2T4B0BGcwNwkn/qgu1jWDms3xo1Syr12Z06S0gdVS5exO8nV8SillOV4jktJqsVBsSfjFabVtUjyZow5moo6c/OxNMm7AagN2ko8bKuxJ0mdk2HRlFzDEtxpw9uz1bPWaenqNphzmvTbqIWsu7YW6/CjTfbGVo79gxp105ZSqvSDba8WdN59bklO4z0uYl8XNlA0gpWqZBbqPg31M7dS1HvDYeN1aYzCd2EXRlX0Pwnan+Nc3dW/yD6qeQFatikAAAAASUVORK5CYII=")

</style>