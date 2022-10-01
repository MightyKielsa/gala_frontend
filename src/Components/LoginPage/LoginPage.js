import "./LoginPage.css";
import Curtains from "../Curtains/Curtains";
import MainButton from "../MainButton/MainButton.js";

function LoginPage() {
  function onZalogujClick() {}
  return (
    <div>
      <Curtains></Curtains>
      <h1 className="main-header-login">Gala Spierdolenia 2022</h1>
      <form className="login-form-login">
        <input id="username-input-login" type="text"></input>
        <input id="password-input-login" type="text"></input>
      </form>
      <MainButton buttonText="Zaloguj!" onClick={onZalogujClick}></MainButton>
    </div>
  );
}

export default LoginPage;
