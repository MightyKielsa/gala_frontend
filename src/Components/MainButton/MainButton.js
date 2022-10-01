import "./MainButton.css";

function MainButton(props) {
  if (props.position === "low") {
  } else if (props.position === "high") {
  } else {
    console.log("Something went wrong");
  }

  return (
    <button className="main-button" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}
export default MainButton;
