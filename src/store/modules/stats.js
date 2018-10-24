import axios from 'axios';

export default{
  namespaced: true,
  state: {
    stats: [],
    theStats: null,    
  },
  mutations: {
    fetchStats: (state, stats) => {
      state.stats = stats;
    },
    updateStats: (state, stats) => {
      state.theStats = stats;
    },
  },
  actions: {    
    fetchStats({commit}){
        // var config = {
        //   headers:  [
        //     {"Access-Control-Allow-Origin": "*"}, 
        //     {"'Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS"}, 
        //     {"Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, X-Requested-With,  Accept, authorization, client-security-token"}],            
        // };

        // axios.get('https://cors-anywhere.herokuapp.com/https://telecom-dashboard-api.herokuapp.com/calls/', config)
        // .then(result => commit('fetchStats', result.data))          
        // .catch(console.error);

        var config = {
          headers:  
            {"Access-Control-Allow-Origin": "*"}            
        };
        
        axios.get('https://telecom-dashboard-api.herokuapp.com/calls/', config)
        .then(result => commit('fetchStats', result.data))          
        .catch(console.error);
    },
    getStats({commit}){
      var config = {
        headers:  
          {"Access-Control-Allow-Origin": "*"}            
      };

      axios.get('https://telecom-dashboard-api.herokuapp.com/calls/', config)
      .then(result => commit('updateStats', result.data))          
      .catch(console.error);
    },
  },
  getters: {
      // These are if we need to compute something or filter
      // In our course example if we wanted only the onsale items
  },
};