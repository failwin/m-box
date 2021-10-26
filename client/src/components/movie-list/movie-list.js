import './movie-list.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchFilms} from '../../redux';
import PosterPreview from '../poster-preview/poster-preview';
import ButtonInfo from '../button-info/button-info';
import {Link} from 'react-router-dom';

export default function MovieList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilms());
    }, []);

    const {topFilms, popularFilms, isFilmsLoading} = useSelector(({films}) => films);

    if(isFilmsLoading) {
       return <h4>Wait please, films updating...</h4>
    }

    return (
        <section className='movies'>
            <div className="movies-popular">
                <h2 className='movies-title'>Popular Films</h2>
                <ul className='movies-list'>
                    {
                        popularFilms.map(popularFilm => <PosterPreview key={popularFilm.id} film={popularFilm}/>)
                    }
                </ul>
                <Link to={'/movies'}>
                    <ButtonInfo text={'See more'}/>
                </Link>
            </div>
            <div className="movies-top">
                <h2 className='movies-title'>Top Films</h2>
                <ul className='movies-list'>
                    {
                        topFilms.map(topFilms => <PosterPreview key={topFilms.id} film={topFilms}/>)
                    }
                </ul>
                <Link to={'/movies'}>
                    <ButtonInfo text={'See more'}/>
                </Link>
            </div>
        </section>
    );
}