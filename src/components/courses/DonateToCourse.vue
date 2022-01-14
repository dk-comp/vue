<template>
  <div class="donate-to-course">
    <div class='question'>
      <span>Вам нравится?</span>
      <span>Нравится 82 студентам</span>
    </div>
    <div class="btn-container">
      <button class="button donate-btn">
        <img src="../../img/icons/coins-icon.png" alt="coins" />
        <span>Поддержать курс</span>
      </button>
    </div>
    <a href="#" class="print">
      <img src="../../img/icons/printer-icon.png" alt="print" />
      <span>Распечатать</span>
    </a>
    <a href="#" class="to-back">Назад к списку</a>
  </div>
</template>

<script>
export default {
  name: 'DonateToCourse'
}
</script>

<style scoped lang="sass">
.donate-to-course
  width: 100%
  display: flex
  align-items: center
  position: relative

  .to-back
    position: absolute
    right: 0
    top: calc(100% + 20px)
    color: #c83636
    font-family: "Proxima Nova - Extra Bold", sans-serif
    font-size: 15px
    font-weight: 400
    text-decoration: underline

  .print
    color: #1b65c0
    font-family: "Proxima Nova - Extra Bold", sans-serif
    font-size: 15px
    font-weight: 400
    text-decoration: underline
    display: flex
    align-items: center

    img
      margin-right: 10px

  .donate-btn
    @include button-focus-none
    width: 190px
    height: 35px
    color: #ffffff
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 15px
    font-weight: 700
    background-color: #565656
    margin-right: 27px

    img
      margin-right: 10px

  .question
    height: 35px
    margin-right: 50px
    display: flex
    flex-direction: column
    justify-content: space-between
    color: #000000
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 16px
    font-weight: 400

    span
      line-height: 15px

      &:first-child
        color: #1b65c0

  @media (max-width: 1087px)
    .print
      margin-left: auto
  @media (max-width: 600px)
    flex-wrap: wrap
    justify-content: space-between

    .print,
    .to-back
      position: static
      margin: 0


    .btn-container
      width: 100%
      display: flex
      margin-bottom: 18px

      .donate-btn
        margin: 0 auto

    .question
      margin-right: 0
      width: 100%
      margin-bottom: 17px
      text-align: center

</style>