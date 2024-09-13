import {
    useParams
} from "react-router-dom";
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    changeMovie,
} from "../store/action";

const MovieDetailComponent = () => {
    const selectedMovie = useSelector(state => state.selectedMovie)
    const dispatch = useDispatch()
    const param = useParams()

    if (selectedMovie.length === 0) {
        dispatch(changeMovie(param.id))
    }

    const renderDetail = (label, value) => value ? (
        <>
            <dt className="col-xl-2 col-md-4 col-3 text-start">{label}</dt>
            <dd className="col-xl-10 col-lg-9 col-md-8 col-9 text-start">{value}</dd>
        </>
    ) : null;

    return (
        <div className="container mt-5 mx-auto">
            {
                selectedMovie ? (
                    <>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <div className="card-body d-flex flex-column align-items-center bg-dark-subtle">
                                            <img src={selectedMovie.Poster} className="card-img-top mb-3" alt={selectedMovie.Title} />
                                            <h3 className="card-title">{selectedMovie.Title}</h3>
                                            <p className="text-muted mb-0">{selectedMovie.Genre}</p>
                                            <p className="text-muted mb-2">{selectedMovie.Released}</p>
                                            <div className="w-100">
                                                <div className="row justify-content-center">
                                                    <div className="col-4 px-0">
                                                        <p className="text-muted mb-2"><span className="badge text-bg-primary text-wrap">{selectedMovie.Rated}</span></p>
                                                    </div>
                                                    <div className="col-4 px-0">
                                                        <p className="text-muted mb-2"><span className="badge text-bg-warning text-wrap">{selectedMovie.Runtime}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="d-flex gap-2">
                                                <button type="button" className="btn btn-primary">Follow</button>
                                                <button type="button" className="btn btn-outline-secondary">Message</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header text-white" style={{ backgroundColor: 'rgba(251, 67, 0, 1)' }}>
                                            <h4 className="m-0">Movie Details</h4>
                                        </div>
                                        <div>
                                            <div className="card-body  bg-dark-subtle">

                                                <p className="card-text">{selectedMovie.Plot}</p>
                                                <dl className="row">
                                                    {renderDetail('Director', selectedMovie.Director)}
                                                    {renderDetail('Writers', selectedMovie.Writer)}
                                                    {renderDetail('Actors', selectedMovie.Actors)}
                                                    {renderDetail('Language', selectedMovie.Language)}
                                                    {renderDetail('Country', selectedMovie.Country)}
                                                    {renderDetail('Awards', selectedMovie.Awards)}
                                                    {renderDetail('Box Office', selectedMovie.BoxOffice)}

                                                </dl>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card my-4">
                                        <div className="card-header bg-secondary text-white">
                                            Ratings
                                        </div>
                                        <div className="card-body bg-dark-subtle">
                                            <ul className="list-group list-group-flush">
                                                {selectedMovie.Ratings ? (
                                                    selectedMovie.Ratings.map((rating, index) => (
                                                        <li key={index} className="list-group-item bg-dark-subtle">
                                                            <strong>{rating.Source}:</strong> {rating.Value}
                                                        </li>
                                                    ))
                                                ) : (
                                                    <li className="list-group-item">No Ratings Available</li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Wait for Content ...</p>
                )
            }

            {/* {
    "Metascore": "72",
    "imdbRating": "7.8",
    "imdbVotes": "808,077",
} */}



        </div>
    );
}

export default MovieDetailComponent;
