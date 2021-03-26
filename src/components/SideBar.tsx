import { Button } from "./Button";
import {GenreResponseProps} from '../App'
import { useEffect } from "react";
import { api } from "../services/api";
type SideBarProps = {
  genres: Array<GenreResponseProps>;
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
  setGenres: (genre: GenreResponseProps[]) => void;
};
export function SideBar({
  genres,
  setGenres,
  selectedGenreId,
  setSelectedGenreId,
}: SideBarProps) {
  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
