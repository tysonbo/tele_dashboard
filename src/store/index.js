import Vue from 'vue';
import Vuex from 'vuex';

import statsModule from './modules/stats';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    stats: statsModule,
  },
  getters: {
  },
});

