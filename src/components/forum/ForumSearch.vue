<template>
  <div class="forum-search">
    <div class="customize-search-input">
      <input type="text" placeholder="Поиск по форуму" />
    </div>
    <super-select
      class="super-select border-none light-gray"
      placeholder="По заголовкам"
      :selected="['По заголовкам','Все время'][0]"
      :options="['Категории','Категории']"
      :cancelField="false"
    />
    <button class="search-btn">Искать</button>
  </div>
</template>

<script>
import SuperSelect from '../SuperSelect'

export default {
  name: 'ForumSearch',
  components: { SuperSelect }
}
</script>

<style scoped lang="sass">
.forum-search
  background-color: white
  display: flex
  align-items: center
  padding: 30px
  margin-bottom: 20px

  > *
    &:not(:last-child)
      margin-right: 30px

  .search-btn
    @include button-focus-none
    width: 140px
    background-color: #565656
    color: #ffffff
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 15px
    font-weight: 700
    height: 45px
    text-align: center

  .super-select
    line-height: 31px
    color: #000000
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 16px
    font-weight: 400
    width: 270px

  .customize-search-input
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

  @media (max-width: 1087px)
    .super-select
      width: 190px
    .search-btn
      width: 120px
  @media (max-width: 768px)
    padding: 20px
    flex-direction: column
    > *
      &:not(:last-child)
        margin-right: 0
        margin-bottom: 10px
    .customize-search-input,
    .super-select
      width: 100%
    .search-btn
      align-self: flex-end
</style>