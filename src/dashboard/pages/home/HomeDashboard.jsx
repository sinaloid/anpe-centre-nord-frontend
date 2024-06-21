import { BarChart } from "../../../components/chart/BarChart";
import { LineChart } from "../../../components/chart/LineChart";

export const HomeDashboard = () => {
  return (
    <>
      <div className="d-flex mt-4 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom1">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
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
      </div>

      <div className="mb-3">
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col mb-3">
            <div className="card">
              <div className="d-flex p-4">
                <div>
                  <h5>Offres en cours</h5>
                  <h3 className="fw-bold text-primary">18</h3>
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
                  <h3 className="fw-bold text-primary">125</h3>
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
                  <h3 className="fw-bold text-primary">125</h3>
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
                  <h3 className="fw-bold text-primary">1025</h3>
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
                  <h3 className="fw-bold text-primary">200</h3>
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
                  <h3 className="fw-bold text-primary">90</h3>
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
      <div className="row row-cols-1 row-cols-md-2 mb-3">
        <div className="col">
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
                  {[...Array(5).keys()].map((data, idx) => {
                    return (
                      <tr className="align-middle" key={idx}>
                        <td>{1 + idx}</td>
                        <td>Recrutement de 3 développeurs</td>
                        <td>Ouedraogo Salif</td>
                        <td>
                          <span className="badge text-bg-warning">
                            {"En cours d'examen"}
                          </span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-outline-primary rounded-2 me-1">
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
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header fw-bold">
              Les 5 dernières offres du jours
            </div>
            <div className="table-responsive small">
              <table className="table table-hover table-striped1 table-sm1 border-top">
                <thead className="bg-primary">
                  <tr className="align-middle">
                    <th scope="col">#</th>
                    <th scope="col">Offre</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Recruteur</th>
                    <th scope="col" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="aign-middle">
                  {[...Array(5).keys()].map((data, idx) => {
                    return (
                      <tr className="align-middle" key={idx}>
                        <td>{1 + idx}</td>
                        <td>Recrutement de 10 chauffeurs</td>
                        <td>
                          <span className="badge text-bg-warning">
                            En attente de validation
                          </span>
                        </td>
                        <td>Traore Moussa</td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-outline-primary rounded-2 me-1">
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
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
