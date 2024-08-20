import { fontFiraCode, fontNunito, fontSans } from "@/config/fonts";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-full lg:h-dvh  ${fontNunito.variable} font-nunito`}>
        {children}
      </body>
    </html>
  );
}
