<script>

export default{
    data(){
        return{

        }
    },

    props:{
        series: Object,

        
    },
    
}
</script>

<template>
    <div class="card">
        <strong>{{ series.name }}</strong>
        <span> ({{ series.original_name }})</span>
        <span>{{ series.original_language }}</span>
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