import ContainerComponent from "../../components/ContainerComponent";
import ActualiteDuJourComponent from "./component/ActualiteDuJourComponent";
import AppMobileComponent from "../../components/AppMobileComponent";
import ForumComponent from "./component/ForumComponent";
import OffreDuJourComponent from "./component/OffreDuJourComponent";
import RessourcesComponent from "./component/RessourcesComponent";

const HomePage = () => {
  return (
    <ContainerComponent>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center bg-primary text-white rounded-2 my-3">
            <h1 className=" my-3 text-uppercase fw-bold">
              {"Votre Portail de l'Emploi"}
            </h1>
            <p className="fw-bold1">
              {
                "Trouvez des offres d'emploi et publiez des annonces facilement avec l'ANPE CENTRE NORD"
              }{" "}
              <br />
              {
                "Simplifiez votre recherche d'emploi et vos recrutements dès aujourd'hui"
              }
              <br />
            </p>
            <div>
              <button className="btn btn-secondary mb-3 fw-bold">
                {"Inscrivez-vous en tant que chercheur/chercheuse d'emploi"}
              </button>{" "}
              <br />
              <button className="btn btn-outline-secondary mb-3 fw-bold">
                {"Inscrivez-vous en tant que recruteur/recruteuse"}
              </button>
            </div>
          </div>
        </div>
        <OffreDuJourComponent />
      </div>
      <RessourcesComponent />
      <div className="row bg-gray-light">
        <div className="col-12">
          <div className="container">
            <ActualiteDuJourComponent />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container">
            <AppMobileComponent />
          </div>
        </div>
      </div>
      <ForumComponent />
      
    </ContainerComponent>
  );
};

export default HomePage;
