/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import endPoint from "../../services/endPoint";
import request from "../../services/request";
import ModalFormComponent from "../../components/ModalFormComponent";
import InputField from "../../components/InputField";
import ModalDeleteComponent from "../../components/ModalDeleteComponent";

const initValue = {
  label: "",
  description: "",
};
const UserDashboardComponent = ({ type = "POSTULANT", title }) => {
  const closeFormRef = useRef();
  const closeDeleteRef = useRef();
  const [datas, setDatas] = useState([]);
  const [viewData, setViewData] = useState({});
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
    toast.promise(request.get(endPoint.users + "/profile/" + type), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          console.log(data);
          const res = data.data;
          setDatas(res.data);

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
    formik.setFieldValue("label", data.label);
    formik.setFieldValue("description", data.description);
    formik.setFieldValue("slug", data.slug);
  };
  const setSelectedData = (e, data) => {
    e.preventDefault();
    setViewData(data);
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

      <div className="mb-3">
        <div className="row row-cols-1 row-cols-md-4">
        <div className="col mb-3">
            <div className="card">
              <div className="d-flex p-4">
                <div>
                  <h5>Total</h5>
                  <h3 className="fw-bold text-primary">{datas?.total}</h3>
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

      <div className="card p-4 mt-3">
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
            {type === "ADMIN" && (
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#form"
                onClick={(e) => {
                  e.preventDefault();
                  formik.resetForm();
                }}
              >
                Ajouter
              </button>
            )}
          </div>
          <table className="table table-hover table-striped1 table-sm1 border-top">
            <thead className="bg-primary">
              <tr className="align-middle">
                <th scope="col">#</th>
                <th scope="col">Nom Prénom</th>
                <th scope="col">Contact</th>
                <th scope="col">Date de naissance</th>
                <th scope="col">Genre</th>
                <th scope="col">Compte</th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="aign-middle">
              {datas.map((data, idx) => {
                return (
                  <tr className="align-middle" key={idx}>
                    <td>{1 + idx}</td>
                    <td>{data.nom + " " + data.prenom}</td>
                    <td>
                      <span>{data.email}</span> <br />
                      <span>{data.telephone}</span>
                    </td>
                    <td>{data.date_de_naissance}</td>
                    <td>{data.genre === "M" ? "Homme" : "Femme"}</td>
                    <td>
                      {data.is_blocked == 1 ? (
                        <>
                          <span className="badge text-bg-danger">
                            Compte bloqué
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="badge text-bg-success">
                            Compte actif
                          </span>
                        </>
                      )}
                    </td>

                    <td className="text-center">
                      <div className="btn-group">
                        <button
                          className="btn btn-outline-primary rounded-2 me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#delete"
                          onClick={(e) => setSelectedData(e, data)}
                        >
                          <i className="bi bi-eye-fill"></i>
                        </button>
                        <button
                          className="btn btn-outline-danger rounded-2 mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#form"
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
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ModalFormComponent
        id={"form"}
        title={
          formik.values["slug"]
            ? "Modification du compte d'un administrateur"
            : "Ajout d'un administrateur"
        }
        callback={formik.handleSubmit}
        closeRef={closeFormRef}
      >
        <InputField
          type="text"
          name="nom"
          label={"Nom"}
          formik={formik}
          placeholder="Nom"
        />
        <InputField
          type="text"
          name="prenom"
          label={"Prénom"}
          formik={formik}
          placeholder="Prénom"
        />
        <InputField
          type="select"
          name="genre"
          label={"Genre"}
          formik={formik}
          placeholder="Sélectionnez un genre"
          options={[
            {slug:"homme", label:"Homme"},
            {slug:"femme", label:"Femme"},
          ]}
        />
        <InputField
          type="text"
          name="email"
          label={"Email"}
          formik={formik}
          placeholder="Email"
        />
        <InputField
          type="text"
          name="telephone"
          label={"Téléphone"}
          formik={formik}
          placeholder="Téléphone"
        />
        <InputField
          type="text"
          name="password"
          label={"Mot de passe"}
          formik={formik}
          placeholder="Mot de passe"
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

export default UserDashboardComponent;
