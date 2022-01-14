<template>
  <div class="breadcrumbs">
    <template v-for="(breadcrumb, index) in breadcrumbs">
      <span v-if="index !== 0">></span>
      <a href="#" v-if="index !== breadcrumbs.length - 1">{{ breadcrumb }}</a>
      <span v-if="index === breadcrumbs.length - 1">{{ breadcrumb }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    breadcrumbs: { type: Array, default: () => ['Главная'] }
  }
}
</script>

<style scoped lang="sass">
.breadcrumbs
  display: flex
  align-items: center
  justify-content: flex-start
  flex-wrap: wrap
  margin-top: 15px
  margin-bottom: 26px

  > *
    color: #000000
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 14px
    font-weight: 400
    margin-right: 10px

  @media (max-width: 1087px)
    margin-top: 20px
  @media (max-width: 768px)
    margin-top: 10px
    margin-bottom: 30px
</style>