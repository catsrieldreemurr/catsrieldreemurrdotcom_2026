import Typography from "@/components/ui/typography";
import Image from "next/image";

export default function HeroComponent(){
    return (
        <div className="grid sm:grid-cols-2 grid-rows-1 w-screen h-140 sm:h-200 justify-center items-center">
            <div className="grid justify-center sm:justify-end">
                <Image src={"/shootsyou3.png"} loading="eager" className="h-full w-auto" alt="Fern waves at you" height={500} width={500}/>
            </div>
            
            <div className="text-center grid justify-start">
                <div className="bg-black/50 p-5 rounded-sm">
                <Typography variant="h1" isBold>Fern Was Here!</Typography>
                <Typography variant="h3">just a a silly person on the internet ^.^</Typography>
                <Typography>Programmer / Editor / Streamer</Typography>
                </div>
            </div>
        </div>
    )
}