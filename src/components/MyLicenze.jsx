import { Card } from "react-bootstrap";

const MyLicenze = () => {
  return (
    <>
      {" "}
      <Card className=" my-4">
        <Card.Body>
          <Card.Title className=" mb-0">Licenze e certificazioni</Card.Title>

          <Card.Text className=" d-flex">
            <img src="https://www.placebear.com/100/100" alt="" />
            <div className=" d-flex flex-column ms-2">
              <h6>
                Cambridge English Level 2 Certificate in ESOL International
                (First) - Grade A Level C1
              </h6>
              <p>Cambridge University Press & Assessment</p>
              <small>Data di rilascio: lug 2014</small>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyLicenze;
