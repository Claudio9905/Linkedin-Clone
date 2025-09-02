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
      <Card className=" my-4 animation-start all-card">
        <Card.Body>
          <Card.Title className=" fs-4 mb-4">JavaScript</Card.Title>

          <div className=" d-flex align-items-center">
            <PersonCircle className=" me-2" />
            <p className=" m-0">
              Foto del profilo di Maksim Sinik Competenze confermate da Maksim
              Sinik, che ha una grande competenza in questo ambito
            </p>
          </div>
        </Card.Body>
        <Card.Body>
          <Card.Title className=" mb-0">JavaScript</Card.Title>

          <div className=" d-flex align-items-center">
            <BarChartLineFill className=" me-2" />
            <p className=" m-0">
              Confermata da 3 colleghi presso Nucleode S.R.L
            </p>
          </div>
        </Card.Body>
        <Card.Body>
          <Card.Title className=" mb-0">JavaScript</Card.Title>

          <div className=" d-flex align-items-center">
            <PersonCheckFill className=" me-2" />
            <p className=" m-0">20 conferme</p>
          </div>
        </Card.Body>
        <hr />
        <Card.Body>
          <Card.Title className=" mb-0">React.js</Card.Title>

          <div className=" d-flex align-items-center">
            <PersonCheckFill className=" me-2" />
            <p className=" m-0">10 conferme</p>
          </div>
        </Card.Body>
        <Button className="bg-white text-secondary border-dark-subtle border-bottom-0 border-start-0 fs-4 fw-semibold border-end-0 btnHover">
          Mostra tutte le competenze <ArrowRight />
        </Button>
      </Card>
    </>
  );
};
export default MyCompetenze;
