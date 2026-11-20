import { SetSubheader, SetHeaderRandomChance } from "../functions/randomTexts";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import Typography from "./typography";
import { Button } from "./button";
import { FolderIcon, HeaterIcon, HouseIcon, MenuIcon } from "lucide-react";

import NavbarUrl from "./navbarLink";

export default function Navbar(){
  return (
    <nav className="bg-nullscapeGreen p-5 flex flex-row justify-between items-center w-[100%]">
      <div className="flex flex-col justify-center items-start">
        <Typography variant="h1" isBold>{SetHeaderRandomChance()}</Typography>
        <Typography>{SetSubheader()}</Typography>
      </div>
      

      <div className="gap-5 hidden sm:flex text-white hidden">
        <NavbarUrl path="/" icon={<HouseIcon/>}>Home</NavbarUrl>
        <NavbarUrl path="/boundaries" icon={<HeaterIcon/>}>Boundaries</NavbarUrl>
        <NavbarUrl path="/projects" icon={<FolderIcon/>}>Projects</NavbarUrl>
      </div>
      
      <div className="flex sm:hidden">
        <Popover>
          <PopoverTrigger 
          render={
            <Button>
              <MenuIcon/> 
            </Button>
          }/>
          <PopoverContent>
            <NavbarUrl darkmode path="/" icon={<HouseIcon/>}>Home</NavbarUrl>
            <NavbarUrl darkmode path="/boundaries" icon={<HeaterIcon/>}>Boundaries</NavbarUrl>
            <NavbarUrl darkmode path="/projects" icon={<FolderIcon/>}>Projects</NavbarUrl>
          </PopoverContent>
        </Popover>
      </div>

    </nav>
  )
}