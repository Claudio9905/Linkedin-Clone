import { Card } from "react-bootstrap";

const MyFormazione = () => {
  return (
    <>
      <Card className=" my-4 animation-start all-card">
        <Card.Body>
          <Card.Title className=" fs-4 mb-0">Formazione</Card.Title>

          <div className=" d-flex">
            <img
              src="src/assets/universit_degli_studi_di_udine_logo.jpeg"
              alt=""
            />
            <div className=" d-flex flex-column ms-2">
              <h6>Universita degli Studi di Udine</h6>
              <p>
                Laurea Triennale in Scienze e Tecnologie Multimediali,
                Dipartimento di Scienze matematiche, informatiche e multimediali
              </p>
              <small>2010-2013</small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyFormazione;
