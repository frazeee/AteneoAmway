import "./landingPage.css";
import Navbar from "../../components/Navbar";
import Marquee from "react-fast-marquee";
import Achievers from "../../images/marqueeLogos/achievers.png";
import Artstudio from "../../images/marqueeLogos/artstudio.png";
import GHLogo from "../../images/marqueeLogos/GH-logo.png";
import Nutrilite from "../../images/marqueeLogos/nutrilite.png";
import Satinique from "../../images/marqueeLogos/satinique.png";
import XSLogo from "../../images/marqueeLogos/xs.png";

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
      </div>
      <div className="container-spacing py-5 d-flex flex-column">
          <h1 className="text-center py-3">Partnered With</h1>
          <Marquee style={{width:"98vw"}} className="mx-auto">
            {imageData.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className="img-fluid mx-5" width={150} height={150} />
            ))}
          </Marquee>
        </div>
    </div>
  );
};

export default LandingPage;
