import { useParams } from "react-router-dom";
import ContainerComponent from "../../components/ContainerComponent";
import JobDetailCardComponent from "./components/JobDetailCardComponent";
import OffreSimilaireComponent from "./components/OffreSimilaireComponent";
import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import endPoint from "../../services/endPoint";
import useFunction from "../../hooks/useFunction";

const OffreDetailPage = () => {
  const { slug } = useParams();
  const { get } = useRequest();
  const { goTo, formatDate } = useFunction();
  const [data, setData] = useState({});

  useEffect(() => {
    get("public/" + endPoint.offres + "/" + slug, setData);
  }, [slug]);

  const getPiecesJointes = () => {
    return data?.pieces_jointes ? JSON.parse(data?.pieces_jointes) : [];
  };
  return (
    <ContainerComponent>
      <div className="row">
        <div className="col-12 col-md-7 mx-auto">
          <div className="container">
            <div className="row my-5">
              <div className="col-12 text-center">
                <JobDetailCardComponent data={data} />
              </div>
              <div className="col-12 mt-5">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <div
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                    />
                    <div>
                      <button
                        className="btn btn-primary w-100"
                        onClick={(e) =>
                          goTo(e, "/offres/" + slug + "/candidature")
                        }
                      >
                        Postuler
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="card p-3">
                      <h5>{"Détails de l'offre"}</h5>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Contrat</span>
                            <div className="fw-bold">{data?.type_contrat}</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">
                              Experience
                            </span>
                            <div className="fw-bold">
                              {data?.niveau_experience}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Niveau</span>
                            <div className="fw-bold">{data?.niveau_etude}</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Salaire</span>
                            <div className="fw-bold">{data?.salaire}</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Poste</span>
                            <div className="fw-bold">
                              {data?.nombre_de_poste}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">
                              Date limite
                            </span>
                            <div className="fw-bold">{formatDate(data?.date_limite)}</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-sm btn-primary w-100" onClick={e => goTo(e,"/offres/"+slug+"/candidature")}>
                            Postuler
                          </button>
                        </div>
                        <div className="d-flex flex-wrap my-4">
                          <div className="w-100 mb-2 fw-bold">
                            Pièces Jointes :
                          </div>
                          {getPiecesJointes().map((data, idx) => {
                            return (
                              <div
                                className="me-2 bg-gray mb-1 border px-2 fw-bold rounded-5"
                                key={"pieces_jointe" + idx}
                              >
                                <span className="text-uppercase px-2">
                                  {data}
                                </span>{" "}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <OffreSimilaireComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default OffreDetailPage;
