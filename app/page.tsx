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

      <div className="grid grid-cols-10 grid-rows-5 w-full h-screen">
        <Image className="col-span-4 row-span-2 row-start-2 col-start-3 bg-red-200 w-full h-full" src={"/Fern_Wave.png"} alt="Fern waves at you" height={600} width={600}/>
        <div className="col-span-3 row-span-2 row-start-2 col-start-6 place-items-center content-center">
          <Typography variant="h1" isBold>Fern Was Here!</Typography>
          <Typography variant="h3">just a a silly person on the internet ^.^</Typography>
          <Typography>Programmer / Editor / Streamer</Typography>
        </div>
      </div>
    </ContentContainer>
  )
}