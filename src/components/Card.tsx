import React from "react"
import './Card.css';




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
            <div className="row align-items-center">
                <div className="col-md-6 order-md-1">
                    <img src={image} className="card-img-top" alt="..."></img>
                </div>
                <div className="col-md-6 justify-content-center order-md-0">
                    <div className="card-body text-center mx-auto">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{paragraph}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
     
    )
}
export default Card;