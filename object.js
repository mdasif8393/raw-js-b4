const human = {name: 'Abdul', age: 32};
console.log(human.name);

var book = {
    name: 'Basic JS',
    author: 'Ali',
    price: 23
};

console.log(book);

const computer = {
    price: 23000,
    processor: 'Intel Core i5',
    ram: '16 gb',
    storage: '500 gb'
};

computer.price = 33333;
var computerPrice = computer.price;
console.log(computerPrice);

console.log(computer['processor']);

var storageProperty = 'storage';
computer[storageProperty] = '234 gb';

console.log(computer);