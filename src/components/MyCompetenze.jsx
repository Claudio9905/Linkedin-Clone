import { Button, Card } from "react-bootstrap";
import {
  ArrowRight,
  BarChartLineFill,
  PersonCheckFill,
  PersonCircle,
} from "react-bootstrap-icons";

const MyCompetenze = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className=" mb-0">JavaScript</Card.Title>

          <Card.Text className=" d-flex align-items-center">
            <PersonCircle className=" me-2" />
            <p className=" m-0">
              Foto del profilo di Maksim Sinik Competenze confermate da Maksim
              Sinik, che ha una grande competenza in questo ambito
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title className=" mb-0">JavaScript</Card.Title>

          <Card.Text className=" d-flex align-items-center">
            <BarChartLineFill className=" me-2" />
            <p className=" m-0">
              Confermata da 3 colleghi presso Nucleode S.R.L
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title className=" mb-0">JavaScript</Card.Title>

          <Card.Text className=" d-flex align-items-center">
            <PersonCheckFill className=" me-2" />
            <p className=" m-0">20 conferme</p>
          </Card.Text>
        </Card.Body>
        <hr />
        <Card.Body>
          <Card.Title className=" mb-0">React.js</Card.Title>

          <Card.Text className=" d-flex align-items-center">
            <PersonCheckFill className=" me-2" />
            <p className=" m-0">10 conferme</p>
          </Card.Text>
        </Card.Body>
        <Button className=" bg-white text-black border-dark-subtle border-bottom-0 border-start-0  border-end-0 btnHover">
          Mostra tutte le competenze <ArrowRight />
        </Button>
      </Card>
    </>
  );
};
export default MyCompetenze;
