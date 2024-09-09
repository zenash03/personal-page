"use client"
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const colorClasses = {
    blue: 'bg-blue-700',
    violet: 'bg-violet-700'
} 

function EducationTab({
    children, className
}) {
  return (
    <div className={cn(`flex flex-col gap-y-4`, className)}>
        {children}
    </div>
  )
}

function EducationCard({data, cta, activeId}) {
    return (
        <div key={data.id} onClick={() => cta(data)} className={`hover:scale-100 transition-all duration-300 p-3 md:p-4 flex items-center gap-4 bg-stone-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 rounded-lg origin-top-left ${(activeId == data.id) ? 'scale-100' : 'scale-95'} group pl-6 relative`}>
            <div className={`${(activeId == data.id) ? 'opacity-100' : 'opacity-40'} group-hover:opacity-100 transition-all duration-300`}>
                <Avatar>
                    <AvatarImage src={data.logoLink} alt="@shadcn" />
                    <AvatarFallback>AP</AvatarFallback>
                </Avatar>
            </div>
            <div className="w-full">
                <div className="flex justify-between gap-8 md:gap-4">
                    <p className={`${(activeId == data.id) ? 'text-white' : 'text-gray-500' } group-hover:text-white transition-all duration-400 font-extrabold text-sm md:text-lg`}>{data.degree}</p>
                    <p className={`${(activeId == data.id) ? 'text-gray-400' : 'text-gray-600'} group-hover:text-gray-400 transition-all duration-400 text-xs md:text-base font-semibold`}>
                        {data.startDate} - {data.endDate}
                    </p>
                </div>
                <p className={`${(activeId == data.id) ? 'text-gray-400' : 'text-gray-600'} group-hover:text-gray-400 transition-all duration-400 font-bold text-sm md:text-lg`}>{data.institution}</p>
            </div>
            <div className="absolute w-1.5 h-full top-0 left-0 z-10 flex justify-center items-center">
                <div className={cn(`w-full h-3/4 rounded-r-md z-10 ${(activeId == data.id) ? 'opacity-100' : 'opacity-0'} duration-400 transition-all group-hover:opacity-100`, `${colorClasses[data.colorTheme]}`)}></div>
            </div>
        </div>
    )
}

function EducationDetailCard({data}) {
    return (
        <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative z-0 w-full"
        >
            <Card className="border-none bg-stone-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 rounded-lg pl-2.5">
                <CardHeader>
                    <CardTitle className="text-xl leading-5 md:text-2xl md:leading-6 font-bold">{data.degree}</CardTitle>
                    <CardDescription className="font-bold text-base md:text-lg">{data.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                    {
                        data.description && (
                            <p className="text-base md:text-lg font-semibold text-gray-300">{data.description}</p>
                        )
                    }
                    {
                        data.achievements && <OptionalContent data={data.achievements} title="achievements" colorTheme={data.colorTheme}/>
                    }
                    {
                        data.experiences && <OptionalContent data={data.experiences} title="experiences" colorTheme={data.colorTheme} />
                    }
                    {
                        data.communityServices && <OptionalContent data={data.communityServices} title="community services" colorTheme={data.colorTheme}/>
                    }
                </CardContent>
            </Card>
            <div className="absolute w-2 h-full top-0 left-0 z-10 flex justify-center items-center">
                <div className={`w-full h-2/3 rounded-r-md z-10 bg-${data.colorTheme}-700`}></div>
            </div>
        </motion.div>
    )
}

function OptionalContent({data, title, colorTheme}) {
    if(data.length <= 0) return <></>
    return (
        <div className="my-4">
            <p className="text-lg md:text-xl font-bold mb-1 capitalize">{title}</p> 
            {
                data.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <span className={`flex h-1.5 w-1.5 rounded-full ${colorClasses[colorTheme]}`} />
                        <p className="text-base md:text-lg font-bold text-gray-400">{item}</p>
                    </div>
                ))
            }
        </div>
    )
}

export { EducationTab, EducationCard, EducationDetailCard }