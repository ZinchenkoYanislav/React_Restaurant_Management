import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function WaiterList({ waiterList, deleteWaiter }) {
  function onDelete(e, id) {
    e.preventDefault();
    deleteWaiter(id);
  }
  return (
    <>
      {waiterList.map((item) => {
        return (
          <ListGroup key={item.id}>
            <Row>
              <Col xs={10}>
                <Link className="textDecorNone" to={`waiter/${item.id}`}>
                  <ListGroup.Item action variant="secondary">
                    <Col> {item.name} </Col>
                  </ListGroup.Item>
                </Link>
              </Col>
              <Col xs={2}>
                <Button onClick={(e) => onDelete(e, item.id)} variant="danger">
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroup>
        );
      })}
    </>
  );
}
