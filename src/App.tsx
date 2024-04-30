import logo from './logo.svg';
import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';
import Card from './components/Card.tsx';
import Postcard from './components/Postcard.tsx';
import Testimonial from './components/Testimonial.tsx';
import yellowEgg from './images/yellowEgg.jpg'
import pinkGlass from './images/pinkGlass.png'

import cherries from './images/cherries.jpg'
import orange from './images/orange.jpg'

import milkBottles from './images/milkBottles.jpg'
import halfOrange from './images/halfOrange.jpg'
import cone from './images/cone.jpg'
import sugarCubes from './images/sugarCubes.jpg'

function App() {


const cardsProps = [
  {title: "Transform your brand",
paragraph: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
image: yellowEgg
},
{title: "Stand out to the right audience",
paragraph: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
image: pinkGlass
}
]

const postcardsProps = [
  {title: "Graphic Design",
paragraph: "Great Design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
image: cherries
},
{title: "Photograph",
paragraph: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
image: orange
}
]

const testimonialsProps = [
  {
    icon: "",
    review: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    jobTitle: "Marketing Director"

  },
  {
    icon: "",
    review: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    jobTitle: "Chief Operating Officer"

  },
  {
    icon: "",
    review: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    jobTitle: "Business Owner"

  }
]




  return (
    <Router>
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <a className="navbar-brand">sunnyside</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
        
        

      </nav>
      {cardsProps.map(cardProps => {
        return (
          <Card cardProps={cardProps}/>
        )

        })

      }
      <div className="row"> 
        {postcardsProps.map(postcardProps => {
          return (
            <Postcard postcardProps={postcardProps}/>
          )

          })

        }
      </div>

      <div className="row"> 
        {testimonialsProps.map(testimonialProps => {
          return (
            <Testimonial testimonialProps={testimonialProps}/>
          )

          })

        }
      </div>
      <div>
        <img src={milkBottles} alt="..."/> 
        <img src={halfOrange} alt="..." />
        <img src={cone} alt="..." />
        <img src={sugarCubes} alt="..." />

      </div>
      
      
      
    </Router>
  );
}

export default App;

