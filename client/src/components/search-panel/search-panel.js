import {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFindFilmByName, setPage, setSearchFilm} from "../../redux";

import './search-panel.scss';

export default function SearchPanel() {

    const {page, searchFilm} = useSelector(({films}) => films);

    const dispatch = useDispatch();

    const {pathname} = useLocation();

    const handleFindFilm = (e) => {
        dispatch(setPage(1));
        dispatch(setSearchFilm(e.target.value));
    }

    useEffect(() => {
        dispatch(fetchFindFilmByName(searchFilm, page));
    }, [searchFilm, page]);

    return (

        pathname === '/movies' && (<div className='search-panel'>
            <input className='search-panel-input' type='text' value={searchFilm} onChange={handleFindFilm} placeholder='search'/>
        </div>)

    );
}