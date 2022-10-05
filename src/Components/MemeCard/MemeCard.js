import "./MemeCard.css";

function MemeCard(props) {
  let emojiArr = [];
  console.log(props.emojis);
  emojiArr = props.emojis.emojis.map((item, index) => {
    let emojiObj = {};
    switch (item.emojiName) {
      case "Love":
        emojiObj.emo = "../../Assets/love_emo.png";
        break;
      case "Like":
        emojiObj.emo = "../../Assets/like_emo.png";
        break;
      case "Super_haha":
        emojiObj.emo = "../../Assets/super_haha_emo.png";
        break;
      case "Haha":
        emojiObj.emo = "../../Assets/haha_emo.png";
        break;
      case "Surprised":
        emojiObj.emo = "../../Assets/surprised_emo.png";
        break;
      case "Angry":
        emojiObj.emo = "../../Assets/angry_emo.png";
        break;
      case "Dislike":
        emojiObj.emo = "../../Assets/dislike_emo.png";
        break;
      default:
        emojiObj.emo = "../../Assets/blank_emo.png";
    }
    emojiObj.count = item.emojiClicks;
    return emojiObj;
  });

  console.log(emojiArr);
  return (
    <div className="meme-card">
      <img src={props.memeSrc} alt="meme" className="img-meme-card"></img>
      <div className="emoji-bar">
        {emojiArr.map(function (item, index) {
          return (
            <div key={index}>
              <img src={emojiArr.emo} alt="emoji"></img>
              <p>{item.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemeCard;
