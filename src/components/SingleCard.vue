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
        <span><strong> Title: </strong>{{ movie.title }}</span>
        <span><strong> OriginalTitle: </strong>{{ movie.original_title }}</span>
        <span><strong> Language: </strong>{{ movie.original_language }}</span>
        <span><strong> Users Vote :</strong>{{ movie.vote_average }}</span>
        
    </div>
</template>

<style lang="scss" scoped>
    .card{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
</style>