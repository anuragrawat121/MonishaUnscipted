"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Hide cursors initially until first mouse move
    gsap.set([circleRef.current, dotRef.current], { opacity: 0 });

    const mouse = { x: 0, y: 0 };
    const lastMouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 }; // Ring trailing position
    
    const state = { baseScale: 1 }; // Ring scale
    const dotState = { baseScale: 1 }; // Dot scale
    
    let isActive = false;
    let lastAngle = 0; // Ring angle
    let lastDotAngle = 0; // Dot angle

    // Use GSAP quickSetters for the outer circle
    const xSet = gsap.quickSetter(circleRef.current, "x", "px");
    const ySet = gsap.quickSetter(circleRef.current, "y", "px");
    const rotSet = gsap.quickSetter(circleRef.current, "rotation", "deg");
    const scaleXSet = gsap.quickSetter(circleRef.current, "scaleX");
    const scaleYSet = gsap.quickSetter(circleRef.current, "scaleY");

    // Use GSAP quickSetters for the inner dot
    const dotXSet = gsap.quickSetter(dotRef.current, "x", "px");
    const dotYSet = gsap.quickSetter(dotRef.current, "y", "px");
    const dotRotSet = gsap.quickSetter(dotRef.current, "rotation", "deg");
    const dotScaleXSet = gsap.quickSetter(dotRef.current, "scaleX");
    const dotScaleYSet = gsap.quickSetter(dotRef.current, "scaleY");

    const handleMouseMove = (e) => {
      if (!isActive) {
        gsap.to([circleRef.current, dotRef.current], { opacity: 1, duration: 0.3 });
        pos.x = e.clientX;
        pos.y = e.clientY;
        lastMouse.x = e.clientX;
        lastMouse.y = e.clientY;
        isActive = true;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Update dot position instantly
      dotXSet(e.clientX);
      dotYSet(e.clientY);
    };

    const handleMouseDown = () => {
      // Click feedback
      gsap.to(state, { baseScale: 0.5, duration: 0.2, ease: "power2.out" });
      gsap.to(dotState, { baseScale: 1.5, duration: 0.2, ease: "power2.out" });
    };

    const handleMouseUp = () => {
      // Release feedback
      gsap.to(state, { baseScale: 1, duration: 0.2, ease: "power2.out" });
      gsap.to(dotState, { baseScale: 1, duration: 0.2, ease: "power2.out" });
    };

    const loop = () => {
      if (isActive) {
        // --- OUTER RING PHYSICS ---
        // Interpolate position
        pos.x += (mouse.x - pos.x) * 0.15;
        pos.y += (mouse.y - pos.y) * 0.15;

        const dx = mouse.x - pos.x;
        const dy = mouse.y - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const stretch = Math.min(distance * 0.01, 0.6);
        if (distance > 0.1) {
          lastAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        }

        xSet(pos.x);
        ySet(pos.y);
        rotSet(lastAngle);
        scaleXSet((1 + stretch) * state.baseScale);
        scaleYSet((1 - stretch) * state.baseScale);

        // --- INNER DOT PHYSICS ---
        // Calculate instantaneous velocity for the dot
        const dotDx = mouse.x - lastMouse.x;
        const dotDy = mouse.y - lastMouse.y;
        const dotDistance = Math.sqrt(dotDx * dotDx + dotDy * dotDy);
        
        // Squeeze amount based on instantaneous frame-by-frame speed
        const dotStretch = Math.min(dotDistance * 0.015, 0.4); 
        
        if (dotDistance > 0.1) {
          lastDotAngle = Math.atan2(dotDy, dotDx) * (180 / Math.PI);
        }

        dotRotSet(lastDotAngle);
        dotScaleXSet((1 + dotStretch) * dotState.baseScale);
        dotScaleYSet((1 - dotStretch) * dotState.baseScale);

        // Update last mouse for the next frame
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
      }
    };

    gsap.ticker.add(loop);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      gsap.ticker.remove(loop);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className={styles.dot} ref={dotRef}></div>
      <div className={styles.circle} ref={circleRef}></div>
    </>
  );
}
