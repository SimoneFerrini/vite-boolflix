<script>
import {store} from "../store";
import SingleCard from "./SingleCard.vue"

export default{
    data(){
        return{
            store,
        }
    },

    components:{
        SingleCard,
    }
}
</script>

<template>
    <div class="cards-container">
        <SingleCard v-for="movie in store.moviesList" :movie="movie"></SingleCard>
    </div>

</template>

<style lang="scss" scoped>
    .cards-container{
        display: flex;
        flex-flow: row wrap;

        gap: 1em;

        max-width: 90%;
        margin: 0 auto;
        padding: 2em 0;
    }
</style>