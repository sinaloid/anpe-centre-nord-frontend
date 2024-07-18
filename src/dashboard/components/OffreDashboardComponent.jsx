/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useContext, useEffect, useRef, useState } from "react";
import endPoint from "../../services/endPoint";
import request from "../../services/request";
import ModalFormComponent from "../../components/ModalFormComponent";
import InputField from "../../components/InputField";
import ModalDeleteComponent from "../../components/ModalDeleteComponent";
import TextEditor from "../../components/TextEditor";
import { AppContext } from "../../services/context";
import useFunction from "../../hooks/useFunction";

const initValue = {
  label: "",
  entreprise: "",
  type_contrat: "",
  niveau_etude: "",
  niveau_experience: "",
  salaire: "",
  nombre_de_poste: "",
  date_debut: "",
  date_limite: "",
  region: "",
  ville: "",
  longitude: "",
  latitude: "",
  pieces_jointes: "",
  piece_jointe: "",
  description: "",
};
const OffreDashboardComponent = ({ type = "EMPLOI", title }) => {
  const authCtx = useContext(AppContext);
  const { user } = authCtx;
  const closeFormRef = useRef();
  const closeDeleteRef = useRef();
  const [datas, setDatas] = useState([]);
  const [viewData, setViewData] = useState({});
  const [viewType, setViewType] = useState("liste");
  const { goTo } = useFunction();
  const validateData = Yup.object({
    label: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    description: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
  });

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validateData,
    onSubmit: (values) => {
      console.log(values);
      values.type = type;
      if (values.slug) {
        values._method = "put";
        update(values);
      } else {
        post(values);
      }
    },
  });

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    toast.promise(request.get(endPoint.offres + "/type/" + type), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          console.log(data);
          const res = data.data;
          setDatas(res.data.data);

          return res.message;
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
  const post = (values) => {
    toast.promise(request.post(endPoint.offres, values), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          console.log(data);
          const res = data;
          closeFormRef.current.click();
          setViewType("liste");
          get();
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
  const update = (values) => {
    toast.promise(request.post(endPoint.offres + "/" + values.slug, values), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          console.log(data);
          const res = data;
          closeFormRef.current.click();
          setViewType("liste");
          get();
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

  const destroy = () => {
    toast.promise(request.delete(endPoint.offres + "/" + viewData.slug), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          console.log(data);
          const res = data;
          closeDeleteRef.current.click();
          get();
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

  const setEditData = (e, data) => {
    e.preventDefault();
    setViewData(data);
    formik.setFieldValue("label", data.label);
    formik.setFieldValue("entreprise", data.entreprise);
    formik.setFieldValue("type_contrat", data.type_contrat);
    formik.setFieldValue("niveau_etude", data.niveau_etude);
    formik.setFieldValue("niveau_experience", data.niveau_experience);
    formik.setFieldValue("salaire", data.salaire);
    formik.setFieldValue("nombre_de_poste", data.nombre_de_poste);
    formik.setFieldValue("date_debut", data.date_debut);
    formik.setFieldValue("date_limite", data.date_limite);
    formik.setFieldValue("region", data.region);
    formik.setFieldValue("ville", data.ville);
    formik.setFieldValue("longitude", data.longitude);
    formik.setFieldValue("latitude", data.latitude);

    formik.setFieldValue("description", data.description);
    formik.setFieldValue("slug", data.slug);
    setViewType("form");
  };
  const setSelectedData = (data) => {
    setViewData(data);
    console.log(data);
  };
  return (
    <>
      <div className="d-flex mt-4 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom1">
        <h1 className="h2">{title}</h1>
        {/**
         * <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-primary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-primary">
              Export
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-primary dropdown-toggle d-flex align-items-center gap-1"
          >
            <svg className="bi bi-dash">
              <use xlinkHref="#calendar3" />
            </svg>
            This week
          </button>
        </div>
         */}
      </div>

      {user.profile === "ADMIN" ||
        (user.profile === "SUPER_ADMIN" && (
          <>
            <div className="mb-3">
              <div className="row row-cols-1 row-cols-md-4">
                <div className="col mb-3">
                  <div className="card">
                    <div className="d-flex p-4">
                      <div>
                        <h5>En cours</h5>
                        <h3 className="fw-bold text-primary">0</h3>
                        <span className="text-muted"></span>
                      </div>
                      <div className="ms-auto">
                        <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                          <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="card">
                    <div className="d-flex p-4">
                      <div>
                        <h5>En attente de validation</h5>
                        <h3 className="fw-bold text-primary">0</h3>
                        <span className="text-muted"></span>
                      </div>
                      <div className="ms-auto">
                        <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                          <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="card">
                    <div className="d-flex p-4">
                      <div>
                        <h5>Expirés</h5>
                        <h3 className="fw-bold text-primary">0</h3>
                        <span className="text-muted"></span>
                      </div>
                      <div className="ms-auto">
                        <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                          <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="card">
                    <div className="d-flex p-4">
                      <div>
                        <h5>Total</h5>
                        <h3 className="fw-bold text-primary">{datas.length}</h3>
                        <span className="text-muted"></span>
                      </div>
                      <div className="ms-auto">
                        <span className="d-flex align-items-center justify-content-center mx-auto rounded-5 bg-primary-light icon-circle">
                          <i className="bi bi-briefcase-fill text-primary fs-2"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}

      <div className="card p-4 mt-3">
        {viewType === "liste" && (
          <>
            <div className="table-responsive small">
              <div className="d-flex mb-3">
                <div className="me-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rechercher..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                {user.profile === "ADMIN" ||
                  (user.profile === "SUPER_ADMIN" && (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          setViewType("form");
                          formik.resetForm();
                        }}
                      >
                        Ajouter
                      </button>
                    </>
                  ))}
              </div>
              <table className="table table-hover table-striped1  border-top">
                <thead className="bg-primary">
                  <tr className="align-middle">
                    <th scope="col">#</th>
                    <th scope="col">Emplois</th>
                    <th scope="col">Date de début</th>
                    <th scope="col">Date limite</th>
                    <th scope="col">Nombre de poste</th>
                    <th scope="col" className="text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="aign-middle">
                  {datas.map((data, idx) => {
                    return (
                      <tr className="align-middle" key={idx}>
                        <td>{1 + idx}</td>
                        <td>{data.label}</td>
                        <td>{data.date_debut}</td>
                        <td>{data.date_limite}</td>
                        <td>{data.nombre_de_poste}</td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              className="btn btn-outline-primary rounded-2 me-1"
                              //data-bs-toggle="modal"
                              //data-bs-target="#view"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedData(data);
                                setViewType("offre");
                              }}
                            >
                              <i className="bi bi-eye-fill"></i>
                            </button>
                            {user.profile === "ADMIN" ||
                            user.profile === "SUPER_ADMIN" ? (
                              <>
                                <button
                                  className="btn btn-outline-danger rounded-2 mx-1"
                                  //data-bs-toggle="modal"
                                  //data-bs-target="#form"
                                  onClick={(e) => setEditData(e, data)}
                                >
                                  <i className="bi bi-pencil-square"></i>
                                </button>
                                <button
                                  className="btn btn-danger rounded-2 ms-1"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete"
                                  onClick={(e) => setSelectedData(e, data)}
                                >
                                  <i className="bi bi-trash-fill"></i>
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  className="btn btn-outline-primary rounded-2 ms-1"
                                  onClick={(e) =>
                                    goTo(
                                      e,
                                      "/offres/" + data.slug + "/candidature"
                                    )
                                  }
                                >
                                  Postuler
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}

        {viewType === "form" && (
          <>
            <div className="d-flex mb-3">
              <button
                className="ms-auto btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  setViewType("liste");
                  formik.resetForm();
                }}
              >
                Fermer
              </button>
            </div>
            <DataForm formik={formik} data={viewData} />
          </>
        )}
        {viewType === "offre" && (
          <>
            <div className="d-flex mb-3">
              <button
                className="ms-auto btn btn-outline-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setViewType("liste");
                  formik.resetForm();
                }}
              >
                Fermer
              </button>
            </div>
            <DataView data={viewData} />
          </>
        )}
      </div>

      <ModalFormComponent
        id={"form"}
        title={
          formik.values["slug"]
            ? "Modification de l'emploi"
            : "Ajout d'un emploi"
        }
        callback={formik.handleSubmit}
        closeRef={closeFormRef}
      >
        <InputField
          type="text"
          name="label"
          label={"Intitulé de l'emploi"}
          formik={formik}
          placeholder="Entrez l'intitulé de l'emploi"
        />
        <InputField
          type="textaera"
          name="description"
          label="Description de l'emploi"
          formik={formik}
          placeholder="Entrez une courte description"
        />
      </ModalFormComponent>
      <ModalDeleteComponent
        id={"delete"}
        title={"Suppression de l'emploi"}
        callback={destroy}
        size="modal-md"
        closeRef={closeDeleteRef}
      >
        <div>
          Vous êtes sur le point de supprimer définitivement des données.
          Voulez-vous continuer ?
        </div>
      </ModalDeleteComponent>
    </>
  );
};

const DataView = ({ data, isFormik = false }) => {
  const formik = isFormik ? data : { values: data };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <div className="card my-2 cursor">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <div className="job-logo d-flex justify-content-center align-items-center rounded-2 text-uppercase">
                          {formik?.values?.entreprise?.charAt(0)}.
                        </div>
                        <div className="ms-3">
                          <h5 className="card-title fw-bold">
                            {formik?.values?.label}
                          </h5>
                          <p className="card-text text-muted">
                            {formik?.values?.entreprise}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="text-primary d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1"></i>{" "}
                          {formik?.values?.region}, {formik?.values?.ville}
                        </div>
                        <div className="text-primary d-flex align-items-center">
                          <i className="bi bi-clock-fill me-1"></i> Début :
                          <span className="ps-1">
                            {formik?.values?.date_debut}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="card p-3">
                      <h5>{"Détails de l'offre"}</h5>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Contrat</span>
                            <div className="fw-bold">
                              {formik?.values?.type_contrat}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">
                              Experience
                            </span>
                            <div className="fw-bold">
                              {formik?.values?.niveau_experience}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Niveau</span>
                            <div className="fw-bold">
                              {formik?.values?.niveau_etude}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Salaire</span>
                            <div className="fw-bold">
                              {formik?.values?.salaire}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Poste</span>
                            <div className="fw-bold">
                              {formik?.values?.nombre_de_poste}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">
                              Date limite
                            </span>
                            <div className="fw-bold">
                              {formik?.values?.date_limite}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: formik?.values?.description,
                      }}
                    />
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DataForm = ({ formik, data }) => {
  const [piecesJointes, setPiecesJointes] = useState([]);

  const setDescription = (value) => {
    formik.setFieldValue("description", value);
  };

  const addPiece = (e) => {
    e.preventDefault();
    setPiecesJointes([...piecesJointes, formik.values.piece_jointe]);
    formik.setFieldValue(
      "pieces_jointes",
      JSON.stringify([...piecesJointes, formik.values.piece_jointe])
    );
    formik.setFieldValue("piece_jointe", "");
  };

  const removePiece = (e, name) => {
    e.preventDefault();
    const pieces = piecesJointes.filter((data) => data !== name);
    setPiecesJointes(pieces);
    formik.setFieldValue("pieces_jointes", JSON.stringify(pieces));
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <DataView data={formik} isFormik={true} />
        </div>
        <div className="col-12 col-md-8">
          <form className="row form" onSubmit={formik.handleSubmit}>
            <div className="col-12 col-md-6">
              <InputField
                type="text"
                name="label"
                label={"Intitulé de l'emploi"}
                formik={formik}
                placeholder="Entrez l'intitulé de l'emploi"
              />
              <InputField
                type="text"
                name="entreprise"
                label={"Nom de l'entreprise"}
                formik={formik}
                placeholder="Entrez le nom de l'entreprise"
              />

              <InputField
                type="text"
                name="type_contrat"
                label={"Type de contrat"}
                formik={formik}
                placeholder="Sélectionnez le type de contrat"
              />

              <InputField
                type="text"
                name="niveau_etude"
                label={"Niveau d'étude"}
                formik={formik}
                placeholder="Sélectionnez le niveau d'étude"
              />

              <InputField
                type="text"
                name="niveau_experience"
                label={"Niveau d'experience"}
                formik={formik}
                placeholder="Sélectionnez le niveau d'experience"
              />

              <InputField
                type="text"
                name="salaire"
                label={"Salaire"}
                formik={formik}
                placeholder="Sélectionnez le salaire"
              />
              <InputField
                type="text"
                name="nombre_de_poste"
                label={"Nombre de poste"}
                formik={formik}
                placeholder="Entrez le nombre de poste"
              />
            </div>
            <div className="col-12 col-md-6">
              <InputField
                type="date"
                name="date_debut"
                label={"Date début"}
                formik={formik}
                placeholder="Entrez la date début"
              />
              <InputField
                type="date"
                name="date_limite"
                label={"Date limite"}
                formik={formik}
                placeholder="Entrez la date limite"
              />
              <InputField
                type="text"
                name="region"
                label={"Region"}
                formik={formik}
                placeholder="Sélectionnez la région"
              />

              <InputField
                type="text"
                name="ville"
                label={"Ville"}
                formik={formik}
                placeholder="Sélectionnez la ville"
              />

              <InputField
                type="text"
                name="longitude"
                label={"Longitude"}
                formik={formik}
                placeholder="Entrez la longitude du"
              />
              <InputField
                type="text"
                name="latitude"
                label={"Latitude"}
                formik={formik}
                placeholder="Entrez la latitude du lieu"
              />
              <div className="d-flex flex-wrap align-items-center ">
                <div className="w-75 me-2">
                  <InputField
                    type="text"
                    name="piece_jointe"
                    label={"Pièces jointes"}
                    formik={formik}
                    placeholder="Entrez le nom de la pièce jointe"
                  />
                </div>
                <button
                  className="btn btn-outline-primary mt-3"
                  onClick={addPiece}
                >
                  Ajouter
                </button>
              </div>
              <div className="d-flex flex-wrap mb-3">
                {piecesJointes.map((data, idx) => {
                  return (
                    <div
                      className="me-2 bg-gray mb-1 border px-2 fw-bold rounded-5"
                      key={idx}
                    >
                      <span className="text-uppercase px-2">{data}</span>{" "}
                      <span
                        className="text-white bg-danger px-2 rounded-5 cursor"
                        onClick={(e) => removePiece(e, data)}
                      >
                        x
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 bg-gray-light py-5 border rounded-3">
              <TextEditor
                title={"Description de l'emploi"}
                data={data}
                setValue={setDescription}
              />
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-75">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OffreDashboardComponent;
