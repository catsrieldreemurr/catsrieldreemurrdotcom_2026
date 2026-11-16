import Image from "next/image"
import { Button } from "./button"
import Typography from "./typography"

interface SetProps{
  children?: string,
  icon: string, 
  socialsDestination: string
}

export default function SocialsLink( {children, icon, socialsDestination}:SetProps ){
  return (
    <a href={socialsDestination}>
      <Button className="p-5">
        <Image className="brightness-0 invert" src={icon} alt={socialsDestination} height={25} width={25}/>
        <Typography>{children}</Typography>
      </Button>
    </a>
  )
}