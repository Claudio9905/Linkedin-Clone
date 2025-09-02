import { Container } from "react-bootstrap";
import "./App.css";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/footer/MyFooter";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <Container fluid className="sfondoContainer">
        <Profile />
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
