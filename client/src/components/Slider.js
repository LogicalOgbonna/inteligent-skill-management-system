import React from "react";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="csslider infinity" id="slider1">
      <input type="radio" name="slides" id="slides_1" />
      <input type="radio" name="slides" id="slides_2" />
      <input type="radio" name="slides" id="slides_3" />
      <ul className="banner_slide_bg">
        <li>
          <div className="container-fluid">
            <div className="w3ls_banner_txt">
              <h3 className="b-w3ltxt text-capitalize mt-md-4">
                Personality Test
              </h3>
              <h4 className="b-w3ltxt text-capitalize mt-md-2">
                Know Who You Are
              </h4>
              <p className="w3ls_pvt-title my-3">
                Take our Personality Test and get a “freakishly accurate”
                description of who you are and why you do things the way you do.
              </p>
              <a href="#about" className="btn btn-banner my-3">
                Read More
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="container-fluid">
            <div className="w3ls_banner_txt">
              <h3 className="b-w3ltxt text-capitalize mt-md-4">Career Path</h3>
              <h4 className="b-w3ltxt text-capitalize mt-md-2">
                Know Your Path
              </h4>
              <p className="w3ls_pvt-title my-3">
                Your career path will be as individual as you are. You may take
                a very different route than your colleagues and wind up in the
                same spot.
              </p>
              <a href="#about" className="btn btn-banner my-3">
                Read More
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="container-fluid">
            <div className="w3ls_banner_txt">
              <h3 className="b-w3ltxt text-capitalize mt-md-4">
                You Need A Copy
              </h3>
              <h4 className="b-w3ltxt text-capitalize mt-md-2">Get A Copy</h4>
              <p className="w3ls_pvt-title my-3">
                Print out a copy of your Personality
              </p>
              <a href="#about" className="btn btn-banner my-3">
                Read More
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div className="navigation">
        <div>
          <label htmlFor="slides_1" />
          <label htmlFor="slides_2" />
          <label htmlFor="slides_3" />
        </div>
      </div>
    </div>
  );
}
