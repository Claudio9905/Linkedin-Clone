import { Button, Card, Col, Container, Row } from "react-bootstrap";
import EditProfile from "./EditProfile";
import Modale from "./Modale";
import ModaleEsperienza from "./ModaleEsperienza";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteExperiencesAction,
  getExperiencesAction,
} from "../redux/actions";
import { XLg } from "react-bootstrap-icons";

const MyEsperienza = () => {
  const Profile = useSelector((state) => {
    return state.mainProfile.me_Profile;
  });

  const dispatch1 = useDispatch();
  const esperienze = useSelector((state) => {
    return state.listExperience.experience;
  });

  useEffect(() => {
    if (Profile && Profile._id) {
      dispatch1(getExperiencesAction(Profile._id));
    }
  }, [Profile]);

  const dispatch4 = useDispatch();

  if (!Profile || !Profile._id) {
    return <p>Caricamento profilo...</p>;
  }
  return (
    <>
      <Container>
        <Row>
          <Card className="animation-start all-card my-4">
            <Card.Body>
              <Card.Title className=" fs-4 mb-4">Esperienza</Card.Title>
              <EditProfile
                style={{ bottom: 28, right: 17 }}
                ModaleComponent={ModaleEsperienza}
              />
              {esperienze &&
                esperienze?.map((exp, i) => {
                  return (
                    <Row key={i} className=" mt-5">
                      <Col xs={2}>
                        {/* <div className=" d-flex"> */}
                        <img src={exp?.image} alt="" className=" img-fluid" />
                        {/* <div className=" d-flex flex-column ms-2"> */}
                      </Col>
                      <Col xs={9}>
                        <h6>{exp?.role}</h6>
                        <p>{exp?.company}</p>
                        <p>{exp?.description}</p>
                        <small>
                          dal: {exp?.startDate.slice(0, 10)} al:{" "}
                          {exp?.endDate.slice(0, 10)} <br /> {exp?.area}
                        </small>
                      </Col>
                      <Col xs={1}>
                        <XLg
                          className=" btnCancellaExp"
                          onClick={() => {
                            alert("Esperienza Eliminata");
                            dispatch4(
                              deleteExperiencesAction(Profile._id, exp._id)
                            );
                          }}
                        />
                      </Col>
                      <hr className=" mt-4" />
                    </Row>
                  );
                })}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};
export default MyEsperienza;
