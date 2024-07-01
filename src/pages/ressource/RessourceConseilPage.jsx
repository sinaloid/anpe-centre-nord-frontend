import AppMobileComponent from "../../components/AppMobileComponent";
import ConseilCardComponent from "../../components/ConseilCardComponent";
import ContainerComponent from "../../components/ContainerComponent";
import RejoindreComponent from "../../components/RejoindreComponent";
import SearchBarComponent from "../../components/SearchBarComponent";

const RessourceConseilPage = () => {
  return (
    <ContainerComponent>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 text-center">
            <div className="text-center mb-2">
              <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                <i className="bi bi-newspaper text-primary fs-2"></i>
              </span>
            </div>
            <h2 className="fw-bold text-uppercase">
              Ressources & Conseils
            </h2>
            <div className="d-flex justify-content-center flex-wrap mb-5 mt-4">
              <div>
                <button className="btn btn-primary rounded-5 mx-2 mb-2 fw-bold">
                  Toutes
                </button>
              </div>
              <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
                Conseils CV
              </button>
              <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
                Conseils lettre de motivations
              </button>
              <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
                {"Conseils entretien d'embauche"}
              </button>
              <button className="btn btn-outline-primary rounded-5 mx-2 mb-2 fw-bold">
                Conseils motivations
              </button>
            </div>
            <div>
              <SearchBarComponent />
            </div>
          </div>
          <div className="d-flex mt-3 mb-2">
            <span className="">125 résultats</span>
          </div>
          <div className="col-12">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {[...Array(6).keys()].map((data) => {
                return (
                  <div className="col" key={data}>
                    <ConseilCardComponent />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="button" className="btn btn-primary ">
              Vour plus
            </button>
          </div>
        </div>
        <RejoindreComponent
        titre={"Inscrivez-vous Maintenant"}
        content={
          <>
            {
              "Accédez à des opportunités uniques, bénéficiez de conseils d'experts et connectez-vous"
            }
            <br />
            {
              "avec des professionnels. Rejoignez-nous pour booster votre carrière !"
            }
          </>
        }
      />
      <AppMobileComponent />
      </div>
    </ContainerComponent>
  );
};

export default RessourceConseilPage;
