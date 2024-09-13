import axios from "axios";

export default function getMovies(keyword = 'man', page = 1) {
    return (dispatch) => {
        const apiKey = process.env.REACT_APP_OMDB_API_KEY;
        axios
            .get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`)
            .then((response) => {
                console.log(response,"==>CALL API");
                dispatch(
                    {
                        type: "SET_MOVIES",
                        payload: response.data
                    }
                )
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}

export function openModal() {
    return (dispatch) => {
        dispatch({ type: "OPEN_MODAL", payload: true })
    }
}

export function closeModal() {
    return (dispatch) => {
        dispatch({ type: "OPEN_MODAL", payload: false })
    }
}

export function changeMovie(id) {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    return (dispatch) => {
        axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i&i=${id}`)
            .then((response) => {
                console.log(response.data,"==>CALL API");
                dispatch({
                    type: "CHANGE_MOVIE",
                    payload: response.data
                })
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}

export function destructMovie() {
    return (dispatch) => {
        dispatch({ type: "CHANGE_MOVIE", payload: [] })
    }
}