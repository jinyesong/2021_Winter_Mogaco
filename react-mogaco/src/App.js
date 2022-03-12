
import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async()=>{
    const json = await (await fetch("list_movies")).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  //   fetch("list_movies").then(response => response.json().then(json => {
  //   setMovies(json.data.movies)
  //   setLoading(false)
  // }));
  }, []);
  console.log(movies);
  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : <div>{movies.map(movie=><div key={movie.id}>
        <img src={movie.medium_cover_image} />
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
        </div>)}</div>}
    </div>
  );
}

export default App;
