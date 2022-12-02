import "./careers.css";

function Careers ({ imgUrl, title, i }){
    return(
        <div className="career__container">
            <div className="career__container-img">
                <img src={imgUrl} alt="/"/>
            </div>
            <div className="career__container-title">
                <h3>{title}</h3>
                <i className={i}></i>
            </div>
        </div>
    )
}

export default Careers;