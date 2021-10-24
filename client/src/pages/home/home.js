import {Link} from "react-router-dom";
import Hero from '../../components/hero/hero';
import MovieList from '../../components/movie-list/movie-list';
import Banner from '../../components/banner/banner';

import './home.scss';

export default function Home() {
    return (
        <div className='container'>
            <Hero />
            <MovieList />
            <Link to={'/movies'}>
                <Banner src={'images/banner-1.png'}/>
            </Link>
        </div>
    );
}