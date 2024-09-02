import { cn } from "@/lib/utils";

function TechnologyBadge({name, className}) {
    return (
        <>
            <p className={
                cn(`text-base p-4 py-1 rounded-full font-bold`,
                    className
                )}>{name}</p>
        </>
    )
}

export default TechnologyBadge;