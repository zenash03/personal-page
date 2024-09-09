"use client";
import React from 'react'
import Section from './Section'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactSection({
    id="contact"
}) {
  return (
    <Section sectionClassName="h-dvh w-full md:mt-10 py-6 md:py-8 flex flex-col justify-start items-center" title="Get in Touch" id={id} contentClassName="w-full flex flex-col">
        <div className="flex flex-col items-center">
            <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.4,
            duration: 1.3,
            ease: "easeInOut",
            }}
                className="font-semibold text-center text-lg leading-7 md:text-xl md:max-w-xl md:leading-8 text-gray-300"
            >Got a burning question or just want to say hi? <Link 
                href="https://www.instagram.com/wrtznn_/"
                target="_blank"
                className="text-blue-500 font-bold"
            >
                Slide into my DMs on Instagram
            </Link>, or drop me an email below.</motion.p>

            <form className="flex flex-col items-center space-y-4 max-w-2xl w-full mt-6">
                <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.8,
                duration: 0.8,
                ease: "easeInOut",
                }} 
                    type="text" 
                    placeholder="Your Name" 
                    className="font-semibold w-full p-4 text-gray-400 bg-stone-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 backdrop-saturate-100 backdrop-contrast-100 rounded-lg"
                />
                <motion.input
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 1.2,
                duration: 0.8,
                ease: "easeInOut",
                }}  
                    type="email" 
                    placeholder="Your Email" 
                    className="font-semibold w-full p-4 text-gray-400 bg-stone-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 backdrop-saturate-100 backdrop-contrast-100 rounded-lg"
                />
                <motion.textarea 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 1.6,
                duration: 0.8,
                ease: "easeInOut",
                }} 
                    placeholder="Your Message" 
                    className="font-semibold w-full p-4 h-32 text-gray-400 bg-stone-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 backdrop-saturate-100 backdrop-contrast-100 rounded-lg"
                ></motion.textarea>
                <motion.button 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 2,
                duration: 0.8,
                ease: "easeInOut",
                }} 
                    type="submit" 
                    className="font-bold w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Send Message
                </motion.button>
            </form>
        </div>
    </Section>
  )
}
