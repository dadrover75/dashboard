import PropTypes from "prop-types";

function ContentTable(props) {
  return (
    <div className="container container-fluid card shadow mb-4 table-responsive">
      <table className="table table-hover" style={{ marginTop: "20px" }}>
        <thead>
          <tr className="p-3 mb-2 bg-dark text-white">
            <th>Titulo</th>
            <th>Duracion</th>
            <th>Rating</th>
            <th>Genero</th>
            <th>Premios</th>
          </tr>
        </thead>
        {props.data.map((movie) => {
          return (
            <tbody key={movie.id}>
                <tr>
                  <td>{movie.title}</td>
                  <td>{movie.length}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.awards}</td>
                </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

ContentTable.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  genre: PropTypes.string.isRequired,
  awards: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

ContentTable.defaultProps = {
  title: "sin titulo",
  length: "no hay informacion",
  rating: "no hay informacion",
  genre: "no hay informacion",
  awards: "no hay informacion",
};

export default ContentTable;
