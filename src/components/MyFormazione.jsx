import { Card } from "react-bootstrap";

const MyFormazione = () => {
  return (
    <>
      <Card className=" my-4">
        <Card.Body>
          <Card.Title className=" mb-0">Formazione</Card.Title>

          <Card.Text className=" d-flex">
            <img src="https://www.placebear.com/100/100" alt="" />
            <div className=" d-flex flex-column ms-2">
              <h6>Universita degli Studi di Udine</h6>
              <p>
                Laurea Triennale in Scienze e Tecnologie Multimediali,
                Dipartimento di Scienze matematiche, informatiche e multimediali
              </p>
              <small>2010-2013</small>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyFormazione;
