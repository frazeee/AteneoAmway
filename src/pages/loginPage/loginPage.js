import "./loginPage.css";
import headerLogo from "../../images/headerLogo.png";

const LoginPage = () => {
  return (
    <div className="bg container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-sm-8 col-md-8 col-lg-6 col-xl-5 mx-auto">
          {" "}
          <div className="card card-styling align-middle">
            <div className="card-body">
              <a href="/">
                <img src={headerLogo} className="py-2 mx-auto d-block" />
              </a>
              <hr style={{ color: "white" }} className="me-5 w-100" />
              <div className="card-container">
                <h3
                  className="card-title pb-3 fw-bolder"
                  style={{ color: "white" }}
                >
                  Welcome Back!
                </h3>

                <form>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label fw-semibold fs-4"
                    >
                      Amway ID
                    </label>
                    <input
                      type="email"
                      className="form-control form-input-bg"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label fw-semibold fs-4"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-input-bg"
                      id="exampleInputPassword1"
                      style={{ backgroundColor: "none" }}
                    />
                  </div>
                  <div className="text-center mt-5">
                    <button type="submit" className="btn btn-primary w-25 ">
                      Sign In
                    </button>
                    <p className="my-3 ">
                      <a href="#" className="link-primary ">
                        Forgot Password?
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
