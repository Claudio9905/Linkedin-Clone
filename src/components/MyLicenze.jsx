import { Card, Col, Container, Row } from "react-bootstrap";

const MyLicenze = () => {
  return (
    <>
      <Container className=" p-0">
        {" "}
        <Card className=" my-4">
          <Card.Body>
            <Card.Title className=" fs-4 mb-4">
              Licenze e certificazioni
            </Card.Title>
            <Row>
              <Col xs={2}>
                <img
                  src="src/assets/cambridge_assessment_logo.jpeg"
                  alt=""
                  className=" img-fluid"
                />
              </Col>
              <Col xs={10}>
                <h6>
                  Cambridge English Level 2 Certificate in ESOL International
                  (First) - Grade A Level C1
                </h6>
                <p>Cambridge University Press & Assessment</p>
                <small>Data di rilascio: lug 2014</small>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default MyLicenze;
