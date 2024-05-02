import "./Product.css";

const Product = ({ image, title, desc }) => {
  return (
    <div className="card cardBody" style={{width: '22.5rem', height: '32.5rem'}}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Product;