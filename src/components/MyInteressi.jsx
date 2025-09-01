import { Button, Card, Tab, Tabs } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const MyInteressi = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title> Interessi</Card.Title>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="aziende" title="Aziende">
              Tab content for Home
            </Tab>
            <Tab eventKey="gruppi" title="Gruppi">
              Tab content for Profile
            </Tab>
            <Tab eventKey="scuole" title="Scuole e università">
              Tab content for Profile
            </Tab>
          </Tabs>
        </Card.Body>
        <Button className=" bg-white text-black border-dark-subtle border-bottom-0 border-start-0 border-end-0 btnHover">
          Mostra tutte le aziende <ArrowRight />
        </Button>
      </Card>
    </>
  );
};
export default MyInteressi;
