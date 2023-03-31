<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default{
    data(){
        return{

        }
    },

    props:{
        series: Object,

        
    },

    methods:{
        languageToFlagSeries(xx){

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
        <strong>{{ series.name }}</strong>
        <span> ({{ series.original_name }})</span>
        <span :class=" `fi fi-${languageToFlagSeries(series.original_language)} fis`"></span>
        <span>{{ series.vote_average }}</span>
        
    </div>
</template>

<style lang="scss" scoped>
    .card{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
</style>