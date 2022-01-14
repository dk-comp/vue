<template>
  <form class="new-comment">
    <span class="label">Ваше сообщение</span>
    <textarea class="textarea" placeholder="Текст сообщения"></textarea>
    <div class="actions-row">
      <div class="upload-block">
        <b-field class="file">
          <b-upload v-model="file">
            <a class="upload-btn">
              <img src="../../img/icons/upload-icon.png" alt="upload" />
              <span>Прикрепить файл</span>
            </a>
          </b-upload>

        </b-field>
        <span class="u-file-name" v-if="file">
          {{ 'File_name.jpg' }}
        </span>
      </div>
      <button class="submit-btn">
        Ответить
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'NewComment',
  data: () => ({
    file: null
  })
}
</script>

<style scoped lang="sass">
.new-comment
  background-color: white
  display: flex
  padding: 30px
  flex-direction: column

  .actions-row
    display: flex
    justify-content: space-between
    align-items: flex-start

    .submit-btn
      @include button-focus-none
      background-color: $mainRed
      color: #ffffff
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 15px
      font-weight: 700
      height: 45px
      width: 150px
      text-align: center

    .upload-block
      display: flex
      flex-direction: column

      .u-file-name
        margin-bottom: 5px
        color: #505050
        font-family: "Proxima Nova Кп", sans-serif
        font-size: 14px
        font-weight: 400

    .upload-btn
      @include button-focus-none
      display: flex
      background-color: transparent
      cursor: pointer

      img
        margin-right: 10px

      span
        color: #1b65c0
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400
        text-decoration: underline

  .textarea
    @include button-focus-none
    background-color: #f0f0f0
    padding: 17px 20px
    color: #000000
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 16px
    font-weight: 400
    margin-bottom: 20px

  .label
    color: #000000
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 16px
    font-weight: 400

  @media (max-width: 768px)
    padding: 30px 20px 22px
    .actions-row
      flex-direction: column
      align-items: flex-end
      .upload-block
        margin-bottom: 20px
        align-items: flex-end
</style>