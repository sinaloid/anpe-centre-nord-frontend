import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none text-white fw-bold"
          >
            ANPE CENTRE NORD
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 text-uppercase active-link"
                  : "nav-link px-2 text-uppercase"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/offres"}
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 text-uppercase active-link"
                  : "nav-link px-2 text-uppercase"
              }
            >
              Offres
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/actualites"}
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 text-uppercase active-link"
                  : "nav-link px-2 text-uppercase"
              }
            >
              Actualités
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/forum"}
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 text-uppercase active-link"
                  : "nav-link px-2 text-uppercase"
              }
            >
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/ressources-conseils"}
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 text-uppercase active-link"
                  : "nav-link px-2 text-uppercase"
              }
            >
              Ressources & Conseils
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/ressources-conseils"}
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 text-uppercase active-link"
                  : "nav-link px-2 text-uppercase"
              }
            >
              à propos
            </NavLink>
          </li>
        </ul>

        <div className="col-md-2 text-end">
          <NavLink to="dashboard">
            <button
              className="btn btn-secondary fw-bold text-uppercase"
              type="button"
            >
              Connexion
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
