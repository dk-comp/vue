import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Buefy from 'buefy'
import ScrollBar from 'vue-perfect-scrollbar'
import 'buefy/lib/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import fas from '@fortawesome/fontawesome-free-solid'
import fab from '@fortawesome/fontawesome-free-brands'
import far from '@fortawesome/fontawesome-free-regular'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMasonry from 'vue-masonry-css'

library.add(fas)
library.add(fab)
library.add(far)

Vue.component('fa', FontAwesomeIcon)
Vue.component('scrollbar', ScrollBar)

Vue.use(VueMasonry)
Vue.use(Buefy)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
