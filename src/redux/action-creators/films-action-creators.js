import {RESET_FILMS_LOADING, SET_TOP_FILMS, SET_POPULAR_FILMS, SET_FILMS_LOADING, SELECTED_FILM} from "../action-types";

export const fetchFilms = (id) => async (dispatch) => {

    const key = '213ab3cf8469b8d83473bc75057b9059';
    const baseUrl = 'https://api.themoviedb.org/3/movie';
    try {
        dispatch(setFilmsLoading());

        if (id) {
            const response = await fetch(`${baseUrl}/${id}?api_key=${key}`);
            const film = await response.json();

            const responseImg = await fetch(`${baseUrl}/${id}/images?api_key=${key}`);
            const img = await responseImg.json();

            film.poster_path = img.posters.filter(poster => poster.iso_639_1 === "en")[0].file_path;
            return dispatch(selectedFilm(film));
        } else {
            const responseTop = await fetch(`${baseUrl}/top_rated?api_key=${key}`);
            const filmsTop = await responseTop.json();
            dispatch(setTopFilms(filmsTop.results));

            const responsePop = await fetch(`${baseUrl}/popular?api_key=${key}`);
            const filmsPop = await responsePop.json();
            dispatch(setPopularFilms(filmsPop.results));
        }

    } catch (e) {
        console.error(e, 'error!');
    } finally {
        dispatch(resetFilmsLoading());
    }
}

export const setTopFilms = (payload) => ({type: SET_TOP_FILMS, payload});
export const setPopularFilms = (payload) => ({type: SET_POPULAR_FILMS, payload});
export const resetFilmsLoading = () => ({type: RESET_FILMS_LOADING});
export const setFilmsLoading = () => ({type: SET_FILMS_LOADING});
export const selectedFilm = (payload) => ({type: SELECTED_FILM, payload});
