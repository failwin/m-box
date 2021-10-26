import {combineReducers} from 'redux';
import {genresReducer} from './genre-reducer';
import {filmsReducer} from './films-reducer';
import {authUserReducer} from './auth-user-reducer';

export const reducers = combineReducers({
    films: filmsReducer,
    genres: genresReducer,
    authUser: authUserReducer
})