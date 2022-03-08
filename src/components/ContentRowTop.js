import React from "react";
import ContentMovies from "./ContentMovies";
import ContentRowMovies from "./ContentRowMovies";
import ContentTable from "./ContentTable";
import data from "../data";

// let data = {
//     moviesMetrics: [
//         {
//             title: "Movies in Data Base",
//             border: "border-left-primary",
//             value: "21",
//             icon: "fa-film",
//         },
//         {
//             title: "Total awards",
//             border: "border-left-success",
//             value: "79",
//             icon: "fa-award",
//         },
//         {
//             title: "Actors quantity",
//             border: "border-left-warning",
//             value: "49",
//             icon: "fa-user",
//         },
//     ],
//     movies: [
//         {
//             id: 1,
//             title: 'Avatar',
//             length: 120,
//             rating: 7.9,
//             genre: 'Ciencia Ficcion',
//             awards: 3
//         },
//         {
//             id: 2,
//             title: 'Titanic',
//             length: 320,
//             rating: 7.7,
//             genre: 'Drama',
//             awards: 11
//         },
//         {
//             id: 3,
//             title: 'La Guerra de las galaxias: Episodio VI',
//             rating: 9.1,
//             genre: 'Ciencia Ficcion',
//             awards: 7
//         },
//         {
//             id: 4,
//             title: 'La Guerra de las galaxias: Episodio VII',
//             length: 180,
//             rating: 9.0,
//             genre: 'Ciencia Ficcion', awards: 6
//         },
//         {
//             id: 5,
//             title: 'Parque Jurasico',
//             length: 270,
//             rating: 8.3,
//             genre: 'Ciencia Ficcion',
//             awards: 5
//         },
//         {
//             id: 6,
//             title: 'Harry Potter y las Reliquias de la Muerte - Parte 2',
//             length: 190,
//             rating: 9.0,
//             genre: 'Suspenso',
//             awards: 2
//         },
//         {
//             id: 7,
//             title: 'Transformers: el lado oscuro de la luna',
//             rating: 0.9,
//             genre: 'Ciencia Ficcion',
//             awards: 1
//         },
//         {
//             id: 8,
//             title: 'Harry Potter y la piedra filosofal',
//             length: 120,
//             rating: 10.0,
//             genre: 'Aventuras',
//             awards: 1
//         },
//         {
//             id: 9,
//             title: 'Harry Potter y la cámara de los secretos',
//             length: 200,
//             rating: 3.5,
//             genre: 'Aventuras',
//             awards: 2
//         },
//         {
//             id: 10,
//             title: 'El rey león',
//             rating: 9.1,
//             genre: 'Infantiles',
//             awards: 3
//         },
//         {
//             id: 12,
//             title: 'Buscando a Nemo',
//             length: 110,
//             rating: 8.3,
//             genre: 'Animacion',
//             awards: 2
//         },
//         {
//             id: 13,
//             title: 'Toy Story',
//             length: 150,
//             rating: 6.1,
//             genre: 'Animacion',
//             awards: 0
//         },
//         {
//             id: 14,
//             title: 'Toy Story 2',
//             length: 120,
//             rating: 3.2,
//             genre: 'Animacion',
//             awards: 2
//         },
//         {
//             id: 15,
//             title: 'La vida es bella',
//             rating: 8.3,
//             genre: 'Drama',
//             awards: 5
//         },
//         {
//             id: 16,
//             title: 'Mi pobre angelito',
//             length: 120,
//             rating: 3.2,
//             genre: 'Comedia',
//             awards: 1
//         },
//         {
//             id: 17,
//             title: 'Intensamente',
//             length: 120,
//             rating: 9.0,
//             genre: 'Animacion',
//             awards: 2
//         },
//         {
//             id: 19,
//             title: 'Big',
//             length: 130,
//             rating: 7.3,
//             genre: 'Aventuras',
//             wards: 2
//         },
//         {
//             id: 20,
//             title: 'I am Sam',
//             length: 130,
//             rating: 9.0,
//             genre: 'Drama',
//             awards: 4
//         },
//         {
//             id: 21,
//             title: 'Hotel Transylvania',
//             length: 90,
//             rating: 7.1,
//             genre: 'Infantiles',
//             awards: 1
//         }
//     ]
// };

function ContentRowTop() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>
				<div className="row">
					<ContentRowMovies data={data.moviesMetrics} />
				</div>
				<div className="row">
					<ContentMovies />
				</div>
			</div>
			<div className="row">
				<ContentTable data={data.movies}/>
			</div>


		</React.Fragment>
	);
}
export default ContentRowTop;
