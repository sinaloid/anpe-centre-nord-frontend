const RessourcesComponent = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12 text-center bg-primary text-white rounded-2 my-3">
          <h2 className=" my-3 text-uppercase fw-bold">
            {"Ressources & Conseils"}
          </h2>
          <p className="fw-bold1">
            {
              "Trouvez des ressources et des conseils d'experts pour améliorer votre recherche d'emploi"
            }{" "}
            <br />
            {
              " ou vos recrutements. Profitez de nos guides pour réussir à chaque étape."
            }
            <br />
          </p>
          <div>
            <button className="btn btn-secondary mb-3 fw-bold">
              {"Accedez aux ressources & conseils"}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RessourcesComponent;
