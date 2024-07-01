import { useNavigate } from "react-router-dom";

const JobCardComponent = () => {

  const navigate = useNavigate()

  const goToDetail = (e, slug) => {
    e.preventDefault()
    navigate("/offres/"+slug)
  }
  return (
    <div className="card my-2 card-offre cursor" onClick={e => goToDetail(e,"slifufds")}>
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
            <div className="text-primary">100k-200k/mois</div>
            <div className="d-flex my-1 flex-wrap">
              <div className="btn btn-sm btn-postuler  py-1 px-2">
                <span className="d-none">Postuler</span>
              </div>

              <span className="btn btn-sm ms-2 mb-1 bg-gray-light py-1 px-2 rounded-2">
                Contrat : CDI
              </span>
              <span className="btn btn-sm ms-2 mb-1 bg-gray-light py-1 px-2 rounded-2">
                Niveau : BAC
              </span>
              <span className="btn btn-sm ms-2 mb-1 bg-gray-light py-1 px-2 rounded-2">
                Experience : 2 ans
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardComponent;
