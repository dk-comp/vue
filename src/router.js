import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Jobs from './views/Jobs.vue'
import Contacts from './views/Contacts.vue'
import Documents from './views/Documents.vue'
import ActualReleases from './views/ActualReleases.vue'
import Basket from './views/Basket'
import CourseLecture from './views/CourseLecture'
import CourseTest from './views/CourseTest'
import CourseTestResults from './components/CourseTestResults'
import Course from './views/Course'
import CourseTasks from './views/CourseTasks'
import CourseTests from './views/CourseTests'
import PersonalArea from './views/PersonalArea'
import News from './views/News'
import Reviews from './views/Reviews'
import PriceList from './views/PriceList'
import ProjectInDetail from './views/ProjectInDetail'
import Projects from './views/Projects'
import Releases from './views/Releases'
import SolutionInDetail from './views/SolutionInDetail'
import Solutions from './views/Solutions'
import Employees from './views/Employees'
import Articles from './views/Articles'
import ArticleInDetail from './views/ArticleInDetail'
import Services from './views/Services'
import Forum from './views/Forum'
import ForumInDetail from './views/ForumInDetail'
import ForumSearchResults from './views/ForumSearchResults'
import Courses from './views/Courses'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum
    },
    {
      path: '/forum-search-results',
      name: 'forum-search-results',
      component: ForumSearchResults
    },
    {
      path: '/forum-in-detail',
      name: 'forum-in-detail',
      component: ForumInDetail
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },

    {
      path: '/employees',
      name: 'employees',
      component: Employees
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/article-in-detail',
      name: 'article-in-detail',
      component: ArticleInDetail
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: Solutions
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {
      path: '/price-list',
      name: 'price-list',
      component: PriceList
    },
    {
      path: '/project-in-detail',
      name: 'project-in-detail',
      component: ProjectInDetail
    },
    {
      path: '/solution-in-detail',
      name: 'solution-in-detail',
      component: SolutionInDetail
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/releases',
      name: 'releases',
      component: Releases
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/actual-releases',
      name: 'actual-releases',
      component: ActualReleases,
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
    },
    {
      path: '/course-tasks',
      name: 'course-tasks',
      component: CourseTasks,
    },
    {
      path: '/course-tests',
      name: 'course-tests',
      component: CourseTests,
    },
    {
      path: '/course-lecture',
      name: 'course-lecture',
      component: CourseLecture,
    },
    {
      path: '/course-test',
      name: 'course-test',
      component: CourseTest,
    },
    {
      path: '/course-test-results',
      name: 'course-test-results',
      component: CourseTestResults,
    },
    {
      path: '/personal-area',
      name: 'personal-area',
      component: PersonalArea,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
})
