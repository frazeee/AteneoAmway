import "./BusinessCard.css";

const BusinessCard = ({ image, title, desc }) => {
  return (
    <div className="businessCard">
      <div className="card cardBody">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
