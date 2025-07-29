import React from "react";

const Footer = ({ navigateTo }) => (
  <footer className="bg-dark text-light py-5 px-3 mt-auto rounded-top">
    <div className="container">
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <h5>Elsewhere</h5>
          <ul className="list-inline">
            {["RSS", "Twitter", "Facebook", "LinkedIn"].map((item) => (
              <li key={item} className="list-inline-item">
                <a href="#" className="text-light">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Subscribe</h5>
          <form>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Enter email"
              required
            />
            <button type="submit" className="btn btn-success w-100">
              Join
            </button>
          </form>
        </div>
        <div className="col-md-3">
          <h5>Tags</h5>
          {["blogroll", "daily", "journal", "gallery", "motion"].map((tag) => (
            <span key={tag} className="badge bg-secondary m-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="col-md-3">
          <h5>About Hygge</h5>
          <img
            src="https://placehold.co/100x30/374151/FFFFFF?text=Logo"
            alt="Hygge Logo"
            className="mb-2"
          />
          <p className="small">
            Aenean lacinia bibendum nulla sed leo... Posuere erat a ante
            venenatis dapibus.
          </p>
        </div>
      </div>
      <hr className="border-secondary" />
      <div className="d-flex justify-content-between align-items-center">
        <span className="small">
          © 2025 Hygge. Theme by{" "}
          <a href="#" className="text-success">
            elemis
          </a>
          .
        </span>
        <ul className="nav">
          {["home", "about", "portfolio", "blog", "contact"].map((item) => (
            <li className="nav-item" key={item}>
              <a
                href="#"
                onClick={() => navigateTo(item)}
                className="nav-link text-light"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
