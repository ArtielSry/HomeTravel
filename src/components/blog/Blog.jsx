import "./blog.css";
import React from "react";

function Blog ({ imgUrl, title, text }){
    return(
        <div className="about">
         <div className="blog__container">
                <div className="blog__container-image">
                    <img src={imgUrl} alt="/travel"/>
                </div>
                <div className="blog__container-content">
                    <h3>{title}</h3>
                    <p className="blog__container-content-button">More info</p>
                </div>   
                <div className="blog__container-content-text">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog;