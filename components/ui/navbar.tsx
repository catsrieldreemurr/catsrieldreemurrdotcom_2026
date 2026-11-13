import { SetSubheader, SetHeaderRandomChance } from "../functions/randomTexts";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import Typography from "./typography";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";

export default function Navbar(){
  return (
    <nav className="bg-nullscapeGreen p-5 flex flex-row justify-between items-center w-[100%]">
      <div className="flex flex-col justify-center items-start">
        <Typography variant="h1" isBold>{SetHeaderRandomChance()}</Typography>
        <Typography>{SetSubheader()}</Typography>
      </div>
      

      <div className="gap-5 hidden sm:flex text-white hidden">
        <p>test</p>
        <p>test</p>
        <p>test</p>
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
            <h1>test</h1>
          </PopoverContent>
        </Popover>
      </div>

    </nav>
  )
}