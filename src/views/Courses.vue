<template>
  <div class="courses">
    <div class="inner">
      <breadcrumbs :breadcrumbs="['Главная', 'Курсы']" />
      <h4>Курсы</h4>
      <div class="under-header-line">
        <img class="is-hidden-touch" src="../img/icons/under-header-line-left.png" alt="" />
        <img class="is-hidden-desktop" src="../img/icons/under-header-line.png" alt="" />
      </div>
      <courses-filter />
      <div class="sort-row">
        <div class="found">
          <span>Найдено</span>
          <span class="val"> 2345</span>
        </div>
        <div class="sort-by">
          <super-select
            class="super-select border-none"
            placeholder="Новые"
            :selected="['Новые','Оплаченые'][0]"
            :options="['Все','Оплаченые']"
            :cancelField="false"
          />
        </div>
        <div class="time-by">
          <super-select
            class="super-select border-none "
            placeholder="Все время"
            :selected="['Все время','Новые'][0]"
            :options="['Все время','Новые']"
            :cancelField="false"
          />
        </div>
        <div class="pagination-container">
          <pagination />
        </div>
      </div>
      <div class="projects-row">
        <course-card-item />
        <course-card-item />
        <course-card-item />
        <course-card-item />
        <course-card-item />
      </div>
      <div class="pagination-container">
        <pagination class="unfolded-tablet" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import ProjectsFilter from '../components/projects/ProjectsFilter'
import SuperSelect from '../components/SuperSelect'
import Pagination from '../components/courses/Pagination'
import Tags from '../components/courses/Tags'
import NewBadge from '../components/courses/badges/NewBadge'
import StarsBadge from '../components/courses/badges/StarsBadge'
import ProjectCardItem from '../components/projects/ProjectCardItem'
import SolutionCardItem from '../components/solutions/SolutionCardItem'
import CoursesFilter from '../components/courses/CoursesFilter'
import CourseCardItem from '../components/courses/CourseCardItem'
export default {
  name: 'Courses',
  components: { CourseCardItem, CoursesFilter, SolutionCardItem, ProjectCardItem, StarsBadge, NewBadge, Tags, Pagination, SuperSelect, ProjectsFilter, Breadcrumbs }
}
</script>

<style scoped lang="sass">
.courses
  display: flex
  background-color: #f7f7f7
  min-height: 100%
  width: 100%

  .inner
    width: 100%
    max-width: 1170px
    margin: 0 auto 50px

    .projects-row
      display: flex
      flex-direction: column
      position: relative
      margin-bottom: 30px

      > *
        &:not(:last-child)
          margin-bottom: 30px

    .sort-row
      display: flex
      align-items: center
      margin-bottom: 30px

      .pagination-container
        margin-left: auto

      .sort-by,
      .time-by
        margin-right: 10px

        .super-select
          color: #000000
          font-family: "Proxima Nova - Semi Bold", sans-serif
          font-size: 16px
          font-weight: 400
          width: 210px

          .select-button
            border: none !important

      .time-by
        .super-select
          width: 140px

      .found
        margin: 5px 10px 5px 0
        @include flex-center
        height: 38.38px
        color: #000000
        font-family: "Proxima Nova - Semi Bold", sans-serif
        font-size: 16px
        font-weight: 400
        background-color: white
        padding: 0 20px

        .val
          margin-left: 5px
          font-family: "Proxima Nova - Extra Bold", sans-serif
          font-weight: 700


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
      > h4
        text-align: center
      > .under-header-line
        margin-top: 12px
        display: flex
        justify-content: center
    @media (max-width: 768px)
      padding: 0 10px
      margin-bottom: 20px
      .sort-row
        flex-wrap: wrap
        justify-content: space-between

        .pagination-container
          width: calc(100% - 205px)
          order: 1
          margin-left: 0
          min-width: 100px

        .sort-by,
        .time-by
          order: 2

          .super-select
            width: 140px

        .time-by
          margin-right: 0

        .found
          width: 185px
          margin-right: 10px
          height: 40px
      > h4
        font-size: 24px

</style>