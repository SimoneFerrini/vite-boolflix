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
        <span><strong> OriginalTitle: </strong>{{ movie.originalTitle }}</span>
        <span><strong> Language: </strong>{{ movie.language }}</span>
        <span><strong> Valutation :</strong>{{ movie.valutation }}</span>
        
    </div>
</template>

<style lang="scss" scoped>
    .card{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
</style>