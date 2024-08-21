import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { CustomBentoGrid, CustomBentoCard } from './custom/custom-bento-grid'
import { siteConfig } from '@/constants'
import { fontSans } from '@/config/fonts'
import { subtitle, title } from '@/constants/primitives'
import { BentoCard, Bento } from './magicui/bento-grid'
import HeroTitle from './heroTitle'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NeonGradientCard } from './magicui/neon-gradient-card'


const Hero = ({about, className}) => { 
  return (
    <div className={cn(`w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-6`, className)}>
      <div>
        <NeonGradientCard className="group w-fit items-center justify-center text-center p-0" borderRadius={1000} childClassName="p-0"> 
        <Avatar className="size-64">
          <AvatarImage src="https://avatars.githubusercontent.com/u/53303490?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div
              className="pointer-events-none absolute inset-0 transform-gpu rounded-full transition-all duration-300 group-hover:bg-white/[.03] group-hover:dark:bg-neutral-400/10" />
      </NeonGradientCard>
      </div>
    
      <HeroTitle about={about}/>
    </div>
  )
}

export default Hero