import './Landing.css';
import Curtains from "../Curtains/Curtains";
import MainButton from "../MainButton/MainButton.js"

function Landing () {
    return <div>
        <Curtains></Curtains>
        <h1 className="main-header-landing">Gala Spierdolenia 2022</h1>
        <MainButton buttonText="Zaczynajmy!"></MainButton>
    </div>
}

export default Landing;