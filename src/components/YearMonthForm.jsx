import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function MonthYearForm() {
  const [month, setMonth] = useState("");
  const [month2, setMonth2] = useState("");

  return (
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Data inizio*</p>
            <Form.Control
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Data fine*</p>

            <Form.Control
              type="month"
              value={month2}
              onChange={(e) => setMonth2(e.target.value)}
              required
              max={2025}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default MonthYearForm;
