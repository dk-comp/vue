<template>
  <div class="solution-in-detail-article">
    <div class="article">
      <p>Правила применимы для релизов КА начиная с 1.1.57.х. Из базы КА 1.1 в БП 3.0 или БП 2.0 переносятся: информация
        о текущих остатках на счетах БУ
        на дату конвертации, документы, справочная информация; Для БП 3.0 есть специализированная обработка переноса.
        Есть возможность отбора
        документов по журналу регистрации, полезна при регулярных переносах.</p>
      <image-carousel />
      <h3>Принцип работы</h3>
      <p>
        Данная разработка может использоваться в том числе для регулярного обмена данными, никаких дополнительных
        обработок, кроме тех, которые уже есть в типовых конфигурациях не требуется.</p>

      <p>Для переноса из КА (УПП) в ЗУП: тоже есть <a href="#">правила переноса.</a></p>

      <p>Расскажем как производится перенос данных из типовой конфигурации <b>«Комплексная автоматизация»</b>, редакции
        1.1
        (далее по тексту Конфигурации-источник) в типовую конфигурацию <b>«Бухгалтерия предприятия»</b>, редакция 3.0
        или
        2.0,
        далее по тексту именуемую «Конфигурация-получатель».</p>
      <p>Переход с Конфигурации-источник на Конфигурацию-получатель рекомендуется выполнять в начале нового периода
        (года,
        квартала, месяца) после завершения регламентных операций прошлого периода.</p>

      <p>Перенос данных производится при помощи универсальной обработки, выгружающей данные из информационной базы
        Конфигурации-источника в файл в формате XML. Полученный файл загружается в информационную базу
        Конфигурации-получателя при помощи универсальной обработки загрузки данных.</p>
      <p><b>Для переноса данных необходимы следующие файлы:</b><br />
        КА_ACC8.xml (КА_BP2.xml для 2.0) - правила конвертации данных.
        Переносимые данные.</p>

      <h6>Из информационной базы КА 1.1 в БП 3.0 или БП 2.0 переносятся:</h6>
      <ul>
        <li>
          Информация о текущих остатках на счетах бухгалтерского учета информационной базы Конфигурации-источник на дату
          конвертации информационной базы, документы, справочная информация;
        </li>

        <li>Вариант переноса данных, предполагающий перенос остатков, содержит правила обмена документами ввода
          начальных
          остатков и справочниками.
        </li>

        <li> Вариант переноса данных, предполагающий перенос текущих операций после ввода остатков, содержит
          дополнительно
          правила обмена документами.
        </li>
      </ul>

      <h6>Конвертация выполняется в два этапа:</h6>
      <ul>
        <li>данные из информационной базы КА 1.1 выгружаются в отдельный файл (файл данных);</li>
        <li>полученный файл загружается в информационную базу БП 3.0 (БП 2.0).</li>
      </ul>

      <h3>Установка</h3>
      <p>Установки не требуется, так как используются обработки, встроенные в типовые конфигурации, в
        Конфигурацию-источник и Конфигурацию-получатель.</p>

      <h3>Порядок работы</h3>
      <span class="text-img-container">
        <span class="img-container">
          <img src="../../img/project-in-details-1.png" alt="" />
          <span class="notice">Рис.1. Обработка для выгрузки данных</span>
        </span>
        <span class="img-container">
          <img src="../../img/project-in-details-2.png" alt="" />
          <span class="notice">Рис.2 Установка параметров</span>
        </span>
        <p>
          В программе <b>1С Комплексная автоматизация 8</b> нужно открыть обработку <b>Универсальный обмен данными в
          формате XML,</b>
          выбрать папку, в которой находятся правила переноса (см. рис. 1) и загрузить правила обмена. Не нужно включать
          все правила переноса. Следует использовать только те, которые необходимы для переноса остатков. Все
          справочники
          переносятся по ссылкам, по мере необходимости, т.е. только те, которые задействованы в остатках. Это
          обеспечивает отсутствие "мусора" в новой информационной базе. </p>

        <p>Если нужно выгрузить остатки на конец года, например на конец дня 31.12.2014, т.е. правильнее говорить на
          начало
          2015 года, то период выгрузки должен быть 01.01.2015 - ХХ.ХХ.ХХХХ. Документы ввода остатков в
          Конфигурации-получателе будут датированы 31.12.2014. С 01.01.2015 в Конфигурации-получателе нужно создавать
          документы, отражающие текущие операции. Если нужны только остатки, то включать надо правила выгрузки данных из
          раздела "Входящие остатки" (см. рис.1). Правила выгрузки данных из раздела "Документы" в этом случае следует
          отключить (см. рис 3 и 4). Период выгрузки например 01.01.2015 - 31.01.2015 означает, что переносится будут
          документы января 2015 года. Правила выгрузки данных из раздела "Документы" в этом случае должны быть
          включены.</p>

        <p>В первую очередь рекомендуем перенести учетную политику организации (справочник <b>"Организации"</b>
          переносится по
          ссылкам). При переносе остатков нужно правильно установить параметры (см. рис.2) в соответствии с настройкой
          плана счетов. По умолчанию параметры устанавливаются после загрузки правил обмена: параметр "Ведется
          складской учет" в зависимости от того, ведется ли складской учет на счетах учета ТМЦ (анализируется
          настройка
          счета
          "10.01"), параметр <b>"Ведется суммовой учет по складам"</b> в соответствии с признаком учета субконто
          "Суммовой".
          Параметр <b>"Вести учет по работникам"</b> устанавливается по умолчанию как "да". При необходимости можно
          изменить
          параметры до выгрузки данных. Для возврата к значениям по умолчанию следует перезагрузить правила обмена.</p>

        <p>При установленном параметре Переносить реквизит подразделение производится перенос реквизита Подразделение
          (используется в УУ) в реквизит ПодразделениеОрганизации. Имеет смысл при переносе данных в версию КОРП. Нужно
          иметь ввиду, что переносится не само значение реквизита Подразделение, а его соответствие из справочника
          ПодразделенияОрганизаций.</p>

        <p>Вариант переноса данных, предполагающий перенос текущих операций после ввода остатков, содержит правила
          обмена
          документами и справочниками. Перечень правил обмена документами представлен на рис. 3.</p>
        <p> В программе 1С Комплексная автоматизация 8 нужно открыть обработку Универсальный обмен данными в формате
          XML,
          выбрать папку, в которой находятся правила переноса (см. рис. 1) и загрузить правила обмена. Не нужно включать
          все правила переноса. Следует использовать только те, которые необходимы для переноса остатков. Все
          справочники
          переносятся по ссылкам, по мере необходимости, т.е. только те, которые задействованы в остатках. Это
          обеспечивает отсутствие "мусора" в новой информационной базе.</p>

        <p>Если нужно выгрузить остатки на конец года, например на конец дня 31.12.2014, т.е. правильнее говорить на
          начало
          2015 года, то период выгрузки должен быть 01.01.2015 - ХХ.ХХ.ХХХХ. Документы ввода остатков в
          Конфигурации-получателе будут датированы</p>

      </span>
      <p>
        31.12.2014. С 01.01.2015 в Конфигурации-получателе нужно создавать документы, отражающие текущие операции. Если
        нужны только остатки, то включать надо правила выгрузки данных из раздела "Входящие остатки" (см. рис.1).
        Правила выгрузки данных из раздела "Документы" в этом случае следует отключить (см. рис 3 и 4).
      </p>
    </div>
  </div>

