import './genres-selector.scss';

export default function GenresSelector({genres, handleChangeGenre}) {

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