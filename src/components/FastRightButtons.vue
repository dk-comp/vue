<template>
  <div class="fast-right-buttons is-hidden-mobile">
    <div class="btn-item" title="Написать нам"  @click="active = 1">
      <img src="../img/icons/email-icon.png" />
      <write-to-us-popup :active="active === 1"/>
    </div>
    <div class="btn-item" title="Пожаловатся директору"  @click="active = 2">
      <img src="../img/icons/team-viewer-icon.png" />
      <complain-popup :active="active === 2" />
    </div>
    <div class="btn-item" title="Сообщить про ошибку"  @click="active = 3">
      <img src="../img/icons/browser-icon.png" />
      <report-about-error-popup :active="active === 3" />
    </div>
    <div class="btn-item" title="Заказать звонок"  @click="active = 4">
      <img src="../img/icons/rating-icon.png" />
      <call-me-modal :active="active === 4" />
    </div>
    <a href="#" class="btn-item" title="Bitrix"  @click="active = 5">
    <img src="../img/icons/birtix-icon.png" />
    </a>
    <a href="#" class="btn-item" title="1C"  @click="active = 6">
      <img src="../img/icons/1c-icon.png" />

    </a>
    <a href="#" class="btn-item" title="Поддердка"  @click="active = 7">
      <img src="../img/icons/headphones-icon.png" />
    </a>
  </div>
</template>

<script>

import WriteToUsPopup from './popups/WriteToUsPopup'
import ComplainPopup from './popups/ComplainPopup'
import ReportAboutErrorPopup from './popups/ReportAboutErrorPopup'
import CallMeModal from './popups/CallMeModal'

export default {
  name: 'FastRightButtons',
  components: { CallMeModal, ReportAboutErrorPopup, ComplainPopup, WriteToUsPopup},
  data: () => ({
    active: 0
  }),

}
</script>

<style scoped lang="sass">
.fast-right-buttons
  z-index: 11
  display: flex
  flex-direction: column
  justify-content: center
  position: fixed
  right: 0
  top: 0
  bottom: 0
  margin: auto
  .btn-item
    position: relative
    width: 47px
    height: 50px
    background-color: white
    transition: background-color .3s ease
    cursor: pointer
    @include flex-center
    &:not(:last-child)
      border-bottom: 1px solid #e9e9e9

</style>