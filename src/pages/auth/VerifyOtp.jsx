import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
const VerifyOtp = () => {
  const authCtx = useContext(AppContext);
  const { user, onUserChange } = authCtx;
  const navigate = useNavigate();
  let { slug, otp } = useParams();

  const validateData = Yup.object({
    otp: Yup.string()
      .min(6, "Le code doit contenir 6 chiffres au moins")
      .max(6, "Le code doit contenir 6 chiffres au plus")
      .required("Ce champ est obligatoire. Veuillez le remplir pour continuer"),
  });

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validateData,
    onSubmit: (values) => {
      console.log(values);
      values.email = user.user;
      if(slug){
        values.slug = slug
      }

      handleSubmit(values);
    },
  });

  useEffect(() => {
    if (slug && otp) {
      handleSubmit({
        slug: slug,
        otp: otp,
      });
    }
  }, [slug, otp]);

  const handleSubmit = (data) => {
    //console.log(data);

    toast.promise(request.post(endPoint.verifyOtp, data), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          console.log(data);
          const res = data;
          onUserChange({
            ...user,
            user: null,
          });
          navigate("/connexion");
          return res.data.message;
        },
      },
      error: {
        render({ data }) {
          console.log(data);
          if(data?.response?.data?.message){
            return data?.response?.data?.message
          }
          return data?.response?.data?.errors
            ? data?.response?.data?.errors
            : data?.response?.data?.error;
        },
      },
    });
  };

  const getOtp = (e) => {
    e.preventDefault();
    const data = {
      slug : slug,
      email: user.user
    }
    
    toast.promise(request.post(endPoint.getOtp, data), {
      pending: "Veuillez patienté...",
      success: {
        render({ data }) {
          console.log(data);
          const res = data;

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
                  Vérification du code OTP
                </h1>
                <div className="mb-4 text-center">
                  {
                    "Entrez le code OTP que vous avez reçu dans votre boîte mail à l'adresse"
                  }{" "}
                  <br />
                  <span className="text-primary fw-bold">{user.user}</span>
                </div>

                <InputField
                  type="text"
                  label="Code OTP"
                  name="otp"
                  formik={formik}
                  placeholder="Entrez le code OTP"
                />

                <div className="checkbox mb-3 position-relative">
                  <label className="text-small align-middle">
                    <span className="text-primary" onClick={getOtp}>
                      Cliquez ici pour renvoyer le code
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-100 btn btn-lg btn-primary text-uppercase p-0"
                >
                  Valider
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

export default VerifyOtp;
