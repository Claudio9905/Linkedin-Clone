import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  BookmarkFill,
  Calendar,
  CaretDown,
  CaretUp,
  Info,
  InfoCircleFill,
  InfoSquareFill,
  Newspaper,
  PeopleFill,
  Plus,
  PlusSquareFill,
} from "react-bootstrap-icons";
import { News } from "../constants";
import { useSelector } from "react-redux";

const Home = () => {
  const [showExtra, setShowExtra] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const profile = useSelector((state) => state.mainProfile.me_Profile);

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={4} lg={3}>
          <Card className="mb-2">
            <Card.Img
              variant="Top"
              src="http://placecats.com/100/100"
              className="img-fluid overflow-hidden"
              id="img-card"
            />
            <img
              src={profile.image}
              alt="immagine di profilo"
              id="icon-profile2"
            />
            <Card.Title className="px-3 m-0">
              {profile.name} {profile.surname}
            </Card.Title>
            <span className="px-3 text-secondary">{profile.area}</span>
            <button className="mx-3 mt-3 mb-4 text-secondary text-start btn-dashed">
              <Plus className="fs-4" /> Esperienza
            </button>
          </Card>
          <div className={`d-${showExtra ? "block" : "none"} d-md-block`}>
            <Card className="flex-row py-3 mb-2">
              <div className="px-3">
                <a href="*" className="a-link text-black">
                  Collegamenti <br />
                  <span className="text-secondary">Espandi la tua rete</span>
                </a>
              </div>
              <div>
                <PeopleFill className="ms-5" />
              </div>
            </Card>
            <Card className="flex-row py-2 mb-2">
              <div className="px-3">
                <p className=" text-secondary mb-0">
                  Sblocca strumenti e informazioni premium
                </p>
                <a
                  href="*"
                  className="a-link2 text-black d-flex align-items-center"
                >
                  <PlusSquareFill className="premium-color me-1" /> Prova
                  Premium per 0 EUR
                </a>
              </div>
            </Card>
            <Card className="py-3">
              <div className="px-3 d-flex align-items-center mb-3">
                <BookmarkFill className="me-3" />
                <h6 className="m-0">Elementi salvati</h6>
              </div>
              <div className="px-3 d-flex align-items-center mb-3">
                <PeopleFill className="me-3" />
                <h6 className="m-0">Gruppi</h6>
              </div>
              <div className="px-3 d-flex align-items-center mb-3">
                <Newspaper className="me-3" />
                <h6 className="m-0">Newsletter</h6>
              </div>
              <div className="px-3 d-flex align-items-center mb-3">
                <Calendar className="me-3" />
                <h6 className="m-0">Eventi</h6>
              </div>
            </Card>
          </div>
          <div className="d-md-none text-center">
            <button
              className="mb-2 w-100 mt-2 d-flex justify-content-center align-items-center btn-user"
              onClick={() => setShowExtra(!showExtra)}
            >
              {showExtra ? (
                <>
                  Meno Dettagli <CaretUp />
                </>
              ) : (
                <>
                  Vedi Altro
                  <CaretDown />
                </>
              )}
            </button>
          </div>
        </Col>
        <Col xs={12} md={8} lg={6}>
          <Card>
            <div className="py-3 px-2 d-flex ">
              <img
                src={profile.image}
                alt="immagine di profilo"
                className="rounded-circle me-2"
                width={50}
              />
              <button className="w-100 ps-3 border border-1 border-secondary text-start rounded-pill fw-bold btn-post">
                Crea un post
              </button>
            </div>
          </Card>
        </Col>
        <Col xs={12} lg={3} className="d-flex d-md-none d-lg-flex">
          <Card className="w-100 px-3 pt-2">
            <div className="d-flex align-items-center justify-content-between">
              <h4>LinkedIn Notizie</h4>
              <InfoSquareFill className="text-black" />
            </div>
            <div>
              <h5 className="text-secondary">Storie Principali</h5>
            </div>
            {!showArticle &&
              News.slice(0, 5).map((news) => {
                return (
                  <div key={news.label} className="mb-3">
                    <p className="fw-bold text-black mb-0">{news.label}</p>
                    <span>{news.date}</span>
                  </div>
                );
              })}
            {showArticle &&
              News.map((news) => {
                return (
                  <div key={news.label} className="mb-3">
                    <p className="fw-bold text-black mb-0">{news.label}</p>
                    <span>{news.date}</span>
                  </div>
                );
              })}
            <div className="d-flex flex-start">
              <button
                className="mb-4 d-flex justify-content-center align-items-center btn-news border-0"
                onClick={() => setShowArticle(!showArticle)}
              >
                {showArticle ? (
                  <>
                    Meno Dettagli <CaretUp />
                  </>
                ) : (
                  <>
                    Mostra Altro
                    <CaretDown />
                  </>
                )}
              </button>
            </div>
            <div className="pointer">
              <h5 className="text-secondary">I giochi di oggi</h5>
              <div className="d-flex">
                <div className="me-1">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3269/3269927.png"
                    alt="SUDOKU"
                    width={60}
                  />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Mini Sudoku</h6>
                  <p>
                    Creato da chi ha reso famoso "Sudoku" e dal 3 volte campione
                    di Sudoku
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-1">
                  <img
                    src="https://play-lh.googleusercontent.com/hQ-MAA4hmgrEHukiaVWFuyVClnC-iOD1apfbu33sNdcjA8zW2yWrRqOADp4Mba_A6bc"
                    alt="ZIP"
                    width={60}
                  />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Zip - un rompicapo veloce</h6>
                  <p>Risolvilo in 60 secondi o meno</p>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
