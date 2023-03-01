let myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "Cuatro");

console.log(myMap);

for (let key of myMap.keys()){
    console.log(`key is ${key}`);
}

console.log("And Values are:");
for (let values of myMap.values()){
    console.log(`Value is ${values}`);
}