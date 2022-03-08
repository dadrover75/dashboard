import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
let genres = [
    { id: 1, title: "Acción" },
    { id: 2, title: "Animacion" },
    { id: 3, title: "Aventura" },
    { id: 4, title: "Ciencia Ficcion" },
    { id: 5, title: "Comedia" },
    { id: 6, title: "Documental" },
    { id: 7, title: "Drama" },
    { id: 8, title: "Fantasía" },
    { id: 9, title: "Infantiles" },
    { id: 10, title: "Musical" },
    { id: 11, title: "Romance" },
    { id: 12, title: "Terror" },
    { id: 13, title: "Western" },
  ];

export default function ContentMovies() {
    return (
        <div className="row">
            {/*<!-- Last Movie in DB -->*/}
            < LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            < GenresInDb 
                genres={ genres }/>
        </div>
    )
}