import Link from "next/link";
import { ReactNode } from "react";

interface SetProps{
  children?: ReactNode
  icon: ReactNode, 
  path: string,
  darkmode?: boolean
}

export default function NavbarUrl({children, icon, path, darkmode}:SetProps){
  return ( 
    <Link href={path} className={`flex gap-5 p-5 hover:bg-teal-900 rounded-xl ${darkmode && "text-black"}`}>{icon} {children}</Link>
  )
}