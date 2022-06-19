import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function ToppingOption({ name, imagePath, updateItemCount }) {
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{
        textAlign: "left",
        margin: "20px",
        color: "#1B2430",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "75%", height: "80%", marginBottom: "5%" }}
        src={`https://sundae-server-app.herokuapp.com/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          onChange={(e) => {
            updateItemCount(name, e.target.checked ? 1 : 0);
          }}
          label={name}
        />
      </Form.Group>
    </Col>
  );
}
