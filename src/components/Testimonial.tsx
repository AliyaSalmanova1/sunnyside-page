import React from "react"
import './Card.css';


interface TestimonialProps{
    testimonialProps: {
        icon: string;
        review: string;
        name: string;
        jobTitle: string;
        
    
    }
}

const Testimonial = ({testimonialProps : {icon, review, name, jobTitle}}: TestimonialProps) => {



    return (
        <div className="card col-md-4">
            <div className="row align-items-center">
             
                <img src={icon} className="card-img-top" alt="..."></img>
                <p className="card-text">{review}</p>
                <h5 className="card-title">{name}</h5>
                <p className="text-muted">{jobTitle}</p>
               
            </div>
        </div>
     
    )
}
export default Testimonial;