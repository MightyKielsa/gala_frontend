import "./MainButton.css";

function MainButton(props) {
  return (
    <button className="main-button" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}
export default MainButton;
