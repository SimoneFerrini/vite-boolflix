// API key: 9c8e071c9d2477e79c9ef99320d11610

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
      let newAPI = this.store.APIqueryTitle + this.store.searchTitle;
      axios.get(newAPI).then((res)=>{
        
        this.store.moviesList = res.data.results;
        console.log(this.store.moviesList);
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

</template>

<style lang="scss" scoped>

</style>