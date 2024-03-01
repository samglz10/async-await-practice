//https://imgflip.com/api
const url = `https://api.imgflip.com/get_memes`

async function getDankMemes(url){
    const response = await fetch(url, {method: "GET"})
    const result  = await response.json();
    console.log(result.data.memes);
}
getDankMemes(url);