import { MovieCard } from "./MovieCard";
import{ GenreResponseProps, MovieProps } from '../App'
import { useEffect } from "react";
import { api } from "../services/api";


type ContentProps = {
  movies: Array<MovieProps>;
  selectedGenre: {
    title: string;
  };
  selectedGenreId: number;
  setMovies: (movie: MovieProps[]) => void;
  setSelectedGenre: (genre: GenreResponseProps)=>void;
};

export function Content({
  movies,
  setMovies,
  selectedGenre,
  setSelectedGenre,
  selectedGenreId,
}: ContentProps) {
  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}