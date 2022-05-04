import React, { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import WaiterEditForm from "./WaiterForm/WaiterEditForm";

export default function WaiterList({ waiterList, deleteWaiter }) {
  const { pathname } = useLocation();

  const [edit, setEdit] = useState('2')

  const [editName, setEditName] = useState([])

  function onDelete(e, id) {
    e.preventDefault();
    deleteWaiter(id);
  }

  function onEdit(e, id, name) {
    setEditName({id, name})
    setEdit(name)
  }
  return (
    <>
      {waiterList.map((item) => {
        return (
          <ListGroup key={item.id}>
            <Row>
              <Col xs={10}>
                <Link className="textDecorNone" to={`${pathname}/${item.id}`}>
                  <ListGroup.Item action variant="secondary">
                    <Col> {item.name} </Col>
                  </ListGroup.Item>
                </Link>
              </Col>
              <Col xs={2}>
                <Button onClick={(e) => onDelete(e, item.id)} variant="danger">
                  Delete
                </Button>
                <Button onClick={(e) => onEdit(e, item.id, item.name)} variant="danger">
                  edit
                </Button>
              </Col>
            </Row>
          </ListGroup>
        );
      })}
      <WaiterEditForm editName={editName} edit={edit} setEdit={setEdit} />
    </>
  );
}
