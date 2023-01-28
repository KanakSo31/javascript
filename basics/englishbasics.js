// D = (L - S)/L * 100

// a + (( b * c ) / d) * 100


let sellingPrice = 199;
let listingPrice = 799;

let discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100
console.log("Discount percentage is :" + discountPercent);

displayDiscuntPercentage = Math.round(discountPercent);

console.log(displayDiscuntPercentage + "%off")

let result = listingPrice > sellingPrice

console.log(result);
console.log(typeof result);