import {Link} from 'react-router-dom';

import './genre-list-item.scss';


export default function GenreListItem({src, title, color}) {
    return (
        <li className="genre-list-item" style={{background: color}}>
            <Link to={'/movies'}>
                <img src={src} alt={title}/>
                <h4>{title}</h4>
            </Link>
        </li>
    );
}