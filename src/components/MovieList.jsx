import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../utils/constant";
import Loading from "./Loading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../utils/constant";

function MovieList({ genre }) {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    // gelen kategoriye ait filmleri çeker
    axios
      .get(
        `/discover/movie?include_adult=false&include_video=false&language=tr&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="p-4">
      {/* eğerki filmler  yüklenmediyse */}
      {!movies && <Loading />}

      {/*  yüklendiyse */}
      {movies && (
        <>
          <h1 className="fs-1 mb-3">{genre.name}</h1>
          <Splide
            options={{
              autoWidth: true,
              gap: "10px",
              pagination: false,
            }}
          >
            {/* her bir film için bir tane slide elemanı oluştur */}
            {movies?.map((movie) => (
              <SplideSlide key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="movie"
                    src={baseImgUrl.concat(movie.poster_path)}
                  />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}
    </div>
  );
}

export default MovieList;
