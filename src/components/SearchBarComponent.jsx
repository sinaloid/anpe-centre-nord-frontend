const SearchBarComponent = () => {
  return (
    <form className="row g-3 justify-content-center">
      <div className="col-auto col-md-5">
        <div className="input-group mb-3">
          <span className="input-group-text bg-white" id="basic-addon1">
            <i className="bi bi-search text-primary"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher un emploi, un stage, une formation, un projet"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
        <i className="bi bi-filter"></i>Filtrer
        </button>
      </div>
    </form>
  );
};

export default SearchBarComponent;
