import "./businessOwner.css";
import Product from "../../components/product/Product";
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
import {Ponzi, Ponzi1} from "../../components/Ponzi/ponzi";

import Footer from "../../components/Footer";

const businessOwner = () => {
  return (
    <>
      <Navbar />
      <h1 class="text-center my-5"> OWN A BUSINESS OWNER</h1>
      <div class="container my-5">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <BusinessCard
              image={Money}
              title="COMMISSION"
              desc="Through AmPay, you earn a 10% commission with every product you sell"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <BusinessCard
              image={Statistics}
              title="INCENTIVES & REWARDS"
              desc="When you reach certain milestones with us, you can achieve incentives and rewards on top of your commissions and performance bonuses"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
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
              descHead = "SUPPORT YOUR CARDIOVASCULAR SYSTEM - "
              desc="Helps maintain already normal blood pressure and cholesterol levels, when used as part of a diet low in fat and cholesterol."
              price= "999,999"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <Product
              image={glucosamine}
              title="NUTRILITE Glucosamine Capsule"
              descHead="GLUCOSAMINE FOR FLEXIBILITY AND MOBILITY - "
              desc="Contains a combination of special extracts to promote healthy connective tissues and overall joint comfort."
              price= "999,999"
            />
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <Product
              image={clearGuard}
              title="NUTRILITE ClearGuard Tablet"
              descHead="CLEAR NASAL PASSAGES - "
              desc="This exclusive, natural formula helps support clear nasal passages in three days or less. Enjoy what life has to fully offer without stuffy noses."
              price= "999,999"
            />
          </div>
        </div>
      </div>

      <h1 class="text-center my-5"> HOW WILL YOU EARN</h1>

      <div class="container">
        <div class="row">
          <Ponzi
          
          />
        </div>
      </div>
      
      <div class="container my-5">
        <div class="row">
          <Ponzi1/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default businessOwner;
