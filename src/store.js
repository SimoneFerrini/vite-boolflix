import {reactive} from 'vue';

export const store = reactive({
    moviesList: [],
    seriesList:[],
    showcaseList:[],
    showcaseListSeries:[],
    showcaseOnlyThree:[],
    indexShowcase:0,
    

    APIbase: 'https://api.themoviedb.org/3/',
    APImovieSearch: 'search/movie',
    APIseriesSearch: 'search/tv',
    APIinitialShowcase: 'trending/movie/week',
    APIinitialShowcaseSeries: 'trending/tv/week',
    APIkey:'?api_key=9c8e071c9d2477e79c9ef99320d11610',
    APIquery:'&query=',

    APIimgCard: 'https://image.tmdb.org/t/p/w342',
    
    searchTitle: '',

    anteprimaAttiva: {},
    anteprimaShow: false,
})