<template>
  <div class="home-page router-view">
    <home-page-carousel />
    <home-page-about-company />
    <home-page-advantages />
    <home-page-reviews />
    <home-page-popular-services />
    <home-page-last-relises-and-topics />
    <home-page-our-customers />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

import VueFoldable from 'vue-foldable'
import HomePageCarousel from '../components/home/HomePageCarousel'
import HomePageAboutCompany from '../components/home/HomePageAboutCompany'
import HomePageAdvantages from '../components/home/HomePageAdvantages'
import HomePageReviews from '../components/home/HomePageReviews'
import HomePagePopularServices from '../components/home/HomePagePopularServices'
import HomePageLastRelisesAndTopics from '../components/home/HomePageLastRelisesAndTopics'
import HomePageOurCustomers from '../components/home/HomePageOurCustomers'

export default {
  components: {
    HomePageOurCustomers,
    HomePageLastRelisesAndTopics,
    HomePagePopularServices,
    HomePageReviews,
    HomePageAdvantages,
    HomePageAboutCompany,
    HomePageCarousel,
    Carousel,
    Slide,
    VueFoldable,
  },
  name: 'home',
}
</script>

<style scoped lang="sass">
.home-page
  width: 100%
  display: flex
  flex-direction: column


</style>
