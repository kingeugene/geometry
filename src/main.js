import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: App.components.Home },
  { path: '/theory', component: App.components.Theory },
  { path: '/practice', component: App.components.Practice }
];

const router = new VueRouter({
  routes
});



new Vue({
  render: h => h(App),
  router
}).$mount('#app');


