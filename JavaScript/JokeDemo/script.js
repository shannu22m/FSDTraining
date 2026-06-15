async function getJoke() {
  const jsonData=await fetch("http://www.official-joke-api.appspot.com/random_joke");
  const data=await jsonData.json();
  const joke=document.getElementById("joke");
  joke.innerHTML=`${data.setup}<br>${data.punchline}`
}
