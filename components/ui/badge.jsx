import { cn } from "@/lib/utils";

function TechnologyBadge({name, className}) {
    return (
        <>
            <p className={
                cn(`text-xs md:text-base p-3 md:p-4 md:py-2 py-1 rounded-full font-bold min-w-5`,
                    className
                )}>{name}</p>
        </>
    )
}

export default TechnologyBadge;