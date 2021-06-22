import GenreBlock from '../genre-block/genre-block';

import './genre-blocks.scss';

export default function GenreBlocks() {
    return (
        <ul className='genre-blocks'>
            <GenreBlock background={'linear-gradient(rgba(253, 9, 63, 1), rgba(243, 131, 241, 1))'}
                        src={'./images/genre-icons/romance.png'}
                        title={'Romance'}
            />
            <GenreBlock background={'linear-gradient(rgba(15, 255, 218, 1), rgba(60, 219, 119, 1))'}
                        src={'./images/genre-icons/dramma.png'}
                        title={'Dramma '}
            />
            <GenreBlock background={'linear-gradient(rgba(185, 54, 255, 1), rgba(87, 222, 218, 1))'}
                        src={'./images/genre-icons/historical.png'}
                        title={'Historical'}
            />
            <GenreBlock background={'linear-gradient(rgba(253, 9, 63, 1), rgba(252, 203, 26, 1))'}
                        src={'./images/genre-icons/action.png'}
                        title={'Action'}
            />
            <GenreBlock background={'linear-gradient(rgba(255, 100, 114, 1), rgba(253, 167, 93, 1))'}
                        src={'./images/genre-icons/sci-fi.png'}
                        title={'Sci-fi'}
            />
            <GenreBlock background={'linear-gradient(rgba(19, 84, 122, 1), rgba(128, 208, 199, 1) )'}
                        src={'./images/genre-icons/horror.png'}
                        title={'Horror'}
            />
            <GenreBlock background={'linear-gradient(rgba(255, 247, 123, 1), rgba(255, 191, 66, 1) )'}
                        src={'./images/genre-icons/comedy.png'}
                        title={'Comedy'}
            />
            <GenreBlock background={'linear-gradient(rgba(31, 162, 255, 1), rgba(31, 83, 92, 1))'}
                        src={'./images/genre-icons/documentary.png'}
                        title={'Documentary'}
            />
        </ul>
    );
}