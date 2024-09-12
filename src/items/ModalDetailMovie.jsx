import {
    Link
} from 'react-router-dom';
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    closeModal,
    destructMovie
} from "../store/action";

export default function ModalDetailMovie() {
    const selectedMovie = useSelector(state => state.selectedMovie)
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(closeModal())
        dispatch(destructMovie())
    };
    return (
        <>
            <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-start">{selectedMovie.Title}</h5>
                        </div>
                        <div className="modal-body">
                            <img
                                src={selectedMovie.Poster}
                                className="img-fluid"
                                alt={selectedMovie.Title}
                                style={{ height: "180px" }}
                            />
                            <p className="m-0 mt-3"><strong>Year:</strong> {selectedMovie.Year}</p>
                            <p className="m-0"><strong>Genre:</strong> {selectedMovie.Genre}</p>
                            <p className="m-0"><strong>Plot:</strong> {selectedMovie.Plot}</p>
                        </div>
                        <div className="modal-footer">
                            <Link to={`/movie/${selectedMovie.imdbID}`} className="btn btn-primary w-100">Check Movie</Link>
                            <button type="button" className="btn btn-danger w-100" onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}