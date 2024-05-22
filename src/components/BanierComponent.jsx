import BanierCarouselComponent from "./BanierCarouselComponent";
import HeaderComponent from "./HeaderComponent";

// eslint-disable-next-line react/prop-types
const BanierComponent = ({ children }) => {
  return (
    <div className="row bg-primary">
      <div className="col-12">
        <HeaderComponent />
      </div>
      <div className="col-12 px-0 bg-white">
        <div className="col-12  text-center text-primary fw-bold py-2 text-uppercase">
          <span>{"Bienvenue sur l'ANPE CENTRE NORD"}</span>
        </div>
      </div>
      <div className="col-12">
        <BanierCarouselComponent />
      </div>
      {children}
    </div>
  );
};

export default BanierComponent;
