console.log(
    "Hey this is Object Literals, Constructors and Object Oriented JavaScript tut"
);

// object literals
let car = {
    name: "Tiago",
    Topspeed: 99,
    run: function() {
        // console.log("car is running");
    },
};
// console.log(car);

// create a constructor for cars 
function GeneralCar(givename, givenspeed, givenmodel) {
    this.name = givename;
    this.speed = givenspeed;
    this.model = givenmodel;
    this.run = function() {
        console.log(`${this.name} is running`);
    }
    this.analyze = function() {
        console.log(`${givename} is running slower ${200 - this.speed} km then mercedes `);
    };
};

car1 = new GeneralCar("nissan", "56", "2019");
car2 = new GeneralCar("breeza", "78", "2012");
console.log(car2);


// another consructor
function Partydetails(Partyname,Partyid, age){
    this.name= Partyname;
    this.id = Partyid;
    if(age>18){
        console.log(`${this.name} is allowed in party with his party id ${this.id}`)
    }
 else{
     console.log(`${this.name} is underage`)
 }
};
entry = new Partydetails("Sumit", 17, 21);
entry1= new Partydetails ("Snehal", 16, 11);
console.log(entry);