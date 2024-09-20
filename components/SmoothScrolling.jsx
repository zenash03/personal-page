"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function SmoothScrolling({ children }) {
  const lenisRef = useRef();

  // GSAP and Lenis integration for scrolling
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  // Throttled function for updating vh on resize
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Throttle to limit how often resize is called
    const throttleResize = () => {
      clearTimeout(window.resizeThrottle);
      window.resizeThrottle = setTimeout(setVh, 100);
    };

    // Initial setting of the vh
    setVh();

    // Update vh on resize
    window.addEventListener("resize", throttleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", throttleResize);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{ duration: 1, smoothTouch: true, touchMultiplier: 2 }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
