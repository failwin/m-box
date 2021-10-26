import './movies.scss';
import ReactPaginate from 'react-paginate';

import PosterPreview from '../../components/poster-preview/poster-preview';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchGenres, setPage, setSearchFilm} from "../../redux";
import GenresSelector from '../../components/genres-selector/genres-selector';

export default function Movies() {

    const {selectedGenre, genres, selectedByBlock} = useSelector(({genres}) => genres);
    const {findByName, page} = useSelector(({films}) => films);

    const dispatch = useDispatch();

    const [activeGenre, setActiveGenre] = useState(selectedByBlock  ? selectedByBlock : 28);

    useEffect(() => {
        dispatch(fetchGenres(page, activeGenre));
    }, [page, activeGenre]);

    const handlePageClick = (e) => {
        dispatch(setPage(e.selected + 1));
    }

    const handleChangeGenre = (id) => {
        setActiveGenre(id);
        dispatch(setSearchFilm(''));
        dispatch(setPage(1));
    }

    const sortBySelector = findByName.results ? findByName : selectedGenre;

    return (
        <section className='all-movies'>
            <h2 className='all-movies-title'>
                Choose genre:
                <GenresSelector handleChangeGenre={handleChangeGenre} genres={genres}/>
            </h2>
            {
                sortBySelector && sortBySelector.results ? (
                    <>
                        <ul className='movies-list'>
                            {
                                sortBySelector.results.map(film => <PosterPreview key={film.id} film={film}/>)
                            }
                        </ul>
                        <div className="pagination">
                            <ReactPaginate
                                pageCount={sortBySelector.total_pages}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                initialPage={page - 1}
                                forcePage={page - 1}
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


