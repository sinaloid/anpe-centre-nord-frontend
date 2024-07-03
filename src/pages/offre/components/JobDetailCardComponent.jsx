import { useNavigate } from "react-router-dom";

const JobDetailCardComponent = () => {
  const navigate = useNavigate();

  const goToDetail = (e, slug) => {
    e.preventDefault();
    navigate("/offres/" + slug);
  };
  return (
    <div
      className="card my-2 cursor"
      onClick={(e) => goToDetail(e, "slifufds")}
    >
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center">
            <div className="job-logo d-flex justify-content-center align-items-center rounded-2">
              B.
            </div>
            <div className="ms-3">
              <h5 className="card-title fw-bold">{"Nom de l'emploi"}</h5>
              <p className="card-text text-muted">{"Nom de l'entrprise"}</p>
            </div>
          </div>
          <div>
            <div className="text-primary d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-1"></i> Centre Nord, Kaya
            </div>
            <div className="text-primary d-flex align-items-center">
              <i className="bi bi-people-fill me-1"></i> 125 candidatures
            </div>
          </div>
          <div className=" text-end">
            <button className="btn btn-sm btn-primary  py-1 px-2">Postuler</button>
            <div className="d-flex my-1 flex-wrap">
              <div className="text-primary d-flex align-items-center">
                <i className="bi bi-clock-fill"></i> <span className="ps-1">Publier le : 12/12/2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailCardComponent;
