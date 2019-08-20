import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="row">
      <header>
        <div className="col-md-6">
          <nav className="navbar-default pull-left">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="offcanvas"
                data-target="#side-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
          </nav>
        </div>
        <div className="col-md-6">
          <div className="header-rightside">
            <ul className="list-inline header-top pull-right">
              <li>
                <Link to="#">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#" className="icon-info">
                  <i className="fa fa-bell" aria-hidden="true" />
                  <span className="label label-primary">3</span>
                </Link>
              </li>
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src="https://www.freepnglogos.com/uploads/eagle-png-logo/onhs-eagles-png-logo-4.png"
                    alt="user"
                  />
                  <b className="caret" />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <div className="navbar-content">
                      <span>JS Krishna</span>
                      <p className="text-muted small">me@jskrishna.com</p>
                      <div className="divider" />
                      <Link to="#" className="view btn-sm active">
                        View Profile
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
