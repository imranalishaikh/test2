import React, { useState } from "react";
import { Button, Col, Container, Row, Modal, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Room({ room }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Container>
      <Row className="mb-3">
        <Col md="4">
          <img src={room.imageurls[0]} alt="Rooms" className="w-100" />
        </Col>
        <Col md="8">
          <h3>{room.name}</h3>
          <p>
            <b>Max Count : {room.maxcount}</b>
          </p>
          <p>
            <b>Phone Number : {room.phonenumber}</b>
          </p>
          <p>
            <b>Type : {room.type}</b>
          </p>
          <Button className="btn btn-primary" onClick={handleShow}>
            View Details
          </Button>
          <Link className="btn btn-secondary" to={`/book/${room._id}`} >
            Pay Now
          </Link>
        </Col>
      </Row>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>
            <h3>{room.name}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img className="w-100" src={url} alt={room.name} />
                </Carousel.Item>
              );
            })}
          </Carousel>

          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Room;
