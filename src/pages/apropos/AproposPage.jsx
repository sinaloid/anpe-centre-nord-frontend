import ContainerComponent from "../../components/ContainerComponent";
import AppMobileComponent from "../../components/AppMobileComponent";
import RejoindreComponent from "../../components/RejoindreComponent";
import equipe from "../../assets/images/equipe.jpg";
import anpecn from "../../assets/images/anpecn.png";

const AproposPage = () => {
  return (
    <ContainerComponent>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center pt-5">
            <div className="text-center mb-2">
              <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                <i className="bi bi-people-fill text-primary fs-2"></i>
              </span>
            </div>
            <h2 className="fw-bold text-uppercase">A propos</h2>
            <div className="d-flex justify-content-center flex-wrap"></div>
          </div>
        </div>

        <div className="row mb-5 bg-white border rounded-3">
          <div className="col-12 col-md-6 px-0">
            <img
              width={"100%"}
              src={equipe}
              className="rounded-3"
              alt="equipe anpe burkina"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex h-100 align-items-center px-4">
              <div>
                <h2 className="text-primary mb-3">Histoire</h2>
                <p>
                  L’Agence nationale est un Etablissement Public de l’Etat à
                  caractère Administratif (EPA). Elle a été créée en 2004 en
                  remplacement de l’Office National de la Promotion de l’Emploi
                  (ONPE). Pour l’opérationnalisation de ses activités, l’agence
                  s’appuie sur 13 directions régionales dont la Direction
                  régionale du Centre-Nord sise dans la Commune de Kaya.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-primary-light mb-5 border rounded-3 px-0">
          <div className="col-12 col-md-6 px-4">
            <div className="d-flex h-100 align-items-center">
              <div>
                <h2 className="text-primary">Missions</h2>
                <p>
                  <ul>
                    <li>
                      L’accueil, l’information et l’orientation des demandeurs
                      d’emploi
                    </li>
                    <li>Les placements en stage</li>

                    <li>
                      L’assistance des porteurs d’idée de projet d’auto-emploi
                    </li>
                    <li>Les formations</li>
                    <li>Les recrutements</li>
                    <li>Autres prestations aux entreprises.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 px-0">
            <img
              width={"100%"}
              src={anpecn}
              className="rounded-3"
              alt="equipe anpe burkina"
            />
          </div>
        </div>
        <RejoindreComponent
          titre={"Rejoignez Notre Communauté"}
          content={
            <>
              {
                "Inscrivez-vous pour accéder à des opportunités exclusives, des conseils personnalisés"
              }{" "}
              <br />
              {
                "et un réseau de professionnels. Transformez votre avenir dès aujourd'hui !"
              }
            </>
          }
        />
        <AppMobileComponent />
      </div>
    </ContainerComponent>
  );
};

export default AproposPage;
