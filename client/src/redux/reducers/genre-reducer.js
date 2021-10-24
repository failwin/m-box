import {SET_GENRES, SELECTED_GENRE, SELECTED_BY_BLOCK} from '../action-types';

const initialState = {
    genres: [],
    selectedGenre: [],
    selectedByBlock: null
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
        case SELECTED_BY_BLOCK : {
            return {
                ...state,
                selectedByBlock: action.payload
            }
        }

        default:
            return state
    }
}