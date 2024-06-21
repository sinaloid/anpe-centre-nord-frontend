import { Route, Routes } from "react-router-dom";
import AdminUser from "./AdminUser";
import AdminConfig from "./AdminConfig";
import AdminMenu from "./AdminMenu";

const AdminDashboard = () => {
  const config = [
    {
      title: "Gestion des metiers",
      url: "gestion-des-metiers",
      name:"metiers"

    },
    {
      title: "Gestion des secteurs d'activité",
      url: "gestion-des-secteurs-d-activite",
      name:"secteursActivite"

    },
    {
      title: "Gestion des types de contrats",
      url: "gestion-des-types-de-contrats",
      name:"typesContrats"

    },
    {
      title: "Gestion des niveaux d'études",
      url: "gestion-des-niveaux-etudes",
      name:"niveauxEtudes"

    },
    {
      title: "Gestion des niveaux d'expériences",
      url: "gestion-des-niveaux-experiences",
      name:"niveauxExperience"

    },
    {
      title: "Gestion des villes",
      url: "gestion-des-villes",
      name:"villes"
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminMenu config={config} />} />
        <Route path="gestion-des-administrateurs" element={<AdminUser />} />
        {config.map((data, idx) => {
          return (
            <Route
              key={"route" + idx}
              path={data.url}
              element={<AdminConfig title={data.title} type={data.name} />}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default AdminDashboard;
