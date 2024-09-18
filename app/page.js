"use client";
import React, { useEffect, useState } from 'react';
import { siteConfig } from '@/constants';
import PortfolioSection from '@/components/PortfolioSection';
import EducationSection from '@/components/EducationSection';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import Loading from './loading';
import AboutMeSection from '@/components/AboutMeSection';

const Page = () => {
  const [data, setData] = useState({
    experiences: [], educations: [], projects: [], personalInfos: [], skills: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = ['getExperience', 'getEducation', 'getPersonalInfo', 'getProject', 'getSkill'];
        const responses = await Promise.all(endpoints.map(endpoint => fetch(`${apiUrl}/${endpoint}`)));

        // Check if any response failed
        if (responses.some(res => !res.ok)) {
          const errorResponse = await Promise.any(responses.map(res => res.json()));
          throw new Error(errorResponse.message || 'Failed to fetch data');
        }

        const [experiences, educations, personalInfos, projects, skills] = await Promise.all(
          responses.map(res => res.json())
        );

        setData({ experiences, educations, personalInfos, projects, skills });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const { experiences, educations, projects, personalInfos } = data;

  return (
    <div className="container w-full h-full flex flex-col justify-center items-center">
      <HeroSection personalInfos={personalInfos} id="home" />
      <AboutMeSection id="aboutMe" personalInfos={personalInfos} />
      <EducationSection educations={educations} id="education" />
      <PortfolioSection projects={projects} id="portfolio" />
      <ContactSection id="contact" />
      <div className="h-64" />
    </div>
  );
};

export default Page;
