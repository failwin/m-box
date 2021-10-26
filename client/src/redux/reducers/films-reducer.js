import {RESET_FILMS_LOADING, SET_TOP_FILMS, SET_POPULAR_FILMS, SET_FILMS_LOADING, SELECTED_FILM, SET_FILMS_BY_NAME, SET_PAGE, SET_SEARCH_FILM} from '../action-types';

const initialState = {
    topFilms: [],
    popularFilms: [],
    isFilmsLoading: false,
    selectedFilm: null,
    page: 1,
    searchFilm: '',
    imgUrl: 'https://www.themoviedb.org/t/p/',
    findByName: []
}

export const filmsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOP_FILMS : {
            return {
                ...state,
                topFilms: action.payload
            }
        }
        case SET_POPULAR_FILMS : {
            return {
                ...state,
                popularFilms: action.payload
            }
        }
        case SELECTED_FILM : {
            return {
                ...state,
                selectedFilm: action.payload
            }
        }
        case SET_FILMS_LOADING : {
            return {
                ...state,
                isFilmsLoading: true
            }
        }
        case RESET_FILMS_LOADING : {
            return {
                ...state,
                isFilmsLoading: false
            }
        }
        case SET_FILMS_BY_NAME : {
            return {
                ...state,
                findByName: action.payload
            }
        }
        case SET_PAGE : {
            return {
                ...state,
                page: action.payload
            }
        }
        case SET_SEARCH_FILM : {
            return {
                ...state,
                searchFilm: action.payload
            }
        }

        default:
            return state
    }
}