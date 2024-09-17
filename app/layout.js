import { fontFiraCode, fontNunito, fontSans } from "@/config/fonts";
import "./globals.css";
import Particles from '@/components/magicui/particles';
import { CustomDock } from '@/components/custom/custom-dock';
import { siteConfig } from '@/constants';
import BackgroundGradientAnimation from '@/components/custom/background-gradient-animation';
import SmoothScrolling from "@/components/SmoothScrolling";

export const viewport = {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
  };

  const { navItems, contents } = siteConfig; 
  const about = contents.about;

export const metadata = {
  title: "Wyrtzen Wensley",
  description: "Wyrtzen Wensley Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontNunito.variable} font-nunito`}>
      <head>
        <link 
          rel="icon" 
          href="/icon.ico" 
          sizes="any" 
        />
      </head>
      <body className={`w-full h-dvh overflow-x-hidden overscroll-y-none`}>
        <SmoothScrolling>
          <main className="w-full min-h-screen relative z-0 bg-black text-white dark">
            <header className="dark w-full h-full fixed flex justify-center items-center top-0 left-0 z-20 pointer-events-none">
              <CustomDock className="" navItems={navItems} contact={about.contact} />
            </header>
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
                  className="absolute inset-0 z-0 w-full min-h-full"
                  quantity={200}
                  ease={80}
                  staticity={30}
                  backgroundColor="#6b21a8"
                  color="#dcdcdc"
                  minSize={1}
                  maxSize={4}
              />
            </div>
            <section className={`dark w-full h-full relative`}>
                  <div className="flex flex-col items-center w-full h-full mx-auto my-auto relative">
                      {children}
                  </div>
          </section>
          </main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
