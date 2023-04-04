<script>
import {store} from "../store";
import SingleCardMovie from "./SingleCardMovie.vue"
import SingleCardSeries from "./SingleCardSeries.vue";

export default{
    data(){
        return{
            store,
        }
    },

    components:{
        SingleCardMovie,
        SingleCardSeries,
    }
}
</script>

<template>
    <div class="my-container" v-if="store.searchTitle == '' ">
        <h2>Trending Movies:</h2>
        <div class="showcase">
            <SingleCardMovie v-for="movie in store.showcaseOnlyThree" :movie="movie"></SingleCardMovie>
        </div>
    </div>
    <!--film con ricerca------------------------------------------------------------------->
    <div  class="my-container" v-if="store.moviesList.length > 0">
        <h2>Movies:</h2>
        <div class="cards-container" >
            <SingleCardMovie v-for="movie in store.moviesList" :movie="movie"></SingleCardMovie>
        </div>
    </div>
    <div v-else-if="store.searchTitle != '' " class="no-res-container"> 
        <h2>Movies:</h2>
        No results found
    </div>
    <!--serie con ricerca--------------------------------------------------------------------->
    <div class="my-container" v-if="store.seriesList.length > 0">
        <h2>Series:</h2>
        <div class="cards-container">
            <SingleCardSeries v-for="series in store.seriesList" :series="series"></SingleCardSeries>
        </div>
    </div>
    <div v-else-if="store.searchTitle != '' " class="no-res-container"> 
        <h2>Series:</h2>
        No results found
    </div>

</template>

<style lang="scss" scoped>

    .my-container h2{
        padding-top: 1em;
    }
    .cards-container{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        gap: 1em;
        
        overflow-x:auto;

        max-width: 95%;
        margin: 0 auto;
        padding: 2em 0;
    }

    .no-res-container{
        max-width: 95%;
        margin: 0 auto;
        padding: 1em 0;
    }
    .showcase{
        display: flex;
        flex-direction: row;
        gap: 2em;

        overflow:hidden;

        max-width: 95%;
        margin: 0 auto;
        padding: 2em 0;
    }
</style>