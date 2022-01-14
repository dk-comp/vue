<template>
  <div class="projects-filter">
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
            <div class="label is-hidden-touch">Категория</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden"
              placeholder="Категории"
              :selected="['','Все время'][0]"
              :options="['Категории','Категории']"
              :cancelField="false"
            />
          </div>
          <div class="f-item">
            <div class="label is-hidden-touch">Тип файла</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden"
              placeholder="Тип файла"
              :selected="['','Все время'][0]"
              :options="['Категории','Категории']"
              :cancelField="false"
            />
          </div>
          <div class="f-item">
            <div class="label is-hidden-touch">Платформа</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden"
              placeholder="Платформа"
              :selected="['','Все время'][0]"
              :options="['Категории','Категории']"
              :cancelField="false"
            />
          </div>
          <div class="f-item">
            <div class="label is-hidden-touch">Конфигурация</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden"
              placeholder="Конфигурация"
              :selected="['','Все время'][0]"
              :options="['Категории','Категории']"
              :cancelField="false"
            />
          </div>
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
            <div class="label is-hidden-touch">Операционная система</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden"
              placeholder="Операционная система"
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
          <div class="f-item">
            <div class="label is-hidden-touch">Налоги</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden"
              placeholder="Налоги"
              :selected="['','Все время'][0]"
              :options="['Категории','Категории']"
              :cancelField="false"
            />
          </div>
          <div class="f-item">
            <div class="label is-hidden-touch">Доступ к файлу</div>
            <super-select
              class="super-select border-none light-gray placeholder-desktop-hidden"
              placeholder="Доступ к файлу"
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
            <a href="#" class="l-item">Отчеты (25)</a>
            <a href="#" class="l-item">Обработки (25)</a>
            <a href="#" class="l-item">Администрирование (25)</a>
            <a href="#" class="l-item">Программирование (25)</a>
            <a href="#" class="l-item">Сообщество (25)</a>
            <a href="#" class="l-item">Управление (25)</a>
            <a href="#" class="l-item">Печать (25)</a>
            <a href="#" class="l-item">Обмен (25)</a>
            <a href="#" class="l-item">Оборудование (25)</a>
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
  name: 'ProjectsFilter',
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
.projects-filter
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
        align-items: center

        .l-item
          color: #1b65c0
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          line-height: 30px
          text-decoration: underline
          width: calc(94% / 4)
          margin-right: calc(6% / 3)

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

  @media (max-width: 1078px)
    .main-container
      .filters
        .links
          width: 80%
          order: 1

          .l-item
            width: calc(94% / 3)
            margin-right: calc(6% / 2)

            &:nth-of-type(4n)
              margin-right: calc(6% / 2)

            &:nth-of-type(3n)
              margin-right: 0

        .actions
          order: 2
          flex-direction: column
          width: 20%
          align-items: flex-end
          align-self: flex-start

          .clear
            margin-bottom: 20px

        .f-item

          width: calc(94% / 3)
          margin-right: calc(6% / 2)

          &:nth-of-type(4n)
            margin-right: calc(6% / 2)

          &:nth-of-type(3n)
            margin-right: 0
  @media (max-width: 900px)
    .main-container
      .filters
        .links
          width: 80%
          order: 1

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
          flex-direction: row
          align-items: center
          width: 100%
          max-width: 300px
          padding-left: 10px

          .clear
            margin-bottom: 0

        .links
          width: 100%
          justify-content: space-between
          padding-left: 10px
          margin-bottom: 10px

          .l-item
            width: 200px
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