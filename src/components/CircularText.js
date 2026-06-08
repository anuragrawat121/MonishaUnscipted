"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./CircularText.module.css";

export default function CircularText({ text }) {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const characters = text.split("");
  const degree = 360 / characters.length;

  return (
    <div className={styles.circularText} ref={circleRef}>
      {characters.map((char, i) => (
        <span
          key={i}
          className={styles.char}
          style={{ transform: `rotate(${i * degree}deg)` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
