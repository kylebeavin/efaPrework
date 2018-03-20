//DOM ELEMENTS
const tHead = document.getElementById("tHead");
const tBody = document.getElementById("tBody");
const searchPoke = document.getElementById("searchPoke");
let checks = [];

//API VARIABLES
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

function searchPokemon() {
    //check the value of the search bar and make sure that it's valid for the API
    let pokeName = searchPoke.value;
    if (/*condition: invalid*/pokeName.trim() == "") {
        //tell the user that the input is invalid
          alert("Enter a pokemon!");
    }else { //condition: valid
        //fetch and display results
        url = baseURL + pokeName //this concats the API endpoint and the search term together
        fetch(url)
        .then(response => { //response is the promise that we create to represent the data from the API 
            return response.json() //convert the response we get from the API into a json object
        }).then(data => {console.log(data);
            fillTable(data);
        })
    }
}

function fillTable(pokeObj) {
    while (tHead.firstChild) {
        tHead.removeChild(tHead.firstChild);
    }
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
    if (checks.length ==0) {
        alert("Please select at least one option");
    }else {

        tHead.innerHTML = '<tr><td><b>' + 'Pokemon: ' + '</b></td><td><b>' + capFirstName(pokeObj.name) + '</b></td></tr>';
    }
    if (checks.includes("id")) {

        tBody.innerHTML = '<tr><td>' + 'Pokedex ID #: ' + '</td><td>' + pokeObj.id + '</td></tr>';
    }
    if (checks.includes("types")) {   
        switch (pokeObj.types.length) {
            case 2: 
            tBody.insertAdjacentHTML("beforeend", '<tr><td>' + "Types: " + '</td><td>' + capFirstName(pokeObj.types[1].type.name) + '/' + capFirstName(pokeObj.types[0].type.name) + '</td></tr>');
            break;
            case 1:
            tBody.insertAdjacentHTML("beforeend", '<tr><td>' + "Type" + '</td>' + '<td>' + capFirstName(pokeObj.types[0].type.name) + '</td></tr>');
            break;
            default:
            break;
        }
    }
    if (checks.includes("sprites")) {
        tBody.insertAdjacentHTML("beforeend", '<tr><td>' + "Sprites: " + '</td><td>' + `<img src=${pokeObj.sprites.front_default} />` + `<img src=${pokeObj.sprites.back_default} />` + '</td></tr>');
    }
    }

function capFirstName(x){
    for (let j in x){
        if (j == 0){
            x=x.replace(x[j], x[j].toUpperCase());
        }
        if (x[j-1] == "-") {
            x = x.replace(x[j],x[j].toUpperCase());
            x = x.replace(x[j-1], " ");
        }
    }
    return x;
}
function checkBoxes(box) {
    if (box.checked) {
        checks.push(box.id);
    }else {
        if (checks.includes(box.id)) {
            checks.splice(checks.indexOf(box.id) , 1);
        }
    }
}