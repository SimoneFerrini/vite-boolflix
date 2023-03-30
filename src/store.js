import {reactive} from 'vue';

export const store = reactive({
    moviesList: [],
    seriesList:[],
    APIqueryTitle: 'https://api.themoviedb.org/3/search/movie?api_key=9c8e071c9d2477e79c9ef99320d11610&query=',
    
    searchTitle: '',
})