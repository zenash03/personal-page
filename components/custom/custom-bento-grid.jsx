import { cn } from '@/lib/utils'

const CustomBentoGrid = ({
    children,
    className,
  }) => {
    return (
      (<div className={cn(
        "grid w-full h-full lg:auto-rows-[22vh] grid-cols-3 gap-4"
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
    background
}) => (
    <div 
    key={name}
    className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        `${background ? "bg-stone-500 bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100" : "" }`,
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
        
    </div>
)

  export {CustomBentoCard, CustomBentoGrid };