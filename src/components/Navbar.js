import './Navbar.css'
import HeaderImage from "../images/headerLogo.png";
import { Link } from 'react-router-dom';
import { LINKS } from '../constants/global-routes';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mt-3">
      <div className="container-fluid">
        <Link to={LINKS.LANDING} className="navbar-brand ms-3" href="#">
          <img src={HeaderImage}></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Education
              </a>
            </li>
            <li className="nav-item mx-3">
              <Link to={LINKS.BUSINESS_OWNERS} className="nav-link active" aria-current="page" href="#">
                Business Owners
              </Link>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Testimonials
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
