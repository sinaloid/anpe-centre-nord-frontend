import appMobile from "../assets/images/mobile-app.png";
import playstore from "../assets/images/google-play-badge.png";
const AppMobileComponent = () => {
  return (
    <div className="row my-5 border bg-white rounded-3">
      <div className="col-12 col-md-6">
        <img
          width={"100%"}
          src={appMobile}
          alt="application mobile playStore"
        />
      </div>
      <div className="col-12 col-md-6 d-flex align-items-center">
        <div>
          <div className="text-primary fs-5">Téléchargez et profitez</div>
          <div className="fw-bold fs-1">
            {"Téléchargez l'application ANPE CENTRE NORD"}
          </div>
          <div>
            {`
          Créez des annonces en tant que recruteur et suivez l'évolution des
          candidatures pour chaque offre. En tant que candidat, postulez à des
          offres et restez informé sur l'avancement de votre candidature.
          `}
          </div>
          <div>
            <img width={"150px"} src={playstore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMobileComponent;
