import Vue from 'vue';
import App from './App.vue';
import { router } from "./router/router";
import VueLazyLoad from 'vue-lazyload'

require('vue-image-lightbox/dist/vue-image-lightbox.min.css');

Vue.use(VueLazyLoad);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router
}).$mount('#app');


