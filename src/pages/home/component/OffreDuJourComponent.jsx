import JobCardComponent from "../../../components/JobCardComponent";
import SearchBarComponent from "../../../components/SearchBarComponent";

const OffreDuJourComponent = () => {
  return (
    <div className="row my-5">
      <div className="col-12 text-center">
        <div className="text-center mb-2">
          <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
            <i className="bi bi-briefcase-fill text-primary fs-2"></i>
          </span>
        </div>
        <h2 className="fw-bold text-uppercase">Decouvrez les offres du jour</h2>
        <div className="d-flex justify-content-center flex-wrap mb-5 mt-4">
          <div>
            <button className="btn btn-primary rounded-5 mx-2 mb-2 fw-bold">
              Toutes
            </button>
          </div>
          <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
            Emplois
          </button>
          <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
            Stages
          </button>
          <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
            Formations
          </button>
          <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
            Projets
          </button>
        </div>

        <div>
          <SearchBarComponent />
        </div>
      </div>
      <div className="d-flex mt-3 mb-2">
        <span className="">125 résultats</span>
        <div className="ms-auto d-flex align-items-center">
          <span className="text-primary">Voir plus</span>
          <i className="bi bi-arrow-right ms-1"></i>
        </div>
      </div>
      {[...Array(6).keys()].map((data) => {
        return (
          <div key={data}>
            <JobCardComponent />
          </div>
        );
      })}
      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="btn btn-primary ">
          Vour plus
        </button>
      </div>
    </div>
  );
};

export default OffreDuJourComponent;
