import './Footer.css'
import CodeBrew from "../images/codebrew-logo.png"

const Footer = () => {
    return(
        <div class="bottom section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-left">
                        <div class="copyright">
                            <img className="logo" src={CodeBrew}></img>
                            <a href="#" class="transition">CodeBrew</a>| all rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;