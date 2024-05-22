import { Link } from "react-router-dom";
import ContainerComponent from "../../components/ContainerComponent";
import SearchBarComponent from "../../components/SearchBarComponent";
import AppMobileComponent from "../../components/AppMobileComponent";
import RejoindreComponent from "../../components/RejoindreComponent";

const ForumPage = () => {
  return (
    <ContainerComponent>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-5">
            <div className="text-center mb-2">
              <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                <i className="bi bi-people-fill text-primary fs-2"></i>
              </span>
            </div>
            <h2 className="fw-bold text-uppercase">Forum de discussion</h2>
            <div className="d-flex justify-content-center flex-wrap mb-5 mt-4">
              <div>
                <button className="btn btn-primary rounded-5 mx-2 mb-2 fw-bold">
                  Toutes
                </button>
              </div>
              <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
                Emplois
              </button>
              <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
                Stages
              </button>
              <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
                Formations
              </button>
              <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
                Projets
              </button>
            </div>

            <div>
              <SearchBarComponent />
            </div>
          </div>
          <div className="col-12 px-0">
            <button className="btn btn-primary my-4">Créer un sujets</button>
          </div>
          <div className="col-12">
            {[...Array(10)].map((data, idx) => {
              return (
                <div
                  className={`row border-top py-2 ${
                    idx % 2 === 0 ? "bg-gray-light" : ""
                  }`}
                  key={idx}
                >
                  <div className="col-12 col-md-9">
                    <Link
                      to="#"
                      className="py-2 fs-5 text-decoration-none text-primary"
                    >
                      Titre du sujet
                    </Link>
                    <p className="mb-2 pb-2 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem exercitationem, in atque accusamus nesciunt soluta
                      eius aspernatur minus voluptatem quibusdam! Qui
                      perferendis sapiente ullam consequatur atque obcaecati cum
                      quibusdam cumque?
                    </p>
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="d-flex align-items-center justify-content-between h-100">
                      <div className="text-muted me-2 text-center">
                        <span className="text-12">Categorie</span> <br />
                        <span className="fw-bold">Emploi</span>
                      </div>
                      <div className="text-muted me-2 text-center">
                        <span className="text-12">Réponses</span> <br />
                        <span className="fw-bold">22</span>
                      </div>
                      <div className="text-muted me-2 text-center">
                      <span className="text-12">Vues</span> <br />
                        <span className="fw-bold">100k</span>
                      </div>
                      <div className="text-muted me-2 text-center">
                      <span className="text-12">Publier le</span> <br />
                        <span className="fw-bold">12/05/2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="d-flex justify-content-center mb-5 mt-4">
            <button className="btn btn-primary">Voir plus</button>
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

export default ForumPage;
