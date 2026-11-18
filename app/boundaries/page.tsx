import ContentContainer from "@/components/ui/contentContainer";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import Typography from "@/components/ui/typography";

export default function BoundariesPage(){
  return (
    <ContentContainer>
      <Typography variant="h1" isBold>{"Fern's Boundaries"}</Typography>
      
      <Typography isCentered>This page contains a list of all my boundaries, including what I expect from people I interact with or People in my Chat or otherwise.</Typography>

      <Tabs className={"flex justify-center items-center p-5"}>
        <TabsList>
          <TabsTrigger value={"dni"}>Do Not Interact</TabsTrigger>
          <TabsTrigger value={"byi"}>Before You Interact</TabsTrigger>
        </TabsList>

        <TabsContent value={"dni"} className={"text-center bg-neutral-50 rounded-md p-5"}>
          <Typography style="underline" darkmode variant="h3" isBold>Do Not Interact</Typography>
          <Typography darkmode style="mb-5">If you meet any of the criteria on this list, I ask that you do not interact with me for any reason.</Typography>
          
          <Typography darkmode>- Transphobes / Homophobes / Queerphobes</Typography>
          <Typography darkmode>- Racists / Xenophobes</Typography>
          <Typography darkmode>- MAGA / Right Wingers</Typography>
          <Typography darkmode>- Pressure / Grace / Forsaken* Players</Typography>

          <Typography darkmode style="mt-5">I Block Freely.</Typography>
        </TabsContent>

        <TabsContent value={"byi"} className={"text-center bg-neutral-50 rounded-md p-5"}>
          <Typography style="underline" darkmode variant="h3" isBold>Before You Interact</Typography>
          <Typography darkmode style="mb-5">Things you should know about me before you start interacting with me!</Typography>
          
          <Typography darkmode>{"- I'm a fairly loud person, so some might find me annoying!"}</Typography>
          <Typography darkmode>{"Don't be afraid to let me know, and I'll tone it down."}</Typography>

          <Typography darkmode style="mt-5">{"- I'm fairly sensitive, especially when it comes to certain subjects."}</Typography>
          <Typography darkmode>Please keep this in mind!</Typography>

          <Typography darkmode style="mt-5">{"- I like to make jokes that can sometimes be seen as insensitive."}</Typography>
          <Typography darkmode> I do not mean anything by them, but please do keep it in mind.</Typography>
          <Typography darkmode>{"Don't be afraid to ask me to tone it down if I make you uncomfortable!"}</Typography>
        </TabsContent>
      </Tabs>
    </ContentContainer>
  )
}