import "./MainPage.css";
import RegButton from "../RegButton/RegButton.js";
import WinnersList from "../WinnersList/WinnersList";

const wiadomosciArr = [{name: "Twoj Stary", number: 36000}, {name: "Twardy Stolec", number: 30000}, {name: "Nick Gerr", number: 26000}, {name: "Wstaw ziemniaki", number: 24000}]
const slowaArr = [{name: "Twardy Stolec", number: 50000}, {name: "Twoj Stary", number: 46000},  {name: "Nick Gerr", number: 44000}, {name: "Wstaw ziemniaki", number: 40000}]

function MainPage () {
    return <div className="main-page-viewport">
        <div className="main-page-container">
        <h1 className="main-header-main">Gala Spierdolenia 2022</h1>
        <RegButton btnName="WYLOGUJ" btnId="left-button-main"/><RegButton btnName="PEDOFIL" btnId="right-button-main"/>
        <div className="lists-container-main">
        <WinnersList winnersArr={wiadomosciArr} listName="Najwiecej wiadomosci:"></WinnersList>
        <WinnersList winnersArr={slowaArr} listName="Najwiecej slow:"></WinnersList>
        </div>
        <RegButton btnName="Wiecej spierdolenia" btnId="left-low-button-main"/> <RegButton btnName="Zaglosuj" btnId="right-low-button-main"/>
    </div>
    <div className="profil-page-container">
        <h1 className="profil-header-main">Profil Spierdolenia</h1>
    </div>
    </div>
}

export default MainPage;