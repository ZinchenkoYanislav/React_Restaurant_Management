import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";

export default function MenuList({menuList, deleteItemMenu, updateItemMenu}) {
  console.log(menuList);
  return (
    <div>
      <Row xs={1} md={4} className="g-5">
        {menuList.map((item) => {
          return (
            <Col key={item.id}>
              <CardGroup>
                <Card border="primary" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Title>Price - {item.price}$</Card.Title>
                    <Row>
                      <Col>
                        <Button onClick={() => updateItemMenu(item.id)} variant="primary">Update</Button>
                      </Col>
                      <Col>
                        <Button onClick={() => deleteItemMenu(item.id)} variant="danger">Delete</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
