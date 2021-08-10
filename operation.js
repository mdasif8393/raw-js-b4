let onionPrice = 10;
const eggPrice = 20;

const totalPrice = onionPrice + eggPrice;

console.log(totalPrice);

onionPrice +=20;
console.log('Onion price =', onionPrice);

onionPrice -=20;
console.log('Onion price =', onionPrice);

onionPrice++;
console.log('Onion price =', onionPrice);

onionPrice--;
console.log('Onion price =', onionPrice);

let firstName = "Abdul";
let lastName = "Kuddus";

let fullName = firstName + " " +lastName;
console.log("Full Name: ",fullName);

let mulaPrice = '20';
let aluPrice = '30.3344344';

mulaPrice = parseInt(mulaPrice);
aluPrice = parseFloat(aluPrice);

let total = mulaPrice + aluPrice;

console.log('Total price of alu mula: ', total.toFixed(2));

console.log(typeof mulaPrice);