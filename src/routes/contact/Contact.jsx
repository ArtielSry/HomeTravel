import "./contact.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import Office from "../../components/offices/office";
import Question from "../../components/offices/Question";


const Contact = () => {
    return(
        <>
        <Navbar/>
        <div className="contact__container padding">
            <div className="contact__container-title">
                <h1>Traveling Offices</h1>
            </div>
            <div className="contact__container-text">
                <p>We are at your disposal in our extensive network of offices.</p>
            </div>
            <div className="contact__container-oq">
                <div className="contact__container-offices">
                    <h4>Search for offices:</h4>
                    <Office/>
                </div>
                <div className="contact__container-questions">
                    <h4>Questions to:</h4>
                    <Question/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact;