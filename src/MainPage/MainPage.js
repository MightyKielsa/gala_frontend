import "./MainPage.css";
import RegButton from "../RegButton/RegButton.js";
import WinnersList from "../WinnersList/WinnersList";




function MainPage () {
    const wiadomosciArr = [{name: "Twoj Stary", number: 36000}, {name: "Twardy Stolec", number: 30000}, {name: "Nick Gerr", number: 26000}, {name: "Wstaw ziemniaki", number: 24000}]
    const slowaArr = [{name: "Twardy Stolec", number: 50000}, {name: "Twoj Stary", number: 46000},  {name: "Nick Gerr", number: 44000}, {name: "Wstaw ziemniaki", number: 40000}]
    const userName = "Twoj Stary";
    let userWiadomosciInfo = {number:0, ranking:0,};
    let userSlowaInfo = {number:0, ranking:0,};

    for (let i=0; i<wiadomosciArr.length; i++) {
        console.log("wiadomosci array", wiadomosciArr[i])
        if(wiadomosciArr[i].name === userName){
            userWiadomosciInfo = {number: wiadomosciArr[i].number, ranking: i+1,};
        }
        if(slowaArr[i].name === userName){
            userSlowaInfo = {number: slowaArr[i].number, ranking: i+1,}
        }
    }

    return <div className="main-page-viewport">
        <section className="main-page-container">
        <h1 className="main-header-main">Gala Spierdolenia 2022</h1>
        <RegButton btnName="WYLOGUJ" btnId="left-button-main"/><RegButton btnName="PEDOFIL" btnId="right-button-main"/>
        <div className="lists-container-main">
        <WinnersList winnersArr={wiadomosciArr} listName="Najwiecej wiadomosci:"></WinnersList>
        <WinnersList winnersArr={slowaArr} listName="Najwiecej slow:"></WinnersList>
        </div>
        <RegButton btnName="Wiecej spierdolenia" btnId="left-low-button-main"/> <RegButton btnName="Zaglosuj" btnId="right-low-button-main"/>
    </section>
    <section className="profil-page-container">
        <h1 className="profil-header-main">Profil Spierdolenia</h1>
        <div className="info-container-profile">
            <p><b>USER:</b> {userName}</p>
            <div className="wiadomosci-info">
                <p><strong>WIADOMOSCI:</strong> {userWiadomosciInfo.number}</p>
                <p><strong>MIEJSCE W RANKINGU:</strong> {userWiadomosciInfo.ranking}</p>
            </div>
            <div>
                <p><strong>SLOWA:</strong> {userSlowaInfo.number}</p>
                <p><strong>MIEJSCE W RANKINGU:</strong> {userSlowaInfo.ranking}</p>
            </div>
        </div>
    
    </section>
    </div>
}

export default MainPage;