import {Link} from "react-router-dom";

import './genre-block.scss';

export default function GenreBlock({background, src, title, moveOnGenre}) {

    return (
        <li className='genre-block' style={{background:background }} >
            <Link to={'/movies'} onClick={() => moveOnGenre(title)}>
                <img className='genre-block-img' src={src} alt={title} />
                <h5 className='genre-block-title'>{title}</h5>
            </Link>
        </li>
    );
}