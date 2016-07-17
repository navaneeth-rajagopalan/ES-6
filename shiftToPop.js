'use strict';
function assignPosition (name, nameList){
    var positionAssignment;
    //console.log('List'+nameList);
    for (let index = 0, len=nameList.length; index < len; index++) {
        if(nameList[index] === name){
            positionAssignment = function () {
                console.log(`Hi ${name}!! You are assigned to position ${index+1}`);
            }
        }        
    }
    return positionAssignment;
}
var list = ['aa', 'bb', 'cc', 'dd', 'ee'];
assignPosition('aa', list)();