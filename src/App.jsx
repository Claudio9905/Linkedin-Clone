import { Container } from "react-bootstrap";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Profile from "./components/Profile";
<<<<<<< HEAD
import NewsSection from './components/NewsSection';
function App() {
  return (
    <>
      <MyNavbar />
      <Profile />
      <NewsSection />
=======
import MyFooter from "./components/footer/MyFooter";

function App() {
  return (
    <>
      <Container fluid className="sfondoContainer">
        <MyNavbar />
        <Profile />
        <MyFooter />
      </Container>
>>>>>>> 298bee45225f573e94d7899e478b27858a10cc3a
    </>
  );
}

export default App;
