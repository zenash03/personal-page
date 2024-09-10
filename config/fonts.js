import { Nunito as NunitoFont, Fira_Code as FiraCodeFont, Inter as SansFont } from "next/font/google";

export const fontNunito = NunitoFont({
    subsets: ['latin'],
    variable: "--font-nunito",
    weight: ['400', '500', '600', '700']
})

export const fontSans = SansFont({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ['400', '500', '600', '700']
})

export const fontFiraCode = FiraCodeFont({
    subsets: ['latin'],
    variable: "--font-fira-code"
})