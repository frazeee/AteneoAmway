import "./educationPage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import leftImage from "../../images/leftCard.webp";
import rightImage from "../../images/rightCard.webp";
import heroBG from "../../images/educationHero.jpg";
import lightAndMoney from "../../images/lightAndMoney.png";
import { Link } from "react-router-dom";

const educationPage = () => {
  return (
    <>
      <div className="bg">
        <Navbar />
        <section id="hero">
          <img src={heroBG} className="img-fluid hero-section" />
          <div className="container hero-text">
            <p className="header fw-bold">Your Partner to Success</p>
            <p className="hero-subheading">
              Amwayᵀᴹ Education is committed to helping you grow your business
              quickly and effectively through boosting leadership, sales, and
              innovation.
            </p>
            <Link
              to="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiI3MqHmvOFAxXxzDgGHcZcDk0QFnoECCIQAQ&url=https%3A%2F%2Fwww.amway.com%2Fen_US%2Famway-education&usg=AOvVaw32r7wcA6Z4JmHpevSTN8On&opi=89978449"
              className="btn btn-primary"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section>
          <div className="container ">
            <div className="row container-spacing relcon">
              <img src={lightAndMoney} className="lightnmoneyimg" />
              <div className="col-lg-6 d-flex"></div>
              <div className="col-lg-6 d-flex">
                <div className="my-auto">
                  <h1 className="fw-bolder heading">Learn from the best</h1>
                  <div className="mt-3">
                    <h5 className="subtitle">
                      Amwayᵀᴹ Education empowers you to reach your goals with
                      courses inspired by the achievements of successful Amway
                      Business Owners (ABOs).
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="row section-spacing">
              <div className="col-lg-6 d-flex">
                <div className="my-auto">
                  <h1 className="fw-bolder heading">
                    Empower yourself, empower your business
                  </h1>
                  <div className="mt-3">
                    <h5 className="subtitle">
                      In five different languages, learn more about income
                      generation, marketing, and product development through our
                      essential courses.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex"></div>
            </div>

            <div className="row section-spacing">
              <div className="col-lg-6 d-flex"></div>
              <div className="col-md-12 col-lg-6 d-flex">
                <div className="my-auto">
                  <h1 className="fw-bolder heading">Anytime, anywhere</h1>
                  <div className="mt-3">
                    <h5 className="subtitle">
                      Amwayᵀᴹ gives you total freedom and flexibility. Our
                      courses are always online, easy access from your
                      fingertips.
                    </h5>
                    <div className="mt-3 d-flex justify-content-end">
                      <Link
                        to="https://players.brightcove.net/1437117782001/HJSr7bMWb_default/index.html?videoId=4983462661001"
                        className="btn btn-primary me"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mb-5" style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={leftImage} style={{ width: "600px", height: "300px" }} />
          </div>
          <div className="col-12 col-lg-6">
            <img src={rightImage} style={{ width: "600px", height: "300px" }} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default educationPage;
