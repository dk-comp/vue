<template>
  <div class="personal-area">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Личный кабинет']" />
      <h4>Личный кабинет</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="main-content">
        <personal-area-menu
          @update:menu="activeViewUpdate($event)"
        />
        <div class="views-container">
          <personal-area-personal-data v-if="activeView === 1" />
          <personal-area-orders v-if="activeView === 4" />
          <personal-area-order-details v-if="activeView === 7" />
          <personal-area-courses v-if="activeView === 6" />
          <personal-area-change-password v-if="activeView === 2" />
          <personal-area-invoices-and-acts v-if="activeView === 3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import PersonalAreaMenu from '../components/personal-area/PersonalAreaMenu'
import PersonalAreaPersonalData from '../components/personal-area/PersonalAreaPersonalData'
import PersonalAreaOrders from '../components/personal-area/PersonalAreaOrders'
import PersonalAreaOrderDetails from '../components/personal-area/PersonalAreaOrderDetails'
import PersonalAreaCourses from '../components/personal-area/PersonalAreaCourses'
import PersonalAreaChangePassword from '../components/personal-area/PersonalAreaChangePassword'
import PersonalAreaInvoicesAndActs from '../components/personal-area/PersonalAreaInvoicesAndActs'

export default {
  name: 'PersonalArea',
  components: {
    PersonalAreaInvoicesAndActs,
    PersonalAreaChangePassword,
    PersonalAreaCourses,
    PersonalAreaOrderDetails,
    PersonalAreaOrders,
    PersonalAreaPersonalData,
    PersonalAreaMenu,
    Breadcrumbs
  },
  data: () => ({
    activeView: 1
  }),
  methods: {
    activeViewUpdate (e) {
      this.activeView = e
    }
  }
}
</script>

<style scoped lang="sass">
.personal-area
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto
    max-width: 1170px

    .main-content
      display: flex
      align-items: flex-start

      .views-container
        width: 870px

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

      .main-content
        flex-direction: column

        .views-container
          width: 100%
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center

    @media (max-width: 768px)
      padding: 0 10px
      > h4
        font-size: 24px
</style>