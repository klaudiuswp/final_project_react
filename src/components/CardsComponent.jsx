import React, { useEffect, useState } from "react";
import ModalDetailMovie from '../items/ModalDetailMovie'
import getMovies from "../store/action";
import Cards from '../items/Cards'
import {
  useSelector,
  useDispatch
} from 'react-redux'
import {
  useParams
} from "react-router-dom";
import './CardsComponentStyle.css';

export default function CardsComponent() {
  const { searchQuery } = useParams();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageButton, setPageButton] = useState([1, 2, 3])

  useEffect(() => {
    dispatch(getMovies(searchQuery, page))
  }, [dispatch, searchQuery, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    newPage === 1 ? setPageButton([1, 2, 3]) : setPageButton([newPage - 1, newPage, newPage + 1])
    console.log(page);
  };

  const openModal = useSelector(state => state.openModal)
  const selectedMovie = useSelector(state => state.selectedMovie)
  const movies = useSelector((state) => state.movies);
  const maxPages = Math.ceil(movies.totalResults / 10);

  return (
    <>
      <div>
        <Cards />
        {openModal && selectedMovie && (
          <ModalDetailMovie />
        )}
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col col-auto me-sm-auto my-auto">
          <p className="text-center m-0">Menampilkan 10 dari {movies.totalResults}</p>
        </div>
        <div className="col col-auto">
          <nav aria-label="Page navigation sticky-bottom">
            <ul className="pagination pagination-dark justify-content-center my-4">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}>
                  Previous
                </button>
              </li>

              {pageButton.map((pageNumber) => (
                <li key={pageNumber} className={`page-item ${page === pageNumber ? "active" : ""}`}>
                  <button className="page-link" onClick={() => handlePageChange(pageNumber)}>
                    {pageNumber}
                  </button>
                </li>
              ))}

              <li className={`page-item ${page >= maxPages ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page >= maxPages}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
