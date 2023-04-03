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
        series: Object,

        
    },

    methods:{
        languageToFlagSeries(xx){

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
                imgUrl = "./img/badDB.png"
            }

            return imgUrl;
        },
    },

    
    
}
</script>

<template>
    <div class="card">
        <img :src="checkImages(series.poster_path)" alt="img">
        <strong>{{ series.name }}</strong>
        <span> ({{ series.original_name }})</span>
        <span :class=" `fi fi-${languageToFlagSeries(series.original_language)}`"></span>
        <div>
            <i v-for=" indice in store.starList"  :class="indice < voteToStars(series.vote_average)? 'fa-solid fa-star':'fa-regular fa-star' "></i>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .card{
        display: flex;
        flex-direction: column;
        gap: 3px;

        flex-shrink: 0;

        
        width: 300px;
        background-color: black;
        border: 1px solid white;

        

       

        .fa-star{
            color: orange;

            &:hover{
                color: white;
            }
        }
    }
</style>