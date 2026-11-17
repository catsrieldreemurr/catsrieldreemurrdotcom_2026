interface SetProps{
  embedLink: string
}

export default function YoutubeEmbed({embedLink}:SetProps){
  return(
    <iframe 
    className="
      w-[20rem] 
      sm:w-[560px]

      lg:w-[720px]
      lg:h-[480px]

      2xl:w-[1280px]
      2xl:h-[720px]  
      rounded-xl
      shadow-xl
      "
    width="560" height="315" src={embedLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
}