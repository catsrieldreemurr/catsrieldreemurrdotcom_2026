import Image from "next/image";
import Typography from "./typography";
import { HeaterIcon, HouseIcon } from "lucide-react";
import FooterbarLink from "./footerbarLink";

export default function FooterBar(){
  return(
    <footer className="bg-teal-950 w-full grid grid-cols-1 sm:grid-cols-3 place-items-center text-center text-white" >
      <div className="p-5">
        <Image src={"/signature.png"} alt="fern baxxter" height={200} width={200}></Image>
      </div>

      <div className="p-5">
        <Typography variant="h1" isBold>CatsrielDreemurr</Typography>
        <Typography variant="subtitle">A Silly girl who does too much on the internet</Typography>
      </div>

      <div className="p-5">
        <Typography variant="h1" isBold style="p-5 underline">Pages</Typography>
        <FooterbarLink icon={<HouseIcon/>} path="/">Home</FooterbarLink>
        <FooterbarLink icon={<HeaterIcon/>} path="/boundaries">Boundaries</FooterbarLink>
      </div>
    </footer>
  )
}