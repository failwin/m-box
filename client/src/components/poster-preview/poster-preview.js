import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';

import './poster-preview.scss';

export default function PosterPreview ({film}) {

    const imgUrl = useSelector((state) => state.films.imgUrl);

    const {original_title, poster_path, vote_average, release_date, overview, id} = film;

    return (
        <li className='poster-preview'>
            <Link to={`movies/${id}`}>
                <div className="poster-preview-img">
                    <img src={poster_path ? imgUrl + 'w500/' + poster_path: 'images/default-img.jpg'} alt='Preview poster'/>
                    <div className="poster-preview-wrapper">
                        <h5 className='poster-preview-wrapper-genre'>Release date: {release_date}</h5>
                        <p className="poster-preview-wrapper-description">
                            {overview.length > 300 ? overview.slice(0, 300) + '...' : overview}
                        </p>
                    </div>
                </div>
                <span className='poster-preview-star-rating'>
                    <StarIcon style={{color: 'yellow'}} />{vote_average.toString().length <= 1 ? vote_average + '.0': vote_average}
                </span>
                <h4 className='poster-preview-title'>{original_title}</h4>
            </Link>
        </li>
    );
}
