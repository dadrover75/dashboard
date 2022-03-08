import PropTypes from "prop-types";

function ContentRowMovies(props) {
  return (
    props.data.map((item, i) => (
    <div className="col-md-4 mb-4" key={i}>
      <div className={`card ${item.border} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {item.title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {item.value}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas ${item.icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  );
}

ContentRowMovies.propTypes = {
  title: PropTypes.string.isRequired,
  border: PropTypes.oneOf([
    "border-left-primary",
    "border-left-success",
    "border-left-warning",
  ]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.oneOf(["fa-film", "fa-award", "fa-user"]).isRequired,
};

ContentRowMovies.defaultProps = {
  border: "border-left-primary",
  title: "Movies in Data Base",
  value: "1",
  icon: "fa-film",
};

export default ContentRowMovies;