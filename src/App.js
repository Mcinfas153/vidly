import { useState } from 'react';
import MovieTable from './components/MovieTable';
import Navbar from './components/Navbar';
import { getMovies } from './services/fakeMovieService'
import './App.css';

function App() {

  const [movies, setMovies] = useState(getMovies());

  const deleteMovie = id => {
    const newResult = movies.filter(movie => movie._id !== id)
    setMovies(newResult)
    console.log(id)
  }

  return (
    <div className="App">
      <Navbar count={movies.length} />
      <MovieTable movies={movies} onDelete={deleteMovie} />
    </div>
  );
}

export default App;
