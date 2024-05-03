import { Link } from "react-router-dom";
import "./ProductNavBar.css";

const ProductNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-underline navbar-dark ">
          <ul className="navbar-nav">
            <li className="nav-item mx-5 px-5">
              <Link className="nav-link active" aria-current="page" >Nutrition</Link>
            </li>
            <li className="nav-item mx-5 px-5">
              <Link className="nav-link" >Beauty</Link>
            </li>
            <li className="nav-item mx-5 px-5">
              <Link className="nav-link" >Home</Link>
            </li>
            <li className="nav-item mx-5 px-5">
              <Link className="nav-link" >Agriculture</Link>
            </li>
            <li className="nav-item mx-5 px-5">
              <Link className="nav-link" >Personal Care</Link>
            </li>
          </ul>

    </nav>
  );
};

export default ProductNavBar;
