import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import Modale from "./Modale";
import { CameraFill } from "react-bootstrap-icons";
import "./alfoCss/Camera.css";
import ModaleImgProfilo from "./ModaleImgProfilo";
import { useState } from "react";

const MainProfile = () => {
  const Profile = useSelector((state) => {
    return state.mainProfile.me_Profile;
  });

  console.log(Profile);

  const [showModale, setShowModale] = useState(false);

  return (
    <>
      <Card className="card-main-profile animation-start">
        <div className="box-profile-img position-relative">
          <Card.Img
            variant="top"
            src="/download.png"
            className="img-fluid object-fit-contain"
            id="banner-img"
          />
          <img
            src="http://placecats.com/50/50"
            alt="immagine di profilo"
            id="icon-profile"
            style={{ cursor: "pointer " }}
            onClick={() => {
              setShowModale(true);
            }}
          />
          <ModaleImgProfilo
            show={showModale}
            onHide={() => setShowModale(false)}
            src={Profile.image}
          />

          <CameraFill
            className="hover position-absolute"
            style={{ top: 20, right: 40 }}
          />
        </div>
        <EditProfile
          style={{ bottom: 20, right: 40 }}
          ModaleComponent={Modale}
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex gap-2 mb-0 fs-3">
            {Profile.name} {Profile.surname}{" "}
            <span className="fs-6 text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-volume-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
              </svg>
              He/Him
            </span>
          </Card.Title>

          <Card.Text className="fs-6">
            Founder & Software Developer @ Nucleode SRL - Educator @ EPICODE -
            IT Consultant
          </Card.Text>
          <Card.Text className="indirizzo">
            Gorizia, Friuli-Venezia Giulia, Italia -{" "}
            <span className="link-info">
              <a href="#" className=" text-decoration-none">
                Informazioni di contatto
              </a>
            </span>
          </Card.Text>
          <Card.Text className=" text-secondary">
            <span className="number-link">Più di 500</span> collegamenti
          </Card.Text>
          <div className="d-flex gap-3">
            <Button id="btn-message">Messaggio</Button>
            <Button
              id="btn-follower"
              className="d-flex align-items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-plus-fill me-1"
                viewBox="0 0 16 16"
              >
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                <path
                  fillRule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                />
              </svg>
              Collegati
            </Button>
            <Button id="btn-more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default MainProfile;
