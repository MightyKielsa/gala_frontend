function MemeCard(props) {
  let emojiRep;
  switch (props.emojiName) {
    case "Love":
      emojiRep = "x";
      break;
    case "Love":
      emojiRep = "x";
      break;
  }

  return (
    <div className="meme-card">
      <img src={props.memeSrc} alt="meme" className="img-meme-card"></img>
      <div>
        {props.emojis.map(function (item, index) {
          return (
            <div>
              <img src=""></img>
              <p>item.emojiClicks</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
