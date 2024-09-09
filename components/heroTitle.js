
import { fontFiraCode, fontSans } from '@/config/fonts'
import { subtitle, title } from '@/constants/primitives'
import React from 'react'
import CustomTypingEffect from './custom/custom-typing-effect'
import { FadeText } from './magicui/fade-text'
import { cn } from '@/lib/utils'

const HeroTitle = ({about, className}) => {
    const objRole = about.roles;
    const roles = objRole.map(item => item.role)
  return (
    <div className={cn(`${fontFiraCode.variable} font-fira-code flex flex-col gap-1.5`, className)}>
      <FadeText className={`${subtitle({ className: "font-medium" })}`}
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.5 } },
        }}
        text={"Hi, my name is"}
      >
      </FadeText>
      <FadeText className={`${title({ className: "text-xl leading-6 md:text-4xl" })}`}
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text={`${about.name}.`}
      >
      </FadeText>
      <FadeText
        className={`${title({className: "text-xl lg:text-2xl "})} text-slate-500 mt-1`}
        direction="up"
        framerProps={{
          show: { transition: { delay: 1.1 } },
        }}
        text={
          <CustomTypingEffect 
            title="I'm"
            text={roles}
            className=""
            duration={100}
            effectClassName="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 transition-all ease-in"
          />
        }
      >
      </FadeText>
      <div className="max-w-xl mt-1">
      <FadeText
        className={`text-sm md:text-base font-medium leading-relaxed text-gray-300}`}
        direction="up"
        framerProps={{
          show: { transition: { delay: 1.4 } },
        }}
        text={
          <>
            {about.description} <a className="text-violet-500 underline cursor-pointer hover:text-violet-400 transition-colors duration-200">Upstatement</a>.
          </>
        }
      ></FadeText>

      </div>
      </div>
  )
}

export default HeroTitle