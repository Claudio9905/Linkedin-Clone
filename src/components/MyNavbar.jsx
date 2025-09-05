import { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Navbar,
  NavDropdown,
  NavLink,
  Row,
} from "react-bootstrap";
import {
  BellFill,
  ChatDotsFill,
  Grid3x3GapFill,
  HouseDoorFill,
  PeopleFill,
  PlusSquareFill,
  Search,
  SuitcaseLgFill,
} from "react-bootstrap-icons";

import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";
const MyNavbar = () => {
  const [focused, setFocused] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const [ricerca, setRicerca] = useState("");
  const navigate = useNavigate();
  const [nascondiRicerca, setNascondiRicerca] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAction());
  }, []);
  const profiles = useSelector((state) => state.profile.profile);
  const profiliFiltrati = Array.isArray(profiles)
    ? profiles.filter((profiloSingolo) => {
        const nomeCompleto = `${profiloSingolo.name || ""} ${
          profiloSingolo.surname || ""
        }`.toLowerCase();
        return nomeCompleto.includes(ricerca.toLowerCase());
      })
    : [];
  const profile = useSelector((state) => state.mainProfile.me_Profile);
  // se clicco fuori dalla barra di ricerca scompare
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  return (
    <>
      {/* Navbar Desktop */}

      <Navbar className="d-none d-lg-flex bg-white sticky-top">
        <Container>
          <div className="d-flex align-items-center w-100">
            <Link to={"/"}>
              {" "}
              <img src="/public/linkedin.png" alt="Logo" width={40} />
            </Link>

            <div
              className={`ms-3 d-flex align-items-center rounded-pill py-1 position-relative ${
                focused
                  ? "border border-2 border-primary"
                  : "border border-1 border-secondary"
              }`}
            >
              <Search className="mx-2" />
              <input
                type="text"
                placeholder="Cerca"
                className=" border-0 rounded-pill outline-none"
                style={{
                  width: focused ? "220px" : "180px",
                  transition: "all 1s ease",
                }}
                value={ricerca}
                onFocus={() => {
                  setFocused(true), setNascondiRicerca("");
                }}
                onBlur={() => setFocused(false)}
                onChange={(e) => {
                  setRicerca(e.target.value);
                }}
              />
              <div
                className={`position-absolute z-1 posizioneRicerca ${
                  focused && ricerca
                    ? "border border-2 border-primary border-top-0"
                    : ""
                }`}
                style={{
                  width: focused ? "220px " : "180px",
                  transition: "all 1s ease",
                }}
              >
                {ricerca && (
                  <ul className={`${nascondiRicerca} p-0`}>
                    {profiliFiltrati.slice(0, 5).map((profilo) => (
                      <li
                        key={profilo._id}
                        className="p-2 border-bottom pointer"
                        onClick={() => {
                          navigate(`/profile/${profilo._id}`);
                          setNascondiRicerca("d-none");
                        }}
                      >
                        {profilo.name} {profilo.surname}{" "}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="ms-auto d-flex flex-1 align-items-center me-5">
              {" "}
              <Link
                to={"/"}
                className=" text-decoration-none d-flex flex-column justify-content-center align-items-center text-secondary recolor mx-3"
              >
                <HouseDoorFill className="icons" />
                Home
              </Link>
              <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor mx-3">
                <PeopleFill className="icons" />
                Rete
              </NavLink>
              <Link
                to="/jobs"
                className="d-flex flex-column justify-content-center align-items-center text-secondary recolor mx-3 text-decoration-none"
              >
                <SuitcaseLgFill className="icons" />
                Lavoro
              </Link>
              <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor mx-2">
                <ChatDotsFill className="icons" />
                Messagistica
              </NavLink>
              <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor mx-3">
                <BellFill className="icons" />
                Notifiche
              </NavLink>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={profile.image}
                  alt="User"
                  width={23}
                  className=" rounded-circle"
                />
                <NavDropdown className="text-muted recolor" title="Tu">
                  <NavDropdown.Item className="p-0">
                    <Container fluid className="d-flex flex-column">
                      <div className="d-flex justify-content-start align-items-center">
                        <img
                          src={profile.image}
                          alt="User"
                          width={50}
                          className=" rounded-circle"
                        />
                        <h4 className="ms-3">
                          {profile.name} {profile.surname}
                        </h4>
                      </div>
                      <div className="mt-2">
                        <Link to={"/profile"}>
                          <Button
                            variant="outline-primary"
                            className=" rounded-pill me-2"
                          >
                            Visualizza Profilo
                          </Button>
                        </Link>
                        <Button variant="primary" className=" rounded-pill">
                          Verifica
                        </Button>
                      </div>
                    </Container>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <div className="px-2">
                    <div className="d-flex flex-column">
                      <h4>Account</h4>
                      <a
                        href="#"
                        className="text-muted text-decoration-none link"
                      >
                        Impostazioni e Privacy
                      </a>
                      <a
                        href="#"
                        className="text-muted text-decoration-none link"
                      >
                        Guida
                      </a>
                      <a
                        href="#"
                        className="text-muted text-decoration-none link"
                      >
                        Lingua
                      </a>
                    </div>
                  </div>
                  <NavDropdown.Divider />
                  <div className="px-2">
                    <div className="d-flex flex-column">
                      <h4>Gestisci</h4>
                      <a
                        href="#"
                        className="text-muted text-decoration-none link"
                      >
                        Post e Attività
                      </a>
                      <a
                        href="#"
                        className="text-muted text-decoration-none link"
                      >
                        Account per la pubblicazione di lavori
                      </a>
                    </div>
                  </div>
                  <NavDropdown.Divider />
                  <div className="px-2">
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        className="text-muted text-decoration-none link"
                      >
                        Esci
                      </a>
                    </div>
                  </div>
                </NavDropdown>
              </div>
            </div>
            <div className="d-flex align-items-center recolor pointer">
              <div className="d-flex flex-column align-items-center ">
                <Grid3x3GapFill className="icons text-secondary recolor" />
                <NavDropdown
                  className="text-muted recolor"
                  title="Per le aziende"
                ></NavDropdown>
              </div>
              <a href="#" className="text-center prova">
                Prova Premium per 0 <br />
                EUR
              </a>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Navbar Tablet */}

      <Navbar className="d-none d-md-flex d-lg-none bg-white sticky-top">
        <Container fluid>
          <div className="d-flex align-items-center w-100">
            <Link to={"/"}>
              <img src="/public/linkedin.png" alt="Logo" width={40} />
            </Link>
            {/* se la barra di ricerca non è true allora viene mostrato tutta la nav */}
            {!showSearch && (
              <div className="align-items-center me-3 d-none d-md-flex flex-1 d-lg-none w-100 ">
                <Row className="d-flex align-items-center w-100">
                  <Col
                    md={7}
                    className="d-flex align-items-center justify-content-between"
                  >
                    {/* Icona lente che attiva la modalità ricerca */}
                    <Search
                      className="fs-4 text-secondary mx-3 recolor"
                      role="button"
                      onClick={() => setShowSearch(true)}
                    />

                    <Link to={"/"}>
                      <HouseDoorFill className="fs-4 text-secondary mx-3 recolor" />
                    </Link>
                    <a href="">
                      <PeopleFill className="fs-4 text-secondary mx-3 recolor" />
                    </a>
                    <a href="">
                      <SuitcaseLgFill className="fs-4 text-secondary mx-3 recolor" />
                    </a>
                    <a href="">
                      <ChatDotsFill className="fs-4 text-secondary mx-3 recolor" />
                    </a>
                    <a href="">
                      <BellFill className="fs-4 text-secondary mx-3 recolor" />
                    </a>
                    <div className="d-flex flex-column align-items-center">
                      <NavDropdown
                        align="end"
                        title={
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                            alt="User"
                            width={30}
                            className="rounded-circle"
                          />
                        }
                        className="no-caret"
                      >
                        <NavDropdown.Item className="p-0">
                          <Container fluid className="d-flex flex-column">
                            <div className="d-flex justify-content-start align-items-center">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                alt="User"
                                width={50}
                                className="rounded-circle"
                              />
                              <h4 className="ms-3">User Name</h4>
                            </div>
                            <div className="mt-2">
                              <Link to={"/profile"}>
                                <Button
                                  variant="outline-primary"
                                  className="rounded-pill me-2"
                                >
                                  Visualizza Profilo
                                </Button>
                              </Link>
                              <Button
                                variant="primary"
                                className="rounded-pill"
                              >
                                Verifica
                              </Button>
                            </div>
                          </Container>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <div className="px-2">
                          <div className="d-flex flex-column">
                            <h4>Account</h4>
                            <a
                              href="#"
                              className="text-muted text-decoration-none link"
                            >
                              Impostazioni e Privacy
                            </a>
                            <a
                              href="#"
                              className="text-muted text-decoration-none link"
                            >
                              Guida
                            </a>
                            <a
                              href="#"
                              className="text-muted text-decoration-none link"
                            >
                              Lingua
                            </a>
                          </div>
                        </div>
                        <NavDropdown.Divider />
                        <div className="px-2">
                          <div className="d-flex flex-column">
                            <h4>Gestisci</h4>
                            <a
                              href="#"
                              className="text-muted text-decoration-none link"
                            >
                              Post e Attività
                            </a>
                            <a
                              href="#"
                              className="text-muted text-decoration-none link"
                            >
                              Account per la pubblicazione di lavori
                            </a>
                          </div>
                        </div>
                        <NavDropdown.Divider />
                        <div className="px-2">
                          <div className="d-flex flex-column">
                            <a
                              href="#"
                              className="text-muted text-decoration-none link"
                            >
                              Esci
                            </a>
                          </div>
                        </div>
                      </NavDropdown>
                    </div>
                  </Col>
                  <Col md={5} className="d-flex justify-content-between">
                    <div className="d-flex w-100 align-items-center recolor pointer">
                      <div className="d-flex align-items-center w-100 justify-content-center ">
                        <NavDropdown
                          className="text-muted recolor me-4"
                          title={
                            <Grid3x3GapFill className="icons text-secondary recolor" />
                          }
                        ></NavDropdown>
                        <NavDropdown.Item
                          href="#"
                          className="text-center prova"
                        >
                          Prova Premium per 0 <br />
                          EUR
                        </NavDropdown.Item>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
            {/* se la barra di ricerca è true perché è stata cliccata la lente allora la barra di ricerca
            compare e nasconde la nav  */}
            {showSearch && (
              <div
                ref={searchRef}
                className="ms-3 d-none d-md-flex d-lg-none flex-grow-1 align-items-center rounded-pill border border-2 border-primary py-1 z-3  position-relative"
              >
                <Search className="mx-2" />
                <input
                  type="text"
                  placeholder="Cerca"
                  autoFocus
                  className="border-0 rounded-pill flex-grow-1 outline-none"
                  onChange={(e) => {
                    setRicerca(e.target.value);
                  }}
                />
                <div
                  className={`position-absolute z-1 posizioneRicerca2 w-100 ${
                    focused && ricerca
                      ? "border border-2 border-primary border-top-0"
                      : ""
                  }`}
                  style={{
                    width: focused ? "220px " : "180px",
                    transition: "all 1s ease",
                  }}
                >
                  {ricerca && (
                    <ul className={`${nascondiRicerca} p-0`}>
                      {profiliFiltrati.slice(0, 5).map((profilo) => (
                        <li
                          key={profilo._id}
                          className="p-2 border-bottom pointer"
                          onClick={() => {
                            navigate(`/profile/${profilo._id}`);
                            setNascondiRicerca("d-none");
                          }}
                        >
                          {profilo.name} {profilo.surname}{" "}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Navbar>

      {/* Navbar Mobile */}
      <Navbar className="d-flex d-md-none bg-white">
        <div className="d-flex px-2 align-items-center flex-grow-1 position-sticky">
          <div>
            <Link to={"/profile"}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="User"
                width={25}
                className="rounded-circle"
              />
            </Link>
          </div>

          <div className="ms-3 d-flex flex-grow-1 d-md-none align-items-center border border-1 border-secondary py-1 z-3 position-relative">
            <Search className="mx-2" />
            <input
              type="text"
              placeholder="Cerca"
              autoFocus
              className="border-0 rounded-pill flex-grow-1 outline-none"
              onChange={(e) => {
                setRicerca(e.target.value);
              }}
            />
            <div
              className={`position-absolute z-1 posizioneRicerca2 w-100 ${
                focused && ricerca
                  ? "border border-2 border-primary border-top-0"
                  : ""
              }`}
              style={{
                width: focused ? "220px " : "180px",
                transition: "all 1s ease",
              }}
            >
              {ricerca && (
                <ul className={`${nascondiRicerca} p-0`}>
                  {profiliFiltrati.slice(0, 5).map((profilo) => (
                    <li
                      key={profilo._id}
                      className="p-2 border-bottom pointer"
                      onClick={() => {
                        navigate(`/profile/${profilo._id}`);
                        setNascondiRicerca("d-none");
                      }}
                    >
                      {profilo.name} {profilo.surname}{" "}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="ms-3">
            <ChatDotsFill className="display-6 text-secondary" />
          </div>
        </div>
        <div className="d-flex position-fixed w-100 bottom-0 justify-content-between px-3 b-top bg-white z-3 pt-2">
          <div>
            <Link
              to={"/"}
              className="d-flex flex-column justify-content-center align-items-center text-secondary recolor text-decoration-none"
            >
              <HouseDoorFill className="icons" />
              Home
            </Link>
          </div>
          <div>
            <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor">
              <PeopleFill className="icons" />
              Rete
            </NavLink>
          </div>
          <div>
            <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor">
              <PlusSquareFill className="icons" />
              Pubblica
            </NavLink>
          </div>
          <div>
            <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor">
              <BellFill className="icons" />
              Notifiche
            </NavLink>
          </div>
          <div>
            <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor">
              <SuitcaseLgFill className="icons" />
              Lavoro
            </NavLink>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default MyNavbar;
