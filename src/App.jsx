import { Container } from "react-bootstrap";
import "./App.css";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/footer/MyFooter";

function App() {
  return (
    <>
      <Container fluid className="sfondoContainer">
        <MyNavbar />

        <Profile />
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
