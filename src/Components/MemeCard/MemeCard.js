import "./MemeCard.css";
import love_emo from "../../Assets/love_emo.png";
import like_emo from "../../Assets/like_emo.png";
import super_haha_emo from "../../Assets/super_haha_emo.png";
import haha_emo from "../../Assets/haha_emo.png";
import surprised_emo from "../../Assets/surprised_emo.png";
import angry_emo from "../../Assets/angry_emo.png";
import dislike_emo from "../../Assets/dislike_emo.png";
import blank_emo from "../../Assets/blank_emo.png";

function MemeCard(props) {
  let emojiArr = [];
  console.log(props.meme);
  emojiArr = props.meme.emojis.map((item, index) => {
    let emojiObj = {};
    switch (item.emojiName) {
      case "Love":
        emojiObj.emo = love_emo;
        break;
      case "Like":
        emojiObj.emo = like_emo;
        break;
      case "Super_haha":
        emojiObj.emo = super_haha_emo;
        break;
      case "Haha":
        emojiObj.emo = haha_emo;
        break;
      case "Surprised":
        emojiObj.emo = surprised_emo;
        break;
      case "Angry":
        emojiObj.emo = angry_emo;
        break;
      case "Dislike":
        emojiObj.emo = dislike_emo;
        break;
      default:
        emojiObj.emo = blank_emo;
    }
    emojiObj.count = item.emojiClicks;
    return emojiObj;
  });

  console.log("emojiArr: ", emojiArr[0]);
  return (
    <div className="meme-card">
      <img src={props.meme.memeSrc} alt="meme" className="img-meme-card"></img>
      <div className="emoji-bar">
        {emojiArr.map(function (item, index) {
          return (
            <div key={index} className="single-emoji-count">
              <img
                src={item.emo}
                alt="emoji"
                className="emoji-img-meme-card"
              ></img>
              <p>{item.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemeCard;
