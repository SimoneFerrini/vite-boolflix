<script>

import {store} from "../store";
export default{
    data(){
        return{
            store,
            activeHoverStar: '',

        }
    },

    props:{
        movie: Object,

        
    },

    methods:{
        languageToFlagMovie(xx){

            switch(xx){
                case "en":
                    xx = "gb";
                    return xx;
                case "ja":
                    xx = "Jp";
                    return xx;
                case "zh":
                    xx = "cn";
                    return xx;
                case "ko":
                    xx = "kr";
                    return xx;
                case "xx":
                    xx = "--";
                    return xx;
                case "hi":
                    xx = "in";
                    return xx;
            }

            
        },

        voteToStars(num){
             num = Math.ceil(num / 2);
             return num;
        },

        checkImages(imgPath){
            let imgUrl;
            if(imgPath != null || imgPath  != '' || imgPath != ' ' ){
                imgUrl = this.store.APIimgCard + imgPath;
            }else{
                imgUrl = "../../public/img/badDB.png"
            }

            return imgUrl;
        },

        starsHover(index){
            this.activeHoverStar = index;
        },

        starsHoverReset(){
            this.activeHoverStar = '';
        },

        setAnteprimaShow(item){
            this.store.anteprimaType = 'm';
            this.store.anteprimaAttiva = item;
            this.store.anteprimaShow = true;
        }

        

        
    }
    
}
</script>

<template>
    <div class="card" @click="setAnteprimaShow(movie)">
        <img  v-if="movie.poster_path == null" src="../../public/img/badDB.png" alt="">
        <img  v-else :src="checkImages(movie.poster_path)" alt="img">
        <div class="card-title">
            <strong>{{ movie.title }}</strong>
        </div>
        <div class="card-hover">
            <strong >{{ movie.title }}</strong>
            <span class="small-font"> ({{ movie.original_title }})</span>
            <p class="small-font">{{ movie.overview }}</p>
            <div class="lang-stars-container">
                <span :class=" `fi fi-${languageToFlagMovie(movie.original_language)} `"></span>
                <div @mouseleave="starsHoverReset()">
                    <i v-for="indice in 5" @mouseover="starsHover(indice)"
                    :class="indice<=activeHoverStar ? 'fa-solid fa-star hover-active' : (indice < voteToStars(movie.vote_average)? 'fa-solid fa-star':'fa-regular fa-star') "></i>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .card{
        display: flex;
        flex-direction: column;
        gap: 3px;

        flex-shrink: 0;

        position: relative;
        
        width: 300px;
        background-color: black;
        border: 1px solid white;
        
        overflow: hidden;
        transition: 1s;
        
        &:hover img{
            transform: scale(120%);
            transition: 1s;
        }
        .fa-star{
            color: orange;

            &.hover-active{
                color: white;
            }
            
        }

    }

    .card-title{
        padding: 1em 0 0 1em;
    }
    .card-hover{
        display: none;
        flex-direction: column;
        gap: 0.4em;
        padding: 1em;
        background-color: rgba(0, 0, 0, 0.652);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        strong{
            font-size: 1.2em;
        }

        .small-font{
            font-size: 0.8em;
        }


    }

    .card:hover .card-hover{
        display: flex;

        .lang-stars-container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

</style>