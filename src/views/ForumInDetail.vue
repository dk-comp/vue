<template>
  <div class="forum-in-detail">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Форум', 'Курсы 1С', 'Курсы 1С:Предприятие']" />
      <h4>Форум: Курсы 1С:Предприятие</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <forum-search />
      <h5 class="forum-title">Взлет и падение криптовалют: почти половина состоявшихся ICO потерпела крах</h5>
      <div class="main-comment">
        <comment-item />
      </div>
      <div class="subscribe-row">
        <super-select
          class="super-select border-none dark"
          placeholder="Подписаться"
          :selected="'Подписаться'"
          :options="['Подписака с уведомлениями','Подписка без уведомлений']"
          :cancelField="false"
        />
      </div>
      <div class="comments-header">
        <h6>Комментарии</h6>
        <pagination />
      </div>
      <div class="comments">
        <comment-item />
        <comment-item
          :hasReply="true"
          :actions="false"

          :quote="{id: '1',name: 'Алексей Буравченков', text:
          'Ну так и есть - финансовая пирамида на современный лад. Такой современный цифровой МММ.' }"
        >
          <template slot="replies">
            <comment-item
              :actions="false"
              :replyId="2"
            />
          </template>
        </comment-item>

      </div>
      <div class="pagination-container">
        <pagination class="unfolded-tablet" />
      </div>
      <h5 class="new-comment-title">Оставьте свое сообщение</h5>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <new-comment />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import ForumSearch from '../components/forum/ForumSearch'
import CommentItem from '../components/forum/CommentItem'
import SuperSelect from '../components/SuperSelect'
import Pagination from '../components/courses/Pagination'
import NewComment from '../components/forum/NewComment'

export default {
  name: 'ForumInDetail',
  components: { NewComment, Pagination, SuperSelect, CommentItem, ForumSearch, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.forum-in-detail
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    max-width: 1170px
    margin: 0 auto 50px

    .pagination-container
      margin-bottom: 35px

    .comments
      display: flex
      flex-direction: column
      margin-bottom: 15px

      > *
        margin-bottom: 10px

        &:last-child
          margin-bottom: 0

    .comments-header
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 10px

      h6
        color: #000000
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 24px
        font-weight: 400
        margin-bottom: 0

    .subscribe-row
      display: flex
      margin-bottom: 30px

      .super-select
        min-width: 175px
        line-height: 31px
        color: #ffffff
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 15px
        font-weight: 700
        white-space: nowrap

    .main-comment
      margin-bottom: 20px

    .new-comment-title
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 30px
      font-weight: 400
      margin-bottom: 0
      line-height: 30px

    .forum-title
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 30px
      font-weight: 400
      margin-bottom: 24px

    > .under-header-line
      margin-bottom: 30px

    > h4
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 36px
      margin-bottom: 0
      font-weight: 400
      line-height: 27px

    @media (max-width: 1087px)
      max-width: 100%
      padding: 0 40px
      margin-bottom: 40px
      .new-comment-title,
      .forum-title
        text-align: center
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
    @media (max-width: 768px)
      margin-bottom: 20px
      padding: 0 10px
      .subscribe-row
        justify-content: flex-end
      .new-comment-title,
      .forum-title
        font-size: 24px

      > h4
        font-size: 24px


</style>