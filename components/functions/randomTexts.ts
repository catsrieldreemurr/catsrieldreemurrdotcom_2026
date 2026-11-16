const quotes = [
  "AlstroemeriaXD says hi",
  "I Feel Silly!!!",
  "The Promised Future", 
  "Frutiger Aerocore",
  "I'm sillymaxxing", 
  "Make people SMILE!",
  "Also try Doors!",
  "κοιτάξτε πίσω στο",
  "sillymaxxing streamer",
  "Stand still briefly, before it wakes.",
  
  "YOU REMIND ME OF A FLOWER THAT HAD REACHED FULL BLOOM IN THE GARDENS.",
  "IT CHASED THE IMPOSSIBLE BY BLOSSOMING UNDER THE HARSHEST CONDITIONS.",
  "YET IT WAS THAT PRIDE THAT CAUSED IT TO ROT FROM THE INSIDE OUT.",
  "EVEN IF YOU BELIEVE IN YOUR OWN PETALS",
  "YOU SHALL WILT IN THIS DANCE WITH ME.",

  "Fern found their flame.",
  "Fern attempted to use Kolóna as a Christmas decoration.",
  "Fern was immolated.",
  "Fern was burnt to a crisp.",
  "Someone PLEASE teach Fern how to count.",
  "Heh, looks like Fern really TICKED Cadence off, huh?"
]

const altNames = [
  "AlstroemeriaXD",
  "Fern Baxter", 
  "Taylor Baxter",
  "AmaryllisB",
  "Azalea",
  "LazuliAtom",
  "Nebula",
  "TwoMuchCatsriel",
  "FernWasHere",
  "Purrfectiu"
]

export function SetSubheader() 
{
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];
}

export function SetHeaderRandomChance()
{
  const random = Math.floor(Math.random() * 5);

  if(random === 1){
    return altNames[Math.floor(Math.random() * altNames.length)]
  }
  else {
    return "CatsrielDreemurr";
  }
}