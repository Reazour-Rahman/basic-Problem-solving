var business = 200;
var minister = 150;
var army = 120;
// Bangla Way
if (business > minister || army) {
    console.log ('Business pola is borolox');
}
else if (minister > business || army){
    console.log( 'Minister er pola is borolox');
}
else{
    console.log('army er pola is mush borolox');
}
// math 
var best = Math.max( business, minister, army);
console.log('One of the most borolox is ', best);

// function
// function theBest(business , minister, army) {
//     if ( business >  minister && army ) {
//         return business;
//     }
//     else if (minister > business && army){
//         return minister ;
//     }
//     else{
//         return army;
//     }
// }
// let worthIS = theBest( 100, 750, 430);
// console.log(worthIS);

// another finding the biggest in three
function threeNumbers(number1, number2, number3) {
    if (number1 > number2 && number2) {
        console.log('borolox is here' );
        return number1 ;
    }
    else if (number2 > number1 && number3) {
        console.log('Borolox is here');
        return  number2;
    }
    else {
        console.log('Borolox is here');
        return  number3;
    }
}
var ParaNumbers = threeNumbers(2000, 4000, 2500);
console.log (ParaNumbers);

// Write a function to find the smallest of three numbers
function smallEst( wahid, rabby, shahab) {
    if (wahid < (rabby  && shahab)) {
        console.log ('smallest number belongs to wahid ');
        return true; //return wahid;
    }
    else if (rabby < (wahid && shahab)) {
        console.log ('smallest number belongs to rabby bHai ');
        return true; //return rabby;
    }
    else {
        console.log ('smallest number belongs to bebsaiyek poribar Shahab bhai ');
        return true; //return shahab;
    }
}
let poorIs = smallEst (200 , 50 , 500) ;
console.log (poorIs);