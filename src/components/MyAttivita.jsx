import { Button, Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const MyAttivita = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className=" mb-0">Attività</Card.Title>
          <small>663 follower</small>
          <Card.Text>
            <span className=" fw-semibold">
              Stefano non ha ancora pubblicato nulla
            </span>
            I post recenti che Stefano condivide appariranno qui.
          </Card.Text>
        </Card.Body>
        <Button className=" bg-white text-black border-dark-subtle border-bottom-0 border-start-0  border-end-0 btnHover">
          Mostra tutte le attività <ArrowRight />
        </Button>
      </Card>
    </>
  );
};
export default MyAttivita;
