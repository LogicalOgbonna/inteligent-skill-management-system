import React from "react";
import "./Holland.css";
import { Link } from "react-router-dom";

export default function Holland({ questions }) {
  return (
    <div className="container">
      <div className="holland">
        <div className="row mb-0">
          <div className="col-md-10 offset-1">
            <div className="jumbotron pt-3 pb-3 mt-2 text-justify header">
              <h1 className="text-muted mb-3 text-uppercase">Background</h1>
              <p className="text-muted">
                The Holland Occupational Themes is a theory of personality that
                focuses on career and vocational choice. It groups people on the
                basis of their suitability for six different categories of
                occupations. The six types yield the RIASEC acronym, by which
                the theory is also commonly known. The theory was developed by
                John L. Holland over the course of his career, starting in the
                1950s. The typology has come to dominate the field of career
                counseling and has been incorporated into most of the popular
                assessments used in the field. The RIASEC Markers from the
                Interest Item Pool were developed by{" "}
                <a href="https://doi.org/10.1016/j.jvb.2007.12.002">
                  developed by Liao, Armstrong and Rounds (2008){" "}
                </a>{" "}
                for use in psychological research as a public domain alternative
                to the usual assessments which are marketed commercially.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-0">
          <div className="col-md-6">
            <div className="jumbotron  pt-3 pb-3 mt-2 text-justify">
              <h1 className="text-muted mb-3 text-uppercase">
                Test instruction
              </h1>
              <p className="text-muted">
                The test consists of {questions.length} questions that you will
                have to rate by how much you would enjoy performing each on a
                scale of (1) dislike (2) slightly dislike (3) neither like not
                dislike (4) slightly enjoy (5) enjoy. The test will take most
                five to ten minutes to complete.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="jumbotron mb-5 pt-3 pb-3 mt-2 text-justify">
              <h1 className="text-muted mb-3 text-uppercase">Participation</h1>
              <p className="text-muted">
                This test is provided for educational and entertainment use. It
                can also be used as psychological advice for students wishing to
                know their career path.
              </p>
              <p className="text-muted">
                Also, your responses may be recorded and anonymously used for
                research
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 offset-5">
            <Link to="/test" className="btn btn-primary">
              Start Test Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
