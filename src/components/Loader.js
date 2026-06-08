"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Loader.module.css';

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const percentageRef = useRef(null);
  const ringRef = useRef(null);
  const expandingCircleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Start with scale 1 but completely clipped from the top
    gsap.set(expandingCircleRef.current, { scale: 1, clipPath: "inset(100% 0 0 0)" });

    const progressObj = { val: 0 };
    
    // Simulate loading progress 0 to 100
    tl.to(progressObj, {
      val: 100,
      duration: 2.0, // 2 seconds loading phase
      ease: "power2.inOut",
      onUpdate: () => {
        if (percentageRef.current) {
          percentageRef.current.innerText = Math.round(progressObj.val);
        }
        if (ringRef.current) {
          // Circumference of r=23 is ~144.5
          const offset = 144.5 - (progressObj.val / 100) * 144.5;
          ringRef.current.style.strokeDashoffset = offset;
        }
        if (expandingCircleRef.current) {
          // Fill from bottom to top like liquid
          expandingCircleRef.current.style.clipPath = `inset(${100 - progressObj.val}% 0 0 0)`;
        }
      }
    })
    // Hide text and ring slightly after reaching 100%
    .to([percentageRef.current?.parentElement, ringRef.current?.parentElement], {
      opacity: 0,
      duration: 0.2,
      ease: "power2.inOut"
    }, "+=0.05")
    // Expand the inner white circle to cover screen
    .to(expandingCircleRef.current, {
      scale: 50, // massive scale (50x50 * 50 = 2500px)
      duration: 1.0, // 1 second blow up
      ease: "power4.inOut"
    }, "-=0.1")
    // Fade out the entire loader container to reveal the site
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut"
    }, "-=0.2");

  }, [onComplete]);

  return (
    <div className={styles.loaderContainer} ref={containerRef}>
      <div className={styles.loaderContent}>
        <div className={styles.expandingCircle} ref={expandingCircleRef}></div>
        <svg className={styles.progressRing} width="50" height="50">
          <circle 
            className={styles.progressRingTrack}
            cx="25" cy="25" r="23"
          />
          <circle 
            className={styles.progressRingCircle}
            cx="25" cy="25" r="23"
            ref={ringRef}
          />
        </svg>
        <div className={styles.percentage}><span ref={percentageRef}>0</span>%</div>
      </div>
    </div>
  );
}
