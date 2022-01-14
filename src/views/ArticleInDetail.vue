<template>
  <div class="article-in-detail">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Статьи', 'Статья о бухгалтерии в программе 1С']" />
      <h4>Статья о бухгалтерии в программе 1С</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png">
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png">
      </div>
      <div class="extra-row">
        <date-views-comments />
      </div>
      <div class="text-row">
        <p>Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться. Современному
          бухгалтеру без программы «1С:Бухгалтерия» не обойтись. Разработчики фирмы «1С» нашли подход ко всем категориям
          клиентов, продуктом пользуются и малые фирмы, и крупные организации. Это многофункциональный помощник ведения
          учета любой сложности: от первичной документации до составления отчетов и свода баланса. Здравствуйте, дорогие
          друзья! Сегодня мы вам расскажем о том, как правильно пользоваться. Современному бухгалтеру без программы
          «1С:Бухгалтерия» не обойтись.</p>
        <p>
          <img src="../img/article-img.png" alt="article" />
          Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться. Современному
          бухгалтеру без программы «1С:Бухгалтерия» не обойтись. Разработчики фирмы «1С» нашли подход ко всем категориям
          клиентов, продуктом пользуются и малые фирмы, и крупные организации. Это многофункциональный помощник ведения
          учета любой сложности: от первичной документации до составления отчетов и свода баланса. Здравствуйте, дорогие
          друзья! Сегодня мы вам расскажем о том, как правильно пользоваться. Современному бухгалтеру без программы
          «1С:Бухгалтерия» не обойтись. Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно
          пользоваться. Современному бухгалтеру без программы «1С:Бухгалтерия» не обойтись. Разработчики фирмы «1С»
          нашли подход ко всем категориям клиентов, продуктом пользуются и малые фирмы, и крупные организации. Это
          многофункциональный помощник ведения учета любой сложности: от первичной документации до составления отчетов и
          свода баланса. Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться.
          Современному бухгалтеру без программы «1С:Бухгалтерия» не обойтись. Здравствуйте, дорогие друзья! Сегодня мы
          вам расскажем о том, как правильно пользоваться. Современному бухгалтеру без программы «1С:Бухгалтерия» не
          обойтись. Разработчики фирмы «1С» нашли подход ко всем категориям клиентов, продуктом пользуются и малые
          фирмы, и крупные организации. Это многофункциональный помощник ведения учета любой сложности: от первичной
          документации до составления отчетов и свода баланса. Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о
          том, как правильно пользоваться. Современному бухгалтеру без программы «1С:Бухгалтерия» не обойтись.</p>

        <p>Здравствуйте, дорогие друзья! Сегодня мы вам расскажем о том, как правильно пользоваться. Современному
          бухгалтеру без программы «1С:Бухгалтерия» не обойтись. Разработчики фирмы «1С» нашли подход ко всем категориям
          клиентов, продуктом пользуются и малые фирмы, и крупные организации. Это многофункциональный помощник ведения
          учета любой сложности: от первичной документации до составления отчетов и свода баланса. Здравствуйте, дорогие
          друзья! Сегодня мы вам расскажем о том, как правильно пользоваться. Современному бухгалтеру без программы
          «1С:Бухгалтерия» не обойтись.</p>
      </div>
      <div class="extra-row">
        <tags />
      </div>
      <div class="extra-row">
        <share-it />
        <a href="#">Назад к списку статтей</a>
      </div>
      <comments />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import DateViewsComments from '../components/courses/DateViewsComments'
import Tags from '../components/courses/Tags'
import ShareIt from '../components/courses/ShareIt'
import Comments from '../components/Comments'

export default {
  name: 'ArticleInDetail',
  components: { Comments, ShareIt, Tags, DateViewsComments, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.article-in-detail
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    max-width: 1170px
    margin: 0 auto 50px

    .text-row
      display: flex
      flex-direction: column
      margin-bottom: 26px

      p
        color: #000000
        font-family: "Proxima Nova Rg", sans-serif
        font-size: 16px
        font-weight: 400
        line-height: 21px
        margin-bottom: 20px

        img
          float: left
          clear: both
          padding: 0px 20px 20px 0

        &:last-child
          margin-bottom: 0

    .extra-row
      margin-bottom: 26px
      display: flex
      justify-content: space-between
      align-items: center

      a
        color: #c83636
        font-family: "Proxima Nova - Extra Bold", sans-serif
        font-size: 15px
        font-weight: 400
        text-decoration: underline

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
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
    @media (max-width: 768px)
      padding: 0 10px
      margin-bottom: 20px
      .text-row
        p
          display: flex
          flex-direction: column
          align-items: center
          img
            padding: 0
            margin-bottom: 20px
            &:not(:first-child)
              margin-top: 20px

      .extra-row
        flex-direction: column
        align-items: center
        a
          margin-top: 25px
          align-self: flex-end
      > h4
        font-size: 24px
</style>