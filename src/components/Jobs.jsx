import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";
import Spinner from "react-bootstrap/Spinner";

const Jobs = () => {
  const dispatch = useDispatch();
  // const dispatch2 = useDispatch();
  // const dispatch3 = useDispatch();
  // const dispatch4 = useDispatch();

  useEffect(() => {
    console.log("jobs montato");
    dispatch(getJobsAction());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch2(getSingleJobAction("engineer"));
  // }, []);

  // useEffect(() => {
  //   dispatch3(getJobCompanyAction("CYOS Solution"));
  // }, []);

  // useEffect(() => {
  //   dispatch4(getJobCategoryAction("All others"));
  // });

  const getJobs = useSelector((state) => {
    return state.jobs.jobs;
  });

  console.log("getJobs", getJobs);

  const isloading = useSelector((state) => {
    return state.jobs.isLoading;
  });

  return (
    <>
      <Container>
        <Row className="flex-column g-4">
          {isloading ? (
            <Spinner
              className=" text-center"
              animation="grow"
              variant="primary"
            />
          ) : (
            getJobs.slice(0, 50).map((job, i) => {
              return (
                <Col
                  key={i}
                  xs={12}
                  md={12}
                  lg={12}
                  className=" bg-secondary border border-1 border-light rounded-4 p-3 col-job animation-start"
                >
                  <Card className="edit-job">
                    <Card.Body
                      className="d-flex flex-row justify-content-between
                  "
                    >
                      <div>
                        <Card.Title className="fs-3">{job.title}</Card.Title>
                        <Card.Text>
                          <span className=" text-decoration-underline">
                            Company Name
                          </span>{" "}
                          : {job.company_name}
                        </Card.Text>
                        <Card.Text>
                          <span className=" text-decoration-underline">
                            Category
                          </span>{" "}
                          : {job.category}
                        </Card.Text>
                        <Card.Text>
                          <span className=" text-decoration-underline">
                            Job Type
                          </span>{" "}
                          : {job.job_type}
                        </Card.Text>
                        <a href={job.url} className=" text-decoration-none">
                          {" "}
                          {job.url}
                        </a>
                        <Card.Text>
                          <span className=" text-decoration-underline">
                            Candidate required location
                          </span>
                          : {job.candidate_required_location}
                        </Card.Text>
                      </div>
                      <div>
                        <Card.Text>
                          {job.publication_date.slice(2, 10)}
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
};

export default Jobs;
