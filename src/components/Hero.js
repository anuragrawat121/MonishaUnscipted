"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";
import CircularText from "./CircularText";

export default function Hero() {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Entrance animations
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      wrapperRef.current,
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5, ease: "power4.inOut" }
    )
    .fromTo(
      textRefs.current,
      { y: 150, opacity: 0, skewY: 7, scale: 0.9 },
      { y: 0, opacity: 1, skewY: 0, scale: 1, duration: 1.8, stagger: 0.15, ease: "expo.out" },
      "-=0.5" // adjusted overlap since the circle animation was removed
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={styles.noiseOverlay}></div>
      
      <div className={styles.backgroundArea} ref={wrapperRef}>
        {/* Layout grid removed as requested */}

        {/* Massive Overlapping Typography */}
        <div className={styles.massiveTextContainer}>
          <div className={styles.lineOverflow}>
            <h1 ref={addToRefs} className={styles.headline}>
              {"Monisha".split("").map((char, i) => (
                <span key={i} className={styles.letter}>{char}</span>
              ))}
            </h1>
          </div>
          <div className={styles.lineOverflow}>
            <h1 ref={addToRefs} className={styles.headline}>
              {"bahuguna".split("").map((char, i) => (
                <span key={i} className={styles.letter}>{char}</span>
              ))}
            </h1>
          </div>
        </div>

        {/* Small Summary */}
        <div className={styles.summaryContainer}>
          <p className={styles.summary}>
            Strategic communications and public relations professional with 8+ years of experience designing and delivering multi-channel campaigns.
          </p>
        </div>

      </div>
    </section>
  );
}
