import { Container } from "react-bootstrap";
import "./App.css";
import Profile from "./components/Profile";
import MyFooter from "./components/footer/MyFooter";

function App() {
  return (
    <>
      <Profile />
      <MyFooter />
      <Container fluid className="sfondoContainer">
        <MyNavbar />
        <Profile />
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
