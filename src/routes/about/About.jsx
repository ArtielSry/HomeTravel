import Footer from "../../components/footer/Footer";
import Careers from "../../components/Careers/Careers"
import Navbar from "../../components/navbar/Navbar";
import "./about.css";
import { car01, car02, car03, car04, car05, car06 } from "../../components/Careers/imports";

const About = () => {
    return(
        <>
        <Navbar/>
        <div className="about__container">
            <div className="about__container-title padding">
                <h1> Our principles are based on equal treatment.</h1>
            </div>
            <div className="about__container-text  padding">
                <p>Traveling is a company with more than 20 years of experience in the sector. We love life and we love what we do. We work hard and laugh loud. We roll our sleeves up and we get stuck right in. We support. We empower. We excite. And we do it our way. We’re uniquely different. <br></br> 
                <strong>Come and join us.</strong></p>
            </div>
        <div className="about__careers-container">
            <div className="about__careers">
                <Careers imgUrl={car01} title="Pilots" alt="/" i="bi bi-airplane"/>
                <Careers imgUrl={car02} title="Cabin Crew" alt="/" i="bi bi-file-person" />
                <Careers imgUrl={car03} title="Engineers" alt="/" i="bi bi-airplane-engines"/>
            </div>
            <div className="about__careers">
                <Careers imgUrl={car04} title="Help Center" alt="/" i="bi bi-headset"/>
                <Careers imgUrl={car05} title="Maintenance" alt="/" i="bi bi-plug"/>
                <Careers imgUrl={car06} title="Young People" alt="/" i="bi bi-phone-flip"/>
            </div>
        </div>
        </div>
    <Footer/>
        </>
    )
}

export default About;