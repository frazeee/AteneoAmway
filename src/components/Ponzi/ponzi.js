import "./ponzi.css";
import vitaminC from "../../images/vitaminC.png";
import manWithStore from "../../images/manWithStore.png";
import peopleSpeaking from "../../images/peopleSpeaking.png";
import arrow1 from "../../images/arrow1.png"
import arrow2 from "../../images/arrow2.png"

const Ponzi = () => {
  return (
      <div className="ponzicard">
        <div className="ponzisection">
            <img className="ponziImg" src={vitaminC}/>
            <div className="ponzitext">Amway</div>
        </div>
        <img className="arrowponzi" src={arrow1}/>
        <div className="ponzisection">
            <img className="ponziImg" src={manWithStore}/>
            <div className="ponzitext">ABO buys product at ABO price</div>
        </div>
        <img className="arrowponzi" src={arrow1}/>
        <div className="ponzisection">
            <img className="ponziImg" src={peopleSpeaking}/>
            <div className="ponzitext">AES buy produce at AES price</div>
        </div>
        <div className="ponziSubtext">ABO (Amway Business Owner) gets the difference of 10% for every AES (Amway Exclusive Shopper) sale = AmPay</div>
      </div>
  );
};

const Ponzi1 = () => {
    return (
        <div className="ponzicard">
          <div className="ponzisection">
              <img className="ponziImg" src={manWithStore}/>
              <div className="ponzitext1">ABO PRICE</div>
              <div className="ponziprice">₱ 2,997</div>
          </div>
          <img className="arrowponzi" src={arrow1}/>
          <div className="ponzisection">
              <img className="ponziImg" src={peopleSpeaking}/>
              <div className="ponzitext1">AES PRICE </div>
              <div className="ponziprice">₱ 3,330</div>
          </div>
          <img className="arrowponzi" src={arrow1}/>
          <div className="ponzisection">
              <img className="ponziImg vitaminc" src={vitaminC}/>
              <div className="ponzitext2">AES Price</div>
              <div className="ponziprice1">₱ 3,330</div>
              <div className="ponzitext2">ABO Price</div>
              <div className="ponziprice1">₱ 2,997</div>
              <div className="ponzitext2">AMPAY (GROSS EARNING)</div>
              <div className="ponziprice1">₱ 3,334</div>
          </div>
          <div className="ponziSubtext">AmPay earning is subject to VAT & Withholding Tax</div>
        </div>
    );
  };

export {Ponzi, Ponzi1};