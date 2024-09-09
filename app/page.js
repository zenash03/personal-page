// import Hero from '@/components/hero'
import { siteConfig } from '@/constants';
import PortfolioSection from '@/components/PortfolioSection';
import EducationSection from '@/components/EducationSection';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';

const page = () => {

  const { contents } = siteConfig; 
  const about = contents.about;
  const education = contents.education;
  const projects = contents.projects;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* <Hero about={about} className="min-h-dvh"/> */}
      <div className="w-full flex flex-col justify-center">
        {/* <LampContainer className="mt-12">
          <motion.h1
            initial={{ opacity: 0.1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-100 to-slate-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            My Works
          </motion.h1>
        </LampContainer>
        <div className="space-y-16 my-16">
            {projects.map((project, index) => (
              <PortfolioCard key={project.id} project={project} index={index} />
            ))}
        </div> */}
      </div>
      <HeroSection about={about} id="home" />
      <EducationSection data={education} id="education" />
      <PortfolioSection projects={projects} id="portfolio"/>
      <ContactSection id="contact"/>
      <div className="h-64">
      </div>
    </div>
  )
}

export default page