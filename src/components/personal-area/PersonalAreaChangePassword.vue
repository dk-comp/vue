<template>
  <div class="personal-area-change-password">
    <h6>Смена пароля</h6>
    <form class="inputs">
      <div class="f-item">
        <span class="label">Старый пароль</span>
        <div class="input-container">
          <input type="password" class="input" placeholder=""
            ref="oldPass"
          />
          <img class="show"
            @mouseover="showPass('oldPass')"
            @mouseleave="hidePasses()"
            alt="" src="../../img/icons/eye-icon.png"
          />
        </div>
        <!--<div class="note">-->
        <!--<img src="../../img/icons/warning-small.png" alt="warning" />-->
        <!--<span>Пароль не может совпадать с уже установленным</span>-->
        <!--</div>-->
      </div>
      <div class="f-item">
        <span class="label">Новый пароль</span>
        <div class="input-container">
          <input type="password" class="input" placeholder="" ref="newPass" />
          <img class="show"
            @mouseover="showPass('newPass')"
            @mouseleave="hidePasses()"
            alt="" src="../../img/icons/eye-icon.png"
          />
        </div>
        <div class="note">
          <img src="../../img/icons/warning-small.png" alt="warning" />
          <span>Пароль не может совпадать с уже установленным</span>
        </div>
      </div>
      <div class="f-item">
        <span class="label">Подтверждение пароля</span>
        <div class="input-container">
          <input type="password" class="input" placeholder="" ref="newPass2" />
          <img class="show"
            @mouseover="showPass('newPass2')"
            @mouseleave="hidePasses()"
            alt="" src="../../img/icons/eye-icon.png"
          />
        </div>
        <!--<div class="note">-->
        <!--<img src="../../img/icons/warning-small.png" alt="warning" />-->
        <!--<span>Пароль не может совпадать с уже установленным</span>-->
        <!--</div>-->
      </div>
      <button class="submit-btn button">
        <img src="../../img/icons/save-file-option.png" alt="" />
        <span>Сохранить изменения</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PersonalAreaChangePassword',
  methods: {
    hidePasses () {
      this.$refs.oldPass.type = 'password'
      this.$refs.newPass.type = 'password'
      this.$refs.newPass2.type = 'password'
    },
    showPass (ref) {
      let el = this.$refs[ref]
      el.type = 'text'
    }
  }
}
</script>

<style scoped lang="sass">
.personal-area-change-password
  display: flex
  flex-direction: column
  background-color: white
  padding: 30px
  margin-bottom: 50px

  .inputs
    display: flex
    flex-direction: column

    .submit-btn
      width: 232px
      height: 35px
      @include flex-center
      background-color: $mainRed
      @include button-focus-none
      color: #ffffff
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 15px
      font-weight: 700
      display: flex

      img
        margin-right: 10px

    .f-item
      display: flex
      flex-wrap: wrap
      align-items: center
      width: 100%

      &:not(:last-child)
        margin-bottom: 20px

      .note
        display: flex
        align-items: center
        color: #565656
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400

        > *
          &:not(:last-child)
            margin-right: 16px

      .input-container
        width: 370px
        height: 40px
        display: flex
        position: relative
        margin-right: 20px

        .show
          cursor: pointer
          position: absolute
          @include block-vertical-centering
          right: 12px

        input
          @include button-focus-none
          width: 100%
          height: 100%
          background-color: #f7f7f7
          color: #565656
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          padding: 0 40px 0 20px


      .label
        width: 100%
        margin-bottom: 5px
        color: #000000
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 16px
        font-weight: 400

  h6
    margin-bottom: 20px
    color: #000000
    font-family: "Proxima Nova - Extra Bold", sans-serif
    font-size: 21px
    font-weight: 400

  @media (max-width: 1087px)
    margin-bottom: 40px
    .inputs
      .submit-btn
        align-self: flex-end

      .f-item
        flex-direction: column
        align-items: flex-start

        .input-container
          margin-bottom: 10px
          width: 100%
  @media (max-width: 768px)
    padding: 20px
    margin-bottom: 20px
    .inputs
      .submit-btn
        width: 100%
        align-self: flex-start
        max-width: 250px

</style>