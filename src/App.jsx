import { Container } from "react-bootstrap";
import "./App.css";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/footer/MyFooter";
import MyNavbar from "./components/MyNavbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMeProfileAction } from "./redux/actions";

function App() {
  const dispatch1 = useDispatch();

  useEffect(() => {
    dispatch1(getMeProfileAction());
  }, []);

  return (
    <>
      <MyNavbar />
      <Container fluid className="sfondoContainer mt-4">
        <Profile />
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
