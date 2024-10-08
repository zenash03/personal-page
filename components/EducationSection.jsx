"use client";
import React, { useEffect, useState } from 'react'
import Section from './Section'
import { EducationCard, EducationDetailCard, EducationTab } from './Education';
import { motion } from 'framer-motion';

export default function EducationSection({
    educations,
    id
}) {

    const [education, setEducation] = useState(null)
    const [activeEducation, setActiveEducation] = useState(null)
    const [activeColor, setActiveColor] = useState("white")
  
    useEffect(() => {
        const reversedData = [...educations.data].reverse()
        setEducation(reversedData)
        setActiveEducation(reversedData[0]);
        setActiveColor(colors[0]);
    }, [educations])
  
    const handleClickEducation = (education, color) => {
      setActiveEducation(education)
      setActiveColor(color);
    }
    // useEffect(() => {
    // }, [activeEducation]);

    const colors = [
        "violet", "blue"   
    ]

    return (
    <Section sectionClassName="min-h-screen md:mt-16 py-8 md:py-16 w-full" title="My Education" id={id}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <EducationTab
            className="col-span-1"
            >
                {
                    education && 
                    education.map((item, index) => {
                    const color = colors[index] || "white";
                    const delay = (index <= 0) ? 0.5 : (0.5 * index) + 0.5;
                        return (
                            <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: delay,
                                duration: 0.8,
                                ease: "easeInOut",
                                }}
                            className="relative z-0"
                            >
                            <EducationCard data={item} cta={() => handleClickEducation(item, color)} activeId={activeEducation._id} color={color} />
                            </motion.div>
                        )
                    })
                }
            </EducationTab>
        {
            activeEducation && (
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: (education.length * 0.5) + 0.5,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}
                className="col-span-1"
                >
                <EducationDetailCard data={activeEducation} color={activeColor}/>
            </motion.div>
            )
        }
        </div>
    </Section>
    )
}
