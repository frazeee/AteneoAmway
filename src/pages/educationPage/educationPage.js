import "./educationPage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import leftImage from "../../images/leftCard.webp";
import rightImage from "../../images/rightCard.webp";
import heroBG from "../../images/educationHero.jpg";

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
            <button className="btn btn-primary">Learn More</button>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row container-spacing">
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
                      <button className="btn btn-primary">Learn More</button>
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
