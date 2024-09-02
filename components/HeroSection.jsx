import React from 'react'
import { NeonGradientCard } from './magicui/neon-gradient-card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import HeroTitle from './heroTitle'
import { cn } from '@/lib/utils'


export default function HeroSection({
    about,
    id
}) {
  return (
    <div className="min-h-dvh w-full flex items-center" id={id}>
        <div className={cn(`w-full h-full flex justify-center items-center gap-x-12 gap-y-6`)}>
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
    </div>
  )
}
