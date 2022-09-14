import "./RegButton.css";

function RegButton(props) {
  return (
    <button id={props.btnId} className="reg-button" onClick={props.onClick}>
      {props.btnName}
    </button>
  );
}

export default RegButton;