</template>

<script>
import ImageCarousel from '../ImageCarousel'

export default {
  name: 'SolutionInDetailArticle',
  components: { ImageCarousel }
}
</script>

<style scoped lang="sass">
.solution-in-detail-article
  width: 100%
  display: flex
  flex-direction: column

  .article
    display: flex
    flex-direction: column
    width: 100%

    ul,
    li
      list-style: none
      color: #2e2e2e
      font-family: "Proxima Nova - Semi Bold", sans-serif
      font-size: 16px
      font-weight: 400
      line-height: 24px

    ul
      margin-bottom: 40px

    li
      padding-left: 30px
      display: flex
      align-items: flex-start
      position: relative

      &:not(:last-child)
        margin-bottom: 30px

      &::before
        content: ''
        position: absolute
        height: 6px
        width: 6px
        background-color: #b7b7b7
        border-radius: 50%
        top: .5em
        left: 3px

    h6
      color: #2e2e2e
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 16px
      font-weight: 400
      line-height: 24px
      margin-bottom: 20px

    b
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-weight: 700

    a
      font-family: "Proxima Nova - Semi Bold", sans-serif
      color: #3f79c7

    h3
      color: #2e2e2e
      font-family: "Proxima Nova Rg", sans-serif
      font-size: 24px
      font-weight: 700
      line-height: 24px
      margin-bottom: 27px

    p
      color: #000000
      font-family: "Proxima Nova - Semi Bold", sans-serif
      font-size: 16px
      font-weight: 400
      margin-bottom: 30px

    .text-img-container
      .img-container
        clear: both
        float: right
        margin: 0 0 30px 30px
        display: flex
        flex-direction: column

        .notice
          margin-top: 10px
          width: 100%
          color: #2e2e2e
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 14px
          font-weight: 400
          text-align: center

  @media (max-width: 768px)
    .article
      .text-img-container
        .img-container
          float: none
          margin: 0 0 30px
          align-items: center

</style>