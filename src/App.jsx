import { Container } from "react-bootstrap";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Container fluid className="sfondoContainer">
        <MyNavbar />
        <Profile />
      </Container>
    </>
  );
}

export default App;
