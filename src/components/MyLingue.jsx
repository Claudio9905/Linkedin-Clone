import { Card } from "react-bootstrap";

const MyLingue = () => {
  return (
    <>
      <Card className=" my-4">
        <Card.Body>
          <Card.Title>Licenze e certificazioni</Card.Title>

          <Card.Text className=" d-flex flex-column">
            <h6>Inglese</h6>
            <p>Conoscenza Professionale</p>
          </Card.Text>
          <hr />
          <Card.Text className=" d-flex flex-column">
            <h6>Italiano</h6>
            <p>Conoscenza madrelingue e bilingue</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyLingue;
