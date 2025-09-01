import { Button, Card, Tab, Tabs } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const MyReferenze = () => {
  return (
    <>
      <Card className=" my-4">
        <Card.Body>
          <Card.Title className=" fs-4"> Referenze</Card.Title>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Ricevute">
              Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Scritte">
              Tab content for Profile
            </Tab>
          </Tabs>
        </Card.Body>
        <Button className="bg-white text-secondary border-dark-subtle border-bottom-0 border-start-0 fs-4 fw-semibold border-end-0 btnHover">
          Mostra tutte le referenze <ArrowRight />
        </Button>
      </Card>
    </>
  );
};
export default MyReferenze;
