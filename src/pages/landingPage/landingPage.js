import "./landingPage.css";
import Navbar from "../../components/Navbar";
import Marquee from "react-fast-marquee";

const LandingPage = () => {
  return (
    <div className="bg">
      <Navbar />
      <div className="container container-spacing">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="fw-bolder header">BE IN BUSINESS YOURSELF,</h1>
            <h1 className="fw-bolder header">BUT NEVER BY YOURSELF</h1>
            <div className="mt-3">
              <h5>
                Become an Amway Business Owner and unlock your full potential.
                Create financial freedom and make a positive impact.
              </h5>
            </div>
            <button className="btn btn-primary mt-4">Register Now</button>
          </div>
          <div className="col-lg-4">
            <h1>IMAGE HERE</h1>
          </div>
        </div>
        <div className="container-spacing pt-5">
          <h1 className="text-center">Partnered With</h1>
          <Marquee>
          <p className="mx-5">Testing</p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
