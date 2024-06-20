import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/banier.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import request from "../../services/request";
import endPoint from "../../services/endPoint";
import { AppContext } from "../../services/context";
import InputField from "../../components/InputField";
import { toast } from "react-toastify";

const initValue = {
  nom: "",
  prenom: "",
  date_de_naissance: "",
  genre: "",
  profile: "",
  telephone: "",
  email: "",
  password: "",
};
const Register = () => {
  const authCtx = useContext(AppContext);
  const { user, onUserChange } = authCtx;
  const [inputType, setInputType] = useState("password");
  const [viewContent, setViewContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth();
  }, [user.isAuth]);

  const validateData = Yup.object({
    nom: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    prenom: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    date_de_naissance: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    genre: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    profile: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    telephone: Yup.string().required(
      "Ce champ est obligatoire. Veuillez le remplir pour continuer"
    ),
    email: Yup.string()
      .email("Adresse e-mail invalide")
      .required("Ce champ est obligatoire. Veuillez le remplir pour continuer"),
    password: Yup.string()
      .min(8, "Le mot de passe doit contenir 8 caractères ou moins")
      .required("Ce champ est obligatoire. Veuillez le remplir pour continuer"),
  });

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validateData,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    //console.log(data);

    toast.promise(request.post(endPoint.register, values), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          const res = data;

          onUserChange({
            ...user,
            user: values.email,
          });

          navigate("/verification-du-code-otp");
          return res.data.message;
        },
      },
      error: {
        render({ data }) {
          console.log(data);
          return data.response.data.errors
            ? data.response.data.errors
            : data.response.data.error;
        },
      },
    });
  };

  const isAuth = () => {
    if (user.isAuth === true && user.token != null && user.token !== "") {
      console.log(`connexion reussi, isAuth: ${user}`);
      console.log(user);

      return navigate("/dashboard/");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10 mx-auto">
          <div className="row">
            <div className="col-12 col-lg-5 mx-auto pt-5">
              <div className="text-center">
                <img className="rounded-3" width="100%" src={login} alt="" />
              </div>
              <form onSubmit={formik.handleSubmit} className="mt-3">
                <h1 className="fs-48 fw-bold text-primary m-0 text-center m-0">
                  Inscription
                </h1>
                <div className="mb-4 text-center">
                  Complétez ce formulaire pour créer votre compte et accéder à
                  nos services. Veuillez fournir des informations exactes pour
                  faciliter votre inscription
                </div>

                <InputField
                  type="text"
                  name="nom"
                  formik={formik}
                  placeholder="Entrez votre nom"
                />
                <InputField
                  type="text"
                  name="prenom"
                  formik={formik}
                  placeholder="Entrez votre prénom"
                />
                <InputField
                  type="date"
                  name="date_de_naissance"
                  formik={formik}
                  placeholder="Sélectionnez votre date de naissance"
                />
                <InputField
                  type="select"
                  name="genre"
                  formik={formik}
                  placeholder="Sélectionnez votre genre"
                  options={[
                    {
                      slug: "M",
                      label: "Homme",
                    },
                    {
                      slug: "F",
                      label: "Femme",
                    },
                  ]}
                />
                <InputField
                  type="select"
                  name="profile"
                  formik={formik}
                  placeholder="Sélectionnez votre profile"
                  options={[
                    {
                      slug: "POSTULANT",
                      label: "Postulant",
                    },
                    {
                      slug: "RECRUTEUR",
                      label: "Recruteur",
                    },
                  ]}
                />
                <InputField
                  type="text"
                  name="telephone"
                  formik={formik}
                  placeholder="Entrez votre numéro de téléphone"
                />
                <InputField
                  type="email"
                  name="email"
                  formik={formik}
                  placeholder="Entrez votre email"
                />

                <div className="position-relative">
                  <InputField
                    type={inputType}
                    name="password"
                    formik={formik}
                    placeholder="Entrez votre mot de passe"
                  >
                    <span
                      className="position-absolute"
                      style={{ right: "2%", top: "20%" }}
                      onClick={(e) => {
                        e.preventDefault();
                        if (inputType === "password") {
                          setInputType("text");
                          setViewContent(!viewContent);
                        } else {
                          setInputType("password");
                          setViewContent(!viewContent);
                        }
                      }}
                    >
                      {viewContent ? (
                        <>
                          <i className="bi bi-eye-fill"></i>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-eye-slash-fill"></i>
                        </>
                      )}
                    </span>
                  </InputField>
                </div>

                <div className="checkbox mb-4 position-relative"></div>
                <button
                  type="submit"
                  className="w-100 btn btn-lg btn-primary text-uppercase p-0"
                >
                  Inscription
                </button>
                <div className="text-center my-3">
                  <span>
                    <span>{"Vous avez déjà un compte ?"}</span>
                    <Link to={"/connexion"} className="fs-14 text-black">
                      {" "}
                      connectez-vous
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
