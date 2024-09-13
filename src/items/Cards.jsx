import React from "react";
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    openModal,
    changeMovie
} from "../store/action";
import './CardsStyle.css';

export default function Cards() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);

    const handleMovieClick = (event, movieId) => {
        event.preventDefault();
        dispatch(openModal());
        dispatch(changeMovie(movieId));
    };
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                {movies.length === 0 ? (
                    <div className="col w-100 d-flex justify-content-center align-items-center">
                        <p className="text-center">Please Wait ...</p>
                    </div>
                ) : movies.Search.map((movie) => (
                    <button
                        type="button"
                        key={movie.imdbID}
                        onClick={(event) => handleMovieClick(event, movie.imdbID)}
                        className="text-decoration-none border-0 bg-transparent card-button"
                        style={{ cursor: "pointer" }} >

                        <div className="col" key={movie.imdbID}>
                            <div className="card h-100">
                                <div className="overflow-hidden responsive-height">
                                    <img
                                        src={movie.Poster}
                                        className="card-img-top img-fluid"
                                        alt={movie.Title}
                                        style={{ objectFit: "cover", height: "100%" }}
                                    />
                                </div>
                                <div className="card-img-overlay p-0" style={{ height: '100%' }}>
                                    <div className="d-flex align-items-end p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '40px', bottom: '0', width: '100%', position: 'absolute' }}>
                                        <p className="card-title fw-bold text-light text-truncate m-0">{movie.Title}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div >
        </>
    )
};
