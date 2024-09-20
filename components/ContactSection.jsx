"use client";
import React, { useRef, useState } from 'react'
import Section from './Section'
import Link from 'next/link';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID;

export default function ContactSection({
    id="contact"
}) {
    const form = useRef();
    
    // State to handle errors
    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const validateForm = () => {
        let validationErrors = {};
        if (!formValues.from_name) {
            validationErrors.from_name = "Name is required.";
        }
        if (!formValues.reply_to) {
            validationErrors.reply_to = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formValues.reply_to)) {
            validationErrors.reply_to = "Email address is invalid.";
        }
        if (!formValues.message) {
            validationErrors.message = "Message is required.";
        }
        return validationErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        emailjs.sendForm(
            SERVICE_ID,  
            TEMPLATE_ID,     
            form.current,
            PUBLIC_ID
        ).then((result) => {
            console.log(result.text);
            form.current.reset(); // Clear the form after successful submission
            setErrors({});
            setFormValues({ from_name: '', reply_to: '', message: '' });
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <Section sectionClassName="min-h-screen w-full md:mt-10 py-6 md:py-8 flex flex-col justify-start items-center" title="Get in Touch" id={id} contentClassName="w-full flex flex-col">
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
                >
                    Got a burning question or just want to say hi? <Link 
                        href="https://www.instagram.com/wrtznn_/"
                        target="_blank"
                        className="text-blue-500 font-bold"
                    >
                        Slide into my DMs on Instagram
                    </Link>, or drop me an email below.
                </motion.p>

                <form className="flex flex-col items-center space-y-4 max-w-2xl w-full mt-6" ref={form} onSubmit={sendEmail}>
                    {/* Name Input */}
                    <motion.input
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.8,
                    duration: 0.8,
                    ease: "easeInOut",
                    }} 
                        type="text" 
                        name="from_name"
                        value={formValues.from_name}
                        onChange={handleInputChange}
                        placeholder="Your Name" 
                        className="font-semibold w-full p-4 text-gray-400 bg-stone-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 backdrop-saturate-100 backdrop-contrast-100 rounded-lg"
                    />
                    <div className="w-full">
                        {errors.from_name && 
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                            delay: 0.8,
                            duration: 0.8,
                            ease: "easeInOut",
                            }} 
                            className="text-red-500 font-semibold text-right">{errors.from_name}
                        </motion.p>}
                    </div>

                    {/* Email Input */}
                    <motion.input
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 1.2,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}  
                        type="email" 
                        name="reply_to"
                        value={formValues.reply_to}
                        onChange={handleInputChange}
                        placeholder="Your Email" 
                        className="font-semibold w-full p-4 text-gray-400 bg-stone-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 backdrop-saturate-100 backdrop-contrast-100 rounded-lg"
                    />
                    <div className="w-full">
                        {errors.reply_to && 
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                            delay: 0.8,
                            duration: 0.8,
                            ease: "easeInOut",
                            }} 
                            className="text-red-500 font-semibold text-right">{errors.reply_to}
                        </motion.p>}
                    </div>

                    {/* Message Input */}
                    <motion.textarea 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 1.6,
                    duration: 0.8,
                    ease: "easeInOut",
                    }} 
                        name="message"
                        value={formValues.message}
                        onChange={handleInputChange}
                        placeholder="Your Message" 
                        className="font-semibold w-full p-4 h-32 text-gray-400 bg-stone-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 backdrop-saturate-100 backdrop-contrast-100 rounded-lg"
                    ></motion.textarea>
                    <div className="w-full">
                        {errors.message && 
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                            delay: 0.8,
                            duration: 0.8,
                            ease: "easeInOut",
                            }} 
                            className="text-red-500 font-semibold text-right">
                            {errors.message}
                        </motion.p>}
                    </div>

                    {/* Submit Button */}
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
