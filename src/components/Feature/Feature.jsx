import React from "react";
import './Feature.css';


const Feature = ({title, icon}) => {
    return (
        <div className="features-container">
            <div className="features-container-title">
                <h1>{title}</h1>
            </div>
            <div className="features-container-icon">
                <i className={icon}></i>
            </div>
        </div>
    )
}

export default Feature;