<template>
  <div class="services">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Услуги']" />
      <h4>Услуги</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <service-items />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceItems from '../components/services/ServiceItems'

export default {
  name: 'Services',
  components: { ServiceItems, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.services
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    max-width: 1170px
    margin: 0 auto 50px

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
      margin-bottom: 40px
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
    @media (max-width: 768px)
      margin-bottom: 20px
      padding: 0 10px
      > h4
        font-size: 24px

</style>