"use client"
import React, { useEffect, useState } from 'react'
import Section from './Section'
import PortfolioCard from './PortofolioCard'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function PortfolioSection({
    projects,
    id
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
            },
        },
    };
    const itemVariantsY = {
        hidden: { opacity: 0, y: 30},
        visible: { 
            opacity: 1,
            y: 0,
            transition: { 
                duration: 1.2,
                ease: "easeInOut"
            }}
    }
    const itemVariantsX = {
        hidden: { opacity: 0, x: -30},
        visible: { 
            opacity: 1,
            x: 0,
            transition: { 
                duration: 1.2,
                ease: "easeInOut"
            }
        },
            
    }
    const category = [
        {
            name: "UI/UX Design",
            slug: "ui-ux-design"
        },
        {
            name: "Web Development",
            slug: "web-development"
        }
    ]
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
      setActiveCategory(category[0].slug);
    }, [])
    

    const handleCategory = (category) => {
        setActiveCategory(category);
    }
    useEffect(() => {
        
    }, [activeCategory])
    return (
        <Section sectionClassName="min-h-screen md:mt-14 py-8 md:py-16" title="My Portfolio" headerClassName="md:sticky top-14" id={id}>
            <motion.div
            initial="hidden"
            whileInView="visible"
            // animate="visible"
            variants={containerVariants}
            className="grid grid-cols-3 md:grid-cols-5 gap-6">
                <div className="col-span-3 md:col-span-2">
                    <div className="sticky top-40 translate-y-0 flex flex-col">
                        <motion.p 
                        // initial={{ opacity: 0, x: -30 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        variants={itemVariantsX}
                        className="text-base md:text-lg font-bold text-gray-400"
                        >
                            Incorporating smooth scrolling and parallax effects can significantly improve your site's aesthetic and interactivity.
                        </motion.p>

                        <div className="my-6 md:my-16 md:mb-40 flex flex-col gap-y-2 md:gap-y-4">
                            {
                                category.map((item, index) => (
                                    <motion.div 
                                    key={index}
                                    // initial={{ opacity: 0, y: 30 }}
                                    // whileInView={{ opacity: 1, y: 0 }}
                                    // transition={{
                                    // duration: 1,
                                    // ease: "easeInOut",
                                    // }} 
                                    variants={itemVariantsY}
                                    className="flex items-center gap-4 md:gap-6 group">
                                        <div 
                                            className={
                                                cn(
                                                    `h-0.5 bg-gray-500 rounded-xl group-hover:bg-white transition-all duration-700`,
                                                    `${(activeCategory == item.slug)? 'w-2/12 bg-white' : 'w-1/12 bg-gray-500'}`
                                                )}/>
                                        <p 
                                            className={
                                                cn(
                                                    "text-base md:text-lg font-bold group-hover:text-white transition-all duration-500 cursor-pointer",
                                                    `${(activeCategory == item.slug)? 'text-white' : 'text-gray-500'}`
                                                )} onClick={() => handleCategory(item.slug)}>{item.name}</p>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col md:gap-y-12 gap-y-4">
                    {
                        projects.map((item, index) => (
                            // <motion.div
                            // variants={itemVariants}
                            // >
                                <PortfolioCard
                                    key={item.id}
                                    title={item.title} 
                                    role={item.role}
                                    category={item.category}
                                    description={item.description}
                                    imageUrl={item.imageUrl}
                                    startDate={item.startDate}
                                    endDate={item.endDate}
                                    year={item.year}
                                    publicationLink={item.publicationLink}
                                    technologyUsed={item.technologyUsed}
                                    delay={1.2}
                                    xVariant={itemVariantsX} 
                                    yVariant={itemVariantsY}
                                />
                            // </motion.div>
                        ))
                    }
                </div>
            </motion.div>
        </Section>
    )
}
