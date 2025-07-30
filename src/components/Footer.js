import React from "react";

const Footer = () => (
  <footer className="inverse-wrapper">
    <div className="container inner">
      <div className="row">
        <div className="col-sm-4">
          <h3 className="section-title widget-title">Elsewhere</h3>
          <p>Vestibulum id ligula porta felis euismod semper.</p>
          <ul className="social">
            <li>
              <a href="#">
                <i className="icon-s-rss"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-s-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-s-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-s-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-s-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-s-forrst"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h3 className="section-title widget-title">Subscribe</h3>
          <p>Cum sociis natoque penatibus et magnis dis parturient.</p>
          <div className="newsletter-wrapper">
            <div id="mc_embed_signup2" className="newsletter-form">
              <form
                action="http://elemisfreebies.us3.list-manage1.com/subscribe/post?u=ddc180777a163e0f9f66ee014&amp;id=056957de28"
                method="post"
                id="mc-embedded-subscribe-form2"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL2"
                  placeholder="Enter email"
                  required
                  defaultValue=""
                />
                <div style={{ position: "absolute", left: "-5000px" }}>
                  <input
                    type="text"
                    name="b_ddc180777a163e0f9f66ee014_056957de28"
                    defaultValue=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Join"
                    name="subscribe"
                    id="mc-embedded-subscribe2"
                    className="btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <h3 className="section-title widget-title">Tags</h3>
          <div className="tagcloud">
            <a href="#" style={{ fontSize: "9pt" }}>
              blogroll
            </a>
            <a href="#" style={{ fontSize: "19pt" }}>
              daily
            </a>
            <a href="#" style={{ fontSize: "9pt" }}>
              dialog
            </a>
            <a href="#" style={{ fontSize: "9pt" }}>
              gallery
            </a>
            <a href="#" style={{ fontSize: "10pt" }}>
              journal
            </a>
            <a href="#" style={{ fontSize: "9pt" }}>
              link
            </a>
            <a href="#" style={{ fontSize: "12pt" }}>
              motion
            </a>
            <a href="#" style={{ fontSize: "9pt" }}>
              music
            </a>
            <a href="#" style={{ fontSize: "20pt" }}>
              photo
            </a>
            <a href="#" style={{ fontSize: "13pt" }}>
              professional
            </a>
            <a href="#" style={{ fontSize: "16pt" }}>
              quotation
            </a>
            <a href="#" style={{ fontSize: "9pt" }}>
              show
            </a>
            <a href="#" style={{ fontSize: "15pt" }}>
              sound
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <div className="widget">
            <img
              src="style/images/logo.png"
              data-at2x="style/images/logo@2x.png"
              alt=""
            />
            <div className="divide20"></div>
            <p>
              Aenean lacinia bibendum nulla sed leo posuere erat a ante
              venenatis dapibus posuere velit aliquet. Donec ullamcorper metus
              auctor fringi. Nullam quis risus.
            </p>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="widget">
            <h3 className="section-title widget-title">Popular Posts</h3>
            <ul className="post-list">
              <li>
                <h6>
                  <a href="blog-post.html">
                    Vivamus sagittis lacus vel augue metus
                  </a>
                </h6>
                <span className="meta date">3th Oct 2012</span>
              </li>
              <li>
                <h6>
                  <a href="blog-post.html">Scelerisque nisl consectetur et</a>
                </h6>
                <span className="meta date">28th Sep 2012</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="widget">
            <h3 className="section-title widget-title">Get In Touch</h3>
            <p>
              Fusce dapibus, tellus commodo, tortor mauris condimentum utellus
              fermentum.
            </p>
            <div className="contact-info">
              <i className="icon-location"></i> Moonshine St. 14/05 Light City
              <br />
              <i className="icon-phone"></i>+00 (123) 456 78 90 <br />
              <i className="icon-mail"></i>
              <a href="mailto:first.last@email.com">first.last@email.com</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="widget">
            <h4 className="widget-title">Categories</h4>
            <ul className="circled">
              <li>
                <a href="#">Web Design (21)</a>
              </li>
              <li>
                <a href="#">Photography (19)</a>
              </li>
              <li>
                <a href="#">Graphic Design (16)</a>
              </li>
              <li>
                <a href="#">Manipulation (15)</a>
              </li>
              <li>
                <a href="#">Motion Graphics (12)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright pull-left">
        © 2015 Hygge. All rights reserved. Theme by{" "}
        <a href="http://elemisfreebies.com">elemis</a>.
      </p>
      <ul className="footer-menu pull-right">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
