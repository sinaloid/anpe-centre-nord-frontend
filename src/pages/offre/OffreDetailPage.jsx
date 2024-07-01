import ContainerComponent from "../../components/ContainerComponent";
import JobDetailCardComponent from "./components/JobDetailCardComponent";

const OffreDetailPage = () => {
  return (
    <ContainerComponent>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 text-center">
            <JobDetailCardComponent />
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default OffreDetailPage;
