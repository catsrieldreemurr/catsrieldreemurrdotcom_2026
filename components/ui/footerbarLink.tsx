import Link from "next/link";
import { ReactNode } from "react";

interface SetProps{
  children?: ReactNode, 
  path: string,
  icon: ReactNode
}

export default function FooterbarLink({children, path, icon}: SetProps){
  return (
    <div className="flex text-white gap-5 p-2 position top-0">
      {icon}
      <Link href={path}>{children}</Link>
    </div>
  )
}