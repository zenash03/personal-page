import { React } from 'react'
import Navbar from '@/components/navbar';
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import DotPattern from '@/components/magicui/dot-pattern';
import { motion } from 'framer-motion';
import Particles from '@/components/magicui/particles';
import { CustomDock } from '@/components/custom/custom-dock';
import { siteConfig } from '@/constants';
import { OrbitBackground } from '@/components/orbitBackground';

export const viewport = {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
  };

  const { navItems, contents } = siteConfig; 
  const about = contents.about;

export default function HomeLayout({
    children,
  }) 
  {
    return (
        <main className="w-full min-h-screen relative z-0 bg-black text-white">
          <header className="dark w-full h-full fixed flex justify-center items-center top-0 left-0 z-20 pointer-events-none">
            <CustomDock className="" navItems={navItems} contact={about.contact} />
          </header>
          {/* background section */}
          <div className="absolute inset-0 z-[-1]">
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-800 from-5% via-blue-950 via-30% to-transparent to-80%"> </div>
                  {/* <div className="absolute h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_45%,#6b21a8_100%)]"></div> */}
                  <Particles
                      className="absolute inset-0"
                      quantity={100}
                      ease={80}
                      staticity={30}
                      backgroundColor="#6b21a8"
                      color="#dcdcdc"
                      minSize={1}
                      maxSize={4}
                  />
          </div>
          <section className={`dark w-full h-full relative z-10`}>
            
                <div className="container flex flex-col items-center w-full mx-auto my-auto relative">
                    {children}
                    {/* <div className="h-[24em] w-full">

                    </div> */}
                </div>
            {/* </div> */}
        </section>
        </main>
    );
  }
  