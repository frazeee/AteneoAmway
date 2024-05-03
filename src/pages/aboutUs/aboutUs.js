import "./aboutUs.css";
import Navbar from "../../components/Navbar";

import { Link } from "react-router-dom";
import { LINKS } from "../../constants/global-routes";

import heroBG from "../../images/aboutUs/about-hero.jpg";

const AboutUs = () => {
  return (
    <div className="bg">
      <Navbar />
      <section id="hero">
        <img src={heroBG} className="img-fluid hero-section" />
        <div className="container hero-text">
          <p className="header fw-bold">Leading the Way.</p>
          <p className="subheading">
            Amway Philippines - Transforming Lives and Empowering Entrepreneurs
            since 1997
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row container-spacing">
            <div className="col-lg-6">
              <h1>IMAGE HERE</h1>
            </div>
            <div className="col-lg-6">
              <h1 className="fw-bolder heading">Family</h1>
              <div className="mt-3">
                <h5 className="subtitle">
                  Being a company born out of a strong bond, Amway recognizes
                  the importance of family in everything we do. Once with us,
                  you become part of a global community that supports,
                  encourages and looks after one another. Since Day 1, Amway has
                  been a family business and the opportunity we provide aims to
                  help Amway Business Owners (ABOs) build a family business for
                  themselves and for generations to come.
                </h5>
              </div>
            </div>
          </div>

          <div className="row section-spacing">
            <div className="col-lg-6">
              <h1 className="fw-bolder heading">Hope</h1>
              <div className="mt-3">
                <h5 className="subtitle">
                  Being a company born out of a strong bond, Amway recognizes
                  the importance of family in everything we do. Once with us,
                  you become part of a global community that supports,
                  encourages and looks after one another. Since day 1, Amway has
                  been a family business and the opportunity we provide aims to
                  help Amway Business Owners (ABOs) build a family business for
                  themselves and for generations to come.
                </h5>
              </div>
            </div>
            <div className="col-lg-6">
              <h1>IMAGE HERE</h1>
            </div>
          </div>

          <div className="row section-spacing">
            <div className="col-lg-6">
              <h1>IMAGE HERE</h1>
            </div>
            <div className="col-lg-6">
              <h1 className="fw-bolder heading">Hope</h1>
              <div className="mt-3">
                <h5 className="subtitle">
                  A driving force at the center of humanity is hope. It gives us
                  the power to transform our lives, allowing us to dream,
                  establish goals and achieve great things. The common thread of
                  all our ABOs is their hope for a better life. We believe that
                  if given the right opportunity, everyone can build a
                  successful business for themselves. And that is why the Amway
                  opportunity is open to people from all cultures, ages and
                  education backgrounds.
                </h5>
              </div>
            </div>
          </div>

          <div className="row section-spacing">
            <div className="col-lg-6">
              <h1 className="fw-bolder heading">Freedom</h1>
              <div className="mt-3">
                <h5 className="subtitle">
                  Freedom is a life essential. It helps us to live, work,
                  achieve and grow. The opportunity that Amway offers is one
                  that appeals to people who are ready to make their own
                  decisions, set their own goals and work through these goals to
                  attain their own level of success. We make it our duty to help
                  ABOs realize the financial security they desire, so they can
                  act more freely and live the life they want.
                </h5>
              </div>
            </div>
            <div className="col-lg-6">
              <h1>IMAGE HERE</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
