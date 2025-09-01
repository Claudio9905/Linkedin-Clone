import { Container } from "react-bootstrap";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Profile from "./components/Profile";
import NewsSection from "./components/NewsSection";
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
