import "./educationPage.css";
import Navbar from "../../components/Navbar";
import EducationCard from "../../components/EducationCard/EducationCard";
import AmwayPeople from "../../images/AmwayPeople.png";
import leftImage from "../../images/leftCard.webp";
import rightImage from "../../images/rightCard.webp";
import lightAndMoney from "../../images/lightAndMoney.png";

const educationPage = () => {
  return (
    <>
      <Navbar />
      <section class="educHero" id="educHero">
        <div class="educContent">
          <h1>YOUR PARTNER TO SUCCESS</h1>
          <p>
            Amwayᵀᴹ Education is committed to helping you grow your business
            quickly and effectively through boosting leadership, sales, and
            innovation.
          </p>
          <button type="button" class="btn btn-secondary my-3">
            Learn More
          </button>
        </div>
      </section>

      <div class="container my-5">
  <div class="row">
    <div class="col-12 col-lg-6 col-md-12 col-sm-12"></div>
    <div class="col-12 col-lg-6 col-md-12 col-sm-12 text-end">
      <div>
        <h1>Learn from the best</h1>
        <p>
          Amwayᵀᴹ Education empowers you to reach your goals with courses
          inspired by the achievements of successful Amway Business Owners
          ABOs.
        </p>
        <button type="button" class="btn btn-secondary">
          Watch How
        </button>
      </div>
      <img
        src={lightAndMoney}
        style={{ width: "400px", height: "400px" }}
        alt="Light and Money"
      />
    </div>
  </div>
</div>

      <div class="container my-5">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-12 col-sm-12">
            <h1>Empower yourself, empower your business</h1>
            <p>
              In five different languages, learn more about income generation,
              marketing, and product development through our essential courses.
            </p>
            <button type="button" class="btn btn-secondary">
              Get Started
            </button>
          </div>
          <div class="col-12 col-lg-6 col-md-12 col-sm-12"></div>
        </div>
      </div>

      <div class="container my-5">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-12 col-sm-12"></div>
          <div class="col-12 col-lg-6 col-md-12 col-sm-12 text-end">
            <h1>Anytime, anywhere</h1>
            <p>
              Amwayᵀᴹ gives you total freedom and flexibility. Our courses are
              always online, easy access from your fingertips.
            </p>
            <button type="button" class="btn btn-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={leftImage} style={{ width: "600px", height: "300px" }} />
          </div>
          <div className="col-12 col-lg-6">
            <img src={rightImage} style={{ width: "600px", height: "300px" }} />
          </div>
        </div>
      </div>

      {/* <EducationCard title="Contact us for more" desc="Get started >"/>
      <EducationCard title="Jumpstart your business with Amway" desc="Learn More >" image={AmwayPeople}/> */}
    </>
  );
};

export default educationPage;