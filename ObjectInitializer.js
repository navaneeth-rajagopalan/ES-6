function buildUser(firstName, lastName, age){
    let fullName = firstName+" "+lastName;
    // return {
    //     firstName: firstName,
    //     lastName: lastName,
    //     fullName: fullName
    // }
    return {firstName, lastName, fullName, age,
        isEligibleForVoting(){
            if(age>=18){
                return true;
            }
            return false;
        }};
}

let name="Navaneeth";
let age=23;
let nationality = "Indian";
let myself = {name, age, nationality}
let user = buildUser("Roger","Federer");
console.log(user);
console.log(myself);


//OBJECT DESTRUCTURING and String interpolation
let {firstName, lastName, fullName, isEligibleForVoting} = buildUser("Navaneeth", "R", 18);
console.log(`${firstName}
${lastName}
${fullName}
can vote? ${isEligibleForVoting()}`);


for(i in user){
    console.log(i);
}