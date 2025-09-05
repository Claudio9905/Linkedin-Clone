import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getJobCategoryAction,
  getJobCompanyAction,
  getJobsAction,
  getSingleJobAction,
} from "../redux/actions";
import Spinner from "react-bootstrap/Spinner";

const Jobs = () => {
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log("jobs montato");
    dispatch(getJobsAction());
  }, [dispatch]);

  const searchSingleJob = (e) => {
    e.preventDefault();

    dispatch2(getSingleJobAction(title));
  };

  const searchJobCompany = (e) => {
    e.preventDefault();
    dispatch2(getJobCompanyAction(company));
  };

  const searchJobCategory = (e) => {
    e.preventDefault();
    dispatch2(getJobCategoryAction(category));
  };

  const singleJob = useSelector((state) => {
    return state.singleJob.singleJob;
  });

  const foundJob = useSelector((state) => {
    return state.singleJob.found;
  });

  const foundJobCategory = useSelector((state) => {
    return state.categoryJob.foundJobCategory;
  });

  const foundJobCompany = useSelector((state) => {
    return state.companyJob.foundJobCompany;
  });

  const companyJob = useSelector((state) => {
    return state.companyJob.jobCompany;
  });

  const categoryJob = useSelector((state) => {
    return state.categoryJob.jobCategory;
  });

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
        <Row>
          <Col
            xs={12}
            md={12}
            lg={12}
            className=" border border-1 border-light rounded-4 p-3 col-job animation-start"
          >
            <div className="d-flex justify-content-between gap-4">
              <Form onSubmit={searchSingleJob}>
                <FormGroup>
                  <FormControl
                    type="search"
                    placeholder="Cerca per Annuncio"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  ></FormControl>
                </FormGroup>
              </Form>
              <Form onSubmit={searchJobCompany}>
                <FormGroup>
                  <FormControl
                    type="search"
                    placeholder="Cerca per Compagnia"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  ></FormControl>
                </FormGroup>
              </Form>
              <Form onSubmit={searchJobCategory}>
                <FormGroup>
                  <FormControl
                    type="search"
                    placeholder="Cerca per Categoria"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  ></FormControl>
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>

        {foundJob || foundJobCompany || foundJobCategory ? (
          <Row className="flex-column g-4" id="row-job-search">
            {/* {!title && (
              <Col xs={12} className="d-flex justify-content-center">
                <Spinner animation="grow" variant="primary"></Spinner>
              </Col>
            )} */}
            {title &&
              foundJob &&
              singleJob.slice(0, 50).map((job, i) => {
                return (
                  <Col
                    key={i}
                    xs={12}
                    md={12}
                    lg={12}
                    className=" border border-1 border-light rounded-4 p-3 col-job animation-start"
                  >
                    <Card className="edit-job">
                      <Card.Body
                        className="d-flex flex-row justify-content-between
                  "
                      >
                        <div className=" w-50">
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
                          <Card.Text className="date-job">
                            {job.publication_date.slice(2, 10)}
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}

            {company &&
              foundJobCompany &&
              companyJob.map((job, i) => {
                return (
                  <Col
                    key={i}
                    xs={12}
                    md={12}
                    lg={12}
                    className=" border border-1 border-light rounded-4 p-3 col-job animation-start"
                  >
                    <Card className="edit-job">
                      <Card.Body
                        className="d-flex flex-row justify-content-between
                  "
                      >
                        <div className=" w-50">
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
                          <Card.Text className="date-job">
                            {job.publication_date.slice(2, 10)}
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}

            {category &&
              foundJobCategory &&
              categoryJob.slice(0, 50).map((job, i) => {
                return (
                  <Col
                    key={i}
                    xs={12}
                    md={12}
                    lg={12}
                    className=" border border-1 border-light rounded-4 p-3 col-job animation-start"
                  >
                    <Card className="edit-job">
                      <Card.Body
                        className="d-flex flex-row justify-content-between
                  "
                      >
                        <div className=" w-50">
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
                          <Card.Text className="date-job">
                            {job.publication_date.slice(2, 10)}
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        ) : (
          <Row className="flex-column g-4" id="row-job-search">
            {isloading ? (
              <Col xs={12} className="d-flex justify-content-center">
                <Spinner animation="grow" variant="primary"></Spinner>
              </Col>
            ) : (
              getJobs.slice(0, 30).map((job, i) => {
                return (
                  <Col
                    key={i}
                    xs={12}
                    md={12}
                    lg={12}
                    className=" border border-1 border-light rounded-4 p-3 col-job animation-start"
                  >
                    <Card className="edit-job">
                      <Card.Body
                        className="d-flex flex-row justify-content-between
                  "
                      >
                        <div className=" w-50">
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
                          <Card.Text className="date-job">
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
        )}
      </Container>
    </>
  );
};

export default Jobs;
