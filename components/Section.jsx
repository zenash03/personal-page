import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Section({
    children, 
    sectionClassName, 
    headerClassName,
    contentClassName,
    title = "",
    id
}) {
    return (
        <div className={cn("relative" ,sectionClassName)} id={id}>
            <div className={headerClassName}>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                    delay: 0.2,
                    duration: 1.5,
                    ease: "easeInOut",
                    }}
                    className="mt-4 md:mt-8 bg-gradient-to-br from-slate-100 to-slate-300 py-4 bg-clip-text text-left text-4xl font-extrabold tracking-tight text-transparent md:text-5xl mb-0 md:mb-10"
                >
                    {title}
                </motion.h1>

            </div>
            <div className={contentClassName}>
                {
                    children
                }
            </div>
        </div>
    )
}
