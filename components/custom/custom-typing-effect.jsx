"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function CustomTypingEffect({
  title = "",
  text = ["Developer"],
  duration = 200,
  className,
  effectClassName = ""
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const currentText = text[currentIndex];

  useEffect(() => {
    let typingEffect;

    if (isTyping) {
      typingEffect = setInterval(() => {
        setDisplayedText((prev) => {
          const nextIndex = prev.length + 1;
          if (nextIndex <= currentText.length) {
            return currentText.substring(0, nextIndex);
          } else {
            clearInterval(typingEffect);
            setIsTyping(false);
            return prev; // Keep the full text displayed
          }
        });
      }, duration);
    } else {
      typingEffect = setInterval(() => {
        setDisplayedText((prev) => {
          const nextIndex = prev.length - 1;
          if (nextIndex >= 0) {
            return currentText.substring(0, nextIndex);
          } else {
            clearInterval(typingEffect);
            setIsTyping(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length); // Move to the next text
            return ""; // Reset displayed text for the next typing
          }
        });
      }, duration);
    }

    return () => clearInterval(typingEffect);
  }, [isTyping, currentText, duration, text]);

  return (
    <div className={cn("tracking-[-0.02em] drop-shadow-sm", className)}>
      {title} <span className={effectClassName}> {displayedText} </span>
    </div>
  );
}