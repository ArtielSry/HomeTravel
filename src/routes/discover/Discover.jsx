import "./discover.css";


import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";

import { blog01, blog02, blog03, blog04, blog05 } from "../../components/blog/imports.js";

const Discover = () => {
    return(
        <>
        <Navbar/>
        <div className="discover__container">
            <div className="discover__container-title padding">
                <h1>Discover the most tourist destinations</h1>
            </div>
            <div className="discover__container-blog padding-blog">
                <div className="discover__container-blog__big">
                    <Blog imgUrl={blog01} title="Berlin" text="Berlin is the ideal place for a city break in Europe. Ticking all the boxes, the buzzing metropolis boasts a killer nightlife scene, amazing local food, a rich history, world famous beer and some of the most remarkable sights and museums in the world."/>
                </div>
                <div className="discover__container-blog__small">
                    <Blog imgUrl={blog02} title="London" text="Big Ben, Tower of London, Tower Bridge, London Eye, Buckingham Palace, Hyde Park, St Paul's Cathedral..."/>
                    <Blog imgUrl={blog03} title="New York" text="Major destinations include the Empire State Building, Ellis Island, the Statue of Liberty on Liberty Island, Broadway..."/>
                    <Blog imgUrl={blog04} title="Japan" text="Japan is one of the oldest civilizations and has a beautiful and diverse history..."/>
                    <Blog imgUrl={blog05} title="Asturias" text="Asturias boasts a gorgeous coastline overlooking the Bay of Biscay. You'll find quaint fishing villages..."/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Discover;