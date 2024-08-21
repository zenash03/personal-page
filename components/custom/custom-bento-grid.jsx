import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority';

const bentoCardVariants = cva(
  "group col-span-3 relative flex flex-col justify-between overflow-hidden rounded-xl",
  {
    variants: {
      variant: {
        default: "bg-stone-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100",
        ghost: "",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

const CustomBentoGrid = ({
    children,
    className,
  }) => {
    return (
      (<div className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4"
        , className)}>
        {children}
      </div>)
    )
  };


const CustomBentoCard = ({
    name,
    description,
    className,
    specialContent,
    background,
    variant = "default"
}) => {
  return (
    (<div 
    key={name}
    className={cn(bentoCardVariants({variant}),
    className
    )}>
        <div
        className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6">
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            { name }
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
        <div>
          {specialContent}
        </div>
        </div>

        {background && (
            <div
            className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        )}
        
    </div>)
  )
}

  export {CustomBentoCard, CustomBentoGrid };