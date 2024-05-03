import "./ProductNavBar.css";

const ProductNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-underline navbar-dark ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-5 px-5">
              <a className="nav-link active" aria-current="page" href="#">Nutrition</a>
            </li>
            <li className="nav-item mx-5 px-5">
              <a className="nav-link" href="#">Beauty</a>
            </li>
            <li className="nav-item mx-5 px-5">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item mx-5 px-5">
              <a className="nav-link" href="#">Agriculture</a>
            </li>
            <li className="nav-item mx-5 px-5">
              <a className="nav-link" href="#">Personal Care</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ProductNavBar;
