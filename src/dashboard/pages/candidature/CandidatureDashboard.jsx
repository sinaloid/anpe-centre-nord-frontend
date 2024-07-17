import CandidatureDashboardComponent from "../../components/CandidatureDashboardComponent";

const CandidatureDashboard = () => {
  const postType = [
    {
      slug: "EN_COURS",
      label: "En cours"
    },
    {
      slug: "TEST_EN_LISTE",
      label: "Test en ligne"
    },
    {
      slug: "TEST_PHYSIQUE",
      label: "Test physique"
    },
    {
      slug: "ENTRETIEN",
      label: "Entretien"
    },
    {
      slug: "ECHEC",
      label: "Échec"
    },
    {
      slug: "ADMIS",
      label: "Admis"
    }
]
  
  return (
    <>
      <CandidatureDashboardComponent title={"Liste des candidatures"} type="CANDIDATURES" postType={postType} />
    </>
  );
};

export default CandidatureDashboard;
