import "./travel.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CheckIn from "../../components/CheckIn/CheckIn";

const Travel = () => {
    return(
        <>
        <Navbar/>
        <div className="travel__container padding">
            <div className="travel__container-title">
                <h1>Check-in online</h1>
            </div>
        <div className="travel__checkIn">
            <div className="travel__container-checkIn">
                <CheckIn text="Check your booking and make changes" i="bi bi-check-circle"/>
                <CheckIn text="Check in and get your boarding passes" i="bi bi-check-circle"/>
                <CheckIn text="Easy access to help and information" i="bi bi-check-circle"/>
            </div>
            <div className="checkIn__container-input">
                <input type="text" placeholder="Reservation number"></input>
                <input type="text" placeholder="Email"></input>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default Travel;

