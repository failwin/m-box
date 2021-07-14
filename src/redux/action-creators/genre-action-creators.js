import {SET_GENRES, SELECTED_GENRE, SELECTED_BY_BLOCK} from '../action-types';
import {setFilmsLoading, resetFilmsLoading} from '../../redux';

export const fetchGenres = (page, id) => async (dispatch) => {

    const key = '213ab3cf8469b8d83473bc75057b9059';
    const baseUrl = 'https://api.themoviedb.org/3';
    try {
        dispatch(setFilmsLoading());



        const responseGenresFilter = await fetch(`${baseUrl}/discover/movie?page=${page}&sort_by=popularity.desc&api_key=${key}&with_genres=${id}`);
        const genresFiltered = await responseGenresFilter.json();

        dispatch(selectedGenre(genresFiltered));

        const responseGenres = await fetch(`${baseUrl}/genre/movie/list?api_key=${key}`);
        const genresList = await responseGenres.json();

        dispatch(setGenres(genresList.genres));

    } catch (e) {
        console.error(e, 'error!');
    } finally {
        dispatch(resetFilmsLoading());
    }
}

export const setGenres = (payload) => ({type: SET_GENRES, payload});
export const selectedGenre = (payload) => ({type: SELECTED_GENRE, payload});
export const selectedByBlock = (payload) => ({type: SELECTED_BY_BLOCK, payload});

