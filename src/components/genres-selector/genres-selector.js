import './genres-selector.scss';
import {fetchGenres} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

export default function GenresSelector({genres, handleChangeGenre}) {

    const dispatch = useDispatch();

    return (
        <select
            onChange={(e) => handleChangeGenre(e.target.value)}
            className='genre-selector'>
            {
                genres.map(genre => (
                    <option
                        key={genre.id}
                        value={genre.id}
                        className='genre-selector-option'
                    >{genre.name}</option>
                ))
            }
        </select>
    );
}