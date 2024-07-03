import JobCardComponent from "../../../components/JobCardComponent";

const OffreSimilaireComponent = () => {
  return (
    <div className="row my-5">
      <div className="d-flex mt-3 mb-2">
        <span className="fw-bold fs-4">Offres similaires</span>
        <div className="ms-auto d-flex align-items-center">
          <span className="text-primary">Voir plus</span>
          <i className="bi bi-arrow-right ms-1"></i>
        </div>
      </div>
      {[...Array(3).keys()].map((data) => {
        return (
          <div key={data}>
            <JobCardComponent />
          </div>
        );
      })}
    </div>
  );
};

export default OffreSimilaireComponent;
