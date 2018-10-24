import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import Dashboard from '../dashboard/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,      
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    components: {
      default: Dashboard,
    },

  },
],
});
