"use client";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import TechnologyBadge from "./ui/badge";
import Link from "next/link";
  

export default function PortfolioCard({
    title,
    role,
    category,
    description,
    imageUrl,
    duration,
    link,
    techStack,
    xVariant,
    yVariant
}) {
    // const projectDate = `${startDate} ${(endDate != "") ? `- ${endDate}` : ''} ${year}`
    return (
        <div
        className="w-full grid md:grid-cols-3 gap-x-2 lg:gap-2">
            <motion.div
            variants={yVariant} 
            className="col-span-3 md:col-span-1">
                <p className="uppercase font-bold text-gray-500 text-xs md:text-xl mb-1">
                    {duration}
                </p>
            </motion.div>
            <motion.div variants={yVariant} className="col-span-3 md:col-span-2">
                <div className="flex flex-col gap-y-0.5 md:gap-2">
                    <div  
                    className="flex items-end gap-2">
                        <h2 className="font-extrabold text-xl md:text-3xl text-white capitalize">{title}</h2>
                        <ArrowUpRightIcon className="w-4 h-4 md:w-6 md:h-6 text-slate-200 aspect-square" />
                    </div>
                    {
                        <p className="font-bold text-lg md:text-xl text-gray-500 capitalize mb-2 last:mb-0">
                            {category}
                        </p>
                    }
                    {/* {
                        role && role.length > 0 ? (
                            <p className="font-bold text-lg md:text-xl text-gray-500 capitalize mb-2 last:mb-0">
                            {role.join(', ')}
                            </p>
                        ) : (
                            <p className="text-gray-500">No roles available.</p>
                        )
                    } */}
                    <p className="font-bold my-1 md:my-3 text-sm leading-6 md:text-lg md:leading-8 text-slate-400">
                        {description}
                    </p>
                </div>
                {
                    imageUrl && (
                        <img src={imageUrl} className="w-full aspect-video rounded-lg my-3 object-cover object-center"/>
                    )
                }
                <div>

                </div>
                <h2 className="text-base md:text-xl font-bold md:my-4">Technology Used</h2>
                <div className="flex flex-wrap my-2.5 gap-2.5">
                    {
                        techStack.map((item, index) => (
                            <TechnologyBadge key={index} name={item} className="bg-violet-800 text-violet-300"/>  
                        ))
                    }

                </div>
                <div className="my-4">
                    <h2 className="text-base md:text-xl font-bold md:my-2">Publication</h2>
                    {
                        link?.map((item, index) => (
                            <div key={index}>
                                <Link
                                    href={item.link}
                                    className="underline text-blue-500 text-lg font-bold"
                                    target="_blank"
                                >  
                                {
                                    item.name
                                }    
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}