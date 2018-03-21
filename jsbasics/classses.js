class Cats {
    constructor(name,weight,tail){
        this.name = name;
        this.weight = weight;
        this.tail = tail;
    }
}
var sansa = new Cats('sansa','30 pounds',true); 
var timmy = new Cats('timmy', '250 pounds', true);
var ricky = new Cats('ricky','8 pounds', true)

console.log(sansa,timmy,ricky);