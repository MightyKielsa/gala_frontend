import "./WinnersList.css";

function WinnersList (props) {
    console.log(props.winnersArr)
    return <div className="winners-list">
        <h3>{props.listName}</h3>
        <ul>
            {props.winnersArr.map(function (item, index){
                return <li className="list-item-winners" id={index}><p>{item.name}</p> <p>{item.number}</p></li>
            })}
        </ul>
    </div>
}

export default WinnersList;