/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AdminMenu = ({config}) => {
  
  return (
    <>
      <div className="d-flex mt-2 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 border-bottom1">
        <h1 className="h2">{"Administration"}</h1>
      </div>

      <div className="card  mt-2">
        <div className="card-header fw-bold">Administrateurs de la plateforme</div>
        <Link
          to={"gestion-des-administrateurs"}
          className="px-4 py-2  d-flex align-items-center rounded-2 card-btn text-body-emphasis text-decoration-none"
        >
          <div>Gestion des administrateurs</div>
          <div className="ms-auto">
            <i className="bi bi-chevron-right text-body-emphasis"></i>
          </div>
        </Link>
      </div>
      <div className="card  mt-4">
        <div className="card-header fw-bold">Configuration de la plateforme</div>
        {config.map((data, idx) => {
          return (
            <Link
              key={"link" + idx}
              to={data.url}
              className="border-bottom px-4 py-2  d-flex align-items-center rounded-2 card-btn text-body-emphasis text-decoration-none"
            >
              <div>{data.title}</div>
              <div className="ms-auto">
                <i className="bi bi-chevron-right text-body-emphasis"></i>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AdminMenu;
