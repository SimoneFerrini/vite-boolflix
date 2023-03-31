<script>

export default{
    data(){
        return{

        }
    },

    props:{
        movie: Object,

        
    },
    
}
</script>

<template>
    <div class="card">
        <strong>{{ movie.title }}</strong>
        <span> ({{ movie.original_title }})</span>
        <span>{{ movie.original_language }}</span>
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