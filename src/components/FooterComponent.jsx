import { NavLink } from "react-router-dom";

const FooterComponent = () => {
  const liensRapides = [
    {
      name: "Accueil",
      url: "/",
    },
    {
      name: "Offres",
      url: "/offres",
    },
    {
      name: "Forum",
      url: "/forum",
    },
    {
      name: "Actualités",
      url: "/actualites",
    },

    {
      name: "Ressources",
      url: "/ressources-conseils",
    },
  ];
  return (
    <div className="container py-2">
      <div className="d-flex flex-wrap">
        <div className="mx-md-auto mb-3">
          <div className="text-primary fw-bold mb-3">ANPE CENTRE NORD</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quod
            optio, dicta beatae repudiandae molestias mollitia <br /> deserunt
            vitae quia fuga
          </p>
        </div>
        <div className="mx-md-auto mb-3">
          <div className="text-uppercase fw-bold mb-3">Contacts</div>
          <div className="d-flex">
            <div className="text-start">
            <div className="d-block mb-1">Tél: +226 xx xx xx xx</div>
              <div className="d-block mb-1">Email: infos@gmail.com</div>
              <div className="me-1 d-inline-block social-container">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="mx-1 d-inline-block">
                <i className="bi bi-whatsapp"></i>
              </div>
              <div className="mx-1 d-inline-block">
                <i className="bi bi-linkedin"></i>
              </div>
              
            </div>
          </div>
        </div>
        <div className="mx-md-auto mb-3">
          <div className="text-uppercase fw-bold mb-3">Liens rapides</div>
          {liensRapides.map((data, idx) => {
            return (
              <>
                <div
                  className="mb-1 d-inline-block me-2"
                  key={idx + "liens_rapides"}
                >
                  <NavLink
                    to={data.url}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link-footer text-uppercase"
                        : "nav-link-footer nav-link-footer-acive text-uppercase"
                    }
                  >
                    {data.name}
                  </NavLink>
                </div>
                {idx % 2 === 0 ? <br /> : null}
              </>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center border-top mt-3 pt-2">
        <span>Copyright © ANPE CENTRE NORD 2024</span>
      </div>
    </div>
  );
};

export default FooterComponent;
