"use client"
import React from 'react'
import Section from './Section'
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icons from '@/config/icons';
import { cn } from '@/lib/utils';
import { buttonVariants } from "@/components/ui/button";

export default function AboutMeSection({id, personalInfos}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
            },
        },
    };
    const itemVariantsXYLeft = {
        hidden: { opacity: 0, y: -15, x: 15},
        visible: { 
            opacity: 1,
            y: 0,
            x: 0,
            transition: { 
                duration: 1.2,
                ease: "easeInOut"
            }}
    };
    const itemVariantsXYRight = {
        hidden: { opacity: 0, y: 15, x: 15},
        visible: { 
            opacity: 1,
            y: 0,
            x: 0,
            transition: { 
                duration: 1.2,
                ease: "easeInOut"
            }}
    }
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
    const data = personalInfos.data[0];
  return (
    <Section
        sectionClassName="min-h-dvh w-full mb-10 md:mt-16 py-6 md:py-8 flex flex-col justify-start items-center" 
        title="About Me" 
        id={id} contentClassName="w-full flex flex-col"
    >
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10"
        >
            <div className="col-span-2 md:col-span-1">
                <motion.img
                    variants={itemVariantsXYLeft}
                    src={data.image}
                    className="aspect-[4/3] object-cover rounded-xl"
                />
            </div>
            <div className="col-span-2 md:col-span-1">
                <motion.p
                    variants={itemVariantsXYRight}
                    className="font-medium text-lg leading-7 md:text-xl md:leading-8 text-gray-300 text-justify md:pt-8"
                    dangerouslySetInnerHTML={{ __html: data.about }}>
                </motion.p>
                <div>

                    <motion.p 
                        variants={itemVariantsY}
                        className="text-xl font-bold mt-1.5 pt-4 pb-1.5 text-gray-200">
                            Developed Skills
                    </motion.p>
                    <motion.div 
                        variants={itemVariantsY}
                        className="flex flex-wrap gap-2.5 py-2">
                    {data.skillBadges.map((badge, index) => (
                        <img key={index} src={badge.src} alt={badge.alt} />
                    ))}
                    </motion.div>

                    <motion.p 
                        variants={itemVariantsY}
                        className="text-xl font-bold mt-1.5 pt-4 pb-1.5 text-gray-200">
                            Contact Info
                    </motion.p>
                    <div>
                        {
                            data.contactInfo.map((contact) => {
                                const name = contact.name;
                                const IconComponent = Icons[name];
                                const show = {
                                    phone: contact.contact,
                                    email: contact.contact,
                                    linkedin: "Wyrtzen Wensley",
                                    github: "Zenash03"
                                }
                                return (
                                    <motion.div
                                        variants={itemVariantsY}
                                        className="flex flex-col"
                                    >
                                        <div className="flex items-center gap-x-4 py-1">
                                            {
                                                (name == "phone" || name == "email") ? (
                                                <span
                                                    className={cn(
                                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                                        "size-10 rounded-full",
                                                    )}
                                                >
                                                        {Icons[name] && <IconComponent className="size-4" />}
                                                </span>
                                                ) : (
                                                <Link
                                                    href={contact.contact}
                                                    className={cn(
                                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                                    "size-10 rounded-full",
                                                    )}
                                                    target="_blank"
                                                >
                                                    {Icons[name] && <IconComponent className="size-4" />}
                                                </Link>
                                                
                                                )
                                            }
                                                {
                                                    (name == "phone" || name == "email") ? (
                                                        <p className="font-bold text-gray-200">
                                                            {show[name]}
                                                        </p>
                                                    ) : (
                                                    <Link
                                                        href={contact.contact}
                                                        className="text-blue-400 font-bold"
                                                        target="_blank"
                                                    >
                                                        {show[name]}
                                                    </Link>
                                                    ) 
                                                }
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </motion.div>

    </Section>
  )
}
