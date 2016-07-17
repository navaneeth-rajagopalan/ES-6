class person{
    constructor(firstName, lastName, age, nationality){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.nationality = nationality;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
    isEligibleToVote() {
        return (this.age>=18);    
    }    
}

var myself = new person("Navaneeth", "R", 23, "Indian");
console.log(myself);

class student extends person{
    constructor(firstName, lastName, age, nationality, school){
        super(firstName, lastName, age, nationality);        
        this.school = school;
    }
}

var boy = new student("abc", "def", 15, "Indian", "G.D");

console.log(boy);