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
    <!--film con ricerca------------------------------------------------------------------->
    <div  class="my-container" v-if="this.store.moviesList.length > 0">
        <h2>Movies:</h2>
        <div class="cards-container" >
            <SingleCardMovie v-for="movie in store.moviesList" :movie="movie"></SingleCardMovie>
        </div>
    </div>
    <!--serie con ricerca--------------------------------------------------------------------->
    <div class="my-container" v-if="this.store.seriesList.length > 0">
        <h2>Series:</h2>
        <div class="cards-container">
            <SingleCardSeries v-for="series in store.seriesList" :series="series"></SingleCardSeries>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .cards-container{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        gap: 1em;

        max-width: 90%;
        margin: 0 auto;
        padding: 2em 0;
    }
</style>