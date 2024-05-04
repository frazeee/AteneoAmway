import "./dashboardCc.css";
import Order from "../../images/dashboard/orders.png";
import Total from "../../images/dashboard/mtotal.png";
import Sold from "../../images/dashboard/psold.png";
import Revenue from "../../images/dashboard/revenue.png";
import Chart from "../../images/dashboard/chart.png";
import Invoices from "../../images/dashboard/invoice.png";
import Members from "../../images/dashboard/members.png";
import Subscriptions from "../../images/dashboard/subscriptions.png";

import Navbar from "../../components/Navbar-logged";
import Footer from "../../components/Footer";

import ProductNavBar from "../../components/ProductNavBar/ProductNavBar";
import Product from "../../components/product/Product";
import garlic from "../../images/garlic.png";
import glucosamine from "../../images/glucosamine.png";
import clearGuard from "../../images/clearGuard.png";
import selfie from "../../images/dashboard/selfie.jpg";


import { LINKS } from "../../constants/global-routes";
import { Link } from "react-router-dom";

const DashboardCc = () => {
  return (
    <div className="bg">
      <Navbar />
      <div className="container container-spacing">
        <h1 className="fw-bolder header">Welcome back, User!</h1>
        <div className="row">
          <div className="col-lg-8">
            {/* Card Grid */}
            <div class="container">
              <div class="row row-cols-2">
                {/* Orders */}
                <div class="col">
                  <div class="card cardo-up">
                    <div class="card-body">
                      <img className="dbAsset" src={Order} width={60}></img>
                      <h5 class="card-title">Orders</h5>
                      <p class="card-text textQuant">201</p>
                      <p class="card-text textPercent">+6.2%</p>
                    </div>
                  </div>
                </div>

                {/* Product Sold */}
                <div class="col">
                  <div class="card cardo-up">
                    <div class="card-body">
                      <img className="dbAsset" src={Sold} width={60}></img>
                      <h5 class="card-title">Product Sold</h5>
                      <p class="card-text textQuant">36</p>
                      <p class="card-text textPercent">+6.2%</p>
                    </div>
                  </div>
                </div>

                {/* Monthly Total */}
                <div class="col">
                  <div class="card cardo-down">
                    <div class="card-body">
                      <img className="dbAsset" src={Total} width={60}></img>
                      <h5 class="card-title">Monthly Total</h5>
                      <p class="card-text textQuant">25,410</p>
                      <p class="card-text textPercent">+6.2%</p>
                    </div>
                  </div>
                </div>

                {/* Revenue */}
                <div class="col">
                  <div class="card cardo-down">
                    <div class="card-body">
                      <img className="dbAsset" src={Revenue} width={60}></img>
                      <h5 class="card-title">Revenue</h5>
                      <p class="card-text textQuant">1,352</p>
                      <p class="card-text textPercent">+6.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paid Invoices */}
          <div className="col-lg-4">
            <div class="container">
              <div class="col">
                <div class="card cardo-dalisay">
                  <div class="card-body">
                    <img className="dbAsset" src={Invoices} width={60}></img>
                    <h5 class="card-title">Paid Invoices</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="col-lg-8">
            <div class="container">
              <div class="row cols-2">
                <div class="col">
                  <div class="card w-100 cardo-chart">
                    <div class="card-body">
                      <h5 class="card-title">Overall Member Activity</h5>
                      <img
                        className="dbAssetChart"
                        src={Chart}
                        width={750}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div class="container">
              {/* Members */}
              <div class="row">
                <div class="card cardo-members">
                  <div class="card-body">
                    <img className="dbAsset" src={Members} width={60}></img>
                    <h5 class="card-title">Members</h5>
                    <p class="card-text textQuant">4,190</p>
                    <p class="card-text textPercent">+6.2%</p>
                  </div>
                </div>
              </div>

              {/* Subscriptions */}
              <div class="row">
                <div class="card cardo-subscriptions">
                  <div class="card-body">
                    <img
                      className="dbAsset"
                      src={Subscriptions}
                      width={60}
                    ></img>
                    <h5 class="card-title">Subscriptions</h5>
                    <p class="card-text textQuant">1,202</p>
                    <p class="card-text textPercent">+6.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buy Products Section */}
        <div className="container-spacing pt-5">
          <h1 className="text-center head">Buy Products</h1>
          <h3 className="text-center desc">
            Restock your inventory and maximize your earning potential.
          </h3>
        </div>

        {/* NAVBAR SHIT */}
        <ProductNavBar />
        <div class="container my-5">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              <Product
                image={garlic}
                title="NUTRILITE Garlic Tablet"
                descHead="SUPPORT YOUR CARDIOVASCULAR SYSTEM - "
                desc="Helps maintain already normal blood pressure and cholesterol levels, when used as part of a diet low in fat and cholesterol."
                price="1,575"
              />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              <Product
                image={glucosamine}
                title="NUTRILITE Glucosamine Capsule"
                descHead="GLUCOSAMINE FOR FLEXIBILITY AND MOBILITY - "
                desc="Contains a combination of special extracts to promote healthy connective tissues and overall joint comfort."
                price="2,090"
              />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              <Product
                image={clearGuard}
                title="NUTRILITE ClearGuard Tablet"
                descHead="CLEAR NASAL PASSAGES - "
                desc="This exclusive, natural formula helps support clear nasal passages in three days or less. Enjoy what life has to fully offer without stuffy noses."
                price="3,170"
              />
            </div>
          </div>
        </div>

        {/* Content Creator */}
        <div class="container cardBg my-5 applycont">
          <div class="row applysubcont">
            <div className="applyhead"> 
            <div>APPLY AS</div>
            <div>CONTENT CREATOR!</div> 
            
            </div>
            <div className="applysub1">Help Amway grow through producing short form content.</div>
            <div className="applysub2">Record a quick video of yourself advertising our products.</div>
           
            <Link to={LINKS.LANDING} className=" btn-primary applybutt">
              Register Now
            </Link>
          </div>
        </div>

        {/* Content Creator Section */}
        <div className="container-spacing pt-5">
          <h1 className="text-center head2">Content Creator Benefits</h1>
        </div>

        {/* CC Card */}
        <div className="container section-spacing mb-5">
          <div className="row">
            <div className="col-lg-4">
              <div class="card card-style container">
                <div class="card-title ms-3 my-3 title-opacity">
                  MONTHLY BENEFITS
                </div>
                <img
                  src={garlic}
                  className="position-absolute w-75"
                  height={320}
                  style={{
                    objectFit: "cover",
                    zIndex: "-1",
                    opacity: "0.8",
                    marginLeft: "120px",
                  }}
                />
                <div className="card-body mt-5">
                  <div className="">
                    <h3 className="w-75 mt-5">Montly supply</h3>
                    <h3 className="w-75 ">of products</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card card-style container">
                <div class="card-title ms-3 my-3 title-opacity">
                  PERFORMANCE BONUSES
                </div>
                <img
                  src={garlic}
                  className="position-absolute w-75"
                  style={{
                    objectFit: "cover",
                    zIndex: "-1",
                    opacity: "0.8",
                    marginLeft: "130px",
                  }}
                />
                <div className="card-body mt-5">
                  <h3 className="w-75 mt-5">Get views,</h3>
                  <h3 className="w-75 ">get extra rewards!</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card card-style container">
                <div class="card-title ms-3 my-3 title-opacity">INCENTIVES</div>
                <img
                  src={garlic}
                  className="position-absolute w-75"
                  height={320}
                  style={{
                    objectFit: "cover",
                    zIndex: "-1",
                    opacity: "0.8",
                    marginLeft: "130px",
                  }}
                />
                <div className="card-body mt-5">
                  <h3 className="w-75 mt-5">Exclusive access</h3>
                  <h3 className="w-75 ">to new products!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardCc;
