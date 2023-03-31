<!-- API key: 9c8e071c9d2477e79c9ef99320d11610-->

<script>
import {store} from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";


export default{
  data(){
    return{

        store,
    }
  },

  components:{
    AppHeader,
    AppMain,
  },

  methods:{
    searchMovie(){
      let newAPImovie = this.store.APIbase + this.store.APImovieSearch + this.store.APIkey + this.store.APIquery + this.store.searchTitle;
      axios.get(newAPImovie).then((res)=>{
        
        this.store.moviesList = res.data.results ;
        console.log(this.store.moviesList[7]);
      })
      let newAPIseries = this.store.APIbase + this.store.APIseriesSearch + this.store.APIkey + this.store.APIquery + this.store.searchTitle;
      axios.get(newAPIseries).then((res)=>{
        
        this.store.seriesList = res.data.results;
      })
    
    }

  }
 
  // created(){
  //   axios.get(this.store.APIqueryTitle).then((res) => {
  //     console.log(res);
  //   });
  // },



  
}
</script>

<template>
    <AppHeader @search="searchMovie()"></AppHeader>
    <AppMain></AppMain>
</template>

<style lang="scss" scoped>

</style>