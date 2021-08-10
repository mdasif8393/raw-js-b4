const roll = [12,3,4, 12, 43,53,2,3,5,2,52,423,5,35];
let uniqueRoll =[];

for (let i = 0; i < roll.length; i++) {
    let element = roll[i];
    let index = uniqueRoll.indexOf(element);
    if(index == -1) {
        uniqueRoll.push(element);
    }
    
}

console.log(uniqueRoll);