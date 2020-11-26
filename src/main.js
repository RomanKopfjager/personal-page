// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { i18n } from './plugins/i18n';

library.add(faBehance, faLinkedinIn, faInstagram, faArrowRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Import Vue App, routes, store
import App from './App';
import routes from './router';

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
  routes,
  i18n,
  linkActiveClass: 'active',
  mode: 'history',

});

new Vue({
  el: '#root',
  router,
  i18n,
  data: {},
  render: h => h(App),
});