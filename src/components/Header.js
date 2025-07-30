import React from "react";

const Hygge = () => (

    <nav className="navbar navbar-default default">
      <div className="container">
        <div className="navbar-header">
          <div className="basic-wrapper">
            <a
              className="btn responsive-menu"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <i />
            </a>
            <div className="navbar-brand">
              <a href="/">
                <img
                  src="/style/images/logo.png"
                  srcSet="/style/images/logo.png 1x, /style/images/logo@2x.png 2x"
                  className="logo-light"
                  alt=""
                />
                <img
                  src="/style/images/logo-dark.png"
                  srcSet="/style/images/logo-dark.png 1x, /style/images/logo-dark@2x.png 2x"
                  className="logo-dark"
                  alt=""
                />
              </a>
            </div>
            {/* /.navbar-brand */}
          </div>
          {/* /.basic-wrapper */}
        </div>
        {/* /.navbar-header */}
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="current dropdown">
              <a
                href="#"
                className="dropdown-toggle js-activated"
                data-toggle="dropdown"
              >
                Home <span className="caret" />
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle js-activated"
                data-toggle="dropdown"
              >
                Sliders <span className="caret" />
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle js-activated"
                data-toggle="dropdown"
              >
                Headers <span className="caret" />
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle js-activated"
                data-toggle="dropdown"
              >
                Portfolio <span className="caret" />
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle js-activated"
                data-toggle="dropdown"
              >
                Blog <span className="caret" />
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle js-activated"
                data-toggle="dropdown"
              >
                Pages <span className="caret" />
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle js-activated"
                data-toggle="dropdown"
              >
                Features <span className="caret" />
              </a>
            </li>
          </ul>
          {/* /.navbar-nav */}
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container */}
    </nav>
  
);

export default Hygge;
