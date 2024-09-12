import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalDetailMovie from '../items/ModalDetailMovie'
import getMovies from "../store/action";
import Card from '../items/Card'
import {
  useSelector,
  useDispatch
} from 'react-redux'
import {
  useParams
} from "react-router-dom";

export default function CardComponent() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  // const {moviesParam} = useParams()
  // const [page, search] = moviesParam.split("--");

  useEffect(() => {
    dispatch(getMovies())
    setLoading(false)
  }, []);

  const openModal = useSelector(state => state.openModal)
  // console.log(param);
  const selectedMovie = useSelector(state => state.selectedMovie)

  return (
    <>
      {loading ? (
        <p>Wait for Content ...</p>
      ) : (
        <div>
          <Card />

          {openModal && selectedMovie && (
            <ModalDetailMovie />
          )}
        </div>
      )}
    </>
  );
}
