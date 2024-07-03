import ContainerComponent from "../../components/ContainerComponent";
import JobDetailCardComponent from "./components/JobDetailCardComponent";
import OffreSimilaireComponent from "./components/OffreSimilaireComponent";

const OffreDetailPage = () => {
  return (
    <ContainerComponent>
      <div className="row">
        <div className="col-12 col-md-7 mx-auto">
          <div className="container">
            <div className="row my-5">
              <div className="col-12 text-center">
                <JobDetailCardComponent />
              </div>
              <div className="col-12 mt-5">
                <div className="row">
                  <div className="col-12 col-md-8">
                    {[...Array(4)].map((data, idx) => {
                      return (
                        <div key={idx}>
                          <h5 className="text-primary fw-bold">
                            {"Titre : Lorem ipsum"}
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam ea quaerat commodi et cupiditate
                            exercitationem maxime eius minus, ab odit excepturi
                            quibusdam ut in recusandae quia. Nulla deleniti
                            illum ad. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quisquam ea quaerat commodi et
                            cupiditate exercitationem maxime eius minus, ab odit
                            excepturi quibusdam ut in recusandae quia. Nulla
                            deleniti illum ad. <br /> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam ea quaerat commodi et cupiditate
                            exercitationem maxime eius minus, ab odit excepturi
                            quibusdam ut in recusandae quia. Nulla deleniti
                            illum ad.
                          </p>
                        </div>
                      );
                    })}
                    <div>
                      <button className="btn btn-primary w-100">
                        Postuler
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="card p-3">
                      <h5>{"Détails de l'offre"}</h5>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Contrat</span>
                            <div className="fw-bold">CDI</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">
                              Experience
                            </span>
                            <div className="fw-bold">2 ans</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Niveau</span>
                            <div className="fw-bold">BAC</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Salaire</span>
                            <div className="fw-bold">100k-200k</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">Poste</span>
                            <div className="fw-bold">2</div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="border rounded-2 px-2 mb-2">
                            <span className="text-muted text-12">
                              Date limite
                            </span>
                            <div className="fw-bold">20/07/2024</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-sm btn-primary w-100">
                            Postuler
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <OffreSimilaireComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default OffreDetailPage;
