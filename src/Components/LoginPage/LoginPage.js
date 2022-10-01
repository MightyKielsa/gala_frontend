import "./LoginPage.css";
import Curtains from "../Curtains/Curtains";
import MainButton from "../MainButton/MainButton.js";

function LoginPage() {
  function onZalogujClick() {}
  return (
    <div>
      <Curtains></Curtains>
      <h1 className="main-header-login">Gala Spierdolenia 2022</h1>
      <div className="form-background-login">
        <h2>Zaloguj</h2>
        <form className="login-form-login">
          <label for="username-input-login">Username</label>
          <input id="username-input-login" type="text"></input>
          <label for="password-input-login">Password</label>
          <input id="password-input-login" type="text"></input>
        </form>
      </div>
      <MainButton
        buttonText="Zaloguj!"
        position="low"
        onClick={onZalogujClick}
      ></MainButton>
    </div>
  );
}

export default LoginPage;
