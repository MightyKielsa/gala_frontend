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

  const memeArr = [
    {
      memeSrc: "https://ichef.bbci.co.uk/images/ic/704xn/p072ms1x.jpg",
      author: "Twoj Stary",
      emojis: [
        { emojiName: "Like", emojiClicks: 5 },
        { emojiName: "Love", emojiClicks: 3 },
        { emojiName: "Haha", emojiClicks: 1 },
      ],
    },
    {
      memeSrc:
        "https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188",
      author: "Twoja Stara",
      emojis: [
        { emojiName: "Like", emojiClicks: 3 },
        { emojiName: "Love", emojiClicks: 1 },
        { emojiName: "Haha", emojiClicks: 1 },
      ],
    },
    {
      memeSrc:
        "https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/4:3/w_2664,h_1998,c_limit/wired-meme-nft-brian.jpg",
      author: "Byku123",
      emojis: [
        { emojiName: "Haha", emojiClicks: 5 },
        { emojiName: "Like", emojiClicks: 3 },
        { emojiName: "Yay", emojiClicks: 3 },
      ],
    },
    {
      memeSrc:
        "https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s1100-c50.jpg",
      author: "Rudy2",
      emojis: [{ emojiName: "Haha", emojiClicks: 10 }],
    },
    {
      memeSrc:
        "https://cdn.vox-cdn.com/thumbor/VZNJM5S4Cw2i3JaycT9waVLCwqw=/715x248:1689x721/1200x800/filters:focal(972x299:1278x605)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg",
      author: "Twoj Stary",
      emojis: [
        { emojiName: "Haha", emojiClicks: 5 },
        { emojiName: "Like", emojiClicks: 6 },
      ],
    },
    {
      memeSrc:
        "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/b32b9c5bed9df3a96ce29a4fef1c77a9~c5_720x720.jpeg?x-expires=1664568000&x-signature=8XCg6clXxeBA5FFTAsQnHT1lsiw%3D",
      author: "ZlyKurwiszon",
      emojis: [
        { emojiName: "Haha", emojiClicks: 5 },
        { emojiName: "Like", emojiClicks: 2 },
        { emojiName: "Angry", emojiClicks: 2 },
      ],
    },
    {
      memeSrc:
        "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/596b18a16db5e0d4f31561f18a14b927~c5_720x720.jpeg?x-expires=1664575200&x-signature=nAizOCGpcqGfOtyRAeYic2zPwqI%3D",
      author: "Chuju",
      emojis: [
        { emojiName: "Haha", emojiClicks: 4 },
        { emojiName: "Like", emojiClicks: 5 },
      ],
    },
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
          btnName="PROFIL"
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
          btnName="PROFIL"
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
