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
          {[...Array(4).keys()].map((data, idx) => {
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
          })}
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

      <div className="card p-4">
        <div className="table-responsive small">
          <div className="d-flex mb-3">
            <div className="me-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <button className="btn btn-primary">Ajouter</button>
          </div>
          <table className="table table-hover table-striped1 table-sm1 border-top">
            <thead className="bg-primary">
              <tr className="align-middle">
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col" className="text-center">
                  Header
                </th>
              </tr>
            </thead>
            <tbody className="aign-middle">
              {[...Array(10).keys()].map((data, idx) => {
                return (
                  <tr className="align-middle" key={idx}>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td className="text-center">
                      <div className="btn-group">
                        <button className="btn btn-outline-primary rounded-2 me-1">
                          <i className="bi bi-eye-fill"></i>
                        </button>
                        <button className="btn btn-outline-danger rounded-2 mx-1">
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button className="btn btn-danger rounded-2 ms-1">
                          <i className="bi bi-trash-fill"></i>
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
    </>
  );
};

export default HomeDashboard;
