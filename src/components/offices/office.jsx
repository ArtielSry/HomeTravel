import React from "react";
import './office.css';


const Office = ({title, icon}) => {
    return (
        <div className="contact__container-offices-input">
            <select>
                <option>Spain</option>
                <option>Madrid</option>
                <option>Arturias</option>
                <option>Barcelona</option>
                <option>Málaga</option>
                <option>Valencia</option>
            </select>
                <br></br>
            <select>
                <option>Europe</option>
                <option>Germany</option>
                <option>Spain</option>
                <option>France</option>
                <option>Italy</option>
            </select>
        </div>
    )
}

export default Office;