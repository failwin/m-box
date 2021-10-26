import {SET_AUTH_USER} from '../action-types';

const initialState = {
    isAuth: false,
}

export const authUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER : {
            return {
                ...state,
                isAuth: action.payload
            }
        }

        default:
            return state
    }
}