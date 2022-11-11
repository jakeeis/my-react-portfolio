import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Project from "../Project";

function Portfolio() {
return (
    <Col xs={12} md={6} lg={4} >
      <Card style={{ width: '18rem' }}>
        <Card.Header></Card.Header>
        <Card.Img variant="top" src={Project.image} />
        <Card.Body>
          <Card.Title>Card</Card.Title>
          <Card.Text>
            {Project.content}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Portfolio;
