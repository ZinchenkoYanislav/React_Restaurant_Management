import React from "react";
import { Col, Row } from "react-bootstrap";

export default function AllTableList({ tableList }) {
  console.log(tableList);
  return (
    <div>
      {tableList.map((item) => {
        return (
          <div className="table" key={item.id}>
             <Row>
            <Col>
            {item.tableName}
            </Col> 
            <Col>
                <button>info</button>
            </Col>    
            </Row> 
            
          </div>
        );
      })}
    </div>
  );
}
