import { useEffect } from 'react';
import axios from "axios";
import {
    useParams
} from "react-router-dom";
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    changeMovie
} from "../store/action";

const MainComponent = () => {
    const selectedMovie = useSelector(state => state.selectedMovie)
    const dispatch = useDispatch()
    const param = useParams()
    const fetchMovie = async (id) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=b6d0372c&i&i=${id}`);
            console.log('dia memanggil');
            dispatch({
                type: "CHANGE_MOVIE",
                payload: response.data
            });
        } catch (err) {
            console.error("Failed to fetch movie data:", err);
        }
    };

    if (selectedMovie.length == 0) {
        console.log("selectedMovie");
        // fetchMovie(param.id);
        dispatch(changeMovie(param.id))
    }
    return (
        <div className="container mt-5 mx-auto">
            {
                selectedMovie ? (
                    <>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <img src={selectedMovie.Poster} className="card-img-top mb-3" alt="Profile Picture" />
                                            <h3 className="card-title">{selectedMovie.Title}</h3>
                                            <p className="text-muted">{selectedMovie.Genre}</p>
                                            <div className="d-flex gap-2">
                                                <button type="button" className="btn btn-primary">Follow</button>
                                                <button type="button" className="btn btn-outline-secondary">Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header bg-primary text-white">
                                            Movie Details
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">{selectedMovie.Plot}</p>
                                        </div>
                                        <div>
                                            <div className="card-body">
                                                <p className="card-text"><strong>Year:</strong>{selectedMovie.Year}</p>
                                                <p className="card-text"><strong>Rated:</strong>{selectedMovie.Rated}</p>
                                                <p className="card-text"><strong>Released:</strong>{selectedMovie.Released}</p>
                                                <p className="card-text"><strong>Runtime:</strong>{selectedMovie.Runtime}</p>
                                                <p className="card-text"><strong>Genre:</strong>{selectedMovie.Genre}</p>
                                                <p className="card-text"><strong>Director:</strong>{selectedMovie.Director}</p>
                                                <p className="card-text"><strong>Writers:</strong>{selectedMovie.Writer}</p>
                                                <p className="card-text"><strong>Actors:</strong>{selectedMovie.Actors}</p>
                                                <p className="card-text"><strong>Language:</strong>{selectedMovie.Language}</p>
                                                <p className="card-text"><strong>Country:</strong>{selectedMovie.Country}</p>
                                                <p className="card-text"><strong>Awards:</strong>{selectedMovie.Awards}</p>
                                                <p className="card-text"><strong>Box Office:</strong>{selectedMovie.BoxOffice}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card mt-4">
                                        <div class="card-header bg-secondary text-white">
                                            Ratings
                                        </div>
                                        <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><strong>Internet Movie Database:</strong> 7.8/10</li>
                                                <li class="list-group-item"><strong>Rotten Tomatoes:</strong> 85%</li>
                                                <li class="list-group-item"><strong>Metacritic:</strong> 72/100</li>
                                            </ul>
                                            <p class="mt-3"><strong>Metascore:</strong> 72</p>
                                            <p><strong>IMDb Rating:</strong> 7.8</p>
                                            <p><strong>IMDb Votes:</strong> 808,077</p>
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
    "Title": "The Batman",
    "Year": "2022",
    "Rated": "PG-13",
    "Released": "04 Mar 2022",
    "Runtime": "176 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Matt Reeves",
    "Writer": "Matt Reeves, Peter Craig, Bob Kane",
    "Actors": "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
    "Plot": "When a sadistic serial killer begins murdering key political figures in Gotham, The Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    "Language": "English, Spanish, Latin, Italian",
    "Country": "United States",
    "Awards": "Nominated for 3 Oscars. 38 wins & 184 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "72/100"
        }
    ],
    "Metascore": "72",
    "imdbRating": "7.8",
    "imdbVotes": "808,077",
    "imdbID": "tt1877830",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$369,345,583",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
} */}

            {/* <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-4">
                    <div class="row g-0">
                        <!-- Movie Poster -->
                        <div class="col-md-4">
                            <img src="https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
                                class="img-fluid rounded-start" alt="The Batman Poster">
                        </div>
                        <!-- Movie Details -->
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">The Batman</h3>
                                <p class="card-text"><strong>Year:</strong> 2022</p>
                                <p class="card-text"><strong>Rated:</strong> PG-13</p>
                                <p class="card-text"><strong>Released:</strong> 04 Mar 2022</p>
                                <p class="card-text"><strong>Runtime:</strong> 176 min</p>
                                <p class="card-text"><strong>Genre:</strong> Action, Crime, Drama</p>
                                <p class="card-text"><strong>Director:</strong> Matt Reeves</p>
                                <p class="card-text"><strong>Writers:</strong> Matt Reeves, Peter Craig, Bob Kane</p>
                                <p class="card-text"><strong>Actors:</strong> Robert Pattinson, Zoë Kravitz, Jeffrey Wright</p>
                                <p class="card-text"><strong>Language:</strong> English, Spanish, Latin, Italian</p>
                                <p class="card-text"><strong>Country:</strong> United States</p>
                                <p class="card-text"><strong>Awards:</strong> Nominated for 3 Oscars. 38 wins & 184 nominations total</p>
                                <p class="card-text"><strong>Box Office:</strong> $369,345,583</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Plot Section -->
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-4">
                    <div class="card-header bg-dark text-white">
                        Plot
                    </div>
                    <div class="card-body">
                        <p class="card-text">When a sadistic serial killer begins murdering key political figures in
                            Gotham, The Batman is forced to investigate the city's hidden corruption and question his
                            family's involvement.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ratings Section -->
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-4">
                    <div class="card-header bg-secondary text-white">
                        Ratings
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Internet Movie Database:</strong> 7.8/10</li>
                            <li class="list-group-item"><strong>Rotten Tomatoes:</strong> 85%</li>
                            <li class="list-group-item"><strong>Metacritic:</strong> 72/100</li>
                        </ul>
                        <p class="mt-3"><strong>Metascore:</strong> 72</p>
                        <p><strong>IMDb Rating:</strong> 7.8</p>
                        <p><strong>IMDb Votes:</strong> 808,077</p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}


        </div>
    );
}

export default MainComponent;
