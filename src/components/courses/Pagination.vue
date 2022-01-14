<template>
  <div class="pagination green-theme">
    <button class="prev">
      <fa icon="angle-left" />
      <span class="is-hidden-touch">Предыдущая</span>
    </button>
    <button class="prev-p">2</button>
    <button class="active-page">3</button>
    <button class="next-p">4</button>
    <button class="dots">...</button>
    <button class="last-p">33</button>
    <button class="next">
      <span class="is-hidden-touch">Следующая</span>
      <fa icon="angle-right" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: { byPage: { type: Boolean, default: () => false } }
}
</script>

<style scoped lang="sass">
.pagination
  min-width: 100px
  display: flex
  align-items: center
  margin: 0
  justify-content: flex-end

  .prev,
  .next
    color: #000000
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 16px
    font-weight: 400

    > *
      &:first-child
        margin-right: 10px

  > *
    color: #000000
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 16px
    font-weight: 400
    @include button-focus-none
    cursor: pointer
    padding: 0 10px
    transition: all .2s ease
    min-width: 40px
    height: 40px
    background-color: #ffffff
    @include flex-center

    &:not(:last-child)
      margin-right: 1px

    &:hover
      color: $mainRed

  > .active-page
    box-shadow: inset 0px -2px 0px 0px $mainRed

  @media (max-width: 1087px)
    > *
      display: none

      &.prev,
      &.next
        display: flex

        > *
          &:first-child
            margin-right: 0

    &.unfolded,
    &.unfolded-tablet
      > *
        display: flex
        flex-wrap: nowrap
  @media (max-width: 768px)
    &.unfolded-tablet
      > *
        display: none

        &.prev,
        &.next
          display: flex

</style>