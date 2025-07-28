import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../images/logo.png";
import logoDark from "../images/logo-dark.png";

const NAV_ITEMS = [
  { name: "Home", link: "#" },
  { name: "Sliders", link: "#" },
  { name: "Headers", link: "#", active: true },
  { name: "Portfolio", link: "#" },
  { name: "Blog", link: "#" },
  { name: "Pages", link: "#" },
  { name: "Features", link: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a href="#" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logoLight} />
          <img src={logoDark} alt="Logo dark" className={styles.logoDark} />
        </a>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
        </button>
        <ul
          className={`${styles.navMenu} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.name} className={item.active ? styles.active : ""}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

    
</>
    
  );
}
