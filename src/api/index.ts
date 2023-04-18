export async function fetchGames(): Promise<string> {
  const response = await fetch(`https://gist.github.com/aclement-ikarusdev/5dd618bf13ac76cebfa08c0e3c99b677`);
  console.log(response);
  return response.json();
}
