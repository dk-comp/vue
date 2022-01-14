<template>
  <div class="about-course">
    <p class="a-text">Курс предназначен для пользователей, желающих освоить разработку прикладных решений в системе
      1С:Предприятие 8.1. В курсе на практическом примере рассмотрены основы работы с документами, справочниками,
      константами, регистрами накопления, отчетами, запросами, перечислениями, подсистемами, рассмотрены основы
      встроенного языка системы.<br />
      Курс является вступительным курсом учебной программы «Разработка и модификация прикладных решений для
      1С:Предприятие 8». Он предназначен для читателей, желающих научиться разрабатывать и модифицировать прикладные
      решения для системы 1С:Предприятие 8.1. Приступать к изучению курса можно, не обладая начальными знаниями по
      разработке для 1С:Предприятия, так как рассмотрение особенностей работы с системой и ее концепций приведено в
      расчете на неподготовленного пользователя. В курсе, наряду с общим обзором объектов системы, присутствует
      подробное описание методов работы и практический разбор основных приемов работы с документами, справочниками,
      константами, регистрами накопления, отчетами, запросами, перечислениями, подсистемами, рассмотрены основы
      встроенного языка системы. Курс построен на практическом примере разработки учебной конфигурации.</p>

    <div class="links">
      <span>Темы:</span>
      <a href="#">Программирование</a>
      <a href="#">Офисные технологии</a>
      <a href="#">Программное обеспечение</a>
      <a href="#">Менеджмент</a>
    </div>
    <div class="links">
      <span>Специальности:</span>
      <a href="#">Бухгалтер</a>
    </div>
    <div class="tags-container">
      <tags />
    </div>
    <h5>Дополнительные курсы: </h5>
    <div class="extra-courses">
      <a href="#">Практика бухгалтерского учета в 1С:Бухгалтерии 8</a>
      <a href="#">Основы конфигурирования в системе "1С:Предприятие 8.0"</a>
      <a href="#">Основы бухгалтерского учета</a>
    </div>
  </div>
</template>

<script>
import Tags from './Tags'

export default {
  name: 'AboutCourse',
  components: { Tags }
}
</script>

<style scoped lang="sass">
.about-course
  display: flex
  flex-direction: column
  margin-bottom: 40px

  .extra-courses
    display: flex
    flex-direction: column

    a
      color: #3f79c7
      font-family: "Proxima Nova - Semi Bold", sans-serif
      font-size: 16px
      font-weight: 400
      line-height: 24px
      padding-left: 22px
      position: relative
      margin-bottom: 4px

      &::before
        content: ''
        position: absolute
        width: 6px
        height: 6px
        top: .5em
        left: 0
        border-radius: 50%
        background-color: #bcbcbc

  h5
    color: #2e2e2e
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 24px
    font-weight: 600
    line-height: 30px
    margin-bottom: 5px

  .tags-container
    width: 100%
    margin-bottom: 40px

  .links
    display: flex
    flex-wrap: wrap
    font-size: 16px
    font-weight: 400
    line-height: 24px
    margin-bottom: 16px

    a
      color: #3f79c7
      font-family: "Proxima Nova - Semi Bold", sans-serif

      &:not(:last-child)
        margin-right: 3px

        &::after
          content: ','

    span
      margin-right: 3px
      color: #2e2e2e
      font-family: "Proxima Nova Rg", sans-serif
      font-weight: 700

  .a-text
    margin-bottom: 30px
    color: #2e2e2e
    font-family: "Proxima Nova Rg", sans-serif
    font-size: 16px
    font-weight: 400
    line-height: 24px

  @media (max-width: 768px)
    h5
      font-size: 21px
    .tags-container
      display: flex
      justify-content: center
</style>