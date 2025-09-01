import { Button, Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const MyAttivita = () => {
  return (
    <>
      <Card className=" my-4">
        <Card.Body>
          <Card.Title className=" fs-4 mb-0">Attività</Card.Title>
          <small>663 follower</small>
          <Card.Text>
            <span className=" fw-semibold">
              Stefano non ha ancora pubblicato nulla
            </span>
            I post recenti che Stefano condivide appariranno qui.
          </Card.Text>
        </Card.Body>
        <Button className=" bg-white text-secondary border-dark-subtle border-bottom-0 border-start-0 fs-4 fw-semibold border-end-0 btnHover">
          Mostra tutte le attività <ArrowRight />
        </Button>
      </Card>
    </>
  );
};
export default MyAttivita;
