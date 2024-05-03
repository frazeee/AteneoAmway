import "./Footer.css";
import CodeBrew from "../images/codebrew-logo.png";

const Footer = () => {
  return (
    <div class="bottom px-5 py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-left">
            <div class="copyright">
              <img className="logo pb-1" src={CodeBrew}></img>
              <a href="#" class="transition mx-1 fw-bold" style={{ textDecoration: "none", color: "#E4FDE2" }}>
                {" "}
                CodeBrew
              </a>{" "}
              | all rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
