import React from "react";
import { Card } from "react-bootstrap";

export default function BlogCard(props) {
  return (
    <Card style={{ margin: "2rem", width: "20rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          👍 {props.likes}
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link
          style={{ color: "rgb(32, 180, 136)" }}
          href={props.link}
          target="_blank"
        >
          Read More 👉{" "}
        </Card.Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{props.date}</small>
      </Card.Footer>
    </Card>
  );
}
