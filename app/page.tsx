import ContentContainer from "@/components/ui/contentContainer";
import Typography from "@/components/ui/typography";
import Image from "next/image";

export default function Main(){
  return (
    <ContentContainer>
      {/* <div className="sm:flex h-[60vh] w-3/4 justify-center items-center">
        <Image src={"/Fern_Wave.png"} alt="Fern waves at you" height={600} width={600}/>

        <div className="flex justify-center items-center flex-col gap-3">
          <Typography variant="h1" isBold>Fern Was Here!</Typography>
          <Typography variant="h3">just a a silly person on the internet ^.^</Typography>
          <Typography>Programmer / Editor / Streamer</Typography>
        </div>
      </div> */}

      <div className="grid sm:grid-cols-2 grid-rows-1 w-screen h-100 sm:h-160 justify-center items-center">
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
    </ContentContainer>
  )
}