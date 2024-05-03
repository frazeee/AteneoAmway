import "./Product.css";


const Product = ({ image, title, descHead, desc, price }) => {
  return (
    <div className="card cardBody" >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
        <b>{descHead}</b>{desc}
        </p>
        <div className="pricebuy">
        <div className="pricze">₱{price}</div>
        <button className="buyProduct">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;