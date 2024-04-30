import React from "react"
import './Card.css';




interface PostcardPropsType{
    postcardProps: {
        title: string;
        paragraph: string;
        image: string;
    }
}

const Postcard = ({postcardProps : {title, paragraph, image}}: PostcardPropsType) => {

    const cardStyle = {

        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white" // Change text color if needed for better readability
    };
    //<img src={image} className="card-img-top" alt="..."></img>

    return (
        <div className="card col-md-6" style={cardStyle}>
            
     
            <div className="card-body text-center " >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{paragraph}</p>
                
            </div>
        </div>
     
    )
}
export default Postcard;