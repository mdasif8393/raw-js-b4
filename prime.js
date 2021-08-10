
function isPrime(n){
    for (let i = 2; i < n; i++) {
        if (n%i == 0){
            return 1;
            break;
        }
        else{
            return 0;
            break;
        }
        
    }
}

const result = isPrime(11);
if(result == 1){
    console.log("Prime");
}
else{
    console.log("Not Prime")
}