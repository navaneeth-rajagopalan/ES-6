function func(name, {option1, option2, option3}){
    console.log(name);
    console.log(`Option1 - ${option1}
Option2 - ${option2}
Option3 - ${option3}`);
}
func("Test",{option1: "Nani"});