import BackgroundGradientAnimation from '@/components/custom/background-gradient-animation';
import Particles from '@/components/magicui/particles';
import React from 'react';

export default function Loading() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-20 bg-black">
        <div className="relative min-h-screen w-full z-0 flex items-center justify-center pointer-events-none">
            <div className="absolute inset-0 z-0 w-full min-h-full">
                <BackgroundGradientAnimation containerClassName="w-full min-h-full"
                    gradientBackgroundStart = "rgb(7, 8, 13)"    // Black
                    gradientBackgroundEnd = "rgb(14, 28, 77)"   // Deep dark blue
                    firstColor = "48, 25, 82"                   // Purple shade
                    secondColor = "0, 48, 143"                  // Rich blue
                    thirdColor = "99, 70, 191"                  // Lighter purple
                    fourthColor = "40, 40, 40"                  // Dark grey for neutral tone
                    fifthColor = "99, 70, 191"                      // Black for more contrast
                    pointerColor = "99, 70, 191"                // Match the lighter purple for the pointer
                    size = "80%"
                    blendingValue = "normal" 
                    > 
                </BackgroundGradientAnimation>
                <div className="absolute z-0 inset-0 min-h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,rgba(0,0,0,0.15)_45%,#17083B_100%)]"></div>
                <Particles
                    className="absolute inset-0 z-0 min-h-full"
                    quantity={200}
                    ease={80}
                    staticity={30}
                    backgroundColor="#6b21a8"
                    color="#dcdcdc"
                    minSize={1}
                    maxSize={4}
                />
                </div>
                <div className="w-full h-screen bg-transparent flex flex-col items-center justify-center space-y-4">
                    <p className="text-white text-2xl md:text-5xl tracking-wide animate-pulse font-bold">Loading...</p>
                </div>
        </div>
    </div>
    
  );
}