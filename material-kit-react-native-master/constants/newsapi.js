const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=d8d384af39cc46d08d6e8b26d8051423";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}