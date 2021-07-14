import './movies.scss';
import ReactPaginate from 'react-paginate';

import PosterPreview from '../../components/poster-preview/poster-preview';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchGenres} from "../../redux";
import GenresSelector from '../../components/genres-selector/genres-selector';

export default function Movies(props) {

    const {selectedGenre, genres, selectedByBlock} = useSelector(({genres}) => genres);

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [activeGenre, setActiveGenre] = useState(selectedByBlock  ? selectedByBlock : 28);

    useEffect(() => {
        dispatch(fetchGenres(page, activeGenre));
    }, [page, activeGenre]);


    const handleChangeGenre = (id) => {
        setActiveGenre(id);
    }

    const handlePageClick = (e) => {
        setPage(e.selected + 1);
    }

    return (
        <section className='all-movies'>
            <h2 className='all-movies-title'>
                Choose genre:
                <GenresSelector handleChangeGenre={handleChangeGenre} genres={genres}/>
            </h2>
            {
                selectedGenre && selectedGenre.results ? (
                    <>
                        <ul className='movies-list'>
                            {
                                selectedGenre.results.map(film => <PosterPreview key={film.id} film={film}/>)
                            }
                        </ul>
                        <div className="pagination">
                            <ReactPaginate
                                pageCount={selectedGenre.total_pages}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                initialPage={selectedGenre.page - 1}
                                activeClassName={'active-page'}
                                disableInitialCallback={true}
                            />
                        </div>
                    </>

                ) : <h2>Wait please</h2>
            }

        </section>
    );
}


