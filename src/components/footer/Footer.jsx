import "./footer.css";
import { Component } from "react";


class Footer extends Component{
    render(){
    return(
        <div className="footer__container padding-max">
            <ul className="footer__ul">
                <h3>Flight info</h3>
                <li>Flight Tracker</li>
                <li>Manage Bookings</li>
                <li>Sustainability</li>
                <li>Travel Guides</li>
                <li>Where we fly</li>
                <li>Conquer your fear of flying</li>
            </ul>
            <ul className="footer__ul">
                <h3>Customer service</h3>
                <li>Accessibility</li>
                <li>Our Promise</li>
                <li>Help</li>
                <li>Latest travel information</li>
                <li>Site map</li>
                <li>Special assistance</li>
            </ul>
            <ul className="footer__ul">
                <h3>About</h3>
                <li>Careers</li>
                <li>Registered address</li>
                <li>Company information</li>
                <li>Acceptable use policy</li>
            </ul>
        </div>
    )
    }
}
export default Footer;