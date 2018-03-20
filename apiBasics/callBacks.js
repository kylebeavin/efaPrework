////Callback Example
function callbackFunction() {
    const karateDude = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'kickboxing',
        movies: {
            first: "kk1"
        }
    }
    return karateDude;
}
// A callback function is a function passed into another function as an
// argument, which is then invoked inside the outer function to complete some
// kind of routine or action.
function sum(a, b) {
    c + d
}
function showGreeting(result) {
    console.log(result)
    return "hello " + result.name + ", I hear you're the greatest?!"
};
console.log(showGreeting(callbackFunction()))

//quincys min code

function callbackFunction(){
    const thatGuy = {
        name: "The Dude",
        occupation: "bowling",
        possessions: "awesome rug"
    }
    return thatGuy
}
function showGreeting(result){
    console.log(`${result.name} loves to go ${result.occupation}`)
}
showGreeting(callbackFunction())