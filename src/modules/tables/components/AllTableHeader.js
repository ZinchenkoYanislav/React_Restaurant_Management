import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import ButtonNavBack from "../../common/components/ButtonNavBack";
import ButtonStartPage from "../../common/components/ButtonStartPage";

export default function TableHeader({ waiter }) {
  const { pathname, state } = useLocation();
  const pathnameWaiter = state;
  console.log(pathname, pathnameWaiter);
  return (
    <>
      {" "}
      {/* возвращает [{0: ...}] */}
      {waiter.map((item) => {
        return (
          <h2 key={item.id}>
            <Row>
              <Col sm={4}>
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
                    to={`${pathname}`}
                  >
                    All Tables
                  </NavLink>
                  <NavLink
                    className="headerNav"
                    state={pathnameWaiter}
                    to={`${pathnameWaiter}/menu`}
                  >
                    Menu
                  </NavLink>
                </nav>
              </Col>
              <Col sm={2}>
                <ButtonNavBack />
              </Col>
              <Col>
                <ButtonStartPage />
              </Col>
            </Row>
          </h2>
        );
      })}
    </>
  );
}
