import "./MainButton.css";

function MainButton(props) {
  if (props.position === "low") {
    return (
      <button
        className="main-button"
        id="low-main-button"
        onClick={props.onClick}
      >
        {props.buttonText}
      </button>
    );
  } else if (props.position === "high") {
    return (
      <button
        className="main-button"
        id="high-main-button"
        onClick={props.onClick}
      >
        {props.buttonText}
      </button>
    );
  } else {
    console.log("Something went wrong");
  }
}
export default MainButton;
