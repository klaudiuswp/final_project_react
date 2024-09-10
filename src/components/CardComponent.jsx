import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CardComponent() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?apikey=b6d0372c&s=Batman")
      .then(function (response) {
        console.log(response.data);
        setMovies(response.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [loading]);

  const handleMovieClick = (event, movieId) => {
    console.log(movieId);
    event.preventDefault(); 
    axios
      .get(`http://www.omdbapi.com/?apikey=b6d0372c&i=${movieId}`)
      .then((response) => {
        setSelectedMovie(response.data); // Set the selected movie details
        setShowModal(true); // Show the modal
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      {loading ? (
        <p>Wait for Content ...</p>
      ) : (
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
            {movies.Search.map((movie) => (
              <a href="" style={{ textDecoration: 'inherit' }} key={movie.imdbID}
              onClick={(event) => handleMovieClick(event, movie.imdbID)}>
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
              </a>
            ))}
          </div>

          {/* Modal Component */}
          {showModal && selectedMovie && (
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
                    <button type="button" className="btn btn-danger w-100" onClick={handleCloseModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
