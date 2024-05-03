import "./BusinessCard.css";

const BusinessCard = ({ image, title, desc }) => {
  return (
      <div className="Bcard BcardBody">
        <img src={image} className="Bcard-img-top" alt="..." />
        <div className="Bcard-body">
          <h5 className="Bcard-title">{title}</h5>
          <p className="Bcard-text">{desc}</p>
        </div>
      </div>
  );
};

export default BusinessCard;
