import React from "react";

const ModalPayment = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add to cart
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger" id="exampleModalLabel">
                Error with Payment
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              You have not enought money in your account for this product.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPayment;
