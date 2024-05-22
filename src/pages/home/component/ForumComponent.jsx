const ForumComponent = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12 text-center bg-primary text-white rounded-2 my-3">
          <h2 className=" my-3 text-uppercase fw-bold">
            {"Forum de discussion"}
          </h2>
          <p className="fw-bold1">
            {
              "Échangez avec la communauté, posez des questions et partagez vos expériences"
            }{" "}
            <br />
            {
              " pour obtenir des conseils et du soutien."
            }
            <br />
          </p>
          <div>
            <button className="btn btn-secondary mb-3 fw-bold">
              {"Accedez au forum de discussion"}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumComponent;
