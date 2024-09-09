import { tv } from "tailwind-variants";


export const title = tv({
    base: "tracking-normal inline font-bold",
    variants: {
      color: {
        violet: "from-[#FF1CF7] to-[#b249f8]",
        yellow: "from-[#FF705B] to-[#FFB457]",
        blue: "from-[#5EA2EF] to-[#0072F5]",
        cyan: "from-[#00b7fa] to-[#01cfea]",
        green: "from-[#6FEE8D] to-[#17c964]",
        pink: "from-[#FF72E1] to-[#F54C7A]",
        foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      },
      size: {
        sm: "text-3xl lg:text-4xl",
        md: "text-[2.3rem] lg:text-5xl leading-9",
        lg: "text-4xl lg:text-6xl",
      },
      fullWidth: {
        true: "w-full block",
      },
    },
    defaultVariants: {
      size: "md",
    },
    compoundVariants: [
      {
        color: [
          "violet",
          "yellow",
          "blue",
          "cyan",
          "green",
          "pink",
          "foreground",
        ],
        className: "bg-clip-text text-transparent bg-gradient-to-b",
      },
    ],
  });
  
  export const subtitle = tv({
    base: "my-2 text-base md:text-xl text-default-600",
    variants: {
      fullWidth: {
        true: "!w-full",
      },
    },
    defaultVariants: {
      fullWidth: true,
    },
  });

  export const glassBackground = tv({
    base: "bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700",
    variants: {
      opacity: {
        10: "bg-opacity-10",
        30: "bg-opacity-30",
        50: "bg-opacity-50"
      },
    },
    defaultVariants: {
      opacity: 10
    }
  })
  