import { useEffect, useState } from "react";
import AppMobileComponent from "../../components/AppMobileComponent";
import ContainerComponent from "../../components/ContainerComponent";
import JobCardComponent from "../../components/JobCardComponent";
import RejoindreComponent from "../../components/RejoindreComponent";
import SearchBarComponent from "../../components/SearchBarComponent";
import useRequest from "../../hooks/useRequest";
import endPoint from "../../services/endPoint";

const OffrePage = () => {
  const {get} = useRequest(true)
  const [datas,setDatas] = useState({})

  useEffect(() => {
    get("public/"+endPoint.offres,setDatas)
  },[])

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
            <h2 className="fw-bold text-uppercase">Offres</h2>
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
          <div className="d-flex mt-3 mb-2">
            <span className="">{datas?.total} résultats</span>
          </div>
          {datas?.data?.map((data) => {
        return (
          <div key={data.slug}>
            <JobCardComponent data={data} />
          </div>
        );
      })}
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

export default OffrePage;
