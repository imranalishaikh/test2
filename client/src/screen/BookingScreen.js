import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function BookingScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();

  const { roomid } = useParams();

  useEffect(() => {
    
    try {
      const getRoom = async () => {
        setLoading(true);
        const data = (await axios.post("/api/rooms/getroombyid", { roomid: roomid })).data;
        setRoom(data);
        console.log(data);
        setLoading(false);
      };
      getRoom();
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);
  const roomById = room[0];

  return (
    <Container>
      <Card>
        {loading ? (
          <h1>Loading</h1> ? (
            error
          ) : (
            <h1>Error</h1>
          )
        ) : (
          <Row className="p-5">
            <Col md="6">
              <h3>{roomById.name}</h3>
              <img alt={roomById.name} src={roomById.imageurls[0]} className="w-100"/>
            </Col>
            <Col md="6" style={{textAlign:"right"}}>
              <div>
                <h1>Bokoking Detail</h1>
                <p>Name : </p>
                <p>From Date :</p>
                <p>To Date :</p>
                <p>Max Count : {roomById.maxcount}</p>
              </div>
              <div>
                <h3>Amount</h3>
                <p>Total Days :</p>
                <p>Rent Per Day : {roomById.rentperday}</p>
                <p>Total Amount</p>
              </div>
              <Button style={{ float: "right" }}>Pay Now</Button>
            </Col>
          </Row>
        )}
      </Card>
    </Container>
  );
}

export default BookingScreen;
