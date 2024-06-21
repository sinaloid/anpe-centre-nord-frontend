import anpe from "../assets/images/anpe.png";
import armoiries from "../assets/images/armoiries.png";
import BanierComponent from "./BanierComponent";
import FooterComponent from "./FooterComponent";
// eslint-disable-next-line react/prop-types
const ContainerComponent = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="">
            <img width={"80px"} src={anpe} alt="" />
          </div>
          <div className="">
            <img width={"80px"} src={armoiries} alt="" />
          </div>
          <div className="d-flex">
            <div className="text-end">
              <div className="mx-1 d-inline-block social-container">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="mx-1 d-inline-block">
                <i className="bi bi-whatsapp"></i>
              </div>
              <div className="mx-1 d-inline-block">
                <i className="bi bi-linkedin"></i>
              </div>
              <div className="mx-1 d-block"><a className="text-body-emphasis text-decoration-none" href="tel:+22670053547">+226 70 05 35 47</a> </div>
            </div>
          </div>
        </div>
      </div>
      <BanierComponent />
      {children}

      <div className="row bg-gray-light border-top py-2">
        <div className="col-12">
          <FooterComponent />
        </div>
      </div>
    </div>
  );
};

export default ContainerComponent;
