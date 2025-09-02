import { Button, Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { ArrowRight, Plus } from "react-bootstrap-icons";

const MyInteressi = () => {
  return (
    <>
      <Container className=" p-0">
        <Card className="animation-start all-card my-4">
          <Card.Body>
            <Card.Title className=" fs-4"> Interessi</Card.Title>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 "
            >
              <Tab eventKey="aziende" title="Aziende">
                <Row>
                  <Col xs={6}>
                    <Col xs={2}>
                      <img
                        src="src/assets/tesla_motors_logo.jpeg"
                        alt=""
                        className="imgInteressi me-3 img-fluid"
                      />
                    </Col>
                    <Col xs={10}>
                      <h5>Tesla</h5>
                      <small>12.263.460 follower</small> <br />
                      <Button className=" rounded-5  bg-transparent text-black fw-semibold border-black btnInteressi ">
                        {" "}
                        <Plus className=" fs-3 "></Plus> Segui
                      </Button>
                    </Col>
                  </Col>
                  <Col xs={6}>
                    <Col xs={2}>
                      <img
                        src="src/assets/spacex_logo.jpeg"
                        alt=""
                        className="imgInteressi me-3 img-fluid"
                      />
                    </Col>
                    <Col xs={10}>
                      <h5>SpaceX</h5>
                      <small>3.435.252 follower</small> <br />
                      <Button className=" rounded-5 bg-transparent text-black fw-semibold border-black btnInteressi ">
                        {" "}
                        <Plus className=" fs-3 "></Plus> Segui
                      </Button>
                    </Col>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="gruppi" title="Gruppi">
                <Row>
                  <Col xs={6}>
                    <Col xs={2}>
                      <img
                        src="src/assets/1630999696851.jpeg"
                        alt=""
                        className="imgInteressi me-3 img-fluid"
                      />
                    </Col>
                    <Col xs={10}>
                      <h5>JavaScript</h5>
                      <small>1.495.203 follower</small> <br />
                      <Button className=" rounded-5  bg-transparent text-black fw-semibold border-black btnInteressi ">
                        Iscriviti
                      </Button>
                    </Col>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="scuole" title="Scuole e università">
                <Row>
                  <Col xs={6}>
                    <Col xs={2}>
                      <img
                        src="src/assets/epicodeschool_logo.jpeg"
                        alt=""
                        className=" me-3 imgInteressi img-fluid"
                      />
                    </Col>
                    <Col xs={10}>
                      <h5>EPICODE Institute of Technology </h5>
                      <small>19.964 follower</small> <br />
                      <Button className=" rounded-5  bg-transparent text-black fw-semibold border-black btnInteressi ">
                        {" "}
                        <Plus className=" fs-3 "></Plus> Segui
                      </Button>
                    </Col>
                  </Col>
                  <Col xs={6}>
                    <Col xs={2}>
                      <img
                        src="src/assets/universit_degli_studi_di_udine_logo.jpeg"
                        alt=""
                        className="imgInteressi me-3 img-fluid"
                      />
                    </Col>

                    <Col xs={10}>
                      <h5>Università degli Studi di Udine</h5>
                      <small>57.274 follower</small> <br />
                      <Button className=" rounded-5 bg-transparent text-black fw-semibold border-black btnInteressi ">
                        {" "}
                        <Plus className=" fs-3 "></Plus> Segui
                      </Button>
                    </Col>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Card.Body>
          <Button className="bg-white text-secondary border-dark-subtle border-bottom-0 border-start-0 fw-semibold border-end-0 btnHover">
            Mostra tutte le aziende <ArrowRight />
          </Button>
        </Card>
      </Container>
    </>
  );
};
export default MyInteressi;
