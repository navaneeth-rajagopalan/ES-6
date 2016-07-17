function person(firstName, lastName, age, nationality){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nationality = nationality;
    this.fullName = `${this.firstName} ${this.lastName}`;
    
    this.isEligibleToVote = function() {
        return (this.age>=18);    
    }
} 

var myself = new person("Navaneeth", "R", 23, "Indian");
console.log(myself);

function student(school){
    this.school = school;
}
student.prototype = person;
