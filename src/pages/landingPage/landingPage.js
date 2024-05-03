import "./landingPage.css";
import Navbar from "../../components/Navbar";
import Marquee from "react-fast-marquee";
import Commission from "../../images/landingPageCards/commission.png";
import Bonuses from "../../images/landingPageCards/bonuses.png";
import Incentives from "../../images/landingPageCards/incentives.png";

import Achievers from "../../images/marqueeLogos/achievers.png";
import Artstudio from "../../images/marqueeLogos/artstudio.png";
import GHLogo from "../../images/marqueeLogos/GH-logo.png";
import Nutrilite from "../../images/marqueeLogos/nutrilite.png";
import Satinique from "../../images/marqueeLogos/satinique.png";
import XSLogo from "../../images/marqueeLogos/xs.png";
import { Link } from "react-router-dom";
import { LINKS } from "../../constants/global-routes";

import amwaypeople from "../../images/AmwayPeople.png";


const imageData = [
  { src: Achievers, alt: "Achievers Logo" },
  { src: Artstudio, alt: "Artstudio Logo" },
  { src: GHLogo, alt: "GH Logo" },
  { src: Nutrilite, alt: "Nutrilite Logo" },
  { src: Satinique, alt: "Satinique Logo" },
  { src: GHLogo, alt: "GH Logo" },
];

const LandingPage = () => {
  return (
    <div className="bg">
      <Navbar />
      <div className="container container-spacing">
        <div className="row">
          <div className="col-lg-8 p-5">
            <h1 className="fw-bolder header">BE IN BUSINESS YOURSELF,</h1>
            <h1 className="fw-bolder header">BUT NEVER BY YOURSELF</h1>
            <div className="mt-3">
              <h5 className="subtitle">
                Become an Amway Business Owner and unlock your full potential.
                Create financial freedom and make a positive impact.
              </h5>
            </div>
            <Link to={LINKS.LOGIN} className="btn btn-primary mt-4">Register Now</Link>
          </div>
          <div className="col-lg-4">
            <img src={amwaypeople} alt="AmwaysPeople"/>
          </div>
        </div>
      </div>

      <div className="container-spacing py-5 d-flex flex-column">
        <h1 className="text-center py-3">Partnered With</h1>
        <Marquee style={{ width: "98vw" }} className="mx-auto">
          {imageData.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="img-fluid mx-5"
              width={150}
              height={150}
            />
          ))}
        </Marquee>
      </div>

      <div className="container section-spacing">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="fw-bolder header">START YOUR OWN</h1>
            <div className="mt-3">
              <h5 className="subtitle">
                Amway offers a low-cost, flexible way to start your own
                business. They provide training and support, plus a network of
                fellow entrepreneurs, ensuring you have the necessary resources
                for success. The focus is on ease and convenience throughout the
                entire process.
              </h5>
            </div>
          </div>
          <div className="col-lg-5">
            <h1>IMAGE HERE</h1>
          </div>
        </div>

        <div className="row section-spacing">
          <div className="col-lg-5">
            <h1>IMAGE HERE</h1>
          </div>
          <div className="col-lg-7">
            <h1 className="fw-bolder header">Become an ambassador</h1>
            <div className="mt-3">
              <h5 className="subtitle">
                Share your love for Amway products and the opportunity through
                creative content. We'll support you in building an online
                community and turning your passion into a business. Join a
                network of like-minded entrepreneurs and chart your own path to
                success with Amway.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-spacing mb-5">
        <div className="row">
          <div className="col-lg-4">
            <div
              class="card card-style container"
            >
              <div class="card-title ms-3 my-3 title-opacity">Commission</div>
              <img
                src={Commission}
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
                  <h3 className="w-75 mt-5"> Earn 10% </h3>
                  <h3 className="w-75 "> for every </h3>
                  <h3 className="w-75 "> product sold</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              class="card card-style container"
            >
              <div class="card-title ms-3 my-3 title-opacity">
                Performance Bonuses
              </div>
              <img
                src={Bonuses}
                className="position-absolute w-75"
                style={{
                  objectFit: "cover",
                  zIndex: "-1",
                  opacity: "0.8",
                  marginLeft: "130px",
                }}
              />
              <div className="card-body mt-5">
                <h3 className="w-75 mt-5"> Grow your </h3>
                <h3 className="w-75 ">business, earn </h3>
                <h3 className="w-75 "> bigger bonuses</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              class="card card-style container"
            >
              <div class="card-title ms-3 my-3 title-opacity">Incentives</div>
              <img
                src={Incentives}
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
                <h3 className="w-75 mt-5"> Hit your </h3>
                <h3 className="w-75 ">milestones, get </h3>
                <h3 className="w-75 "> extra rewards</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
