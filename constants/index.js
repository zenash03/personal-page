import HeroTitle from "@/components/heroTitle";
import Icons from "@/config/icons";
import { BookIcon, GraduationCapIcon, HomeIcon, MailIcon, UserRoundIcon } from "lucide-react";


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
        {
            label: "Contact",
            href: "contact",
            icon: MailIcon
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
    },
    links: {
        github: "https://github.com/zenash03/",
        discord: "https://discord.com/users/474955523196977162",
        instagram: "https://www.instagram.com/wrtznn_/",
        linkedin: "https://www.linkedin.com/in/wyrtzen-wensley-bba806213/", 
    },
    
};