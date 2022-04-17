import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function WaiterList({ waiterList }) {
  return (
    <>
      <ListGroup>
        {waiterList.map((item) => {
          return (
            <Link className="textDecorNone" key={item.id} to={`waiter/${item.id}`}>
              <ListGroup.Item action variant="secondary">
                {item.name}
              </ListGroup.Item>
            </Link>
          );
        })}
      </ListGroup>

    </>
  );
}
