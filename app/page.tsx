import ContentContainer from "@/components/ui/contentContainer";
import HeroComponent from "@/components/ui/strucure/hero";
import Typography from "@/components/ui/typography";

export default function Main(){
  return (
    <ContentContainer>
      <HeroComponent/>

      <div className="bg-nullscapeGreen w-screen justify-center items-center flex p-5">
        <Typography variant="h2">Hey guys, It's me Flowery</Typography>
      </div>
    </ContentContainer>
  )
}