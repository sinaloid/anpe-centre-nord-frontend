import { useEffect, useState } from "react";
import AppMobileComponent from "../../components/AppMobileComponent";
import ContainerComponent from "../../components/ContainerComponent";
import RejoindreComponent from "../../components/RejoindreComponent";
import useRequest from "../../hooks/useRequest";
import endPoint from "../../services/endPoint";
import { useParams } from "react-router-dom";
import logo from "../../assets/images/anpe.jpeg";
import useFunction from "../../hooks/useFunction";
import ConseilCardComponent from "../../components/ConseilCardComponent";
import RessourceSimilaireComponent from "./RessourceSimilaireComponent";

const RessourceDetailPage = () => {
  const [data, setData] = useState({});
  const { slug } = useParams();
  const { formatDate } = useFunction();
  const { get } = useRequest();

  useEffect(() => {
    get("public/" + endPoint.posts + "/" + slug, setData);
  }, []);
  return (
    <ContainerComponent>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-md-8 mx-auto">
            <div className="card">
              <img className="100%" src={logo} alt="ANPE BURKINA" />
              <div className=" px-2 mt-2">
                <div className="d-flex mb-3 text-primary">
                  <div>
                    <i className="bi bi-clock-fill ms-auto me-1"></i>
                    Publier le : {formatDate(data.created_at)}
                  </div>
                  <div className="ms-auto">
                    <i className="bi bi-globe me-1"></i>
                    Categérie : {data.categorie}
                  </div>
                </div>
                <h2 className="fw-bold text-uppercase text-primary">{data.titre}</h2>
                <div className="mt-3">{data.description}</div>
                <div className="mt-5 mb-3">{data.description}</div>
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {data?.data?.map((data) => {
                return (
                  <div className="col" key={data.slug}>
                    <ConseilCardComponent data={data} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12">
            <RessourceSimilaireComponent />
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

export default RessourceDetailPage;
