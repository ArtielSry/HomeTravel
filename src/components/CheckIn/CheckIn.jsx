import "./CheckIn.css";


function CheckIn ({ text, i}){
    return(
    <div className="checkIn__container">
        <div className="checkIn__container-feature">
            <p>{text} <i className={i}></i></p>
        </div>
    </div>
    )
}

export default CheckIn;