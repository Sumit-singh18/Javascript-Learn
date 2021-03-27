console.log("hey this is Object Prototype In javascript");
// Object literal : Object.prototype
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}

function Obj(givenName) {
    this.name = givenName
}

Obj.prototype.getName = function() {
    return this.name;
}

Obj.prototype.setName = function(newName) {
        this.name = newName;