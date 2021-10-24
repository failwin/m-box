import './movie-item-info.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchFilms} from '../../redux';
import StarRatings from 'react-star-ratings';
import {useParams} from "react-router-dom";
import Company from '../../components/company/company';

export default function MovieItemInfo() {
    let {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilms(id));
    }, []);

    const {selectedFilm, imgUrl, isFilmsLoading} = useSelector(({films}) => films);

    const filmsCompanies = selectedFilm?.production_companies.filter(company => company.logo_path !== null);

    if (isFilmsLoading) {
        return <h4>Wait please, films updating...</h4>
    }

    const genresList = selectedFilm?.genres.map(genre => genre.name).join(', ');

    return (
        <section className='movie-info' style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backgroundImage: `url(${selectedFilm && imgUrl + 'original' + selectedFilm.bg_img})`
        }}>
            <div className="movie-info-wrapper">
                <div className='movie-info-picture'>
                    <h2 className='movie-info-title'>{selectedFilm?.original_title}</h2>
                    <img src={imgUrl + 'original' + selectedFilm?.poster_path} alt='main_image'/>
                </div>
                <div className='movie-info-description'>
                    <h4 className="movie-info-description-title">Film genres: {genresList}</h4>
                    <p className="movie-info-description-text">{selectedFilm?.overview}</p>
                    <div className="movie-info-budget">
                        <div className="movie-info-star">
                            <StarRatings
                                rating={selectedFilm?.vote_average}
                                starDimension="30px"
                                numberOfStars={10}
                                starSpacing="5px"
                                starRatedColor="gold"
                                name='rating'
                            />
                            {selectedFilm?.vote_average} Rating
                        </div>
                        <span>Film Budget: {selectedFilm?.budget} $</span>
                    </div>
                    <div className="movie-info-trailer">
                        <h4 className='movie-info-title'>Trailer:</h4>
                        <iframe src={selectedFilm?.trailer}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>

                        </iframe>
                    </div>
                    <div className="movie-info-companies">
                        <ul className="movie-info-companies-list">
                            {
                                filmsCompanies?.map(company => <Company key={company.id} company={company}/>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}
