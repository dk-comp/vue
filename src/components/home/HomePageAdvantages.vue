<template>
  <div class="home-page-our-advantages">
    <div class="inner">
      <h4>Почему выбирают нас</h4>
      <div class="under-header-line">
        <img src="../../img/icons/under-header-line-white.png">
      </div>
      <div class="advantages">
        <div class="a-item">
          <div class="icon-container">
            <img src="../../img/icons/quality-badge.png">
          </div>
          <h6>Мы надежные!</h6>
          <p class="is-hidden-mobile">
            Мы работаем с 2007 года, и за эти годы нами многое достигнуто. Мы являемся
            авторизованными партнерами 1С.
            <span class="is-hidden-touch">
              Microsoft, Kaspersky, Dr. Web, Adobe, Autodesk, Corel, ABBYY, а также других ведущих мировых
              вендоров.
            </span></p>
        </div>
        <div class="a-item">
          <div class="icon-container">
            <img src="../../img/icons/inclined-rocket.png">
          </div>
          <h6>Мы быстрые!</h6>
          <p class="is-hidden-mobile">
            Скорость обслуживания — один из наших приоритетов. Вам не нужно будет при каждом обращении объяснять Вашу
            ситуацию.
            <span class="is-hidden-touch">
              Вы будете сотрудничать с персональным менеджером.
              Мы бережем Ваше время.
            </span></p>
        </div>
        <div class="a-item">
          <div class="icon-container">
            <img src="../../img/icons/diploma.png">
          </div>
          <h6>Мы профессионалы!</h6>
          <p class="is-hidden-mobile">
            Опыт и квалификация наших сотрудников подтверждены соответствующими сертификатами.
            <span class="is-hidden-touch">
              Условием работы в нашей компании являются амбициозность и готовность к активному профессиональному росту.
            </span></p>
        </div>
        <div class="a-item">
          <div class="icon-container">
            <img src="../../img/icons/wallet.png">
          </div>
          <h6>Мы выгодные!</h6>
          <p class="is-hidden-mobile">
            Благодаря нашим высоким партнерским статусам мы готовы предложить Вам постоянно обновляющиеся скидки и
            акции.
            <span class="is-hidden-touch">
              Кроме того, покупая у нас многие программы, Вы получаете бесплатно пакет услуг по установке и обслуживанию
              Вашего нового ПО.
            </span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageAdvantages'
}
</script>

<style scoped lang="sass">
.home-page-our-advantages
  width: 100%
  background-color: $mainRed
  display: flex

  .inner
    margin: 0 auto
    display: flex
    flex-direction: column
    padding: 50px 20px 40px
    width: 100%
    max-width: 1070px

    .advantages
      display: flex
      justify-content: space-between
      width: 100%

      .a-item
        display: flex
        flex-direction: column
        align-items: center
        padding-top: 120px
        position: relative
        width: 200px

        p
          color: #ffffff
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 15px
          font-weight: 400


        h6
          color: #ffffff
          text-align: center
          font-family: "Proxima Nova Rg", sans-serif
          font-size: 19px
          font-weight: 700
          margin-bottom: 20px

        .icon-container
          position: absolute
          max-width: 100%
          max-height: 120px
          top: 0
          @include block-horizontal-centering


    h4
      color: #fff
      font-family: "Proxima Nova Extra Bold", sans-serif
      font-size: 36px
      font-weight: 800
      margin-bottom: 5px
      text-align: center

    .under-header-line
      margin-bottom: 40px
      display: flex
      justify-content: center

    @media (max-width: 1087px)
      padding: 40px
      .advantages
        .a-item
          padding-top: 100px
          width: 155px
    @media (max-width: 768px)
      padding: 30px 12px
      h4
        font-size: 24px
      .advantages
        flex-wrap: wrap

        .a-item
          padding-top: 90px
          width: 50%

          h6
            font-size: 16px
</style>