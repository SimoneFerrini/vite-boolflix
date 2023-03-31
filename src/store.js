import {reactive} from 'vue';

export const store = reactive({
    moviesList: [],
    seriesList:[],
    APIbase: 'https://api.themoviedb.org/3/',
    APImovieSearch: 'search/movie',
    APIseriesSearch: 'search/tv',
    APIkey:'?api_key=9c8e071c9d2477e79c9ef99320d11610',
    APIquery:'&query=',
    
    searchTitle: '',
})