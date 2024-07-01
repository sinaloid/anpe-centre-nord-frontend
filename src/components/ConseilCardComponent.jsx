import img from "../assets/images/anpe.jpeg";

const ConseilCardComponent = () => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <div>
          <div className="mb-2">
            <img width={"100%"} src={img} alt="" />
          </div>
          <div className="d-flex align-items-center">
            
            <div className="">
              <h5 className="card-title fw-bold">{"Titre de la ressource"}</h5>
              <p className="card-text text-muted">{"ANPE CENTRE NORD"}</p>
            </div>
          </div>
        </div>
        <div className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          aliquid harum labore, est in quibusdam corrupti earum inventore omnis,
          reprehenderit delectus vero quasi dolorem suscipit optio. Recusandae
          sed mollitia blanditiis.
        </div>
        <div className=" text-end my-1">
          <div className="d-flex">
            <span className="bg-gray-light py-1 px-2 rounded-2">Activités</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-primary d-flex align-items-center">
            <i className="bi bi-chat-left-fill me-1"></i> 125 commentaires
          </div>
          <div className="text-primary  d-flex align-items-center">
            <i className="bi bi-clock-fill ms-auto me-1"></i>
            {"il y'a 5 jours"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConseilCardComponent;
