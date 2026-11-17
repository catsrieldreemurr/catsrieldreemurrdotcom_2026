import Image from "next/image";
import Typography from "./typography";
import NavbarUrl from "./navbarLink";
import { HouseIcon } from "lucide-react";

export default function FooterBar(){
  return(
    <footer className="bg-teal-950 w-full grid grid-cols-1 sm:grid-cols-3 place-items-center text-center text-white">
      <div className="p-5">
        <Image src={"/signature.png"} alt="fern baxxter" height={200} width={200}></Image>
      </div>

      <div className="p-5">
        <Typography variant="h1" isBold>CatsrielDreemurr</Typography>
        <Typography variant="subtitle">A Silly girl who does too much on the internet</Typography>
      </div>

      <div className="p-5">
        <Typography variant="h1" isBold>Pages</Typography>
        <NavbarUrl icon={<HouseIcon/>} path="/">Home</NavbarUrl>
      </div>
    </footer>
  )
}