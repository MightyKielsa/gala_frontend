import "./Landing.css";
import Curtains from "../Curtains/Curtains";
import MainButton from "../MainButton/MainButton.js";

function Landing() {
  function onButtonClick() {
    window.location.href = "/login";
  }

  return (
    <div id="landing-page">
      <Curtains></Curtains>
      <h1 className="main-header-landing">Gala Spierdolenia 2022</h1>
      <MainButton
        buttonText="Zaczynajmy!"
        position="high"
        onClick={onButtonClick}
      ></MainButton>
    </div>
  );
}

export default Landing;
