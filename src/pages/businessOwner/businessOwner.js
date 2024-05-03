import "./businessOwner.css";
import Product from "../../components/Product/Product";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import Money from "../../images/money.png";
import Navbar from "../../components/Navbar";
import Statistics from "../../images/statistics.png";
import handOnGift from "../../images/handOnGift.png";
import garlic from "../../images/garlic.png";
import glucosamine from "../../images/glucosamine.png";
import clearGuard from "../../images/clearGuard.png";
import vitaminC from "../../images/vitaminC.png";
import manWithStore from "../../images/manWithStore.png";
import peopleSpeaking from "../../images/peopleSpeaking.png";
import ProductNavBar from "../../components/ProductNavBar/ProductNavBar";

const businessOwner = () => {
  return (
    <>
      <Navbar />
      <h1 class="text-center my-5"> OWN A BUSINESS OWNER</h1>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <BusinessCard
              image={Money}
              title="COMMISSION"
              desc="Through AmPay, you earn a 10% commission with every product you sell"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <BusinessCard
              image={Statistics}
              title="INCENTIVES & REWARDS"
              desc="When you reach certain milestones with us, you can achieve incentives and rewards on top of your commissions and performance bonuses"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <BusinessCard
              image={handOnGift}
              title="PERFORMANCE BONUSES"
              desc="Through our Compensation Plan, the more you grow your business, the bigger the bonus you can get"
            />
          </div>
        </div>
      </div>

      <h1 class="text-center my-5"> OUR PRODUCTS</h1>

      {/* NAVBAR SHIT */}
      <ProductNavBar/>

      <div class="container my-5">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <Product
              image={garlic}
              title="NUTRILITE Garlic Tablet"
              desc="SUPPORT YOUR CARDIOVASCULAR SYSTEM - Helps maintain already normal blood pressure and cholesterol levels, when used as part of a diet low in fat and cholesterol."
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <Product
              image={glucosamine}
              title="NUTRILITE Glucosamine Capsule"
              desc="GLUCOSAMINE FOR FLEXIBILITY AND MOBILITY - Contains a combination of special extracts to promote healthy connective tissues and overall joint comfort."
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <Product
              image={clearGuard}
              title="NUTRILITE ClearGuard Tablet"
              desc="CLEAR NASAL PASSAGES - This exclusive, natural formula helps support clear nasal passages in three days or less. Enjoy what life has to fully offer without stuffy noses."
            />
          </div>
        </div>
      </div>

      <h1 class="text-center my-5"> HOW WILL YOU EARN</h1>

      <div class="container cardBg my-5">
        <div class="row my-5">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center">
            <img src={vitaminC} class="imgSize" />
            <h1>Amway</h1>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center">
            <img src={manWithStore} class="imgSize" />
            <h1>ABO buys product at ABO price</h1>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center">
            <img src={peopleSpeaking} class="imgSize" />
            <h1>AES buy produce at AES price</h1>
          </div>
        </div>
      </div>
      
      <div class="container cardBg my-5">
        <div class="row my-5">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center">
            <img src={manWithStore} class="imgSize" />
            <h1>ABO PRICEPHP 2,997</h1>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center">
            <img src={peopleSpeaking} class="imgSize" />
            <h1>AES PRICEPHP 3,330</h1>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center">
            <img src={vitaminC} class="imgSize" />
            <h5>AES Price</h5>
            <p>P3,300</p>
            <h5>ABO Price</h5>
            <p>P2,997</p>
            <h5>AMPAY GROSS EARNING</h5>
            <p>P3,334</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default businessOwner;
