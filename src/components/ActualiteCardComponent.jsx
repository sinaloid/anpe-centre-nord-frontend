/* eslint-disable react/prop-types */
import useFunction from "../hooks/useFunction";
import ActualiteCardLogo from "./ActualiteCardLogo";

const ActualiteCardComponent = ({ data }) => {
  const { truncateText, formatDate, goTo } = useFunction();
  return (
    <div className="card my-2 cursor" onClick={e => goTo(e, "/actualites/"+data.slug)}>
      <div className="card-body">
        <div>
          <div className="d-flex align-items-center">
            <ActualiteCardLogo data={data} />
            <div className="">
              <h5 className="card-title fw-bold">
                {truncateText(data?.titre, 70)}
              </h5>
              <p className="card-text text-muted">{"ANPE CENTRE NORD"}</p>
            </div>
          </div>
        </div>
        <div className="my-2">{data?.description}</div>
        {/**
         * <div className=" text-end my-1">
          <div className="d-flex">
            <span className="bg-gray-light py-1 px-2 rounded-2">
              Activités
            </span>
          </div>
        </div>
         */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-primary d-flex align-items-center text-uppercase">
            <i className="bi bi-globe me-1"></i> {data?.categorie}
          </div>
          <div className="text-primary  d-flex align-items-center">
            <i className="bi bi-clock-fill ms-auto me-1"></i>
            {formatDate(data?.created_at)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualiteCardComponent;
