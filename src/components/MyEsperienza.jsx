import { Button, Card, Col, Container, Row } from "react-bootstrap";
import EditProfile from "./EditProfile";
import Modale from "./Modale";
import ModaleEsperienza from "./ModaleEsperienza";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExperiencesAction } from "../redux/actions";

const MyEsperienza = () => {
  const Profile = useSelector((state) => {
    return state.mainProfile.me_Profile;
  });

  const dispatch1 = useDispatch();

  useEffect(() => {
    if (Profile && Profile._id) {
      dispatch1(getExperiencesAction(Profile._id));
    }
  }, [Profile]);

  if (!Profile || !Profile._id) {
    return <p>Caricamento profilo...</p>;
  }

  return (
    <>
      <Container>
        <Row>
          <Card className="animation-start all-card my-4">
            <Card.Body>
              <Card.Title className=" fs-4 mb-4">Esperienza</Card.Title>
              <EditProfile
                style={{ bottom: 28, right: 17 }}
                ModaleComponent={ModaleEsperienza}
              />
              <Row>
                <Col xs={2}>
                  {/* <div className=" d-flex"> */}
                  <img
                    src="src/assets/epicodeschool_logo.jpeg"
                    alt=""
                    className=" img-fluid"
                  />
                  {/* <div className=" d-flex flex-column ms-2"> */}
                </Col>
                <Col xs={10}>
                  <h6>Teacher</h6>
                  <p>EPICODE • Autonomo</p>
                  <small>
                    giu 2019 - Presente • 6 anni 4 mesi <br /> Roma, Italia
                  </small>
                </Col>
              </Row>
              {/* </div> */}
              {/* </div> */}
            </Card.Body>

            <hr />
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <img
                    src="src/assets/images.png"
                    alt=""
                    className=" img-fluid"
                  />
                </Col>
                <Col xs={10}>
                  <h6>Founder & Software Developer</h6>
                  <p>Nucleode SRL</p>
                  <small>
                    mar 2017 - Presente • 8 anni 7 mesi <br />{" "}
                    Gorizia,Friuli-Venezia-Giulia, Italia
                  </small>
                  <p>
                    Innovative start-up specialized in the development of highly
                    innovative computer-medical solutions, using cloud potential
                    and mobile computing, machine learning and Mixed Reality.
                  </p>

                  <figure>
                    <img
                      src="src/assets/images.jpeg"
                      alt=""
                      className=" img-fluid"
                    />
                  </figure>

                  <h6>Nucleode | Biohealt Innovation</h6>
                  <p>
                    Nucleode Srl is a newborn healthcare startup based in Italy.
                    We develop HIPAA and GDPR compliant solutions dedicated to
                    healthcare companies and organizations.
                  </p>
                </Col>
              </Row>
            </Card.Body>
            <hr />
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <img
                    src="src/assets/1631334944581.jpeg"
                    alt=""
                    className=" img-fluid"
                  />
                </Col>
                <Col xs={10}>
                  <h6>Founder & IT Consultant</h6>
                  <p>TecnoStart</p>
                  <small>
                    gen 2015 - Presente • 10 anni 9 mesi <br />{" "}
                    Gorizia,Friuli-Venezia-Giulia, Italia
                  </small>
                  <p>
                    TecnoStart nasce per offrire consulenze e servizi
                    informatici a privati, aziende, enti professionali e scuole,
                    oltre che formazione a tutti i livelli per il corretto
                    utilizzo degli stessi.
                  </p>

                  <figure>
                    {" "}
                    <img
                      src="src/assets/1597918288566.jpeg"
                      alt=""
                      className=" img-fluid"
                    />
                  </figure>
                  <h6>TecnoStart Logo</h6>
                </Col>
              </Row>
            </Card.Body>
            <hr />
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <img
                    src="src/assets/tecnest_srl_logo.jpeg"
                    alt=""
                    className=" img-fluid"
                  />
                </Col>
                <Col xs={10}>
                  <h6>Fronteend developer</h6>
                  <p>
                    Tecnes Srl - Supply Chain: Cultura e Soluzioni • Autonomo
                  </p>
                  <small>feb 2020- 2020 • 9 mesi</small>
                </Col>
              </Row>
            </Card.Body>
            <hr />
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <img
                    src="src/assets/1631325045374.jpeg"
                    alt=""
                    className=" img-fluid"
                  />
                </Col>
                <Col xs={10}>
                  <h6>Frontend developer</h6>
                  <p>MV Labs • Freelance</p>
                  <small>feb 2019 - mag 2020 • 1 anno</small>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};
export default MyEsperienza;
