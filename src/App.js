import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import WaitersModule from "./modules/waiters/WaitersModule";
import WaiterListPage from "./modules/waiters/pages/WaiterListPage";
import MenuPage from "./modules/menu/pages/MenuPage";
import AllTablesPage from "./modules/tables/pages/AllTablesPage";
import HomePage from "./modules/common/components/HomePage";
import Waiter from "./modules/waiters/components/Waiter/Waiter";
import WaiterPage from "./modules/waiters/pages/WaiterPage";

export default function App() {
  return (
    <Container fluid className="ContainerBackGround">
      <Router>
        {/* <nav>
          <NavLink className="headerNav" to={`/`}>
            Home
          </NavLink>
          <NavLink className="headerNav" to={`/waiters`}>
            Waiters
          </NavLink>
          <NavLink className="headerNav" to={`/tables`}>
            All Tables
          </NavLink>
          <NavLink className="headerNav" to={`/Menu`}>
            Menu
          </NavLink>
        </nav> */}
        <Navbar className="mb-3" bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/waiters">Waiters</Nav.Link>
              <Nav.Link href="/tables">Tables</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/waiters" element={<WaiterListPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/tables" element={<AllTablesPage />} />
          <Route path="/waiters/:id" element={<WaiterPage />} />
        </Routes>
      </Router>
    </Container>
  );
}
