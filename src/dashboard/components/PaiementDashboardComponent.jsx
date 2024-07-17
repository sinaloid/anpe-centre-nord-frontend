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
import useFunction from "../../hooks/useFunction";

const initValue = {
  titre: "",
  categorie: "",
  description: "",
  long_description: "",
};
const PaiementDashboardComponent = ({ type = "PAIEMENT", title, postType}) => {
  const closeFormRef = useRef();
  const closeDeleteRef = useRef();
  const {formatDate, truncateText} = useFunction()
  const [datas, setDatas] = useState([]);
  const [viewData, setViewData] = useState({});
  

  



  const validateData = Yup.object({
    titre: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    categorie: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    description: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    long_description: Yup.string().required(
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
    //get();
  }, []);

  const get = () => {
    toast.promise(request.get(endPoint.posts+"/type/"+type), {
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
    toast.promise(request.post(endPoint.posts, values), {
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
    toast.promise(request.post(endPoint.posts + "/" + values.slug, values), {
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
    toast.promise(request.delete(endPoint.posts + "/" + viewData.slug), {
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
    formik.setFieldValue("titre", data.titre);
    formik.setFieldValue("categorie", data.categorie);
    formik.setFieldValue("long_description", data.long_description);
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
                  <h3 className="fw-bold text-primary">{datas.total}</h3>
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
            <button
              className="btn btn-primary"
              //data-bs-toggle="modal"
              //data-bs-target="#form"
              onClick={(e) => {
                e.preventDefault();
                formik.resetForm();
              }}
            >
              Ajouter
            </button>
          </div>
          <table className="table table-hover table-striped1 table-sm1 border-top">
            <thead className="bg-primary">
              <tr className="align-middle">
                <th scope="col">#</th>
                <th scope="col">Id Transaction</th>
                <th scope="col">Recruteur</th>
                <th scope="col">Montant</th>
                <th scope="col">Moyen de paiement</th>
                <th scope="col">Date </th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="aign-middle">
              {datas?.data?.map((data, idx) => {
                return (
                  <tr className="align-middle" key={idx}>
                    <td>{1 + idx}</td>
                    <td>{data.titre}</td>
                    <td>{data.categorie}</td>
                    <td>{truncateText(data.description, 70)}</td>
                    <td>{formatDate(data.created_at)}</td>
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
            ? "Modification du post"
            : "Ajout d'un post"
        }
        callback={formik.handleSubmit}
        closeRef={closeFormRef}
      >
        <InputField
          type="text"
          name="titre"
          label={"Titre du sujet"}
          formik={formik}
          placeholder="Entrez le titre du sujet"
        />
        <InputField
          type="select"
          name="categorie"
          label={"Catégorie"}
          formik={formik}
          placeholder="Sélectionnez la catégorie"
          options={postType}
        />
        <InputField
          type="textaera"
          name="description"
          label="Courte description"
          formik={formik}
          placeholder="Entrez une courte description"
        />
        <InputField
          type="textaera"
          name="long_description"
          label="Longue description"
          formik={formik}
          placeholder="Entrez une longue description"
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

export default PaiementDashboardComponent;
