<template>
  <div class="solutions-menu"
    :class="{'active': active}"
  >
    <div class="tab-row">
      <div class="t-item">
        <div class="icon-container">
          <img src="../../img/icons/laptop-icon.png">
        </div>
        <span class="t-text">CRM</span>
      </div>
      <div class="t-item">
        <div class="icon-container">
          <img src="../../img/icons/laptop2-icon.png">
        </div>
        <span class="t-text">Интеграция</span>
      </div>
      <div class="t-item">
        <div class="icon-container">
          <img src="../../img/icons/binary-code-icon.png">
        </div>
        <span class="t-text">Обмен</span>
      </div>
      <div class="t-item">
        <div class="icon-container">
          <img src="../../img/icons/document-settings-icon.png">
        </div>
        <span class="t-text">Отчеты</span>
      </div>
      <div class="t-item">
        <div class="icon-container">
          <img src="../../img/icons/command-line-icon.png">
        </div>
        <span class="t-text">Обработки</span>
      </div>
      <div class="t-item">
        <div class="icon-container">
          <img src="../../img/icons/printer2-icon.png">
        </div>
        <span class="t-text">Печать</span>
      </div>
      <div class="t-item">
        <div class="icon-container">
          <img src="../../img/icons/browsers-icon.png">
        </div>
        <span class="t-text">Бизнес-процессы</span>
      </div>
    </div>
    <div class="menu-row">
      <div class="menu-items">
        <div class="m-item">с Roistat</div>
        <div class="m-item">с ABCP</div>
        <div class="m-item active">с Elevel</div>
        <div class="m-item">с JivoSite</div>
        <div class="m-item">с Real</div>
        <div class="m-item">с Tesli</div>
        <div class="m-item">с Yandex.Direct</div>
        <div class="m-item">с Google Adwords</div>
        <div class="m-item">с Pentaho (OLAP BI)</div>
      </div>
      <div class="menu-content">
        <div class="m-image">
          <img src="../../img/menu-img.png">
        </div>
        <div class="brand-logo">
          <img src="../../img/partner-brand.png">
        </div>
        <p class="about-partner">
          Принцип работы Эlevel - приверженность наиболее надежным производителям, продукция которых отвечает
          современным требованиям надежности, безопасности и энергосбережения.</p>
        <p class="about-partner">
          Мы всегда ориентированы на эффективное решения задач профессионального потребителя, торгового партнера,
          конечного заказчика.</p>
        <a href="#">Все решения</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionsMenu',
  props: {
    active: { type: Boolean, default: () => false }
  }
}
</script>

<style scoped lang="sass">
.solutions-menu
  flex-direction: column
  position: absolute
  left: 0
  top: 100%
  width: 100%
  display: flex
  max-height: 0
  overflow: hidden
  opacity: 0
  transition: all .6s ease

  &.active
    max-height: 2000px
    opacity: 1


  .menu-row
    display: flex
    background-color: white
    width: 100%
    padding: 16px 25px

    .menu-content
      display: flex
      flex-direction: column
      position: relative
      padding-right: 380px
      flex-grow: 1
      padding-top: 10px

      .brand-logo
        display: flex
        margin-bottom: 20px

      a
        display: flex
        align-items: center
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        text-decoration: underline
        margin-top: auto
        line-height: 30px
        align-self: flex-start

        &::after
          content: ''
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABUUlEQVQ4T62UsU7DMBCG/zMbUgWPgISUgYUuCWEieRJ4A+AFOnRsl07t0Eq0W9+CpEtDMpCuldhAYqJlYasPOTShpCYNIid5OZ8/3519P0FjU9t2iPkSzHUAaimLQRQz0eg8CLz8Mdp0TG37iFarOxA5ugsyH7MngFsriuLUl4FC06xLonsAh4WQ782lYHZTWAJKMpHy8Q+QFJfBEtCDZXkMXJTM5GcYs2dHkUvrklQ2W2a023ju9/Exnxe3TAiXAtPsgOhaF7lvGDhuNPDUbBbCGBjRrrL2ajUYrRZex2MsfP+3zGIKLGsJ4KAodwU76fXw5nl4GQy0oeVB3S4Wk0nSM51VVdqsumZX9vz//ZAE+Gdh6GyOiBrAwtfTNPldMDtq3vJDq+ShLCyDqAu2ZERIOdw1d6ocYr7RykhOlxxIeUVfona63puxEjchhjph+wT9pKwU6dd1OAAAAABJRU5ErkJggg==")
          margin-left: 10px
          width: 18px
          height: 18px

      p
        color: #100c14
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 17px
        font-weight: 400
        line-height: 18px

        &:not(:last-of-type)
          margin-bottom: 20px

      .m-image
        max-width: 360px
        position: absolute
        right: 0
        display: flex
        @include block-vertical-centering

    .menu-items
      display: flex
      flex-direction: column
      width: 1px
      min-width: 300px
      margin-right: 15px

      .m-item
        color: #565656
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 17px
        font-weight: 400
        line-height: 30px

        &.active,
        &:hover
          color: #c83636

  .tab-row
    padding: 0 45px
    display: flex
    align-items: center
    justify-content: space-between
    height: 1px
    min-height: 70px
    width: 100%
    background-color: #f7f7f7
    border-bottom: 3px solid #ececec

    .icon-container
      margin-right: 10px

    .t-item
      display: flex
      align-items: center
      height: 100%
      padding: 0 10px
      border-bottom: 3px solid transparent
      margin-bottom: -5px

      .t-text
        color: #565656
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 17px
        font-weight: 700

      &:hover
        border-bottom: 3px solid $mainRed

        .t-text
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 17px
          font-weight: 700


</style>