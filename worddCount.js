const word ="I am a Kumba Lumba. What can I do now?"
let count = 0;
for (let i = 0; i < word.length; i++) {
    if(word[i]== ' '){
        count++;
    }
    
}

console.log("Total number of words: ", count+1);