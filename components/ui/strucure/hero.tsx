import Typography from "@/components/ui/typography";
import Image from "next/image";
import SocialsLink from "../socialsLink";

export default function HeroComponent(){
    return (
        <div className="grid sm:grid-cols-2 grid-rows-1 w-full h-140 sm:h-200 md:h-150 lg:h-150 2xl:md:h-200 justify-center items-center mt-[5rem] sm:mt-0">
            <div className="flex justify-center sm:justify-end">
                <Image src={"/shootsyou3.png"} loading="eager" className="h-[25rem] w-auto" alt="Fern waves at you" height={600} width={600}/>
            </div>
            
            <div className="text-center grid justify-start">
                <div className="bg-black/50 p-5 rounded-sm mt-[5rem] sm:mt-0">
                  <Typography variant="h1" isBold>Fern Was Here!</Typography>
                  <Typography variant="h3">just a a silly person on the internet ^.^</Typography>
                  <Typography>Programmer / Editor / Streamer</Typography>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 content-center gap-6 p-5">
                  <SocialsLink icon="/twitch.png" socialsDestination="https://twitch.tv/purrfectiu">Twitch</SocialsLink>
                  <SocialsLink icon="/youtube.png" socialsDestination="https://www.youtube.com/@CatsrielDreemurr">Main Channel</SocialsLink>
                  <SocialsLink className="col-span-2 sm:col-span-1" icon="/youtubegaming.png" socialsDestination="https://www.youtube.com/@TwoMuchCatsriel">VODS Channel</SocialsLink>
                </div>
            </div>
        </div>
    )
}