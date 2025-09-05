import { useState } from "react";
import { Card } from "react-bootstrap";
import {
  BookmarkFill,
  Calendar,
  CaretDown,
  CaretUp,
  Newspaper,
  PeopleFill,
  Plus,
  PlusSquareFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ModaleEsperienza from "./ModaleEsperienza";

const SidebarProfile = () => {
  const [showExtra, setShowExtra] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const profile = useSelector((state) => state.mainProfile.me_Profile);

  return (
    <>
      <Card className="mb-2">
        {/* <Link to={"/profile"}> */}
        <Card.Img
          variant="Top"
          src="https://i.ytimg.com/vi/_IevnsYI-EE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVShJMA8=&rs=AOn4CLCnEFnOSoxYr-Gm29bvRtT9g78erA"
          className="img-fluid overflow-hidden"
          id="img-card"
        />
        {/* </Link> */}
        <Link to={"/profile"}>
          <img
            src={profile.image}
            alt="immagine di profilo"
            id="icon-profile2"
          />
        </Link>
        <Link to={"/profile"} className=" text-decoration-none">
          <Card.Title className="px-3 m-0">
            {profile.name} {profile.surname}
          </Card.Title>
        </Link>
        <span className="px-3 text-secondary">{profile.area}</span>
        <button
          className="mx-3 mt-3 mb-4 text-secondary text-start btn-dashed"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <Plus className="fs-4" /> Esperienza
        </button>
      </Card>

      {/* Extra (visibile su md in su) */}
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
              <PlusSquareFill className="premium-color me-1" /> Prova Premium
              per 0 EUR
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

      {/* Pulsante mobile */}
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
              Vedi Altro <CaretDown />
            </>
          )}
        </button>
      </div>

      <ModaleEsperienza show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default SidebarProfile;
