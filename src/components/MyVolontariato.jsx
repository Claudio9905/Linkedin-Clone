import { Card, Col, Container, Row } from "react-bootstrap";

const MyVolontariato = () => {
  return (
    <>
      <Container className="p-0">
        {" "}
        <Card className=" my-4">
          <Card.Body>
            <Card.Title className=" fs-4 mb-4">Volotariato</Card.Title>
            <Row>
              <Col xs={2}>
                <img
                  src="src/assets/hospitalrun_logo.jpeg"
                  alt=""
                  className=" img-fluid"
                />
              </Col>
              <Col xs={10}>
                <h6>Core Maintainer</h6>
                <p>HospitalRun</p>
                <small>ago 2019 - dic 2019 · 5 mesi </small>

                <small>Scienza e tecnologia</small>
              </Col>
            </Row>
          </Card.Body>
          <hr />
          <Card.Body>
            <Row>
              <Col xs={2}>
                <img
                  src="https://www.placebear.com/100/100"
                  alt=""
                  className=" img-fluid"
                />
              </Col>
              <Col xs={10}>
                <h6>Donatore di sangue</h6>
                <p>Advsg Fidas Gorizia</p>
                <small>set 2013 - presente · 12 anni 1 mese </small>
                <small>Salute</small>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default MyVolontariato;
