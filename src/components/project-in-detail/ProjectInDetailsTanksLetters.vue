<template>
  <div class="project-in-details-tanks-letters">
    <h4>Благодарственные письма</h4>
    <div class="under-header-line">
      <img class="is-hidden-touch" src="../../img/icons/under-header-line-left.png">
      <img class="is-hidden-desktop" src="../../img/icons/under-header-line.png">
    </div>
    <div class="letters">
      <div class="l-item">
        <img src="../../img/letter-img.png" alt="letter"/>
      </div>
      <div class="l-item">
        <img src="../../img/letter-img.png" alt="letter"/>
      </div>
      <div class="l-item">
        <img src="../../img/letter-img.png" alt="letter"/>
      </div>
      <div class="l-item">
        <img src="../../img/letter-img.png" alt="letter"/>
      </div>
      <div class="l-item">
        <img src="../../img/letter-img.png" alt="letter"/>
      </div>
      <div class="l-item">
        <img src="../../img/letter-img.png" alt="letter"/>
      </div>
      <div class="l-item">
        <img src="../../img/letter-img.png" alt="letter"/>
      </div>
      <div class="l-item">
        <img src="../../img/letter-img.png" alt="letter"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectInDetailsTanksLeters'
}
</script>

<style scoped lang="sass">
.project-in-details-tanks-letters
  display: flex
  flex-direction: column
  margin-bottom: 50px

  .letters
    display: grid
    justify-content: space-between
    grid-template-columns: repeat(auto-fill, 170px)
    grid-gap: 30px 2%
    @media all and (-ms-high-contrast: none)
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      > *
        margin-bottom: 30px


  h4
    color: #000000
    font-family: "Proxima Nova - Extra Bold", sans-serif
    margin-bottom: 0
    font-weight: 400
    line-height: 27px
    font-size: 30px

  .under-header-line
    margin-bottom: 30px

  @media (max-width: 1087px)
    .letters
      grid-template-columns: repeat(auto-fill, 150px)
      grid-gap: 20px 3%
    h4
      text-align: center
    > .under-header-line
      margin-top: 12px
      display: flex
      justify-content: center
  @media (max-width: 768px)
    .letters
      grid-template-columns: repeat(auto-fill, 130px)
      grid-gap: 10px 3%
    h4
      font-size: 24px

</style>