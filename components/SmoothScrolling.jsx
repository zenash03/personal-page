"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

function SmoothScrolling({ children }) {
  const lenisRef = useRef();

  ScrollTrigger.normalizeScroll(true)
  ScrollTrigger.config({ ignoreMobileResize: true})

  // GSAP and Lenis integration for scrolling
  useEffect(() => {
    function update(time) {
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.raf(time * 1000);
      }
    }

    gsap.ticker.add(update); // Add GSAP ticker to update Lenis scrolling
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