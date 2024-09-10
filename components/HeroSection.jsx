import React from 'react'
import { NeonGradientCard } from './magicui/neon-gradient-card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import HeroTitle from './heroTitle'
import { cn } from '@/lib/utils'


export default function HeroSection({
    personalInfos,
    id
}) {
    const data = personalInfos.data[0];
  return (
    <div className="min-h-dvh w-full flex items-center" id={id}>
        <div className={cn(`w-full h-full flex flex-wrap justify-center items-center gap-x-12 md:gap-y-10`)}>
            <div>
                <NeonGradientCard className="group w-fit items-center justify-center text-center p-0" borderRadius={1000} childClassName="p-0"> 
                    <Avatar className="size-64">
                        <AvatarImage src={data.profileImage} />
                        <AvatarFallback>WW</AvatarFallback>
                    </Avatar>
                <div
                    className="pointer-events-none absolute inset-0 transform-gpu rounded-full transition-all duration-300 group-hover:bg-white/[.03] group-hover:dark:bg-neutral-400/10" />
                </NeonGradientCard>
            </div>
           <HeroTitle about={data} className="my-8 mb-16 md:mb-0 md:my-0"/>
        </div>
    </div>
  )
}
