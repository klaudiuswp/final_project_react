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

export default function CardsComponent() {
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchQuery);
    if (searchQuery) {
      dispatch(getMovies(searchQuery));
      setLoading(false);
    } else {
      dispatch(getMovies());
      setLoading(false);
    }
  }, []);

  const openModal = useSelector(state => state.openModal)
  const selectedMovie = useSelector(state => state.selectedMovie)

  return (
    <>
      {loading ? (
        <p>Wait for Content ...</p>
      ) : (
        <div>
          <Cards />

          {openModal && selectedMovie && (
            <ModalDetailMovie />
          )}
        </div>
      )}
    </>
  );
}
