<template>
  <div class="comments">
    <h5>Комментарии</h5>
    <div class="comments-row">
      <div class="c-item">
        <div class="c-header">
          <span class="name">Алексей Буравченков</span>
          <date-views-comments class="revert" />
        </div>
        <p>Ну так и есть - финансовая пирамида на современный лад. Такой современный цифровой МММ.</p>
      </div>
      <div class="c-item">
        <div class="c-header">
          <span class="name">Алексей Буравченков</span>
          <date-views-comments class="revert" />
        </div>
        <p>Ну так и есть - финансовая пирамида на современный лад. Такой современный цифровой МММ.</p>
        <div class="answer">
          <div class="c-header">
            <span class="name red">Ответ администратора</span>
            <span class="date">вчера в 16:15</span>
          </div>
          <p>Ну так и есть - финансовая пирамида на современный лад. Такой современный цифровой МММ. Ну так и есть -
            финансовая пирамида на современный лад. Такой современный цифровой МММ. Ну так и есть - финансовая пирамида
            на современный лад. Такой современный цифровой МММ.</p>
          <div class="reply">Ответить</div>
        </div>
      </div>
    </div>
    <h4>Новый комментарий</h4>
    <div class="under-header-line">
      <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
      <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
    </div>
    <form class="write-comment">
      <div class="forms-row">
        <div class="f-item">
          <span class="label required">Email</span>
          <input class="input" type="text" placeholder="ivanov@mail.ru">
        </div>
        <div class="f-item">
          <span class="label">Тема вопроса</span>
          <input class="input" type="text" placeholder="">
        </div>
      </div>
      <div class="forms-row">
        <div class="f-item">
          <span class="label">Подробное описание</span>
          <textarea class="textarea" placeholder="Текст сообщения"></textarea>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
import DateViewsComments from './courses/DateViewsComments'

export default {
  name: 'Comments',
  components: { DateViewsComments }
}
</script>

<style scoped lang="sass">
.comments
  .write-comment
    display: flex
    flex-direction: column
    background-color: white
    padding: 30px

    .forms-row
      display: flex
      align-items: flex-start

      &:not(:last-child)
        margin-bottom: 24px

      .f-item
        flex-basis: 0
        flex-grow: 1
        display: flex
        flex-direction: column

        .label
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          margin-bottom: 9px

          &.required
            &::after
              content: '*'

        .input,
        .textarea
          @include button-focus-none
          width: 100%
          color: #000000
          font-family: "Proxima Nova Rg", sans-serif
          padding: 0 20px
          font-size: 16px
          font-weight: 400
          background-color: #f0f0f0

        .input
          height: 45px

        .textarea
          height: 172px
          padding: 20px


        &:not(:last-child)
          margin-right: 30px

    .actions
      display: flex
      justify-content: flex-end

      .action-btn
        cursor: pointer
        height: 45px
        text-align: center
        padding: 0 40px
        color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        background-color: $mainRed
        @include button-focus-none


  > h5
    color: #000000
    font-family: "Proxima Nova - Extra Bold", sans-serif
    font-size: 24px
    margin-bottom: 20px
    font-weight: 400

  > .under-header-line
    margin-bottom: 30px

  > h4
    color: #000000
    font-family: "Proxima Nova - Extra Bold", sans-serif
    font-size: 30px
    margin-bottom: 0
    font-weight: 400
    line-height: 27px

  .comments-row
    width: 100%
    display: flex
    flex-direction: column
    margin-bottom: 50px

    .c-item
      padding: 24px 28px
      background-color: white

      &:not(:last-child)
        margin-bottom: 20px

      .answer
        padding: 21px
        border: 2px solid #d7d7d7
        margin-top: 20px

      .reply
        cursor: pointer
        margin-top: 10px
        color: #565656
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 14px
        font-weight: 400
        text-decoration: underline
        display: flex
        justify-content: flex-end

      p
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400

      .c-header
        align-items: center
        display: flex
        margin-bottom: 24px

        .date
          color: #565656
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 14px
          font-weight: 400

        .name
          color: #565656
          font-family: "Proxima Nova - Extra Bold", sans-serif
          font-size: 14px
          font-weight: 400
          margin-right: 40px

          &.red
            color: #c83636

  @media (max-width: 1087px)
    > h5,
    > h4
      text-align: center
    > .under-header-line
      margin-top: 12px
      display: flex
      justify-content: center
    .write-comment

      .forms-row
        flex-direction: column

        .f-item
          flex-basis: auto
          width: 100%

          &:not(:last-child)
            margin-right: 0
            margin-bottom: 24px
  @media (max-width: 768px)
    > h5
      font-size: 21px
      margin-bottom: 16px
    > h4
      font-size: 24px
    .write-comment
      padding: 30px 20px
    .comments-row
      .c-item
        padding: 20px 18px

        .c-header
          flex-wrap: wrap

          .name
            margin-bottom: 10px
            width: 100%

</style>