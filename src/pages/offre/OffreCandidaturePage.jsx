/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ContainerComponent from "../../components/ContainerComponent";
import JobDetailCardComponent from "./components/JobDetailCardComponent";
import OffreSimilaireComponent from "./components/OffreSimilaireComponent";
import { useContext, useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import endPoint from "../../services/endPoint";
import { toast } from "react-toastify";
import request from "../../services/request";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/InputField";
import { AppContext } from "../../services/context";
import useFunction from "../../hooks/useFunction";

const OffreCandidaturePage = () => {
  const { slug } = useParams();
  const { get } = useRequest();
  const {formatDate} = useFunction()
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
                    <CandidatureForm data={getPiecesJointes()} slug={slug} />
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
                          <button className="btn btn-sm btn-primary w-100">
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

const CandidatureForm = ({ data = [], slug = "" }) => {
  const authCtx = useContext(AppContext);
  const { user } = authCtx;
  const { goTo } = useFunction();
  const [isSend, setIsSend] = useState(false);
  const obj = {};
  data?.forEach((value, idx) => {
    obj[`value${idx}`] = "";
  });
  const schemaData = {};

  data?.forEach((data, idx) => {
    schemaData[`value${idx}`] = Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    );
  });

  const validateData = Yup.object(schemaData);
  const formik = useFormik({
    initialValues: obj,
    validationSchema: validateData,
    onSubmit: (values) => {
      console.log(values);
      let tab = [];
      data.forEach((value, idx) => {
        tab = [...tab, values[`value${idx}`]];
      });

      const newValues = {
        label: data.label,
        etat: "En_COURS",
        offre: slug,
        description: data.label,
        files: tab,
      };

      console.log(newValues);

      post(newValues);
    },
  });
  const post = (values) => {
    toast.promise(request.post(endPoint.candidatures, values), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          console.log(data);
          const res = data;
          //closeFormRef.current.click();
          //setViewType("liste");
          //get();
          setIsSend(true);
          return res.data.message;
        },
      },
      error: {
        render({ data }) {
          console.log(data);
          if (data.response.data.errors) {
            return data.response.data.errors
              ? data.response.data.errors
              : data.response.data.error;
          } else {
            return data.response.data.message;
          }
        },
      },
    });
  };

  return (
    <>
      {user.isAuth ? (
        <div className="card p-3">
          {isSend ? (
            <>
              <div className="fw-bold fs-3 text-center text-primary">
                Félicitations, votre candidature a bien été envoyée.
              </div>
              <div className="text-center my-2">
                Merci pour votre intérêt
              </div>
              
              <div className="d-flex align-item-center ">
                <button
                  className="btn btn-primary w-75 mx-auto"
                  onClick={e => goTo(e,"/")}
                >
                  Accueil
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="fw-bold fs-4 text-center text-primary">
                Formulaire de candidature
              </div>
              <div className="text-center my-2">
                Complétez ce formulaire et envoyez votre candidature
              </div>
              {data?.map((value, idx) => {
                return (
                  <InputField
                    key={"input" + idx}
                    type="file"
                    name={"value" + idx}
                    label={value}
                    formik={formik}
                    placeholder={value}
                  />
                );
              })}
              <div className="d-flex align-item-center ">
                <button
                  type="submit"
                  className="btn btn-primary w-75 mx-auto"
                  onClick={formik.handleSubmit}
                >
                  Envoyer ma candidature
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="card p-3">
          <div className="fw-bold fs-4 text-center text-primary">
            Formulaire de candidature
          </div>
          <div className="text-center my-2">
            Veuillez vous connecter ou vous inscrire pour pouvoir postuler à
            cette offre.
          </div>

          <div className="d-flex justify-content-center w-100">
            <button
              className="btn btn-primary mx-2"
              onClick={(e) => goTo(e, "/connexion")}
            >
              Connexion
            </button>
            <button
              className="btn btn-outline-primary mx-2"
              onClick={(e) => goTo(e, "/inscription")}
            >
              Inscription
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OffreCandidaturePage;
