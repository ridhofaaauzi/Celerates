import React from "react";
import baristaPng from "../../assets/barista.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Highlight = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section>
        <div
          className="d-flex justify-content-center mx-auto rounded"
          style={{ backgroundColor: "#102A71", maxWidth: "1024px" }}>
          <div
            className="d-flex justify-content-center align-items-center mt-5 mb-5"
            style={{ gap: "50px" }}>
            <div style={{ maxWidth: "300px" }}>
              <img src={baristaPng} alt="Barista" width={300} />
              <h2>Beli Tiket Konser Bebas Antrian Hanya di Infinitix!</h2>
            </div>
            <div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={baristaPng}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

export default Highlight;
