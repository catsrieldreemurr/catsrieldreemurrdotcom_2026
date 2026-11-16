import Image from "next/image"
import { Button } from "./button"
import Typography from "./typography"

interface SetProps{
  children?: string,
  icon: string, 
  socialsDestination: string
  className?: string
}

export default function SocialsLink( {children, icon, socialsDestination, className}:SetProps ){
  return (
    <a href={socialsDestination} className={className}>
      <Button className="p-3 w-full h-full">
        <Image className="brightness-0 invert" src={icon} alt={socialsDestination} height={25} width={25}/>
        <Typography>{children}</Typography>
      </Button>
    </a>
  )
}