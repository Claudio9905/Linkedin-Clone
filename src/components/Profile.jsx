import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyInformazione from "./MyInformazioni";
import MyAttivita from "./MyAttivita";
import MyEsperienza from "./MyEsperienza";
import MyFormazione from "./MyFormazione";
import MyLicenze from "./MyLicenze";
import MyVolontariato from "./MyVolontariato";
import MyCompetenze from "./MyCompetenze";
import MyReferenze from "./MyReferenze";
import MyPubblicazioni from "./MyPubblicazioni";
import MyLingue from "./MyLingue";
import MyInteressi from "./MyInteressi";

const Profile = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={9}>
            {" "}
            <MyInformazione />
            <MyAttivita />
            <MyEsperienza />
            <MyFormazione />
            <MyLicenze />
            <MyVolontariato />
            <MyCompetenze />
            <MyReferenze />
            <MyPubblicazioni />
            <MyLingue />
            <MyInteressi />
          </Col>
          <Col lg={3}>
            <h1>prova</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
