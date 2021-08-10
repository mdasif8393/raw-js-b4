
function inchToFeet(value){
    const result = value / 12;
    return result;
}

const feet = inchToFeet(12);
console.log('Feet:', feet);

function mileToKilometer(value){
    const result = value*1.61;
    return result;
}

console.log('Kilometers: ', mileToKilometer(3));