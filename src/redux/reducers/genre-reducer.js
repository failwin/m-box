import {SET_GENRES, SELECTED_GENRE} from '../action-types';

const initialState = {
    genres: [],
    selectedGenre: []
}

export const genresReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GENRES : {
            return {
                ...state,
                genres: action.payload
            }
        }
        case SELECTED_GENRE : {
            return {
                ...state,
                selectedGenre: action.payload
            }
        }

        default:
            return state
    }
}