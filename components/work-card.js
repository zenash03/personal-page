import { CheckIcon } from "@radix-ui/react-icons"

import { ChevronRightIcon } from "lucide-react";
 
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import Link from "next/link";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
    avatar: "",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
    avatar: "",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
    avatar: "",
  },
]

export function WorkCard({ className, ...props }) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[auto_1fr] items-start pb-4 last:mb-0 gap-3 last:pb-0"
            >
              <Avatar className="flex w-12 h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex flex-col justify-center h-full">
                <p className="text-sm font-semibold leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">
          <Link className="group inline-flex items-center" href="/home">
            View More{" "}
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default WorkCard