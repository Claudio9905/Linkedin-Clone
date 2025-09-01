import { Button, Card, Tab, Tabs } from "react-bootstrap";
import { ArrowRight, Plus } from "react-bootstrap-icons";

const MyInteressi = () => {
  return (
    <>
      <Card className=" my-4">
        <Card.Body>
          <Card.Title className=" fs-4"> Interessi</Card.Title>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 "
          >
            <Tab eventKey="aziende" title="Aziende">
              <div className=" d-flex justify-content-start">
                <div className=" d-flex me-5">
                  <img
                    src="src/assets/tesla_motors_logo.jpeg"
                    alt=""
                    className="imgInteressi me-3"
                  />
                  <div className=" d-flex flex-column">
                    <h5>Tesla</h5>
                    <small>12.263.460 follower</small>
                    <Button className=" rounded-5  bg-transparent text-black fw-semibold fs-4 border-black btnInteressi mt-5">
                      {" "}
                      <Plus className=" fs-3 "></Plus> Segui
                    </Button>
                  </div>
                </div>
                <div className=" d-flex">
                  <img
                    src="src/assets/spacex_logo.jpeg"
                    alt=""
                    className="imgInteressi me-3"
                  />
                  <div className="d-flex flex-column">
                    <h5>SpaceX</h5>
                    <small>3.435.252 follower</small>
                    <Button className=" rounded-5 bg-transparent text-black fw-semibold fs-4 border-black btnInteressi mt-5">
                      {" "}
                      <Plus className=" fs-3 "></Plus> Segui
                    </Button>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="gruppi" title="Gruppi">
              <div className=" d-flex me-5">
                <img
                  src="src/assets/1630999696851.jpeg"
                  alt=""
                  className="imgInteressi me-3"
                />
                <div className=" d-flex flex-column">
                  <h5>JavaScript</h5>
                  <small>1.495.203 follower</small>
                  <Button className=" rounded-5  bg-transparent text-black fw-semibold fs-4 border-black btnInteressi mt-5">
                    Iscriviti
                  </Button>
                </div>
              </div>
            </Tab>
            <Tab eventKey="scuole" title="Scuole e università">
              <div className=" d-flex justify-content-start">
                <div className=" d-flex me-5">
                  <img
                    src="src/assets/epicodeschool_logo.jpeg"
                    alt=""
                    className=" me-3 imgInteressi"
                  />
                  <div className=" d-flex flex-column">
                    <h5>EPICODE Institute of Technology </h5>
                    <small>19.964 follower</small>
                    <Button className=" rounded-5  bg-transparent text-black fw-semibold fs-4 border-black btnInteressi mt-5">
                      {" "}
                      <Plus className=" fs-3 "></Plus> Segui
                    </Button>
                  </div>
                </div>
                <div className=" d-flex">
                  <img
                    src="src/assets/universit_degli_studi_di_udine_logo.jpeg"
                    alt=""
                    className="imgInteressi me-3"
                  />
                  <div className=" d-flex flex-column">
                    <h5>Università degli Studi di Udine</h5>
                    <small>57.274 follower</small>
                    <Button className=" rounded-5 bg-transparent text-black fw-semibold fs-4 border-black btnInteressi mt-5">
                      {" "}
                      <Plus className=" fs-3 "></Plus> Segui
                    </Button>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Card.Body>
        <Button className="bg-white text-secondary border-dark-subtle border-bottom-0 border-start-0 fs-4 fw-semibold border-end-0 btnHover">
          Mostra tutte le aziende <ArrowRight />
        </Button>
      </Card>
    </>
  );
};
export default MyInteressi;
