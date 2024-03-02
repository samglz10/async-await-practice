//https://imgflip.com/api
const url = `https://api.imgflip.com/get_memes`

async function getDankMemes(url){
    const response = await fetch(url, {method: "GET"})
    const status = await response.status;
    console.log(status)
    const result  = await response.json();
    console.log(result.data.memes);
}
getDankMemes(url);