import {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchFindFilmByName} from "../../redux";

import './search-panel.scss';

export default function SearchPanel() {

    const dispatch = useDispatch();

    const {pathname} = useLocation();
    const [searchFilm, setSearchFilm] = useState('');

    const handleFindFilm = (e) => {
        setSearchFilm(e.target.value);
    }

    useEffect(() => {
        dispatch(fetchFindFilmByName(searchFilm));
    }, [searchFilm]);

    return (

        pathname === '/movies' && (<div className='search-panel'>
            <input className='search-panel-input' type='text' value={searchFilm} onChange={handleFindFilm} placeholder='search'/>
        </div>)

    );
}