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
        <SingleCard v-for="movie in store.moviesList" :movie="movie"> film</SingleCard>
    </div>

</template>

<style lang="scss" scoped>

</style>