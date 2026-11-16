import { RandomDomaspVoiceline } from "@/components/functions/randomTexts";
import { Button } from "@/components/ui/button";
import ContentContainer from "@/components/ui/contentContainer";
import Typography from "@/components/ui/typography";
import { FileXIcon, HomeIcon } from "lucide-react";
import Link from "next/link";

export default function NotFOund(){
  return(
    <ContentContainer>
      <div className="flex gap-5 justify-center items-center">
        <FileXIcon color="white"/>
        <Typography variant="h1" isBold>This page was not found.</Typography>
        <FileXIcon color="white"/>
      </div>

      <Typography variant="h3" isCentered>{'"'}{RandomDomaspVoiceline()}{'"'}</Typography>

      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <Button className={"p-5"}> <HomeIcon/> Go Home.</Button>
        </Link>
      </div>
    </ContentContainer>
  )
}
