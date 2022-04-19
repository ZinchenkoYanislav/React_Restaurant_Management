import React from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import ButtonNavBack from "../../common/components/ButtonNavBack";
import ButtonStartPage from "../../common/components/ButtonStartPage";

export default function MenuHeader({ waiter, setOpen, open, toogleMenuForm }) {
  const { pathname, state } = useLocation();
  const pathnameWaiter = state;
  // console.log(pathname, pathnameWaiter);
  return (
    <>
      {" "}
      {/* возвращает [{0: ...}] */}
      {waiter.map((item) => {
        return (
          <h2 key={item.id}>
            <Row>
              <Col sm={3}>
                Welcome <Badge bg="primary"> {item.name}</Badge>
              </Col>
              <Col sm={5}>
                <nav>
                  <NavLink
                    className="headerNav"
                    state={pathnameWaiter}
                    to={`${pathnameWaiter}/myTable/1`}
                  >
                    My tables
                  </NavLink>
                  <NavLink
                    className="headerNav"
                    state={pathnameWaiter}
                    to={`${pathnameWaiter}/AllTable`}
                  >
                    All Tables
                  </NavLink>
                  <NavLink
                    className="headerNav"
                    state={pathnameWaiter}
                    to={`${pathname}`}
                  >
                    Menu
                  </NavLink>
                </nav>
              </Col>
              <Col>
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="formMennu"
                  aria-expanded={open}
                  variant="primary"
                >
                  Add dish
                </Button>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <ButtonNavBack />
                  </Col>

                  <Col>
                    <ButtonStartPage />
                  </Col>
                </Row>
              </Col>
            </Row>
          </h2>
        );
      })}
    </>
  );
}
