//https://api.ksoft.si/images/random-meme
//https://apidocs.cheapshark.com/#e3d7f1f0-f7a4-b36a-587a-6514a40f4d88
const titleName = 'dark souls'
const url = `https://www.cheapshark.com/api/1.0/games?title=${titleName}`


async function getGames(url){
    const response = await fetch(url);
    const games = await response.json();
    for(const game of games){
        //console.log(`${game["external"]}: best price at $${game["cheapest"]}`)
    }
}

getGames(url)

const deals = `https://www.cheapshark.com/api/1.0/deals`
const pageSize = 'pageSize=5'

async function getDeals(url){
    const response = await fetch(`${url}?${pageSize}`);
    const deals = await response.json();
    for(const deal of deals){
        console.log(`
            ${deal.title} at sale price of $${deal.salePrice} 
            \n usually at $${deal.normalPrice}
            \n total savings: ${Math.floor(deal.savings)}%
        `)
    }
}

getDeals(deals)