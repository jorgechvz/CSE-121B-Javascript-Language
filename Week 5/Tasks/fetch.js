// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
      doStuff(data);
    }
}
function doStuff(data) {
    const output = document.querySelector('#output');
    results = data;
    const htmlLayout = `<h2>${results.name}</h2>
                        <p>Weight: ${results.weight} grams</p>`;
    output.innerHTML = htmlLayout;
    console.log("first: ", results);
}
async function getPokemonList(url){
    const response = await fetch(url);
    if (response.ok){
        const dataList = await response.json();
        doStuffList(dataList);
    }
}

function doStuffList(data){
    console.log("First: ", data);
    const pokeListHtml = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((namePoke) =>{
        const html = `<li>${namePoke.name}</li>`;
        pokeListHtml.innerHTML += html;
    }); 
}

getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);