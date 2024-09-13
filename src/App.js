import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  MainPage,
  MoviesPage,
  MovieDetailPage
} from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='movies?/:searchQuery' element={<MoviesPage />} />
          <Route path='movie/:id' element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
