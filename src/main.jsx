import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContextProvider } from "./services/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    {/**<React.StrictMode> */}
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
          transition={Bounce}
        />
        <App />
      </BrowserRouter>
    {/**</React.StrictMode> */}
  </AppContextProvider>
);
