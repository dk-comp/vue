<template>
  <form class="personal-area-personal-data">
    <h6>Личные данные</h6>
    <div class="inputs-row">
      <div class="i-item">
        <span class="label">ФИО</span>
        <input class="input" type="text" placeholder="Иванов Иван Иванович" />
      </div>
      <div class="i-item">
        <span class="label">Должность</span>
        <textarea class="textarea" placeholder="Охранник"></textarea>
      </div>
    </div>
    <div class="inputs-row">
      <div class="i-item">
        <span class="label">Телефон</span>
        <input class="input" type="text" placeholder="+7 (495) 123-45-67" />
      </div>
      <div class="i-item">
        <span class="label">E-mail</span>
        <input class="input" type="text" placeholder="ivanov_ivan@mail.ru" />
      </div>
    </div>
    <div class="inputs-row">
      <div class="i-item">
        <span class="label">Компания</span>
        <input class="input" type="text" placeholder="" />
      </div>
      <div class="i-item">
        <span class="label">ИНН</span>
        <textarea class="textarea" placeholder=""></textarea>
      </div>
    </div>
    <div class="inputs-row">
      <div class="i-item">
        <span class="label">Фактический адрес</span>
        <textarea class="textarea" placeholder=""></textarea>
      </div>
    </div>
    <div class="inputs-row">
      <div class="i-item">
        <span class="label">Юридический адрес</span>
        <textarea class="textarea" placeholder=""></textarea>
      </div>
    </div>
    <div class="inputs-row">
      <div class="i-item">
        <span class="label">Почтовый адрес</span>
        <textarea class="textarea" placeholder=""></textarea>
      </div>
    </div>
    <button class="button submit-form">
      <img src="../../img/icons/save-file-option.png" />
      <span>Сохранить изменения</span>
    </button>
  </form>
</template>

<script>
export default {
  name: 'PersonalAreaPersonalData'
}
</script>

<style scoped lang="sass">
.personal-area-personal-data
  width: 100%
  background-color: white
  padding: 30px
  display: flex
  flex-direction: column
  margin-bottom: 50px

  $marginRight: 70px

  .submit-form
    @include button-focus-none
    margin-left: auto
    display: flex
    align-items: center
    padding: 0 20px
    height: 35px
    background-color: #c83636
    color: #ffffff
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 15px
    font-weight: 700

    img
      margin-right: 10px

  h6
    color: #000000
    font-family: "Proxima Nova - Extra Bold", sans-serif
    font-size: 21px
    font-weight: 400
    margin-bottom: 20px

  .textarea,
  .input
    padding: 0 15px
    color: #565656
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 16px
    font-weight: 400
    height: 35px
    background-color: #f7f7f7
    @include button-focus-none

  .i-item
    display: flex
    flex-direction: column
    align-items: flex-start

    .textarea
      padding: 6px 15px 5px
      min-height: 0
      height: 35px

    .label
      margin-bottom: 6px
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 16px
      font-weight: 400

  .inputs-row
    display: flex

    &:not(:last-child)
      margin-bottom: 20px


    > *
      flex-basis: 0
      flex-grow: 1

      &:not(:last-child)
        margin-right: $marginRight

  @media (max-width: 1087px)
    $marginRight: 30px
    .inputs-row
      > *
        &:not(:last-child)
          margin-right: $marginRight
  @media (max-width: 1087px)
    padding: 20px
    $marginRight: 0
    .submit-form
      margin-right: auto
      max-width: 250px
      width: 100%
      justify-content: center
    .i-item
      .textarea
        height: 80px

    .inputs-row
      flex-direction: column

      > *
        flex-basis: auto

        &:not(:last-child)
          margin-bottom: 20px
          margin-right: $marginRight
</style>