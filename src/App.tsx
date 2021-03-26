import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        setGenres={setGenres}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />
      <Content
        movies={movies}
        setMovies={setMovies}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedGenreId={selectedGenreId}
      />
    </div>
  );
}