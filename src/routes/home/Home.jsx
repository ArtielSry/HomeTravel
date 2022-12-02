import "./Home.css";

import { Link } from 'react-router-dom';

import Feature from "../../components/Feature/Feature"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import DateCalendar from "../../components/date/Date";
import DatePrice from "../../components/date-price/DatePrice";

import React from "react";

const Home = () => {
    return(
        <>
        <Navbar/>
        <div className="home__container">
          <h1 className="home__main">Traveling</h1>
            <div className="home__title padding">
              <h2>Get out and discover the world</h2>
              <div className="date">
                <DatePrice/>
                <DateCalendar/>
              </div>
            </div>
            <div className="separador"></div>
            <div className="home__sections-container padding">
                <Link to={"/Travel"}><Feature title="Check-in online" icon="bi bi-airplane-engines"/></Link>
                <Link to={"/Discover"}><Feature title="Discover" icon="bi bi-search"/></Link>
                <Link to={"/About"}><Feature title="Join us now" icon="bi bi-person-lines-fill"/></Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home;