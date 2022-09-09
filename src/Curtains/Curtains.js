import './Curtains.css'
import curtainLeft from '../Assets/curtain-left.png';
import curtainRight from '../Assets/curtain-right.png';

function Curtains (){
    return <div>
        <img className="curtains-landing" id="curtain-left-landing" src={curtainLeft} alt="left curtain"/>
        <img className="curtains-landing" id="curtain-right-landing" src={curtainRight} alt="right curtain"/>
    </div>;
}

export default Curtains;