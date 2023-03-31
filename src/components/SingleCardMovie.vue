<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default{
    data(){
        return{

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
            }

            return xx;

            

        }
    }
    
}
</script>

<template>
    <div class="card">
        <strong>{{ movie.title }}</strong>
        <span> ({{ movie.original_title }})</span>
        <span :class=" `fi fi-${languageToFlagMovie(movie.original_language)} fis`"></span>
        <span>{{ movie.vote_average }}</span>
        
    </div>
</template>

<style lang="scss" scoped>
    .card{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
</style>