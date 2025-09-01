// NewsSection.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Image, Modal } from "react-bootstrap";
import image1 from "../assets/img/utenti-fake/grandmaster.jpeg";
import image2 from "../assets/img/utenti-fake/giuseppe.jpeg";
import image3 from "../assets/img/utenti-fake/orsetto.jpeg";
import image4 from "../assets/img/utenti-fake/zioaldo.jpeg";
import image5 from "../assets/img/utenti-fake/francoricciardi.jpeg";
import image6 from "../assets/img/utenti-fake/amoon.jpeg";

const NewsSection = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const profiles = [
    {
      id: 1,
      name: "Tutter",
      surname: "Master",
      job: "Developer",
      image: image1,
    },
    {
      id: 2,
      name: "Ignazziello",
      surname: "Esposito",
      job: "Designer",
      image: image2,
    },
    { id: 3, name: "Meg", surname: "Atron", job: "Developer", image: image3 },
    {
      id: 4,
      name: "Pippo",
      surname: "Unsacco",
      job: "Developer",
      image: image4,
    },
    {
      id: 5,
      name: "Franco",
      surname: "Ricciardi",
      job: "Developer",
      image: image5,
    },
    {
      id: 6,
      name: "Anna",
      surname: "Tatangelo",
      job: "Developer",
      image: image6,
    },
  ];

  const handleShowModal1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  const handleShowModal2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const handleShowModal3 = () => {
    setShowModal3(true);
  };

  const handleCloseModal3 = () => {
    setShowModal3(false);
  };

  return (
    <>
      <Card
        className="mb-3"
        style={{
          borderRadius: "10px",
          margin: "20px",
          backgroundColor: "",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Header className="fw-semibold">Altri profili per te</Card.Header>
        <Card.Body>
          {profiles.slice(0, 5).map((profile) => (
            <div
              key={profile.id}
              className="d-flex align-items-center mb-3 border-bottom pb-3"
            >
              <Image
                src={profile.image}
                roundedCircle
                width={50}
                height={50}
                className="me-3"
              />
              <div>
                <h5 className="mb-1">
                  {profile.name} {profile.surname}
                </h5>
                <p className="mb-2">{profile.job}</p>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill fw-semibold"
                >
                  + Segui
                </Button>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="ms-2 rounded-pill fw-semibold"
                >
                  Messaggio
                </Button>
              </div>
            </div>
          ))}
          {profiles.length > 5 && (
            <div className="text-center">
              <Button
                variant="link"
                className="fw-semibold p-0"
                size="lg"
                style={{ textDecoration: "none", color: "GrayText" }}
                onClick={handleShowModal1}
              >
                Mostra tutto
              </Button>
            </div>
          )}
        </Card.Body>
        <Modal show={showModal1} onHide={handleCloseModal1} centered>
          <Modal.Header closeButton>
            <Modal.Title>Tutti i profili</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="d-flex align-items-center mb-3 border-bottom pb-3"
              >
                <Image
                  src={profile.image}
                  roundedCircle
                  width={50}
                  height={50}
                  className="me-3"
                />
                <div>
                  <h5 className="mb-1">
                    {profile.name} {profile.surname}
                  </h5>
                  <p className="mb-2">{profile.job}</p>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-pill fw-semibold"
                  >
                    + Segui
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="ms-2 rounded-pill fw-semibold"
                  >
                    Messaggio
                  </Button>
                </div>
              </div>
            ))}
          </Modal.Body>
        </Modal>
      </Card>

      <Card
        className="mb-3"
        style={{
          borderRadius: "10px",
          margin: "20px",
          backgroundColor: "",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Header className="fw-semibold">
          Persone che potresti conoscere
        </Card.Header>
        <Card.Body>
          {profiles.slice(0, 5).map((profile) => (
            <div
              key={profile.id}
              className="d-flex align-items-center mb-3 border-bottom pb-3"
            >
              <Image
                src={profile.image}
                roundedCircle
                width={50}
                height={50}
                className="me-3"
              />
              <div>
                <h5 className="mb-1">
                  {profile.name} {profile.surname}
                </h5>
                <p className="mb-2">{profile.job}</p>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill fw-semibold"
                >
                  + Segui
                </Button>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="ms-2 rounded-pill fw-semibold"
                >
                  Messaggio
                </Button>
              </div>
            </div>
          ))}
          {profiles.length > 5 && (
            <div className="text-center">
              <Button
                variant="link"
                className="fw-semibold p-0"
                size="lg"
                style={{ textDecoration: "none", color: "GrayText" }}
                onClick={handleShowModal2}
              >
                Mostra tutto
              </Button>
            </div>
          )}
        </Card.Body>
        <Modal show={showModal2} onHide={handleCloseModal2} centered>
          <Modal.Header closeButton>
            <Modal.Title>Tutti i profili</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="d-flex align-items-center mb-3 border-bottom pb-3"
              >
                <Image
                  src={profile.image}
                  roundedCircle
                  width={50}
                  height={50}
                  className="me-3"
                />
                <div>
                  <h5 className="mb-1">
                    {profile.name} {profile.surname}
                  </h5>
                  <p className="mb-2">{profile.job}</p>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-pill fw-semibold"
                  >
                    + Segui
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="ms-2 rounded-pill fw-semibold"
                  >
                    Messaggio
                  </Button>
                </div>
              </div>
            ))}
          </Modal.Body>
        </Modal>
      </Card>

      <Card
        className="mb-3"
        style={{
          borderRadius: "10px",
          margin: "20px",
          backgroundColor: "",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Header className="fw-semibold">Potrebbe interessarti</Card.Header>
        <Card.Body>
          {profiles.slice(0, 5).map((profile) => (
            <div
              key={profile.id}
              className="d-flex align-items-center mb-3 border-bottom pb-3"
            >
              <Image
                src={profile.image}
                roundedCircle
                width={50}
                height={50}
                className="me-3"
              />
              <div>
                <h5 className="mb-1">
                  {profile.name} {profile.surname}
                </h5>
                <p className="mb-2">{profile.job}</p>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill fw-semibold"
                >
                  + Segui
                </Button>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="ms-2 rounded-pill fw-semibold"
                >
                  Messaggio
                </Button>
              </div>
            </div>
          ))}
          {profiles.length > 5 && (
            <div className="text-center">
              <Button
                variant="link"
                className="fw-semibold p-0"
                size="lg"
                style={{ textDecoration: "none", color: "GrayText" }}
                onClick={handleShowModal3}
              >
                Mostra tutto
              </Button>
            </div>
          )}
        </Card.Body>
        <Modal show={showModal3} onHide={handleCloseModal3} centered>
          <Modal.Header closeButton>
            <Modal.Title>Tutti i profili</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="d-flex align-items-center mb-3 border-bottom pb-3"
              >
                <Image
                  src={profile.image}
                  roundedCircle
                  width={50}
                  height={50}
                  className="me-3"
                />
                <div>
                  <h5 className="mb-1">
                    {profile.name} {profile.surname}
                  </h5>
                  <p className="mb-2">{profile.job}</p>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-pill fw-semibold"
                  >
                    + Segui
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="ms-2 rounded-pill fw-semibold"
                  >
                    Messaggio
                  </Button>
                </div>
              </div>
            ))}
          </Modal.Body>
        </Modal>
      </Card>
    </>
  );
};

export default NewsSection;
