import ActualiteCardComponent from "../../../components/ActualiteCardComponent";

const ActualiteDuJourComponent = () => {
  return (
    <div className="row my-5 py-2">
      <div className="col-12 text-center">
        <div className="text-center mb-2">
          <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
            <i className="bi bi-newspaper text-primary fs-2"></i>
          </span>
        </div>
        <h2 className="fw-bold text-uppercase">Decouvrez les actualités du jour</h2>
        <div className="d-flex justify-content-center flex-wrap mb-5 mt-4">
          <div>
            <button className="btn btn-primary rounded-5 mx-2 mb-2 fw-bold">
              Toutes
            </button>
          </div>
          <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
            Activités
          </button>
          <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
            Proclamation/Résultat
          </button>
          <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
            Formations/Bourse
          </button>
          <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
            Projets
          </button>
        </div>
      </div>
      <div className="d-flex mt-2 mb-2">
        <span className="">125 résultats</span>
        <div className="ms-auto d-flex align-items-center">
          <span className="text-primary">Voir plus</span>
          <i className="bi bi-arrow-right ms-1"></i>
        </div>
      </div>
      <div className="col-12">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {[...Array(6).keys()].map((data) => {
            return (
              <div className="col" key={data}>
                <ActualiteCardComponent />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center mt-4">
            <button type="button" className="btn btn-primary my-2">
              Vour plus
            </button>
          </div>
    </div>
  );
};

export default ActualiteDuJourComponent;
