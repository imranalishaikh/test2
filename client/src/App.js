import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "./screen/Homescreen";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import BookingScreen from "./screen/BookingScreen";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Homescreen />} />
          <Route path="/book/:roomid" exact element={<BookingScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
