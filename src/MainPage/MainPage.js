import "./MainPage.css";
import RegButton from "../RegButton/RegButton.js";

function MainPage () {
    return <div className="main-page-container">
        <h1 className="main-header-main">Gala Spierdolenia 2022</h1>
        <RegButton btnName="WYLOGUJ" btnId="left-button-main"/><RegButton btnName="PEDOFIL" btnId="right-button-main"/>
    </div>
}

export default MainPage;