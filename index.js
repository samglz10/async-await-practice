const countryName = process.argv[2];
if(countryName === undefined){
    throw new Error('country name is required');
}
// https://restcountries.com/v3.1/name/{name}

async function fetchingCountries(){
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    const response = await fetch(url,{method: 'GET'});
    const body =  await response.text();
    const countries = JSON.parse(body);
    console.log(countries);
}

fetchingCountries()