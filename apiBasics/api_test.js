var pokesearch = document.querySelector('#pokewheel');
var i = [];
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

function randomizer2(){
    let num = Math.floor(Math.random()* 150);
    return num;
}

// function searchpokemon() {      ///changed it up
//     let pokename = baseURL + randomizer2();
// }
fetch('https://pokeapi.co/api/v2/pokemon/' + randomizer2())
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let poke = json.results
    console.log(json);
    return i = poke;
})
function myfunc(json){
    var sprite= i;
    // console.log(sprite);
    while (pokesearch.firstChild) {
        pokesearch.removeChild(pokesearch.firstChild);
    }
    let sprite1 = document.createElement('li')
    sprite1.innerHTML = sprite.sprites;
    pokesearch.appendChild(sprite1);
    myfunc()
}