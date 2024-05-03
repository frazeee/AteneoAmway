import "./testimonials.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { LINKS } from "../../constants/global-routes";

import Facebook from "../../images/testimonials/fb.png"
import Join from "../../images/testimonials/Join.png"
import LightBulb from "../../images/testimonials/lightBulb.png"
import GroupPeople from "../../images/testimonials/groupPeople.png"

const Testimonials = () => {
  return (
    <div className="bg">
        <Navbar />
        <div className="container container-spacing cont-head">
            <div className="row">
            <div className="col p-5">
                <h1 className="fw-bolder header">HEAR BUSINESS</h1>
                <h1 className="fw-bolder header">OWNERS TESTIMONIALS</h1>
                {/* <div className="sub-desc">
                    Gen Z members flock to Amway for diverse reasons.
                    Some crave entrepreneurial opportunities and vibrant communities, while others are captivated by top-notch products and income potential.
                    No matter the drive, Amway is the ultimate destination for young entrepreneurs seeking ownership and success.
                </div> */}
            </div>
            </div>
        </div>
        
        {/* Video */}
        <div className="cont cont-vid">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item vid-frame" src="https://www.youtube.com/embed/xAmdrU0ZsdA"></iframe>
            </div>
        </div>

        {/* 1st Row */}
        <div className="container section-spacing">
            <div className="row">
                {/* Fergus */}
                <div className="col-lg-4">
                    <div class="card card-style container cont-card">
                        <img className="dbAsset" src={Facebook} width={60}></img>
                        <div class="card-title ms-3 my-3 title-opacity">Fergus Miles Ampuan</div>
                        <div className="card-body">
                        <div className="">
                            <h3 className="card-desc">Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Phasellus quis arcu dui.</h3>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Sophie */}
                <div className="col-lg-4">
                    <div class="card card-style container cont-card">
                        <img className="dbAsset" src={Facebook} width={60}></img>
                        <div class="card-title ms-3 my-3 title-opacity">Jeanna Sophia Visca</div>
                        <div className="card-body">
                            <h3 className="card-desc">Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Phasellus quis arcu dui.</h3>
                        </div>
                    </div>
                </div>
                {/* Zeke */}
                <div className="col-lg-4">
                    <div class="card card-style container cont-card">
                        <img className="dbAsset" src={Facebook} width={60}></img>
                        <div class="card-title ms-3 my-3 title-opacity">Ezekiel Fallarcuna</div>
                        <div className="card-body">
                            <h3 className="card-desc">Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Phasellus quis arcu dui.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 2nd Row */}
        <div className="container">
            <div className="row">
                {/* Kyle */}
                <div className="col-lg-4">
                    <div class="card card-style container cont-card2">
                        <img className="dbAsset" src={Facebook} width={60}></img>
                        <div class="card-title ms-3 my-3 title-opacity">Kyle Justin Uy</div>
                        <div className="card-body">
                        <div className="">
                            <h3 className="card-desc">Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Phasellus quis arcu dui.</h3>
                        </div>
                        </div>
                    </div>
                </div>
                {/* RJ */}
                <div className="col-lg-4">
                    <div class="card card-style container cont-card2">
                        <img className="dbAsset" src={Facebook} width={60}></img>
                        <div class="card-title ms-3 my-3 title-opacity">Rizjan Nathaniel Cepe</div>
                        <div className="card-body">
                            <h3 className="card-desc">Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Phasellus quis arcu dui.</h3>
                        </div>
                    </div>
                </div>
                {/* Elijah */}
                <div className="col-lg-4">
                    <div class="card card-style container cont-card2">
                        <img className="dbAsset" src={Facebook} width={60}></img>
                        <div class="card-title ms-3 my-3 title-opacity">Elijah Regidor</div>
                        <div className="card-body">
                            <h3 className="card-desc">Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Phasellus quis arcu dui.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h1 class="text-center my-5"> WHAT ARE YOU WAITING FOR</h1>

        <div className="container">
            <div className="row">
                {/* Kyle */}
                <div className="col-lg-4"> 
                    <div className="card-body">
                    <div className="text-center">
                        <img className="dbPics1" src={GroupPeople}></img>
                        <h3 className="card-desc2">Embrace entrepreneurship and build a thriving community with Amway.</h3>
                    </div>
                    </div>
                </div>
                {/* Kyle */}
                <div className="col-lg-4"> 
                    <div className="card-body">
                    <div className="text-center">
                        <img className="dbPics2" src={LightBulb}></img>
                        <h3 className="card-desc2">Discover the joy of sharing top-notch products with Amway.</h3>
                    </div>
                    </div>
                </div>
                {/* Kyle */}
                <div className="col-lg-4 "> 
                    <div className="card-body">
                    <div className="text-center">
                        <img className="dbPics3" src={Join}></img>
                        <h3 className="card-desc2">Join Amway today and turn your passion into profit</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  );
};

export default Testimonials;
