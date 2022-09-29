import "./MainPage.css";
import RegButton from "../RegButton/RegButton.js";
import WinnersList from "../WinnersList/WinnersList";
import { useState } from "react";

function MainPage() {
  const wiadomosciArr = [
    { name: "Twoj Stary", number: 36000 },
    { name: "Twardy Stolec", number: 30000 },
    { name: "Nick Gerr", number: 26000 },
    { name: "Wstaw ziemniaki", number: 24000 },
  ];
  const slowaArr = [
    { name: "Twardy Stolec", number: 50000 },
    { name: "Twoj Stary", number: 46000 },
    { name: "Nick Gerr", number: 44000 },
    { name: "Wstaw ziemniaki", number: 40000 },
  ];
  const userName = "Twoj Stary";
  let userWiadomosciInfo = { number: 0, ranking: 0 };
  let userSlowaInfo = { number: 0, ranking: 0 };

  let [horizontal, setHorizontal] = useState(0);
  let [vertical, setVertical] = useState(0);

  for (let i = 0; i < wiadomosciArr.length; i++) {
    if (wiadomosciArr[i].name === userName) {
      userWiadomosciInfo = { number: wiadomosciArr[i].number, ranking: i + 1 };
    }
    if (slowaArr[i].name === userName) {
      userSlowaInfo = { number: slowaArr[i].number, ranking: i + 1 };
    }
  }
  //________________________BUTTONS FOR MAIN-PROFILE TRANSITION________________
  function onProfileClick() {
    var mainPageCont = document.getElementById("main-page-container");
    var profilPageCont = document.getElementById("profil-page-container");
    var memePageCont = document.getElementById("meme-page-container");
    if (horizontal === 0 && vertical === 0) {
      setHorizontal(1);
      mainPageCont.style.right = "100%";
      profilPageCont.style.right = 0;
      memePageCont.style.right = 0;
      memePageCont.style.top = "100%";
    } else if (horizontal === 1 && vertical === 0) {
      setHorizontal(0);
      mainPageCont.style.right = 0;
      mainPageCont.style.top = 0;
      profilPageCont.style.right = "-100%";
    } else if (horizontal === 0 && vertical === 1) {
      setHorizontal(1);
      memePageCont.style.right = "100%";
      profilPageCont.style.right = 0;
    } else if (horizontal === 1 && vertical === 1) {
      setHorizontal(0);
      memePageCont.style.right = 0;
      profilPageCont.style.right = "-100%";
    }
  }

  //________________________BUTTONS FOR MAIN-MEME TRANSITION________________
  function onWiecejClick() {
    var mainPageCont = document.getElementById("main-page-container");
    var memePageCont = document.getElementById("meme-page-container");
    if (vertical === 0) {
      setVertical(1);
      mainPageCont.style.top = "-100%";
      memePageCont.style.top = 0;
    } else if (vertical === 1) {
      setVertical(0);
      mainPageCont.style.top = 0;
      memePageCont.style.top = "100%";
    }
  }

  function onWylogujClick() {
    window.location.href = "/";
  }
  return (
    <div className="main-page-viewport">
      <section className="main-page-container" id="main-page-container">
        <h1 className="main-header-main">Gala Spierdolenia 2022</h1>
        <RegButton
          btnName="WYLOGUJ"
          btnId="left-button-main"
          onClick={onWylogujClick}
        />
        <RegButton
          btnName="PEDOFIL"
          btnId="right-button-main"
          onClick={onProfileClick}
        />
        <div className="lists-container-main">
          <WinnersList
            winnersArr={wiadomosciArr}
            listName="Najwiecej wiadomosci:"
          ></WinnersList>
          <WinnersList
            winnersArr={slowaArr}
            listName="Najwiecej slow:"
          ></WinnersList>
        </div>
        <RegButton
          btnName="Wiecej spierdolenia"
          btnId="left-low-button-main"
          onClick={onWiecejClick}
        />{" "}
        <RegButton btnName="Zaglosuj" btnId="right-low-button-main" />
      </section>
      {/* ________________________PROFILE PAGE_________________________ */}
      <section className="profil-page-container" id="profil-page-container">
        <RegButton
          btnName="WYLOGUJ"
          btnId="left-button-profile"
          onClick={onWylogujClick}
        />
        <RegButton btnName="ZAGLOSUJ" btnId="right-button-profile" />
        <h1 className="profil-header-main">Profil Spierdolenia</h1>
        <div className="info-container-profile">
          <p>
            <b>USER:</b> {userName}
          </p>
          <div className="wiadomosci-info-profile">
            <p>
              <strong>WIADOMOSCI:</strong> {userWiadomosciInfo.number}
            </p>
            <p>
              <strong>MIEJSCE W RANKINGU:</strong> {userWiadomosciInfo.ranking}
            </p>
          </div>
          <div className="slowa-info-profile">
            <p>
              <strong>SLOWA:</strong> {userSlowaInfo.number}
            </p>
            <p>
              <strong>MIEJSCE W RANKINGU:</strong> {userSlowaInfo.ranking}
            </p>
          </div>
        </div>
        <RegButton
          btnName="POWROT"
          btnId="bottom-button-profile"
          onClick={onProfileClick}
        />
      </section>
      {/* ________________________MEME PAGE_________________________ */}
      <section className="meme-page-container" id="meme-page-container">
        <RegButton
          btnName="WYLOGUJ"
          btnId="left-button-meme"
          onClick={onWylogujClick}
        />
        <RegButton
          btnName="PEDOFIL"
          btnId="right-button-meme"
          onClick={onProfileClick}
        />
        <div class="ranking-container-meme"></div>
        <RegButton
          btnName="Wiecej spierdolenia"
          btnId="left-low-button-main"
          onClick={onWiecejClick}
        />{" "}
        <RegButton btnName="Zaglosuj" btnId="right-low-button-main" />
      </section>
    </div>
  );
}

export default MainPage;
