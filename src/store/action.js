import axios from "axios";

export default function getMovies() {
    return (dispatch) => {
        axios
            .get("http://www.omdbapi.com/?apikey=b6d0372c&s=Batman")
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
    return (dispatch) => {
        axios.get(`http://www.omdbapi.com/?apikey=b6d0372c&i&i=${id}`)
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