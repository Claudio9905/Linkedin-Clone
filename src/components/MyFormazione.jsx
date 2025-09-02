import { Card, Col, Container, Row } from "react-bootstrap";

const MyFormazione = () => {
  return (
    <>
      <Container className=" p-0">
        <Card className=" animation-start all-card my-4">
          <Card.Body>
            <Row>
              <Card.Title className=" fs-4 mb-4">Formazione</Card.Title>
              <Col xs={2}>
                <img
                  src="src/assets/universit_degli_studi_di_udine_logo.jpeg"
                  alt=""
                  className=" img-fluid"
                />
              </Col>
              <Col xs={10}>
                <h6>Universita degli Studi di Udine</h6>
                <p>
                  Laurea Triennale in Scienze e Tecnologie Multimediali,
                  Dipartimento di Scienze matematiche, informatiche e
                  multimediali
                </p>
                <small>2010-2013</small>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default MyFormazione;
