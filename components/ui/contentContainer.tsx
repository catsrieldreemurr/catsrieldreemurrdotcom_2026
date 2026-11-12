import { ReactNode } from "react"
import Navbar from "./navbar"

interface ContentContainerProps {
    children?: ReactNode
    doJustifyCenter?: boolean
}

export default function ContentContainer({ children, doJustifyCenter }: ContentContainerProps) {
    return (
        <div className={`bg-[url(/ConnectionsSkybox.gif)] bg-fixed min-h-screen flex items-center flex-col bg-no-repeat bg-cover gap-10 ${doJustifyCenter && 'justify-center'}`}>
          <Navbar/>
            {children}
        </div>
    )
}