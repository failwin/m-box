import './home.scss';
import Hero from '../../components/hero/hero';
import MovieList from '../../components/movie-list/movie-list';


export default function Home() {
    return (
        <div className='container'>
            <Hero />
            <MovieList />
        </div>
    );
}