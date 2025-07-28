import React from "react";

const Hygge = () => (
  <div className="body-wrapper">
    <nav className="navbar navbar-default default">
      <div className="container">
        <div className="navbar-header">
          <div className="basic-wrapper">
            <a
              className="btn responsive-menu"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <i></i>
            </a>
            <div className="navbar-brand">
              <a href="index.html">
                <img
                  src="#"
                  srcSet="style/images/logo.png 1x, style/images/logo@2x.png 2x"
                  className="logo-light"
                  alt=""
                />
                <img
                  src="#"
                  srcSet="style/images/logo-dark.png 1x, style/images/logo-dark@2x.png 2x"
                  className="logo-dark"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            {/* Dropdown menus here */}
            {/* ... (copy your nav code from above and replace all class with className, etc.) */}
          </ul>
        </div>
      </div>
    </nav>

    {/* Preloader */}
    <div id="preloader">
      <div id="status">
        <div className="spinner"></div>
      </div>
    </div>

    {/* Main Content Sections... */}
    {/* You can continue to paste your sections here, applying the same conversions as above: 
        - class => className
        - style="..." => style={{ ... }}
        - Self close <img .../> and <input .../>
        - Remove or convert comments
    */}

    {/* Example: Video Section */}
    <div className="outer-wrap inverse-wrapper">
      <div id="video-wrap" className="video-wrap">
        <video preload="metadata" autoPlay loop id="video-office">
          <source src="style/video/office.mp4" type="video/mp4" />
          <source src="style/video/office.webm" type="video/webm" />
        </video>
        <div className="content-overlay container">
          <div className="headline text-center">
            <h2>Video Parallax</h2>
            <p className="lead"> For better visualization of your company </p>
          </div>
        </div>
      </div>
    </div>

    {/* ...Your other sections, laid out exactly as in your HTML, but as JSX, following above changes ... */}

    {/* Footer */}
    <footer className="inverse-wrapper">
      <div className="container inner">{/* ...rest of your footer... */}</div>
    </footer>

    {/* External scripts: 
        If you need to include external JS as in your HTML, add them in public/index.html
        or load them with useEffect (for advanced usage), e.g. for plugins, libraries. 
    */}
  </div>
);

export default Hygge;
