import { useState } from "react";
import { IconSvg } from "./components/IconSvg";
import "./dashboard.css";
import { NavLink } from "react-router-dom";
import { BarChart } from "../components/chart/BarChart";
import { LineChart } from "../components/chart/LineChart";

const Dashboard = () => {
  const [viewSearch, setViewSearch] = useState(false);

  const changeViewSearch = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.value === "viewSearch") {
      console.log("Clic dans un espace vide.");
      setViewSearch(true);
    } else {
      console.log("Clic dans un élément.");
      setViewSearch(false);
    }
  };
  document.addEventListener("click", changeViewSearch);

  return (
    <>
      {/**
       * 
       * <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
       </svg>

       <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#circle-half"></use>
          </svg>
          <span className="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              <svg className="bi me-2 opacity-50" width="1em" height="1em">
                <use href="#sun-fill"></use>
              </svg>
              Light
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            >
              <svg className="bi me-2 opacity-50" width="1em" height="1em">
                <use href="#moon-stars-fill"></use>
              </svg>
              Dark
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="auto"
              aria-pressed="true"
            >
              <svg className="bi me-2 opacity-50" width="1em" height="1em">
                <use href="#circle-half"></use>
              </svg>
              Auto
              <svg className="bi ms-auto d-none" width="1em" height="1em">
                <use href="#check2"></use>
              </svg>
            </button>
          </li>
        </ul>
        </div>
      */}

      <IconSvg />
      <header className="navbar sticky-top d-md-none flex-md-nowrap p-0 bg-white">
        <a
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-black bg-white"
          href="#"
        >
          App name
        </a>

        <ul className="navbar-nav flex-row d-md-none">
          <li className="nav-item text-nowrap">
            <button
              className="nav-link px-3 text-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg className="bi bi-dash">
                <use xlinkHref="#list" />
              </svg>
            </button>
          </li>
        </ul>

        <div id="navbarSearch" className="navbar-search w-100 collapse">
          <input
            className="form-control w-100 rounded-0 border-0"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary1">
            <div
              className="offcanvas-md offcanvas-end bg-body-tertiary1"
              tabIndex="-1"
              id="sidebarMenu"
              aria-labelledby="sidebarMenuLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">
                  Company name
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarMenu"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto ">
                <div className="mb-4 sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                  <span>App name</span>
                  <a
                    className="link-secondary text-primary"
                    href="#"
                    aria-label="Add a new report"
                  >
                    <svg className="bi bi-dash">
                      <use xlinkHref="#grid-fill" />
                    </svg>
                  </a>
                </div>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2 active"
                      to="#"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#house-fill" />
                      </svg>
                      Accueil
                    </NavLink>
                  </li>
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-body-secondary text-uppercase">
                  <span>Offres</span>
                </h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2"
                      to="emplois"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#briefcase" />
                      </svg>
                      Emplois
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2"
                      to="stages"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#diamond" />
                      </svg>
                      Stages
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2"
                      to="formations"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#mortarboard" />
                      </svg>
                      Formations
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2"
                      to="projets"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#layers" />
                      </svg>
                      Projets
                    </NavLink>
                  </li>
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-body-secondary text-uppercase">
                  <span>Actualités & Forum</span>
                </h6>
                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2"
                      to="actualites"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#puzzle" />
                      </svg>
                      Actualites
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2"
                      to="forum"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#puzzle" />
                      </svg>
                      Forum
                    </NavLink>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-body-secondary text-uppercase">
                  <span>Gestion</span>
                  <a
                    className="link-secondary"
                    href="#"
                    aria-label="Add a new report"
                  >
                    <svg className="bi bi-dash">
                      <use xlinkHref="#plus-circle" />
                    </svg>
                  </a>
                </h6>
                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center gap-2"
                      href="#"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#file-earmark-text" />
                      </svg>
                      Messages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center gap-2"
                      href="#"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#file-earmark-text" />
                      </svg>
                      Candidatures
                    </a>
                  </li>
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-body-secondary text-uppercase">
                  <span>Utilisateurs</span>
                </h6>
                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2"
                      to="candidats"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#people" />
                      </svg>
                      Postulants
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2"
                      to="recruteurs"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#people" />
                      </svg>
                      Recruteurs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link d-flex align-items-center gap-2"
                      to="recruteurs"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#people" />
                      </svg>
                      Administrateurs
                    </NavLink>
                  </li>
                </ul>

                <hr className="my-3" />

                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center gap-2"
                      href="#"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#gear-wide-connected" />
                      </svg>
                      Paramètres
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center gap-2"
                      href="#"
                    >
                      <svg className="bi bi-dash">
                        <use xlinkHref="#door-closed" />
                      </svg>
                      Déconnection
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-body-tertiary">
            
            <div className="d-flex mt-4 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom1">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
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
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
