import {SET_AUTH_USER} from "../action-types";

export const getAuthUser = () => async (dispatch) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        dispatch(setAuthUser(user));
    } catch (e) {
        console.error(e, 'error!');
    }
}

export const setAuthUser = (payload) => ({type: SET_AUTH_USER, payload});
