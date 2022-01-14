<template>
  <div id="app">
    <fast-right-buttons />
    <header-region></header-region>
    <div class="page-content">
      <router-view></router-view>
    </div>
    <footer-region class="footer-region"></footer-region>
  </div>
</template>

<script>
import FooterRegion from './components/FooterRegion'
import HeaderRegion from './components/HeaderRegion'
import FastRightButtons from './components/FastRightButtons'

export default {
  components: { FastRightButtons, HeaderRegion, FooterRegion },
}
</script>

<style lang="sass">
#app
  background-color: $defaultBackground
  display: flex
  flex-direction: column
  min-height: 100vh
  min-width: 340px

  .page-content
    flex: 1 0 auto
    > *
      min-height: 100%
</style>
