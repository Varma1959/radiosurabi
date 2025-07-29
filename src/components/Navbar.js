import React from "react";

const customStyles = `
  .hygge-navbar {
    background: rgba(25, 25, 25, 0.75) !important;
    backdrop-filter: blur(6px);
    z-index: 1040;
  }

  
  .navbar .nav-link {
    color: #ccc;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
  }
  .navbar .nav-link:hover,
  .navbar .nav-link.active {
    color: #fff;
  }
  .navbar .nav-link::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #34d399;
    transition: width 0.3s ease;
  }
  .navbar .nav-link:hover::after,
  .navbar .nav-link.active::after {
    width: 100%;
  }

  .dropdown-hover {
    position: relative;
  }

  .dropdown-hover .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1a1a1a;
    padding: 0;
    margin-top: 0.5rem;
    border: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    min-width: 200px;
    z-index: 1050;
  }

  .dropdown-hover:hover .dropdown-menu {
    display: block;
  }

  .dropdown-menu a {
    color: #ccc;
    padding: 10px 20px;
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.875rem;
    transition: background 0.3s, color 0.3s;
  }

  .dropdown-menu a:hover {
    background-color: #333;
     font-family: 'Montserrat';
    color: white;
  }
`;

const Navbar = ({ navigateTo }) => {
  const handleNavClick = (key) => {
    navigateTo(key);
  };

  return (
    <>
      <style>{customStyles}</style>
      <nav className="navbar navbar-expand-lg hygge-navbar py-3 fixed-top">
        <div className="container">
          <a
            className="navbar-brand fw-bold fs-3"
            href="#"
            style={{ letterSpacing: "2px" }}
            onClick={() => handleNavClick("home")}
          >
            HYGGE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto align-items-center">
              {[
                "home",
                "sliders",
                "headers",
                "portfolio",
                "blog",
                "pages",
                "features",
              ].map((key) => (
                <li className="nav-item dropdown-hover" key={key}>
                  <a
                    className="nav-link px-3"
                    href="#"
                    onClick={() => handleNavClick(key)}
                  >
                    {key.toUpperCase()}
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" onClick={() => navigateTo(`${key}-option-1`)}>
                      {key.toUpperCase()} OPTION 1
                    </a>
                    <a href="#" onClick={() => navigateTo(`${key}-option-2`)}>
                      {key.toUpperCase()} OPTION 2
                    </a>
                    <a href="#" onClick={() => navigateTo(`${key}-option-3`)}>
                      {key.toUpperCase()} OPTION 3
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
