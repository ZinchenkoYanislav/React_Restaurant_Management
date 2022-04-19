import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import ButtonNavBack from "../../../common/components/ButtonNavBack";
import ButtonStartPage from "../../../common/components/ButtonStartPage";

export default function WaiterHeader({ waiter }) {
  const { pathname, state } = useLocation();
  const prevPathname = state;
  console.log(pathname, prevPathname);
  return (
    <>
      {" "}
      {/* возвращает [{0: ...}] */}
      {waiter.map((item) => {
        return (
          <h2 className="headerBackGround" key={item.id}>
            <Row>
              <Col sm={4}>
                Welcome <Badge bg="primary"> {item.name}</Badge>
              </Col>
              <Col sm={5}>
                <nav>
                  <NavLink
                    className="headerNav"
                    state={pathname}
                    to={`${pathname}/myTable/1`}
                  >
                    My tables
                  </NavLink>
                  <NavLink
                    className="headerNav"
                    state={pathname}
                    to={`${pathname}/AllTable`}
                  >
                    All Tables
                  </NavLink>
                  <NavLink
                    className="headerNav"
                    state={pathname}
                    to={`${pathname}/Menu`}
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
