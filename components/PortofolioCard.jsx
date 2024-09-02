"use client";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import TechnologyBadge from "./ui/badge";
import Link from "next/link";

// export const PortfolioCard = ({ project, index }) => {
//     const isOdd = index % 2 !== 0;
  
//     return (
//       <div className="flex flex-col md:flex-row justify-between gap-8">
//         <motion.div
//           initial={{ opacity: 0, x: isOdd ? 30 : -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className={`bg-stone-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 rounded-lg flex-1 p-6 h-fit ${isOdd ? "order-last md:order-first" : "order-first md:order-last"}`}
//         >
//             <div className="flex">
//                 <h2 className="font-nunito text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">{project.title}</h2>
//             </div>
//           <p className="text-lg mt-4 text-white">{project.description}</p>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: isOdd ? -30 : 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className={`flex-1 ${isOdd ? "order-first md:order-last" : "order-last md:order-first"}`}
//         >
//           <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="object-cover w-full h-96 rounded-lg min-h-80"
//           />
//         </motion.div>
//       </div>
//     );
//   };
  

export default function PortfolioCard({
    title,
    role,
    category,
    description,
    imageUrl,
    startDate,
    endDate,
    year,
    publicationLink,
    technologyUsed,
}) {
    const projectDate = `${startDate} ${(endDate != "") ? `- ${endDate}` : ''} ${year}`
    return (
        <div className="w-full grid grid-cols-3">
            <div className="col-span-1">
                <p className="uppercase font-bold text-gray-500 text-xl">
                    {projectDate}
                </p>
            </div>
            <div className="col-span-2">
                <div className="flex flex-col gap-2">
                    <div className="flex items-end gap-2">
                        <h2 className="font-extrabold text-3xl text-white capitalize">{title}</h2>
                        <ArrowUpRightIcon className="w-6 h-6 text-slate-400" />
                    </div>
                    <p className="font-bold text-xl text-gray-500 capitalize">{role}</p>
                    <p className="font-bold my-3 text-lg leading-8 text-slate-400">
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
                <h2 className="text-xl font-bold my-4">Technology Used</h2>
                <div className="flex flex-wrap my-2.5 gap-2.5">
                    {
                        technologyUsed.map((item, index) => (
                            <TechnologyBadge key={index} name={item} className="bg-violet-800 text-violet-300"/>  
                        ))
                    }

                </div>
                <div className="my-4">
                    <h2 className="text-xl font-bold my-2">Publication</h2>
                    {
                        publicationLink?.map((item, index) => (
                            <div key={index}>
                                <Link
                                    href={item.link}
                                    className="underline text-blue-500 text-lg font-bold"
                                    target="_blank"
                                >  
                                {
                                    item.description
                                }    
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}