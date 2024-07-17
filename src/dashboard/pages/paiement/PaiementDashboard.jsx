import PaiementDashboardComponent from "../../components/PaiementDashboardComponent";

const PaiementDashboard = () => {
  const postType = [
    {
      slug:"Activités",
      label:"Activités"
    },
    {
      slug:"Proclamation/Résultat",
      label:"Proclamation/Résultat"
    },
    {
      slug:"Formations/Bourses",
      label:"Formations/Bourses"
    },
    {
      slug:"Projets",
      label:"Projets"
    }
  ]
  
  return (
    <>
      <PaiementDashboardComponent title={"Liste des paiements"} type="PAIEMENT" postType={postType} />
    </>
  );
};

export default PaiementDashboard;
