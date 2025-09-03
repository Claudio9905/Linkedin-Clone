import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";
const Jobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction());
  }, []);

  const getJobs = useSelector((state) => {
    return state.jobs.jobs;
  });

  console.log(getJobs);

  return (
    <>
      {/* 
      - Creare una lista di tutti gli annunci di lavoro ottenuti tramtie la chiamata API all'indirizzo "https://strive-benchmark.herokuapp.com/api/jobs" ;
      - Usare un reducer che contenga il contenuto della chiamata tramite l'action
      */}

      <Container>
        <Row className="flex-column g-2">
          <Col
            xs={12}
            md={12}
            lg={12}
            className=" bg-secondary border border-1 border-light rounded-4 p-3 shadow-lg"
          >
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Jobs;
