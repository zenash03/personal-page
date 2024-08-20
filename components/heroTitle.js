"use client"
import { fontFiraCode, fontSans } from '@/config/fonts'
import { subtitle, title } from '@/constants/primitives'
import React from 'react'
import CustomTypingEffect from './custom/custom-typing-effect'
import TypingAnimation from './magicui/typing-animation'
import { siteConfig } from '@/constants'

const HeroTitle = () => {

    const objRole = siteConfig.roles;
    const roles = objRole.map(item => item.role)

    console.log(roles)
  return (
    <div className={`${fontFiraCode.variable} font-fira-code flex flex-col h-full justify-center gap-1`}>
      <h2 className={`${subtitle({ className: "font-medium" })}`}>
          Hi, my name is
        </h2>
        <h1 className={`${title({className: "text-4xl"})}`}>Wyrtzen Wensley.&nbsp;</h1>
        <h1 className={`${title({className: "text-2xl "})} text-slate-500 mt-1`}>
          <CustomTypingEffect 
            title="I'm"
            text={roles}
            className=""
            duration={100}
            effectClassName="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 transition-all ease-in"
          />
          
        </h1>
        <h4 className={`text-base font-medium leading-relaxed max-w-xl text-gray-300 mt-3}`}>
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <a className="text-violet-400 underline hover:text-violet-300 transition-colors duration-200">Upstatement</a>.
        </h4>
      </div>
  )
}

export default HeroTitle