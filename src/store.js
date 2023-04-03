import {reactive} from 'vue';

export const store = reactive({
    moviesList: [],
    seriesList:[],
    showcaseList:[],
    starList:[0,1,2,3,4],

    APIbase: 'https://api.themoviedb.org/3/',
    APImovieSearch: 'search/movie',
    APIseriesSearch: 'search/tv',
    APIinitialShowcase: 'trending/movie/week',
    APIkey:'?api_key=9c8e071c9d2477e79c9ef99320d11610',
    APIquery:'&query=',

    APIimgCard: 'https://image.tmdb.org/t/p/w342',
    
    searchTitle: '',
})