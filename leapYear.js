
function leapYear(year){
    if(year%4 == 0){
        return 1;
    }
    else{
        return 0;
    }
}

const year = 3600;

const result = leapYear(year);
if(result == 1){
    console.log(year  + ' is leap year');
}
else{
    console.log(year + ' is not a leap year');
}