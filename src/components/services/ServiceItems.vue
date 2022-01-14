<template>
  <div class="service-items">
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-1.png') + ')' }"
    >
      <a href="#">
        <span>Внедрение 1С</span>
      </a>
      <p>Автоматизация бизнеса на 1С. Внедрение в ваш бизнес.</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-2.png') + ')' }"
    >
      <a href="#">
        <span>Услуги 1С программиста</span>
      </a>
      <p>Оперативные услуги 1С программистов по разумной цене!</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-3.png') + ')' }"
    >
      <a href="#">
        <span>Комплексное внедрение 1С</span>
      </a>
      <p>Автоматизация бизнеса на 1С. Внедрение в ваш бизнес.</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-4.png') + ')' }"
    >
      <a href="#">
        <span>Абонентское обслуживание</span>
      </a>
      <p>Настройка, поддержка и другие услуги по обслуживанию клиентов</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-5.png') + ')' }"
    >
      <a href="#">
        <span>Обслуживание 1С</span>
      </a>
      <p>Обновление 1С с версии 8.2 до версии 8.3</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-6.png') + ')' }"
    >
      <a href="#">
        <span>Переход с 1С 8.2 на 1С 8.3</span>
      </a>
      <p>Обновление 1С с версии 8.2 до версии 8.3</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-8.png') + ')' }"
    >
      <a href="#">
        <span>Перенос данных</span>
      </a>
      <p>Перенос данных - это одна из самых ответственных частей работы по переходу с одной конфигурации на другую.</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-9.png') + ')' }"
    >
      <a href="#">
        <span>Обмен данными</span>
      </a>
      <p>Обновление 1С с версии 8.2 до версии 8.3</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-10.png') + ')' }"
    >
      <a href="#">
        <span>Настройка типового решения</span>
      </a>
      <p>Обновление 1С с версии 8.2 до версии 8.3</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-11.png') + ')' }"
    >
      <a href="#">
        <span>Обновление 1С</span>
      </a>
      <p>Перенос данных - это одна из самых ответственных частей работы по переходу с одной конфигурации на другую.</p>
    </div>
    <div class="service-item"
      :style="{'background-image': 'url(' + require('../../img/service-card-background-12.png') + ')' }"
    >
      <a href="#">
        <span>Интеграция с интернет-
          магазинами</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceItems'
}
</script>

<style scoped lang="sass">
.service-items
  width: 100%
  display: grid
  justify-content: center
  grid-template-columns: repeat(auto-fill, minmax(290px, auto))
  grid-gap: 30px 30px

  @media all and (-ms-high-contrast: none)
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    margin-left: -15px
    width: calc(100% + 30px)
    > *
      min-width: 370px
      max-width: 370px
      margin: 0 15px 30px

  .service-item
    padding: 28px
    background-color: #dfebf6
    display: flex
    flex-direction: column
    height: 470px
    background-repeat: no-repeat
    background-position: bottom center
    background-size: 100% auto

    &:hover
      box-shadow: inset 2px 2px 0px 0px $mainRed, inset -2px -2px 0px 0px $mainRed

    p
      color: #000000
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 16px
      font-weight: 400

    a
      color: #000000
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 30px
      font-weight: 700
      line-height: 30px
      margin-bottom: 24px

      span
        &::after
          content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABUUlEQVQ4T62UsU7DMBCG/zMbUgWPgISUgYUuCWEieRJ4A+AFOnRsl07t0Eq0W9+CpEtDMpCuldhAYqJlYasPOTShpCYNIid5OZ8/3519P0FjU9t2iPkSzHUAaimLQRQz0eg8CLz8Mdp0TG37iFarOxA5ugsyH7MngFsriuLUl4FC06xLonsAh4WQ782lYHZTWAJKMpHy8Q+QFJfBEtCDZXkMXJTM5GcYs2dHkUvrklQ2W2a023ju9/Exnxe3TAiXAtPsgOhaF7lvGDhuNPDUbBbCGBjRrrL2ajUYrRZex2MsfP+3zGIKLGsJ4KAodwU76fXw5nl4GQy0oeVB3S4Wk0nSM51VVdqsumZX9vz//ZAE+Gdh6GyOiBrAwtfTNPldMDtq3vJDq+ShLCyDqAu2ZERIOdw1d6ocYr7RykhOlxxIeUVfona63puxEjchhjph+wT9pKwU6dd1OAAAAABJRU5ErkJggg==")
          margin-left: 14px
          display: inline-block
  @media (max-width: 1087px)
    .service-item
      height: 420px
  @media (max-width: 768px)
    grid-template-columns: repeat(auto-fill, minmax(270px, 390px))

    .service-item
      height: 370px
</style>