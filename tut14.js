console.log("ES6 Classes and Inheritance ")
class employes {
    constructor(GivenName, GivenExperience, GivenDivision) {
        this.name = GivenName;
        this.experience = GivenExperience;
        this.division = GivenDivision;
    }
    slogan() {
        return `hey this is ${this.name} and i am working in ${this.division} divison`;
    }
    Joining() {
        return 2020 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
}

class Program extends employes {
    constructor(GivenName, GivenExperience, GivenDivision, language, github) {
        super(GivenName, GivenExperience, GivenDivision);
        this.language = language;
        this.github = github;
    }
    favrtlang() {
        if (this.language == 'python') {
            return 'python';
        } else {
            return 'Javascript';
        }
    }
    static multiply(a, b) {
        return a * b;
    }

}
navneet = new Program("sumit", 2, 'B', 'go', 'sumit.github');
console.log(navneet);
console.log(navneet.favrtlang());
console.log(Program.multiply(4, 5))
    // sumit = new employes("sumit", 45, "A");
    // console.log(sumit);
    // console.log(employes.add(89, 9));