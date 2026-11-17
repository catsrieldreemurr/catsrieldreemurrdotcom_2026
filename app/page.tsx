import ContentContainer from "@/components/ui/contentContainer";
import HeroComponent from "@/components/ui/strucure/hero";
import Typography from "@/components/ui/typography";
import YoutubeEmbed from "@/components/ui/youtubeEmbed";

export default function Main(){
  return (
    <ContentContainer>
      <HeroComponent/>

      <div className="bg-nullscapeGreen justify-center items-center flex flex-col w-full gap-5">
        <Typography variant="h2" isBold style="underline pt-5">My Favourite Video</Typography>
        <Typography variant="subtitle" isCentered>{"This is my video that I've made on my channel! I feel like this is the best I have to offer!"}</Typography>
        <YoutubeEmbed embedLink="https://www.youtube.com/embed/yRZi8leO2LE?si=aAJQ6MIneBFq95ME"/>

        <Typography variant="h2" isBold style="underline pt-5">My Favourite VOD</Typography>
        <Typography variant="subtitle" isCentered>This is my favourite Twitch VOD! Feel free to drop by my Twitch to catch these live!</Typography>
        <YoutubeEmbed embedLink="https://www.youtube.com/embed/P1wsMHtqVEM?si=y8AQwZD2TkFqcgJp"/>
      </div>
    </ContentContainer>
  )
}