let score="33"
console.log(typeof score);
// or
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


let score1="33abc"
console.log(typeof score1);
// or
console.log(typeof(score1));

let ValueInNumber=Number(score1);
console.log(typeof ValueInNumber);
console.log(ValueInNumber);  //for this we got o/p NaN which means not a number 33abc is not a no.

// conersions
// "33" is converted to 33
// "33bc"is not a no. so it shows NaN
// true is converted to 1; false => 0 

let sumNumber = 33
let stringNumber = String(sumNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

// ******************** Operations ***********************
let str1="hllo"
let str2=" hitesh"

console.log(str1+str2);
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(2+1+"3");