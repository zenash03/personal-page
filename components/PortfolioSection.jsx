"use client"
import React from 'react'
import Section from './Section'
import PortfolioCard from './PortofolioCard'

export default function PortfolioSection({
    projects,
    id
}) {
    return (
        <Section sectionClassName="min-h-screen mt-14 py-16" title="My Portfolio" headerClassName="sticky top-14" id={id}>
            <div className="grid grid-cols-5 gap-6">
                <div className="col-span-2">
                    <div className="sticky top-40 translate-y-0 flex flex-col">
                        <p className="text-lg font-bold text-gray-400">
                            Incorporating smooth scrolling and parallax effects can significantly improve your site's aesthetic and interactivity.
                        </p>

                        <div className="my-16 flex flex-col gap-y-4">
                            <div className="flex items-center gap-6 group">
                                <div className="w-1/12 h-0.5 bg-gray-500 rounded-xl group-hover:bg-white  transition-all duration-700"/>
                                <p className="text-lg font-bold text-gray-500 group-hover:text-white transition-all duration-700 cursor-pointer">UI/ UX Design</p>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-2/12 h-0.5 bg-white rounded-xl"/>
                                <p className="text-lg font-bold text-white">Web Development</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col gap-y-12">
                    {
                        projects.map((item, index) => (
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
                            />
                        ))
                    }
                </div>
            </div>
        </Section>
    )
}
