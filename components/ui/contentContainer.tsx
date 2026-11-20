import { ReactNode } from "react"
import Navbar from "./navbar"
import FooterBar from "./footer"

interface ContentContainerProps {
    children?: ReactNode
    doJustifyCenter?: boolean
}

export default function ContentContainer({ children, doJustifyCenter }: ContentContainerProps) {
    return (
        <div className={`bg-[url(/ConnectionsSkybox.gif)] bg-fixed min-h-svh flex items-center flex-col bg-no-repeat bg-cover gap-10 ${doJustifyCenter && 'justify-center'}`}>
          <Navbar/>
            {children}
          <div className="mt-auto w-full">
            <FooterBar/>
          </div>  
        </div>
    )
}