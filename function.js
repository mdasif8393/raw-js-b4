// function doubleNumber(num1,num2){
//    return (num1+num2);
// }

// const result = doubleNumber(10,21);
// console.log(result);

function doubleNumber(array){
    let sum =0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
    }
    return sum;
}

const array = [1,2,3,4,5,6,7];

const result = doubleNumber(array);

console.log(result);