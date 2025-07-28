import React, { useEffect, useState } from "react";
import styles from "../styles/HeroSlider.module.css";

const slides = [
  {
    bg: "/slider-bg1.jpg",
    title: "QUALITY. FLEXIBILITY. CUSTOMIZABILITY",
    subtitle:
      "great solution for your business, portfolio, blog or any other purpose website",
    button: { label: "PURCHASE NOW", link: "#" },
  },
  {
    bg: "/slider-bg2.jpg",
    title: "Build your professional website",
    subtitle: "Create a unique website easily with the help of tons of features",
    button: { label: "VIEW FEATURES", link: "#" },
  },
  {
    bg: "/slider-bg3.jpg",
    title: (
      <>
        Free updates & <br /> premium support
      </>
    ),
    subtitle: "You will have access to all updates and free support",
    button: { label: "PURCHASE NOW", link: "#" },
    align: "left",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(
      () => setCurrent((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className={styles.slider}>
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`${styles.slide} ${idx === current ? styles.active : ""}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          <div className={styles.overlay} />
          <div
            className={`${styles.content} ${
              slide.align === "left" ? styles.left : styles.center
            }`}
          >
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            {slide.button && (
              <a className={styles.button} href={slide.button.link}>
                {slide.button.label}
              </a>
            )}
          </div>
        </div>
      ))}
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}
