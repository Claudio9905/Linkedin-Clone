import MyNavbar from "./MyNavbar";

const NotFound = () => {
  return (
    <>
      <div className=" bg-gray text-center ">
        <h1>Ci dispiace c'è stato un problema ¯\_(ツ)_/¯</h1>
        <h2>
          Errore <span className=" text-danger">404</span> Page Not Found
        </h2>
      </div>
    </>
  );
};
export default NotFound;
