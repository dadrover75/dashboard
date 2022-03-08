export default function GenresInDb(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {props.genres.map((genre, i) => (
              <div className="col-lg-6 mb-4" key={i}>
                <a style={{textDecoration: 'none'}} href={`/genres/${genre.id}`}>
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{genre.title}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
