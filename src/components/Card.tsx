import React from "react"
import './Card.css';
import pinkGlass from '../images/pinkGlass.png'



interface CardPropsType{
    cardProps: {
        title: string;
        paragraph: string;
        image: string;
    }
}

const Card = ({cardProps : {title, paragraph, image}}: CardPropsType) => {




    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..."></img>
            
            <div className="card-body text-center" >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{paragraph}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
     
    )
}
export default Card;