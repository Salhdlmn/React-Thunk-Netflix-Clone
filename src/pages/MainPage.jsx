import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getGenres } from "../redux/actions/movieAction";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

function MainPage() {
  const state = useSelector((store) => store.movieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());

    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {state.genres.map((genre) => (
        <MovieList key={genre.id} genre={genre} />
      ))}
    </div>
  );
}

export default MainPage;
