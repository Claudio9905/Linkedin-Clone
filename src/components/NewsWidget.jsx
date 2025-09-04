import { useState } from "react";
import { Card } from "react-bootstrap";
import { CaretDown, CaretUp, InfoSquareFill } from "react-bootstrap-icons";
import { News } from "../constants";

const NewsWidget = () => {
  const [showArticle, setShowArticle] = useState(false);

  return (
    <Card className="w-100 px-3 pt-2">
      <div className="d-flex align-items-center justify-content-between">
        <h4>LinkedIn Notizie</h4>
        <InfoSquareFill className="text-black" />
      </div>
      <div>
        <h5 className="text-secondary">Storie Principali</h5>
      </div>
      {!showArticle &&
        News.slice(0, 5).map((news) => (
          <div key={news.label} className="mb-3">
            <p className="fw-bold text-black mb-0">{news.label}</p>
            <span>{news.date}</span>
          </div>
        ))}
      {showArticle &&
        News.map((news) => (
          <div key={news.label} className="mb-3">
            <p className="fw-bold text-black mb-0">{news.label}</p>
            <span>{news.date}</span>
          </div>
        ))}
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
              Creato da chi ha reso famoso "Sudoku" e dal 3 volte campione di
              Sudoku
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
  );
};

export default NewsWidget;
