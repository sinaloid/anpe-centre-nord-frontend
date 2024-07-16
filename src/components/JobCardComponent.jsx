/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import JobCardLogo from "./JobCardLogo";

const JobCardComponent = ({data}) => {

  const navigate = useNavigate()

  const goToDetail = (e, slug) => {
    e.preventDefault()
    navigate("/offres/"+slug)
  }
  return (
    <div className="card my-2 card-offre cursor" onClick={e => goToDetail(e,"slifufds")}>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div className="col-md-6 d-flex align-items-center">
            <JobCardLogo data={data} />
            <div className="ms-3">
              <h5 className="card-title fw-bold">{data?.label}</h5>
              <p className="card-text text-muted">{data?.entreprise}</p>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="text-primary d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-1"></i> Centre Nord, Kaya
            </div>
            <div className="text-primary d-flex align-items-center">
              <i className="bi bi-people-fill me-1"></i> 125 candidatures
            </div>
          </div>
          <div className="col-12 col-md text-end">
            <div className="text-primary">100k-200k/mois</div>
            <div className="d-flex justify-content-end my-1 flex-wrap">
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
