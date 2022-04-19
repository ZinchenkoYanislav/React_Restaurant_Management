import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import useMenu from "../../menu/hooks/useMenu";

export default function AddToTableComponent() {
  const { menuList } = useMenu();
  return (
    <div>
      <Row>
        <Col>
          <Form.Select aria-label="Default select example">
            {menuList.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col>
          <Button variant="success">Add</Button>{" "}
        </Col>
      </Row>
    </div>
  );
}
