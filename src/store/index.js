import { createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"

const initialState = {
    selectedMovie: [],
    openModal: false,
    movies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_MOVIE":

            return { ...state, selectedMovie: action.payload };

        case "OPEN_MODAL":

            return { ...state, openModal: action.payload };

        case "SET_MOVIES":

            return { ...state, movies: action.payload };

        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store;