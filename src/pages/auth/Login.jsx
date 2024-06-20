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
  user: "",
  password: "",
};
const Login = () => {
  const authCtx = useContext(AppContext);
  const { user, onUserChange } = authCtx;
  const [inputType, setInputType] = useState("password");
  const [viewContent, setViewContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth();
  }, [user.isAuth]);

  const validateData = Yup.object({
    user: Yup.string()
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
      //console.log(values);
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    //console.log(data);

    toast.promise(request.post(endPoint.login, values), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          console.log(data);
          const res = data;
          if(res.data.access_token === null){
            onUserChange({
                ...user,
                user:values.user
            })
            navigate("/authentification-a-2-facteurs")
          }else{
            onUserChange({
                isAuth: true,
                is_active: res.data.user.is_active,
                is_blocked: res.data.user.is_blocked,
                //two_factor_is_active: res.data.user.two_factor_is_active,
                profile: res.data.user.profile,
                slug: res.data.user.slug,
                name: res.data.user.nom + " " + res.data.user.prenom,
                token: res.data.access_token,
                token_refresh: null,
              });
          }
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
                  Connexion
                </h1>
                <div className="mb-4 text-center">Heureux de vous revoir</div>

                <InputField
                  type="email"
                  name="user"
                  formik={formik}
                  placeholder="Entrer votre email"
                />

                <div className="position-relative">
                  <InputField
                    type={inputType}
                    name="password"
                    formik={formik}
                    placeholder="Entrer votre mot de passe"
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

                <div className="checkbox mb-3 position-relative">
                  <label className="text-small align-middle">
                    <input
                      className="d-inline-block"
                      type="checkbox"
                      value="remember-me"
                      style={{ height: "fit-content" }}
                    />{" "}
                    <span>Se souvenir de moi</span>
                  </label>
                  <Link
                    to="/mot-de-passe-oublie"
                    className="fs-14 text-black link text-decoration-none position-absolute top-0 end-0"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-100 btn btn-lg btn-primary text-uppercase p-0"
                >
                  Se connecter
                </button>
                <div className="text-center my-3">
                  <span>
                    <span>{"Vous n'avez pas de compte ?"}</span>
                    <Link to={"/inscription"} className="fs-14 text-black">
                      {" "}
                      Inscrivez-vous
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

export default Login;
