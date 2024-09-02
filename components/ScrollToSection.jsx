"use client"
import { useLenis } from "@studio-freight/react-lenis";

export function ScrollToSection({
    href,
    children,
    className
}) {
    const lenis = useLenis();
    
    const handleScroll = (sectionId) => {
        console.log(sectionId)
        const targetElement = document.getElementById(sectionId);
        if (targetElement && lenis) {
          lenis.scrollTo(targetElement);
        }
    }

    return (
        <div>
            <button
                onClick={() => handleScroll(href)}
                className={className}
            >
                {children}
            </button>
        </div>
    )
}