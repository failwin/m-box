import {combineReducers} from 'redux';
import {genresReducer} from './genre-reducer';
import {filmsReducer} from './films-reducer';

export const reducers = combineReducers({
    films: filmsReducer,
    genres: genresReducer
})