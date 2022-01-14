<template>
  <div class="comment-item">
    <div class="comment">
      <div class="c-header">
        <div class="left-group">
          <div class="id">1</div>
          <div class="name">Алексей Буравченков</div>
        </div>
        <date-views-comments class="revert" />
      </div>
      <div class="quote"
        v-if="quote.name"
      >
        <div class="c-header">
          <div class="left-group">
            <div class="id">{{ quote.id }}</div>
            <div class="name">{{ quote.name }}</div>
          </div>
        </div>
        <p class="c-text">
          {{ quote.text }}
        </p>
      </div>
      <p class="c-text">
        <span class="reply-id" v-if="replyId">{{ replyId }}</span>
        Специалисты Bitcoin.com проанализировали все проведенные за 2017 год ICO по данным Tokendata, и обнаружили, что
        46% из них уже успели провалиться. При этом неудавшимся проектам удалось собрать 104 млн долларов.
      </p>
      <div class="c-footer">
        <div class="left">
          <div class="likes">
            <div class="dislike">
              <button>
                <img src="../../img/icons/dislike-icon.png" alt="dislike" />
              </button>
              <span>2</span>
            </div>
            <div class="like">
              <button>
                <img src="../../img/icons/like-icon.png" alt="like" />
              </button>
              <span>1</span>
            </div>
          </div>
          <a href="#" class="reply">Ответить</a>
        </div>
        <div class="right"
          :class="{'active': actions}"
        >
          <a href="#" class="action-item">
            <img src="../../img/icons/warning-red.png" />
          </a>
          <a href="#" class="action-item">
            <img src="../../img/icons/link-red.png" />
          </a>
        </div>
      </div>
    </div>
    <div class="replies" v-if="hasReply">
      <slot name="replies">
      </slot>
    </div>
  </div>
</template>

<script>
import DateViewsComments from '../courses/DateViewsComments'

export default {
  name: 'CommentItem',
  props: {
    hasReply: { type: Boolean, default: () => false },
    actions: { type: Boolean, default: () => true },
    quote: {
      type: Object, default: () => new Object()
    },
    replyId: { type: Number, default: () => null }
  },
  components: { DateViewsComments }
}
</script>

<style scoped lang="sass">
.comment-item
  display: flex
  flex-direction: column

  .quote
    background-color: #f4f4f4
    padding: 20px
    margin-bottom: 22px

    .c-header
      margin-bottom: 15px

    .c-text
      margin-bottom: 0

  .replies
    margin-left: 30px
    position: relative
    background-color: #f7f7f7
    border: 2px solid #d1d1d1

    &::after
      content: ''
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAn0lEQVQ4T2MsKi76z8DAwNDX28cIookFjKMacQcVwcCRU5QLYfj/T/vRgyeNyMYQ1CihIiHK9pt1HwPj/62PHjypgGkmqBGkEKz5D+sBBob/m2GaidII0iytIi3D/IcJpHkNSDNc45q1a1D8gC1Y/jP+l2H8z5DMwPC/gXyNxKZNDKcSoxFdE0gPwRwhIyMjzcTCeBAWKPDoIGQjrgQAANXkcMNmFp8uAAAAAElFTkSuQmCC")
      position: absolute
      width: 14px
      height: 16px
      top: 16px
      right: calc(100% + 7px)

  .comment
    display: flex
    flex-direction: column
    background-color: white
    padding: 26px 28px

  .c-footer
    display: flex
    justify-content: space-between

    .right
      display: flex
      align-items: center

      .action-item
        filter: grayscale(1)

        &:not(:last-child)
          margin-right: 10px

      &.active
        .action-item
          filter: grayscale(0)

    .left
      display: flex
      align-items: center

      .reply
        color: #565656
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 14px
        font-weight: 400
        text-decoration: underline

      .likes
        display: flex
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 14px
        line-height: 14px
        font-weight: 400
        margin-right: 35px

        .like
          color: #8fb037

          span
            &::before
              content: '+'

        .dislike
          margin-right: 15px
          color: #c83636

          span
            &::before
              content: '-'

        > *
          display: flex
          align-items: center

          button
            cursor: pointer
            @include button-focus-none
            background-color: transparent

            > img
              width: 16px
              height: 18px

  .c-text
    color: #000000
    font-family: "Proxima Nova - Semi Bold", sans-serif
    font-size: 16px
    font-weight: 400
    line-height: 24px
    margin-bottom: 20px

    .reply-id
      color: #ffffff
      font-family: "Proxima Nova - Semi Bold", sans-serif
      font-size: 16px
      font-weight: 400
      margin: 0 16px 16px 0
      float: left
      clear: both
      line-height: 16px
      height: 24px
      padding: 7px 8px
      background-color: #565656
      border-radius: 50%
      @include flex-center

  .c-header
    display: flex
    color: #565656
    font-family: "Proxima Nova - Extra Bold", sans-serif
    font-size: 14px
    font-weight: 400
    margin-bottom: 25px

    .left-group
      display: flex

    .name
      min-width: 200px
      margin-right: 20px

    .id
      color: $mainRed
      margin-right: 5px

      &::after
        content: '.'

  @media (max-width: 768px)
    .replies
      margin-left: 23px
    .comment
      padding: 24px 20px 20px
    .c-header
      flex-direction: column
      align-items: flex-start

      .left-group
        &:not(:last-child)
          margin-bottom: 10px


</style>