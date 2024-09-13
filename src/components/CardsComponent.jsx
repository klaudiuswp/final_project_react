import React, { useEffect } from "react";
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
  const { searchQuery } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchQuery);
    dispatch(getMovies(searchQuery))
  }, [searchQuery]);

  const openModal = useSelector(state => state.openModal)
  const selectedMovie = useSelector(state => state.selectedMovie)

  return (
    <>
      <div>
        <Cards />

        {openModal && selectedMovie && (
          <ModalDetailMovie />
        )}
      </div>
    </>
  );
}
