import './movie-item-info.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchFilms} from '../../redux';
import StarRatings from 'react-star-ratings';
import { useParams } from "react-router-dom";

export default function MovieItemInfo() {
    let {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilms(id));
    }, []);

    const {selectedFilm, imgUrl, isFilmsLoading} = useSelector(({films}) => films);

    if(isFilmsLoading) {
        return <h4>Wait please, films updating...</h4>
    }


    return (
        <section className='movie-info'>
            <div className='movie-info-picture'>
                <h2 className='movie-info-title'>{selectedFilm?.original_title}</h2>
                <img src={imgUrl + selectedFilm?.poster_path} alt='main image'/>
            </div>
            <div className='movie-info-description'>
                <h4 className="movie-info-description-title">Film genres: {selectedFilm?.genres.map(genre => genre.name + ', ')}</h4>
                <p className="movie-info-description-text">{selectedFilm?.overview}</p>
                <div className="movie-info-budget">
                    <div className="movie-info-star">
                        <StarRatings
                            rating={selectedFilm?.vote_average}
                            starDimension="40px"
                            numberOfStars={10}
                            starSpacing="15px"
                            starRatedColor="gold"
                            name='rating'
                        />
                        {selectedFilm?.vote_average} Rating
                    </div>
                    <span>Film Budget: {selectedFilm?.budget} $</span>
                </div>
            </div>
        </section>

);
}
