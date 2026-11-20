import ContentContainer from "@/components/ui/contentContainer";
import Typography from "@/components/ui/typography";

export default function ProjectsPage(){
  return ( 
    <ContentContainer>
      <Typography variant="h1" isBold>{"My Projects"}</Typography>
      <Typography>I make a bunch of small projects! Here are my favourites!</Typography>
    </ContentContainer>
  )
}