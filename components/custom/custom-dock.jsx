import React from "react";
import Link from "next/link";
import { BookIcon, CalendarIcon, HomeIcon, MailIcon, PencilIcon, UserRoundIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { siteConfig } from "@/constants";

const {navItems, contact} = siteConfig;

export function CustomDock({
  className
}) {
  return (
    <div className={cn("flex h-[12.5em] w-full flex-col items-center justify-center overflow-hidden absolute bottom-2",
      className
    )}>
      <TooltipProvider>
        <Dock direction="middle" className="">
          {navItems.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                    target="_blank"
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
            <BorderBeam 
                size={100}
                duration={12}
                delay={0}
                colorFrom="#c084fc"
                colorTo="#3556c6"
                />
        </Dock>
      </TooltipProvider>
    </div>
  );
}
