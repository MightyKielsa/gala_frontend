import "./RegButton.css";

function RegButton (props) {
    return <button id={props.btnId} className="reg-button">{props.btnName}</button>
}

export default RegButton;