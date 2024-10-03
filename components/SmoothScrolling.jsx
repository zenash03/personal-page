"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

function SmoothScrolling({ children }) {
  const lenisRef = useRef();

  
  // GSAP and Lenis integration for scrolling
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    
    gsap.ticker.add(update); // Add GSAP ticker to update Lenis scrolling
    
    ScrollTrigger.normalizeScroll(true)
    ScrollTrigger.config({ ignoreMobileResize: true})
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false} // Set to false since we are using GSAP's RAF
      root
      options={{ duration: 1, smoothTouch: true, touchMultiplier: 2 }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;