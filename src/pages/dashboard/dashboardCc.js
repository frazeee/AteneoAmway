import "./dashboardCc.css";
import Order from "../../images/dashboard/orders.png";
import Total from "../../images/dashboard/mtotal.png";
import Sold from "../../images/dashboard/psold.png";
import Revenue from "../../images/dashboard/revenue.png";
import Chart from "../../images/dashboard/chart.png";
import Dropdown from "../../images/dashboard/dropdown.png";
import Invoices from "../../images/dashboard/invoice.png";
import Members from "../../images/dashboard/members.png";
import Subscriptions from "../../images/dashboard/subscriptions.png";

import Navbar from "../../components/Navbar-logged";
import Marquee from "react-fast-marquee";

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
                  <div class="card cardo-chart">
                    <div class="card-body">
                      <h5 class="card-title">Overall Member Activity</h5>
                      <img className="dbAssetChart" src={Chart} width={750}></img>
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
                    <img className="dbAsset" src={Subscriptions} width={60}></img>
                    <h5 class="card-title">Subscriptions</h5>
                    <p class="card-text textQuant">1,202</p>
                    <p class="card-text textPercent">+6.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-spacing pt-5">
          <h1 className="text-center head">Buy Products</h1>
          <h3 className="text-center desc">Restock your inventory and maximize your earning potential.</h3>
        </div>

        <div class="cont product-list">
          <ul class="nav">  <li class="nav-item"><a class="nav-link" href="#">Nutrition</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Beauty</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Agriculture</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Personal Care</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default DashboardCc;
