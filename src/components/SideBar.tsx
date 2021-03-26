import { Button } from "./Button";
import {GenreResponseProps} from '../App'
type SideBarProps = {
  genres: Array<GenreResponseProps>;
  selectedGenreId: number;
  setSelectedGenreId: (id:number) => void;
};
export function SideBar({ genres, selectedGenreId, setSelectedGenreId }: SideBarProps) {

  function handleClickButton(id: number){
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
  )
}
