import logo from './logo.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';

function App() {
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
      
    </Router>
  );
}

export default App;

