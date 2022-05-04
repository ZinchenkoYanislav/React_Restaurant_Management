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
              <Col sm={5}>
                Welcome <Badge bg="primary"> {item.name}</Badge>
              </Col>
              MY TABLES
              <Col sm={4}></Col>
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
