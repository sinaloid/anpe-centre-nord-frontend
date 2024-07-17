import PostDashboardComponent from "../../components/PostDashboardComponent";

const RessourceDashboard = () => {
    const postType = [
        {
          slug:"Conseils CV",
          label:"Conseils CV"
        },
        {
          slug:"Conseils lettre de motivations",
          label:"Conseils lettre de motivations"
        },
        {
          slug:"Conseils motivations",
          label:"Conseils motivations"
        }
      ]
      
      
  
  return (
    <>
      <PostDashboardComponent title={"Liste des ressources et conseils"} type="RESSOURCE"  postType={postType}/>
    </>
  );
};

export default RessourceDashboard;
