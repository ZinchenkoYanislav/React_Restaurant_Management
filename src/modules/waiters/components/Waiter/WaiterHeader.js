import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import ButtonNavBack from "../../../common/components/ButtonNavBack";

export default function WaiterHeader({ waiter }) {
  const { pathname } = useLocation();
  console.log(pathname)
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
              <Col sm={6}>
                <nav>
                  <NavLink to={`${pathname}/myTable/1`}>My tables</NavLink>
                  <NavLink to={`${pathname}/AllTable`}>All Tables</NavLink>
                  <NavLink to={`${pathname}/Menu`}>Menu</NavLink>
                </nav>
              </Col>
              <Col>
                <ButtonNavBack />
              </Col>
            </Row>
          </h2>
        );
      })}
    </>
  );
}
