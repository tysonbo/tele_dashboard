import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import Dashboard from '../dashboard/Dashboard.vue';
import VueChartJS from '../chart-examples/VueChartJS.vue'
import VueChartKick from '../chart-examples/VueChartKick.vue';
import VueCharts from '../chart-examples/VueCharts.vue';
//import HighCharts from 'highcharts-vue';

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
  {
    path: '/chart-example',
    name: 'VueChartJS',
    component: VueChartJS
  },
  {
    path: '/chartkick',
    name: 'VueChartKick',
    component: VueChartKick
  },
  {
    path: '/charts',
    name: 'VueCharts',
    component: VueCharts
  }  
  // ,{
  //   path: '/highcharts',
  //   name: 'HighCharts',
  //   component: HighCharts
  // }
],
});
