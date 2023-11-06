import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalLg({ show, setShow, title, children }) {
    return (
        <Modal
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
}
