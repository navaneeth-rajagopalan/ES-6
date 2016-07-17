var set1 = new Set();
set1.add("aaa");
set1.add("bbb");
set1.add("ccc");
set1.add("bbb");
console.log(set1.size);
for(elem of set1){
    console.log(elem);
}

console.log(set1.has("aaa"));
console.log(set1.has("eee"));
console.log(set1.delete("aaa"));
console.log(set1.delete("eee"));