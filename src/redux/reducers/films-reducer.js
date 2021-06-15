import {RESET_FILMS_LOADING, SET_TOP_FILMS, SET_POPULAR_FILMS, SET_FILMS_LOADING, SELECTED_FILM} from '../action-types';

const initialState = {
    topFilms: [],
    popularFilms: [],
    isFilmsLoading: false,
    selectedFilm: null,
    imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face'
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

        default:
            return state
    }
}