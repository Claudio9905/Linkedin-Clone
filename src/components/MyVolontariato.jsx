import { Card } from "react-bootstrap";

const MyVolontariato = () => {
  return (
    <>
      {" "}
      <Card className=" my-4 animation-start all-card">
        <Card.Body>
          <Card.Title className=" fs-4 mb-0">Volotariato</Card.Title>

          <div className=" d-flex">
            <img src="src/assets/hospitalrun_logo.jpeg" alt="" />
            <div className=" d-flex flex-column ms-2">
              <h6>Core Maintainer</h6>
              <p>HospitalRun</p>
              <small>ago 2019 - dic 2019 · 5 mesi</small>
              <small>Scienza e tecnologia</small>
            </div>
          </div>
        </Card.Body>
        <hr />
        <Card.Body>
          <div className=" d-flex">
            <img src="https://www.placebear.com/100/100" alt="" />
            <div className=" d-flex flex-column ms-2">
              <h6>Donatore di sangue</h6>
              <p>Advsg Fidas Gorizia</p>
              <small>set 2013 - presente · 12 anni 1 mese</small>
              <small>Salute</small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyVolontariato;
