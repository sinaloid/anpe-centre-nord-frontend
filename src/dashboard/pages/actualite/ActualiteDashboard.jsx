import PostDashboardComponent from "../../components/PostDashboardComponent";

const ActualiteDashboard = () => {
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
      <PostDashboardComponent title={"Liste des actualités"} type="ACTUALITE" postType={postType} />
    </>
  );
};

export default ActualiteDashboard;
