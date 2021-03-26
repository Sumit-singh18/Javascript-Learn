console.log(
    "Hey this is Object Literals, Constructors and Object Oriented JavaScript tut"
);

// object literals
let car = {
    name: "Tiago",
    Topspeed: 99,
    run: function() {
        console.log("car is running");
    },
};
console.log(car);

// create a constructor for cars 
function GeneralCar(givename, givenspeed, givenmodel) {
    this.name = givename;
    this.speed = givenspeed;
    this.model = givenmodel;
    this.run = function() {
        console.log(`${this.name} is running`);
    }
    this.analyze = function() {
        console.log(`this car is running slower ${200 - this.speed} km then mercedes `);
    };
};

car1 = new GeneralCar("nissan", "56", "2019");
car2 = new GeneralCar("breeza", "78", "2012");
console.log(car2);