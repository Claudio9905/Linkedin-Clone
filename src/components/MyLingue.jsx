import { Card } from "react-bootstrap";

const MyLingue = () => {
  return (
    <>
      <Card className=" my-4">
        <Card.Body>
          <Card.Title className=" fs-4">Licenze e certificazioni</Card.Title>

          <div className=" d-flex flex-column">
            <h6>Inglese</h6>
            <p>Conoscenza Professionale</p>
          </div>
          <hr />
          <div className=" d-flex flex-column">
            <h6>Italiano</h6>
            <p>Conoscenza madrelingue e bilingue</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyLingue;
