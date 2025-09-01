import { Button, Card } from "react-bootstrap";

const MyEsperienza = () => {
  return (
    <>
      <Card className=" my-4">
        <Card.Body>
          <Card.Title className=" mb-0">Esperienza</Card.Title>

          <Card.Text className=" d-flex">
            <img src="https://www.placebear.com/100/100" alt="" />
            <div className=" d-flex flex-column ms-2">
              <h6>Teacher</h6>
              <p>EPICODE • Autonomo</p>
              <small>
                giu 2019 - Presente • 6 anni 4 mesi <br /> Roma, Italia
              </small>
            </div>
          </Card.Text>
        </Card.Body>

        <hr />
        <Card.Body>
          <Card.Text className=" d-flex">
            <img
              src="https://www.placebear.com/100/100"
              alt=""
              className=" h-25 "
            />
            <div className=" d-flex flex-column ms-2">
              <h6>Founder & Software Developer</h6>
              <p>Nucleode SRL</p>
              <small>
                mar 2017 - Presente • 8 anni 7 mesi <br />{" "}
                Gorizia,Friuli-Venezia-Giulia, Italia
              </small>
              <p>
                Innovative start-up specialized in the development of highly
                innovative computer-medical solutions, using cloud potential and
                mobile computing, machine learning and Mixed Reality.
              </p>
              <div className=" d-flex align-items-center">
                <figure>
                  <img src="https://www.placebear.com/200/100" alt="" />
                </figure>

                <div className=" d-flex flex-column ms-2">
                  <h6>Nucleode | Biohealt Innovation</h6>
                  <p>
                    Nucleode Srl is a newborn healthcare startup based in Italy.
                    We develop HIPAA and GDPR compliant solutions dedicated to
                    healthcare companies and organizations.
                  </p>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        <hr />
        <Card.Body>
          <Card.Text className=" d-flex">
            <img
              src="https://www.placebear.com/100/100"
              alt=""
              className=" h-25 "
            />
            <div className=" d-flex flex-column ms-2">
              <h6>Founder & IT Consultant</h6>
              <p>TecnoStart</p>
              <small>
                gen 2015 - Presente • 10 anni 9 mesi <br />{" "}
                Gorizia,Friuli-Venezia-Giulia, Italia
              </small>
              <p>
                TecnoStart nasce per offrire consulenze e servizi informatici a
                privati, aziende, enti professionali e scuole, oltre che
                formazione a tutti i livelli per il corretto utilizzo degli
                stessi.
              </p>
              <div className=" d-flex align-items-center ">
                <figure>
                  {" "}
                  <img src="https://www.placebear.com/200/100" alt="" />
                </figure>

                <div className=" d-flex flex-column ms-2">
                  <h6>TecnoStart Logo</h6>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        <hr />
        <Card.Body>
          <Card.Text className=" d-flex">
            <img src="https://www.placebear.com/100/100" alt="" />
            <div className=" d-flex flex-column ms-2">
              <h6>Fronteend developer</h6>
              <p>Tecnes Srl - Supply Chain: Cultura e Soluzioni • Autonomo</p>
              <small>feb 2020- ott 2020 • 9 mesi</small>
            </div>
          </Card.Text>
        </Card.Body>
        <hr />
        <Card.Body>
          <Card.Text className=" d-flex">
            <img src="https://www.placebear.com/100/100" alt="" />
            <div className=" d-flex flex-column ms-2">
              <h6>Fronteend developer</h6>
              <p>MV Labs • Freelance</p>
              <small>feb 2019 - mag 2020 • 1 anno</small>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyEsperienza;
