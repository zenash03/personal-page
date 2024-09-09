import { cn } from "@/lib/utils";

function TechnologyBadge({name, className}) {
    return (
        <>
            <p className={
                cn(`text-xs md:text-base p-3 md:p-4 py-1 rounded-full font-bold`,
                    className
                )}>{name}</p>
        </>
    )
}

export default TechnologyBadge;