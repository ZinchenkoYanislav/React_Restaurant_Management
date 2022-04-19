import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import WaitersModule from "./modules/waiters/WaitersModule";

export default function App() {
  return (<Container fluid className="ContainerBackGround">
    <Router>
      <Routes>
        <Route path="/*" element={<WaitersModule />} />
      </Routes>
    </Router>
  </Container>)
}
