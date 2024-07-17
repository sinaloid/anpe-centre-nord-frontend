/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import JobCardLogo from "../../../components/JobCardLogo";
import useFunction from "../../../hooks/useFunction";

const JobDetailCardComponent = ({data}) => {
  const navigate = useNavigate();
  const {truncateText, formatDate} = useFunction()

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
        <div className="col-md-5 my-1 d-flex align-items-center flex-wrap">
            <JobCardLogo data={data} />
            <div className=" col">
              <h5 className="card-text text-start fw-bold fs-6 break-word">{truncateText(data?.label, 70)}</h5>
              <p className="card-text text-start text-muted break-word">{truncateText(data?.entreprise)}</p>
            </div>
          </div>
          <div>
            <div className="text-primary d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-1"></i> {data?.region}, {data?.ville}
            </div>
            <div className="text-primary d-flex align-items-center">
              <i className="bi bi-people-fill me-1"></i> 0 candidatures
            </div>
          </div>
          <div className=" text-end">
            <button className="btn btn-sm btn-primary py-1 px-2">Postuler</button>
            <div className="d-flex my-1 flex-wrap">
              <div className="text-primary d-flex align-items-center">
                <i className="bi bi-clock-fill"></i> <span className="ps-1">Publier le : {formatDate(data?.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailCardComponent;
