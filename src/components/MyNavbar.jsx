import {
  Button,
  Container,
  Navbar,
  NavDropdown,
  NavLink,
} from "react-bootstrap";
import {
  BellFill,
  ChatDotsFill,
  HouseDoorFill,
  HouseExclamation,
  PeopleFill,
  Search,
  SuitcaseLgFill,
} from "react-bootstrap-icons";

const MyNavbar = () => {
  return (
    <Navbar className=" bg-white">
      <Container>
        <div className="d-flex align-items-center w-100">
          <img src="/public/linkedin.png" alt="Logo" width={40} />
          <div className="ms-3 d-flex align-items-center border border-1 border-secondary rounded-pill py-1">
            <Search className="mx-2" />
            <input
              type="text"
              placeholder="Cerca"
              className=" border-0 rounded-pill outline-none"
            />
          </div>
          <div className="ms-auto d-flex flex-1 align-items-center me-5">
            <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor mx-3">
              <HouseDoorFill className="icons" />
              Home
            </NavLink>
            <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor mx-3">
              <PeopleFill className="icons" />
              Rete
            </NavLink>
            <NavLink className="d-flex flex-column justify-content-center align-items-center text-secondary recolor mx-3">
              <SuitcaseLgFill className="icons" />
              Lavoro
            </NavLink>
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
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="User"
                width={23}
                className=" rounded-circle"
              />
              <NavDropdown title="Tu">
                <NavDropdown.Item className="p-0">
                  <Container fluid className="d-flex flex-column">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        alt="User"
                        width={50}
                        className=" rounded-circle"
                      />
                      <h4 className="ms-3">User Name</h4>
                    </div>
                    <div className="mt-2">
                      <Button
                        variant="outline-primary"
                        className=" rounded-pill me-2"
                      >
                        Visualizza Profilo
                      </Button>
                      <Button variant="primary" className=" rounded-pill">
                        Verifica
                      </Button>
                    </div>
                  </Container>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
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
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
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
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="text-muted text-decoration-none link"
                    >
                      Esci
                    </a>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column align-items-center me-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="User"
                width={23}
                className=" rounded-circle"
              />
              <NavDropdown title="Per le aziende"></NavDropdown>
            </div>
            <a href="#" className="text-center prova">
              Prova Premium per 0 <br />
              EUR
            </a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
