/*
let band = {
    'name': 'mumford and sons',
    'awesome': true
};

//console.log(typeof band);
console.log(band.name);

let netflix = {
    id: 1,
    name: 'parks and rec',
    seasonInfo: {
        episodeInfo: [
            {episode: 1,episodeName: 'pilot'},
            {episode: 2, episodeName: 'second'}
        ]
    }
}
//console.log('all the stuff',netflix);
//console.log('season info',netflix,seasonInfo);
console.log('episode info',netflix,seasonInfo.episodeInfo[0].episodeName);
*/
/*
let character = {
    name: 'kyle',
    clothes: {
        torso: {
            shirt: 'blue',
            under: 'white'
        }
    } 
}
console.log(character.clothes.torso.shirt);
*/

// Object.create()
/*
let person = {
    isHuman: false,
    introduction: function(){
        console.log(`my name is ${this.name}. am i a human? ${this.isHuman}.`);
    }
};

let me = Object.create(person);

me.name = 'quincy';
me.isHuman = true;
*/
/*
let human = {
    isGirl: false,
    introduction: function() {
        console.log(`my name is ${this.name}. I am a girl? ${this.isGirl}. i am ${this.age} years old.`);
    }
}
let me = Object.create(human);
me.name = 'terry';
me.isGirl = false;
me.age = 465;

me.introduction()
*/
/*
let address = {
    state: 'IN',
    intro: function() {
        console.log(`hello, my name is ${this.name}, and i live `);
    }
}
*/

const first = {
    a: 1,
    b: 2,
    c: 3
};
const second = {
    d: 4,
    e: 5
}
const third = Object.assign([],first,second);//inserted properties into array and can reassign indices
console.log(third);









