<template>
  <div class="solution-in-detail">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Решения', 'Перенос данных КА 1.1 (УПП 1.3) => БП 3.0 или БП 2.0']" />
      <h4>Перенос данных КА 1.1 (УПП 1.3) => БП 3.0 или БП 2.0</h4>
      <div class="under-header-line is-hidden-tablet">
        <img src="../img/icons/under-header-line.png">
      </div>
      <tags />
      <solution-in-detail-article />
      <project-in-detail-watch-video />
      <project-in-detail-download-files />
      <comments />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import Tags from '../components/courses/Tags'
import ProjectInDetailArticle from '../components/project-in-detail/ProjectInDetailArticle'
import ProjectInDetailWatchVideo from '../components/project-in-detail/ProjectInDetailWatchVideo'
import ProjectInDetailDownloadFiles from '../components/project-in-detail/ProjectInDetailDownloadFiles'
import ProjectInDetailTrainingCourses from '../components/project-in-detail/ProjectInDetailTrainingCourses'
import ProjectInDetailsTanksLetters from '../components/project-in-detail/ProjectInDetailsTanksLetters'
import ReviewsAboutCourse from '../components/courses/ReviewsAboutCourse'
import SolutionInDetailArticle from '../components/solution-in-detail/SolutionInDetailArticle'
import Comments from '../components/Comments'

export default {
  name: 'SolutionInDetail',
  components: {
    Comments,
    SolutionInDetailArticle,
    ReviewsAboutCourse,
    ProjectInDetailsTanksLetters,
    ProjectInDetailTrainingCourses,
    ProjectInDetailDownloadFiles,
    ProjectInDetailWatchVideo,
    ProjectInDetailArticle,
    Tags,
    Breadcrumbs
  }
}
</script>

<style scoped lang="sass">
.solution-in-detail
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    margin: 0 auto 50px
    max-width: 1170px

    > .under-header-line
      margin-bottom: 30px

    > h4
      color: #000000
      font-family: "Proxima Nova - Extra Bold", sans-serif
      font-size: 36px
      font-weight: 400
      line-height: 27px
      margin-bottom: 14px

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
      > h4
        font-size: 24px

</style>