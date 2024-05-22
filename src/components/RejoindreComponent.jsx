// eslint-disable-next-line react/prop-types
const RejoindreComponent = ({titre, content}) => {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12 text-center bg-primary text-white rounded-2 my-3">
          <h2 className=" my-3 text-uppercase fw-bold">
            {titre}
          </h2>
          <p className="fw-bold1">
            {content}
            <br />
          </p>
          <div>
            <button className="btn btn-secondary mb-3 fw-bold">
              {"Inscrivez-vous"}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejoindreComponent;
