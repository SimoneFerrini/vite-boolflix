<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import '@fortawesome/fontawesome-free/css/all.css';
import {store} from "../store";
export default{
    data(){
        return{
            store,
        }
    },

    props:{
        movie: Object,

        
    },

    methods:{
        languageToFlagMovie(xx){

            if( xx == 'en'){
                xx = 'gb';
            } else if( xx == 'ja'){
                xx = 'jp'
            } else if( xx == 'zh'){
                xx = 'cn'
            } else if( xx == 'ko'){
                xx = 'kr'
            } else if( xx == 'xx'){
                xx = '--'
            } else if( xx == 'hi'){
                xx = 'in'
            }

            return xx;

            

        },
        voteToStars(num){
             num = Math.ceil(num / 2);
             return num;
        },
    }
    
}
</script>

<template>
    <div class="card">
        <img :src="store.APIimgCard + movie.poster_path" alt="img">
        <strong>{{ movie.title }}</strong>
        <span> ({{ movie.original_title }})</span>
        <span :class=" `fi fi-${languageToFlagMovie(movie.original_language)} `"></span>
        <div>
            <i v-for=" indice in store.starList"  :class="indice < voteToStars(movie.vote_average)? 'fa-solid fa-star':'fa-regular fa-star' "></i>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .card{
        display: flex;
        flex-direction: column;
        gap: 3px;

        width: calc(100% / 4 - 3em / 4 * 3);
        background-color: black;
        border: 1px solid white;
        padding: 1em;

        .fa-star{
            color: orange;
        }
    }
</style>