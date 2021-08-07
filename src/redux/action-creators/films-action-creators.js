import {RESET_FILMS_LOADING, SET_TOP_FILMS, SET_POPULAR_FILMS, SET_FILMS_LOADING, SELECTED_FILM, SET_FILMS_BY_NAME, SET_PAGE, SET_SEARCH_FILM} from "../action-types";

const key = '213ab3cf8469b8d83473bc75057b9059';
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchFilms = (id) => async (dispatch) => {
    try {
        dispatch(setFilmsLoading());

        if (id) {
            const response = await fetch(`${baseUrl}/movie/${id}?api_key=${key}`);
            const film = await response.json();

            const responseTrailer = await fetch(`${baseUrl}/movie/${id}/videos?api_key=${key}&append_to_response=videos`)
            const trailers = await responseTrailer.json();
            film.trailer = `https://www.youtube.com/embed/${trailers.results[0].key}`;

            const responseImg = await fetch(`${baseUrl}/movie/${id}/images?api_key=${key}`);
            const img = await responseImg.json();
            film.bg_img = img.backdrops.filter(backdrop => backdrop)[0].file_path;

            return dispatch(selectedFilm(film));
        } else {
            const responseTop = await fetch(`${baseUrl}/movie/top_rated?api_key=${key}`);
            const filmsTop = await responseTop.json();
            dispatch(setTopFilms(filmsTop.results));

            const responsePop = await fetch(`${baseUrl}/movie/popular?api_key=${key}`);
            const filmsPop = await responsePop.json();
            dispatch(setPopularFilms(filmsPop.results));
        }

    } catch (e) {
        console.error(e, 'error!');
    } finally {
        dispatch(resetFilmsLoading());
    }
}

export const fetchFindFilmByName = (filmName, page) => async (dispatch) =>{
    try {
        dispatch(setFilmsLoading());
        dispatch(setPage(page));
        dispatch(setSearchFilm(filmName));

        const response = await fetch(`${baseUrl}/search/movie?language=en-US&page=${page}&include_adult=false&query=${filmName}&api_key=${key}`)
        const filmByName = await response.json();

        dispatch(setFilmsByName(filmByName));
    } catch (e) {
        console.error(e, 'Not found')
    } finally {
        dispatch(resetFilmsLoading());
    }
}


export const setTopFilms = (payload) => ({type: SET_TOP_FILMS, payload});
export const setPopularFilms = (payload) => ({type: SET_POPULAR_FILMS, payload});
export const resetFilmsLoading = () => ({type: RESET_FILMS_LOADING});
export const setFilmsLoading = () => ({type: SET_FILMS_LOADING});
export const selectedFilm = (payload) => ({type: SELECTED_FILM, payload});
export const setFilmsByName = (payload) => ({type: SET_FILMS_BY_NAME, payload});
export const setPage = (payload) => ({type: SET_PAGE, payload});
export const setSearchFilm = (payload) => ({type: SET_SEARCH_FILM, payload});
