import HeroTitle from "@/components/heroTitle";
import Icons from "@/config/icons";
// import Icons from "@/config/icons";
import { BookIcon, GraduationCapIcon, HomeIcon, UserRoundIcon } from "lucide-react";


export const siteConfig = {
    navItems: [
        {
            label: "Home",
            href: "home",
            icon: HomeIcon
        },
        {
            label: "Education",
            href: "education",
            icon: GraduationCapIcon
        },
        {
            label: "Portfolio",
            href: "portfolio",
            icon: BookIcon
        },
    ],
    contents: {
      about: {
        name: "Wyrtzen Wensley",
        description: "I'm a software engineer with a passion for crafting high-quality digital experiences that seamlessly blend functionality and design.",
        roles: [
          {
              role: "UI/UX Designer",
              description: "",
          },
          {
              role: "Full-Stack Developer",
              description: "",
          }, 
          {
              role: "Mobile Developer",
              description: "",
          }
        ],
        contact: {
          social: {
              Github: {
                  name: "Github",
                  url: "https://github.com/zenash03/",
                  icon: Icons.github,
              },
              LinkedIn: {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/wyrtzen-wensley-bba806213/",
                  icon: Icons.linkedin
              },
              Discord: {
                  name: "Discord",
                  url: "https://discord.com/users/474955523196977162",
                  icon: Icons.discord,
              },
              Instagram: {
                  name: "Instagram",
                  url: "https://www.instagram.com/wrtznn_/",
                  icon: Icons.instagram,
              },
          }
      },
      },
            features: [
                {
                    name: "",
                    description: "",
                    className: "row-start-1 row-end-4 col-start-1 col-end-3 flex flex-col justify-center",
                    specialContent: < HeroTitle />,
                    variant: "ghost"
                },
              //   {
              //       name: "Working Experience",
              //       description: "",
              //       className: "col-start-3 col-end-4 row-start-1 row-end-1",
              //       specialContent: "",
              //       background: true
              //   },
              //   {
              //       name: "Education",
              //       description: "",
              //       className: "col-start-3 col-end-4 row-start-2 row-end-3",
              //       specialContent: "",
              //       background: true
              //   },
              //   {
              //     name: "My Project",
              //     description: "Hekki Gaus",
              //     className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-1",
              //     specialContent: "",
              //     background: true
              // }
            ],
            projects: [
              {
                id: 1,
                title: "wheel hub",
                role: "Engineer",
                category: "Web Development",
                description: `
                wHeel Hub is a project from Binus University on Web Based Application Development subject Lab Sector. wHeel Hub, a pioneer in automotive retail. wHeel Hub is an attractive, appealing, full functional and multi-platform website that show us about the company story, vision, and mission. This project use HTML, CSS, and JavaScript as a programming language in develop this website.`,
                imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                startDate: "March",
                endDate: "May",
                year: "2024",
                publicationLink: [
                    {
                        link: "https://github.com/zenash03/wHeel-hub",
                        description: "github",
                    }
                ],
                technologyUsed: [
                    "HTML5",
                    "CSS3",
                    "Javascript",
                    "Jquery",
                    "Git",
                    "Figma",
                ]
              },
              {
                id: 2,
                title: "Page Turner",
                role: "Engineer",
                category: "Web Development",
                description: `
                PageTurner is a project from Binus University on Web Based Application Development subject from lecturer. PageTurner aims on creating a website that attract customer to read more book. PageTurner had many features inside like E-Book, Borrow book, and Donating book.`,
                imageUrl: "https://images.unsplash.com/photo-1699977792793-942e12039615?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2plY3R8ZW58MHx8MHx8fDA%3D",
                startDate: "March",
                endDate: "May",
                year: "2024",
                publicationLink: [
                    {
                        link: "https://github.com/zenash03/page-turner",
                        description: "github"
                    }
                ],
                technologyUsed: [
                    "HTML5",
                    "CSS3",
                    "Javascript",
                    "Jquery",
                    "Git",
                    "Figma",
                ]
              },
            ],
            education: [
              {
                id: 1,
                degree: "High School",
                institution: "SMK Immanuel 1 Pontianak",
                startDate: "August 2021",
                endDate: "June 2021", 
                description: "Graduated with honors, participated in the Computer Science Club.",
                achievements: [
                    "Medallion of Excellence in LKS Mobile Robotics 2021",
                    "Certifications of Network Technician",
                ],
                experiences: [
                    "Internship at Setia Computer as Computer Technician"
                ],
                communityService: [
        
                ],
                colorTheme: "blue",
                logoLink: "https://th.bing.com/th/id/OIP.F15l33IeYF_kTuUroOG1swHaHa?rs=1&pid=ImgDetMain"
              },
              {
                id: 2,
                degree: "Bachelor of Information Systems",
                institution: "Bina Nusantara University",
                startDate: "September 2021",
                endDate: "Present",
                description: "Focused on full-stack development and AI-enhanced education.",
                achievements: [
                    "2nd Winner of Mini Competition Web"
                ],
                experiences: [
                ],
                communityServices: [
                    "Ikut dalam kegiatan berbagi berkah"
                ],
                colorTheme: "violet",
                logoLink: "https://th.bing.com/th/id/OIP.FBRtcI0gFyH6D-hd6Xxo5AAAAA?rs=1&pid=ImgDetMain"
              },
            ],
    },
    links: {
        github: "https://github.com/zenash03/",
        discord: "https://discord.com/users/474955523196977162",
        instagram: "https://www.instagram.com/wrtznn_/",
        linkedin: "https://www.linkedin.com/in/wyrtzen-wensley-bba806213/", 
    },
    
};