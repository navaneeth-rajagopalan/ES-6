var map1 = new Map();
var user1 = {name: "aaa"};
var user2 = {name: "bbb"};
var map2 = {};
map2[user1] = 55;
map2[user2] = 90;
console.log(`Map2 value
User1 - ${map2[user1]}
User2 - ${map2[user2]}`);


map1.set(user1, 55);
map1.set(user2, 90);
console.log(`Map1 value
User1 - ${map1.get(user1)}
User2 - ${map1.get(user2)}`);

console.log(map1.has(user1));
console.log(map1.delete(user1));
console.log(map1.delete("user3"));
console.log(map1.get(user1));