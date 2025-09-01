import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainProfile from "./MainProfile";

const Profile = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={7}>
            <MainProfile />
          </Col>
          <Col xs={12} md={5}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
