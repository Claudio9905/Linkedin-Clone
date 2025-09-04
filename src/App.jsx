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
import Jobs from "./components/Jobs";

function App() {
  const dispatch1 = useDispatch();

  useEffect(() => {
    dispatch1(getMeProfileAction());
  }, []);

  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Container fluid className="sfondoContainer mt-4">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/profile/:userId" element={<ProfiliCercati />}></Route>
            <Route path="/jobs" element={<Jobs />} />
          </Routes>

          <MyFooter />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
