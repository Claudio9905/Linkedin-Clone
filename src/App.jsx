import { Container } from "react-bootstrap";
import "./App.css";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/footer/MyFooter";
import MyNavbar from "./components/MyNavbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMeProfileAction } from "./redux/actions";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfiliCercati from "./components/ProfiliCercati";

function App() {
  const dispatch1 = useDispatch();

  useEffect(() => {
    dispatch1(getMeProfileAction());
  }, []);

  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Container fluid className="sfondoContainer mt-4">
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/profile/:userId" element={<ProfiliCercati />}></Route>
          </Routes>

          <MyFooter />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
