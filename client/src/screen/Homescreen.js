import React,{useEffect,useState} from 'react'
import Navbar from "../component/Header"
import Room from '../component/Room';
import axios from "axios";
import { Col, Container, Row } from 'react-bootstrap';

function Homescreen() {
  const [loading,setLoading] =useState();
  const [error,setError] =useState();
  const [rooms,setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async() =>{
      try {
        setLoading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        console.log(data);
        setRooms(data)
        setLoading(false)

      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    getRooms();
  }, [])
  

  return (
    <div>
       {
        loading?(<h1>Loading</h1>):error?(<h1>Error</h1>):(rooms.map(room=>{
          return (
            <Container>
              <Row>
                <Col md="12">
                  <Room room={room} />
                </Col>
              </Row>
            </Container>
          )
        }))
       }
    </div>
  )
}

export default Homescreen
