import React from "react";
import propType from "prop-types";
import { Link } from "react-router-dom";

export default function ServiceCard({ dashboard, admin }) {
  return (
    <React.Fragment>
      {!admin ? (
        <div>
          <div className="row ml-sm-5 mt-5">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="our-services-wrapper mb-60">
                <div className="services-inner">
                  <div className="our-services-img">
                    <img src="images/s2.png" alt="" />
                  </div>
                  <div className="our-services-text">
                    <h4>Personality Test</h4>
                    <p>Know who you are, so you can know what you can do</p>
                  </div>
                </div>
                {dashboard && (
                  <Link
                    style={{
                      marginLeft: "35%"
                    }}
                    to="/personality"
                    className="btn btn-banner my-3"
                  >
                    Proceed
                  </Link>
                )}
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="our-services-wrapper mb-60">
                <div className="services-inner">
                  <div className="our-services-img">
                    <img src="images/s1.png" alt="" />
                  </div>
                  <div className="our-services-text">
                    <h4>Clear Career Path</h4>
                    <p>Know the best courses to study from your past results</p>
                  </div>
                </div>
                {dashboard && (
                  <Link
                    style={{
                      marginLeft: "35%"
                    }}
                    to="/career"
                    className="btn btn-banner my-3"
                  >
                    Proceed
                  </Link>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="our-services-wrapper mb-60">
                <div className="services-inner">
                  <div className="our-services-img">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="our-services-text">
                    <h4>Get a Copy</h4>
                    <p>
                      Get a copy of your personality and career path with a
                      click
                    </p>
                  </div>
                </div>
                {dashboard && (
                  <Link
                    style={{
                      marginLeft: "35%"
                    }}
                    to="/career"
                    className="btn btn-banner my-3"
                  >
                    Proceed
                  </Link>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="our-services-wrapper mb-60">
                {/* <div className="services-inner">
                <div className="our-services-img">
                  <img src="images/s4.png" alt="" />
                </div>
                <div className="our-services-text">
                  <h4>Study Certificate</h4>
                  <p>
                    Proin varius pellentesque nunc tincidunt ante. Init id lacus
                  </p>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="row ml-sm-5 mt-5">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="our-services-wrapper mb-60">
                <div className="services-inner">
                  <div className="our-services-img">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="our-services-text">
                    <h4>Upload Test</h4>
                    <p>Upload Personality Test Questions</p>
                  </div>
                </div>

                <Link
                  style={{
                    marginLeft: "35%"
                  }}
                  to="/upload-personality"
                  className="btn btn-banner my-3"
                >
                  Proceed
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="our-services-wrapper mb-60">
                <div className="services-inner">
                  <div className="our-services-img">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="our-services-text">
                    <h4>Upload Career</h4>
                    <p>Upload Career and their Codes</p>
                  </div>
                </div>

                <Link
                  style={{
                    marginLeft: "35%"
                  }}
                  to="/upload-career"
                  className="btn btn-banner my-3"
                >
                  Proceed
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

ServiceCard.propType = {
  dashboard: propType.string
};
