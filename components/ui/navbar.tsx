import SetSubheader from "../functions/subheader";
import Typography from "./typography";

export default function Navbar(){
  return (
    <nav className="bg-nullscapeGreen p-5 flex flex-row justify-between items-center w-[100%]">
      <div className="flex flex-col justify-center items-center">
        <Typography variant="h1" isBold>CatsrielDreemurr</Typography>
        <Typography>{SetSubheader()}</Typography>
      </div>
      

      <div className="gap-5 hidden sm:flex text-white">
        <p>test</p>
        <p>test</p>
        <p>test</p>

      </div>
    </nav>
  )
}