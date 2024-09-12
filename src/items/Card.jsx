import axios from "axios";
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    openModal,
    changeMovie
} from "../store/action";

export default function Card() {
    const dispatch = useDispatch()
    const handleMovieClick = (event, movieId) => {
        console.log(movieId);
        event.preventDefault();
        dispatch(openModal())
        dispatch(changeMovie(movieId))
    };
    const movies = useSelector(state => state.movies)
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                {movies.length === 0 ?  (
                    <p>Wait for Content ...</p>
                ): movies.Search.map((movie) => (
                    <button
                        type="button"
                        key={movie.imdbID}
                        onClick={(event) => handleMovieClick(event, movie.imdbID)}
                        className="text-decoration-none border-0 bg-transparent"
                        style={{ cursor: "pointer" }} >
                
                        <div className="col" key={movie.imdbID}>
                            <div className="card h-100">
                                <div className="ratio ratio-1x1 overflow-hidden">
                                    <img
                                        src={movie.Poster}
                                        className="card-img-top img-fluid"
                                        alt={movie.Title}
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="card-body p-3" style={{ backgroundColor: 'rgba(251, 67, 0, 1)' }}>
                                    <p className="card-title fw-bold text-light text-truncate m-0">{movie.Title}</p>
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </>
    )
};
