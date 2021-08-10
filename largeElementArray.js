let a = [32,12,43,1, 77, 23, 65, 99];

let max = a[0];

for (let i = 0; i <a.length; i++) {
    if(a[i]>max){
        max = a[i];

    }
}

console.log(max);