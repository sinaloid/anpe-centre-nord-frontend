/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import JobCardLogo from "./JobCardLogo";
import useFunction from "../hooks/useFunction";

const JobCardComponent = ({data}) => {
  const {truncateText, formatDate} = useFunction()

  const navigate = useNavigate()

  const goToDetail = (e, slug) => {
    e.preventDefault()
    navigate("/offres/"+slug)
  }
  return (
    <div className="card my-2 card-offre cursor" onClick={e => goToDetail(e,data.slug)}>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div className="col-md-5 my-1 d-flex align-items-center flex-wrap">
            <JobCardLogo data={data} />
            <div className="col pe-2">
              <h5 className="card-text fw-bold fs-6 break-word">{truncateText(data?.label,70)}</h5>
              <p className="card-text text-muted">{truncateText(data?.entreprise)}</p>
            </div>
          </div>
          <div className="col-md-3 my-1">
            <div className="text-primary d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-1"></i> {data?.region}, {data?.ville}
            </div>
            <div className="text-primary d-flex align-items-center">
              <i className="bi bi-clock-fill me-1"></i> {"Date limite : "+ formatDate(data.date_limite) }
            </div>
          </div>
          <div className="col-md-4 text-end my-1">
            <div className="text-primary">{data?.salaire}</div>
            <div className="d-flex justify-content-end my-1 flex-wrap">
              <div className="btn btn-sm btn-postuler  py-1 px-2">
                <span className="d-none">Postuler</span>
              </div>

              <span className="btn btn-sm ms-2 mb-1 bg-gray-light py-1 px-2 rounded-2">
                Contrat : {data?.type_contrat}
              </span>
              <span className="btn btn-sm ms-2 mb-1 bg-gray-light py-1 px-2 rounded-2">
                Niveau : {data?.niveau_etude}
              </span>
              <span className="btn btn-sm ms-2 mb-1 bg-gray-light py-1 px-2 rounded-2">
                Experience : {data?.niveau_experience}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardComponent;
