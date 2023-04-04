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

  created(){    
    this.initialShowcase();
  },

  methods:{

    initialShowcase(){
      let newAPIshowcase = this.store.APIbase + this.store.APIinitialShowcase + this.store.APIkey;
          axios.get(newAPIshowcase).then((res)=>{
        this.store.showcaseList = res.data.results;
      });

      let newAPIshowcaseSeries = this.store.APIbase + this.store.APIinitialShowcaseSeries + this.store.APIkey;
          axios.get(newAPIshowcaseSeries).then((res)=>{
        this.store.showcaseListSeries = res.data.results;
      });

    },

    searchMovie(){
      let newAPImovie = this.store.APIbase + this.store.APImovieSearch + this.store.APIkey + this.store.APIquery + this.store.searchTitle;
      axios.get(newAPImovie).then((res)=>{
        
        this.store.moviesList = res.data.results ;
        
      })
      let newAPIseries = this.store.APIbase + this.store.APIseriesSearch + this.store.APIkey + this.store.APIquery + this.store.searchTitle;
      axios.get(newAPIseries).then((res)=>{
        
        this.store.seriesList = res.data.results;
      })
    
    }

  }
 
 



  
}
</script>

<template>
    <AppHeader @search="searchMovie()"></AppHeader>
    <AppMain></AppMain>
</template>

<style lang="scss" scoped>

</style>