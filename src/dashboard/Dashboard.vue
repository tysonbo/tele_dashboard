<template>
<div>
  <h1>Results Here</h1>
  <div v-if="callStats" class="content">
    <h4>Should be Visible</h4>
    <div class="top-row" v-for="(stat, index) in callStats" :key="index">
        <div class="top part">
          <span>Name: {{ stat.name }}</span>
          <span>ANI: {{ stat.ani }}</span>        
        </div>
    </div>
  </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default{
  name: 'Dashboard',
  created(){
    this.$store.dispatch('stats/getStats');    
  },
  components: {  },
  data() {
    return {      
      addedToCart: false,
      stats: [],
      selectedCall: {
        _id: null,
        name: null,
        ani: null,
        call_reason: null,
        quote_number: null,
        policy_number: null,
        claim_number: null,
        __v: null,
      },
    };
  },  
  computed: {
    availableStats(){
      return this.$store.state.stats.theStats;
    },
    //[{"_id":"5bce048d0085783998315899","name":"Jim Jamison","ani":"440-999-0909","call_reason":"Quote","quote_number":"1234567","policy_number":"12345678","claim_number":"3333333","__v":0},{"_id":"5bce11bc98e509001502cd9b","name":"Tim Jones","ani":"216-337-8888","call_reason":"Quote","quote_number":"11223111","policy_number":"33342224","claim_number":"6666543","__v":0}]
    callStats(){
      return this.$store.state.stats.theStats;      
    },
  },
  methods: {   
      // The name in quotes is the mutation name in our store
      fetchCallStats(){
        this.$store.dispatch('stats/fetchStats');
      }
   },
};
</script>

<style lang="scss" >
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width:165px;
  }
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.sale{
  color: red;
}
.content{
  position: relative;
}
.add-to-cart{
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}

.sale-border {
  border: 3px solid red;
}

.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
