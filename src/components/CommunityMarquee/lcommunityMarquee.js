import "../../pages/landingPage/landingPage.css";
import Marquee from "react-fast-marquee";

import Community1 from "../../images/communityMarquee/community1.jpg";
import Community2 from "../../images/communityMarquee/community2.jpg";
import Community3 from "../../images/communityMarquee/community3.jpg";
import Community4 from "../../images/communityMarquee/community4.jpg";
import Community5 from "../../images/communityMarquee/community5.jpg";
import Community6 from "../../images/communityMarquee/community6.jpg";

const CommunityMarquee = () => {
  return (
    <>
      <div className="container section-spacing">
        <h1 className="fw-bolder subheading mb-3">
          Join a thriving community.
        </h1>
      </div>
      <div className="community-section">
        <Marquee style={{ height: "700px" }}>
          <div>
            <img
              src={Community3}
              className="rounded mb-5 mx-3"
              alt="Amway Community"
              style={{ maxHeight: "550px" }}
            />
          </div>

          <div class="d-flex flex-column mx-3">
            <div class="card text-center community-card container">
              <div class="card-title mt-5">
                <h1 className="subheading" style={{ color: "#15E9D5" }}>
                  #1
                </h1>{" "}
                <h3>
                  2023 Direct Selling <p>Global 100</p>
                </h3>
              </div>
            </div>
            <div class="h-100">
              <div class=" community-card ">
                <img
                  src={Community1}
                  className="w-100 h-100 rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div class="d-flex flex-column mx-3">
            <div class="h-100">
              <div class=" community-card" style={{ height: "100%" }}>
                <img
                  src={Community2}
                  className="w-100 h-100 rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div class="card text-center community-card container">
              <div class="card-title mt-5">
                <h1 className="subheading" style={{ color: "#15E9D5" }}>
                  1M+
                </h1>{" "}
                <h3>
                  Amway Business Owners <p>around the world</p>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <img
              src={Community4}
              className="rounded mb-5 mx-3"
              alt="Amway Community"
              style={{ maxHeight: "550px" }}
            />
          </div>

          <div class="d-flex flex-column mx-3">
            <div class="card text-center community-card container">
              <div class="card-title mt-5">
                <h1 className="subheading" style={{ color: "#15E9D5" }}>
                  800+
                </h1>{" "}
                <h3>
                  employees are innovation<p>and science experts</p>
                </h3>
              </div>
            </div>
            <div class="h-100">
              <div class=" community-card ">
                <img
                  src={Community5}
                  className="w-100 h-100 rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div class="d-flex flex-column mx-3">
            <div class="h-100">
              <div class=" community-card ">
                <img
                  src={Community6}
                  className="w-100 h-100 rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div class="card text-center community-card container">
              <div class="card-title mt-5">
                <h1 className="subheading" style={{ color: "#15E9D5" }}>
                  750+
                </h1>{" "}
                <h3>
                  patents and <p>patents pending</p>
                </h3>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default CommunityMarquee;
