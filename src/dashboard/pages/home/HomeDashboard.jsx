import { useEffect, useState } from "react";
import { BarChart } from "../../../components/chart/BarChart";
import { LineChart } from "../../../components/chart/LineChart";
import useFunction from "../../../hooks/useFunction";
import endPoint from "../../../services/endPoint";
import useRequest from "../../../hooks/useRequest";
import ModalComponent from "../../../components/ModalComponent";

export const HomeDashboard = () => {
  return (
    <>
      <div className="d-flex mt-4 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom1">
        <h1 className="h2">Dashboard</h1>
        {/**
         * <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-primary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-primary">
              Export
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-primary dropdown-toggle d-flex align-items-center gap-1"
          >
            <svg className="bi bi-dash">
              <use xlinkHref="#calendar3" />
            </svg>
            This week
          </button>
        </div>
         */}
      </div>

      <div className="mb-3">
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col mb-3">
            <div className="card">
              <div className="d-flex p-4">
                <div>
                  <h5>Offres en cours</h5>
                  <h3 className="fw-bold text-primary">0</h3>
                  <span className="text-muted"></span>
                </div>
                <div className="ms-auto">
                  <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                    <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card">
              <div className="d-flex p-4">
                <div>
                  <h5>Candidatures en cours</h5>
                  <h3 className="fw-bold text-primary">0</h3>
                  <span className="text-muted"></span>
                </div>
                <div className="ms-auto">
                  <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                    <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card">
              <div className="d-flex p-4">
                <div>
                  <h5>Candidatures acceptées</h5>
                  <h3 className="fw-bold text-primary">0</h3>
                  <span className="text-muted"></span>
                </div>
                <div className="ms-auto">
                  <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                    <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card">
              <div className="d-flex p-4">
                <div>
                  <h5>Total des Offres</h5>
                  <h3 className="fw-bold text-primary">0</h3>
                  <span className="text-muted"></span>
                </div>
                <div className="ms-auto">
                  <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                    <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card">
              <div className="d-flex p-4">
                <div>
                  <h5>Total des Postulants</h5>
                  <h3 className="fw-bold text-primary">0</h3>
                  <span className="text-muted"></span>
                </div>
                <div className="ms-auto">
                  <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                    <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card">
              <div className="d-flex p-4">
                <div>
                  <h5>Total des Recruteurs</h5>
                  <h3 className="fw-bold text-primary">0</h3>
                  <span className="text-muted"></span>
                </div>
                <div className="ms-auto">
                  <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                    <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*[...Array(4).keys()].map((data, idx) => {
            return (
              <div className="col mb-3" key={idx}>
                <div className="card">
                  <div className="d-flex p-4">
                    <div>
                      <span>Lorem ipsum</span>
                      <div className="fw-bold">185000</div>
                      <span className="text-muted">Lorem ipsum</span>
                    </div>
                    <div className="ms-auto">
                      <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                        <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })*/}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 mb-3">
        <div className="col mb-3">
          <div className="card">
            <BarChart />
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <LineChart />
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <CandidatureCard />
        </div>
        <div className="col">
          <OffreCard />
        </div>
      </div>
    </>
  );
};

const CandidatureCard = () => {
  const { get } = useRequest();
  const { truncateText } = useFunction();
  const [data, setData] = useState({});
  const [viewData, setViewData] = useState({});

  useEffect(() => {
    get(endPoint.candidatures, setData);
  }, []);
  return (
    <div className="card">
      <div className="card-header fw-bold">
        Les 5 dernières candidatures du jours
      </div>
      <div className="table-responsive small">
        <table className="table table-hover table-striped1 table-sm1 border-top">
          <thead className="bg-primary">
            <tr className="align-middle">
              <th scope="col">#</th>
              <th scope="col">Offre</th>
              <th scope="col">Postulant</th>
              <th scope="col">Candidature</th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="aign-middle">
            {data?.data?.map((data, idx) => {
              if(idx >= 5 ){
                return null
              }
              return (
                <tr className="align-middle" key={"candidature"+idx}>
                  <td>{1 + idx}</td>
                  <td>{truncateText(data.label)}</td>
                  <td>
                    {truncateText(
                      data?.user_offre_candidature?.user?.nom +
                        " " +
                        data?.user_offre_candidature?.user?.nom
                    )}
                  </td>
                  <td>
                    <span className="badge text-bg-warning">{data.etat}</span>
                  </td>
                  <td className="text-center">
                    <div className="btn-group">
                      <button className="btn btn-outline-primary rounded-2 me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#view"
                       onClick={e => {
                        e.preventDefault()
                        setViewData(data)
                       }}
                      >
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ModalComponent
        id={"view"}
        title={"Informations"}
        //callback={destroy}
        size="modal-md"
        noBtn={true}
        //closeRef={closeDeleteRef}
      >
        {viewData.ressource_candidatures?.map((data, idx) => {
          return (
            <div
              className="d-flex mb-3 bg-gray rounded-2 px-2 py-1"
              key={"ressource" + idx}
            >
              <div className="fw-bold">{data.original_name}</div>
              <button
                className=" ms-auto btn btn-sm btn-outline-primary"
                //onClick={(e) => getFile(e, data.name)}
              >
                Télécharger
              </button>
            </div>
          );
        })}
      </ModalComponent>
    </div>
  );
};

const OffreCard = () => {
  const {get} = useRequest()
  const { truncateText, goTo} = useFunction()
  const [data, setData] = useState({})
  const type = {
    EMPLOI:"emplois",
    FORMATION:"formations",
    STAGE:"stages",
    PROJET:"projets",
  }
  useEffect(() =>{
    get(endPoint.offres, setData)
  },[])
  return (
    <div className="card">
      <div className="card-header fw-bold">Les 5 dernières offres du jours</div>
      <div className="table-responsive small">
        <table className="table table-hover table-striped1 table-sm1 border-top">
          <thead className="bg-primary">
            <tr className="align-middle">
              <th scope="col">#</th>
              <th scope="col">Offre</th>
              <th scope="col">Statut</th>
              <th scope="col">Poste</th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="aign-middle">
            {data?.data?.map((data, idx) => {
              if(idx >= 5 ){
                return null
              }
              return (
                <tr className="align-middle" key={"offres"+idx}>
                  <td>{1 + idx}</td>
                  <td>{truncateText(data.label)}</td>
                  <td>
                    <span className="badge text-bg-warning">
                      {data.etat}
                    </span>
                  </td>
                  <td>{data.nombre_de_poste}</td>
                  <td className="text-center">
                    <div className="btn-group">
                      <button className="btn btn-outline-primary rounded-2 me-1" onClick={e => goTo(e,"/dashboard/"+type[data.type])}>
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeDashboard;
