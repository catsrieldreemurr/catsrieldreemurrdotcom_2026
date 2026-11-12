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
  "Stand still briefly.",
  "Before it wakes."
]

export default function SetSubheader()
{
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];
}
