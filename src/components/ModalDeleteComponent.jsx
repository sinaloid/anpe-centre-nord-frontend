/* eslint-disable react/prop-types */
const ModalDeleteComponent = ({id, title, children,size = "modal-lg",callback,closeRef}) => {
  return (
    <>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={"modal-dialog modal-dialog-centered "+size}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                {
                    children
                }
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-dismiss="modal"
                ref={closeRef}
              >
                Annuler
              </button>
              <button type="submit" className="btn btn-danger" 
                onClick={callback}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDeleteComponent;
