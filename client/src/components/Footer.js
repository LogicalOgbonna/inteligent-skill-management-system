import React from "react";
import propTypes from "prop-types";

import "./Footer.css";

export default function Footer({ isAuthenticated }) {
  return (
    <footer className="mt-5">
      <section className="copyright mt-5">
        <div className="container py-4">
          <div className="row bottom">
            <ul className="col-lg-6 links p-0">
              <li>
                <a href="#home" className="">
                  Hone
                </a>
              </li>
              <li>
                <a href="#services" className="">
                  Services{" "}
                </a>
              </li>
              {!isAuthenticated && (
                <li>
                  <a href="#home" className="">
                    Login
                  </a>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <a href="#home" className="">
                    Logout
                  </a>
                </li>
              )}
            </ul>
            <div className="col-lg-6 copy-right p-0">
              <p className="">
                © 2019 CAS. All rights reserved | Design by
                <a href="http://suretradebls.com"> SureTrade NIG.</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="move-top text-right">
        <a href="#home" className="move-top">
          <span className="fa fa-angle-up  mb-3" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};
