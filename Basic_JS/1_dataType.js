

//premitive data types
var myName = 'akash';   //string
var myAge = 43;        //number
var isMarried = true;   //boolean
var isFemale = false;   //boolean
var mySalary = 50000.50; //number
var myPhoneNumber = 1234567890; //number
var myUndefined = null; //null

console.log('My name is: ' + myName);
console.log('My age is: ' + myAge);
console.log('Am I married? ' + isMarried);
console.log('Am I female?:' +isFemale);
console.log('My salary is: ' + mySalary);
console.log('My phone number is: ' + myPhoneNumber);
console.log('My undefined value is:' +myUndefined);

console.log('####################');

console.log(myName + ' typeOf ' + typeof myName);
console.log(myAge + ' typeOf ' + typeof myAge);
console.log(isMarried + ' typeOf ' + typeof isMarried);
console.log(isFemale + ' typeOf ' + typeof isFemale);
console.log(mySalary + ' typeOf ' + typeof mySalary);
console.log(myPhoneNumber + ' typeOf ' + typeof myPhoneNumber);
console.log(myUndefined + ' typeOf ' + typeof myUndefined);


//convert string to number, we just add + sign before the string variable ex: use 'typeof +myStrAge' instead of 'typeof myStrAge' 
// to get the type of the converted number.
// or using number() function/constructor to convert string to number, ex: 'typeof Number(myStrAge)' instead of 'typeof myStrAge' 
// to get the type of the converted number.

console.log('convert string to number');
var myStrAge = '43';
console.log('Original typeof my string age is: ' + myStrAge);
console.log(myStrAge + ' typeOf ' + typeof +myStrAge);
console.log(myStrAge + ' typeof ' + typeof Number(myStrAge));


// convert number to string, we can use toString() method or String() function/constructor to convert number to string, 
// ex: 'typeof myNumAge.toString()' or 'typeof String(myNumAge)' instead of 'typeof myNumAge'

console.log('convert number to string');
var myNumAge = 43;
console.log(`Original typeof my number age is: ${myNumAge}` + ' typeof ' + typeof myNumAge);
console.log(myNumAge + ' typeof ' + typeof myNumAge.toString());
console.log(myNumAge + ' typeof ' + typeof String(myNumAge));
console.log(' convert number into string using + operator: ' + myNumAge + ' typeOf ' + typeof (myNumAge + ''));


// check if the value is 'tuthy' or 'falsy' using Boolean() function/constructor, 
// ex: 'Boolean(myValue)' to get the boolean value of the variable.
console.log('check if the value is truthy or falsy');
var myValue1 = 0;
var myValue2 = 1;
var myValue3 = '';
var myValue4 = 'hello';
var myValue5 = null;
var myValue6 = undefined;   
console.log(myValue1 + ' is truthy? ' + Boolean(myValue1));
console.log(myValue2 + ' is truthy? ' + Boolean(myValue2));
console.log('Empty string is truthy? ' + Boolean(myValue3));
console.log(myValue4 + ' is truthy? ' + Boolean(myValue4));
console.log('null is truthy? ' + Boolean(myValue5));
console.log('undefined is truthy? ' + Boolean(myValue6));

//  using 'if' condition to check if the value is truthy or falsy, 
// ex: 'if(myValue){...}' to check if the value is truthy or falsy.

console.log('check if the value is truthy or falsy using if condition');
if(myValue4){
    console.log(myValue4 + ' is truthy');
}else{
    console.log(myValue4 + ' is falsy');
}

if(myValue3){
    console.log('Empty string is truthy');
}else{
    console.log('Empty string is falsy');
}


// parseInt and parseFloat functions to convert string to number, 
// ex: 'parseInt(myStrNum)' to convert string to integer and 'parseFloat(myStrNum)' to convert string to float.
console.log('convert string to number using parseInt and parseFloat');
var myStrInt = '43';
var myStrFloat = '43.50';
console.log('Original typeof my string integer is: ' + myStrInt + ' typeOf ' + typeof myStrInt);
console.log(myStrInt + ' typeOf ' + typeof parseInt(myStrInt));
console.log(myStrInt + ' typeOf ' + typeof parseFloat(myStrInt));
console.log('Original typeof my string float is: ' + myStrFloat + ' typeOf ' + typeof myStrFloat);
console.log(myStrFloat + ' typeOf ' + typeof parseInt(myStrFloat));
console.log(myStrFloat + ' typeOf ' + typeof parseFloat(myStrFloat));

console.log('convert decimal value into int using parseInt', + parseInt(10.55)); //10
console.log('convert decimal value into float using parseFloat', + parseFloat(10.55));  //10.55



// concatination of string and number, we can use + operator to concatenate string and number,
//  ex: 'myName + myAge' to concatenate string and number.
console.log('concatination of string and number');
console.log(myName + ' ' + myAge);

const str = "Hello "  + "World";
console.log("combine two strings = " +str);

const s1 = "Hello";
const s2 = "World";
console.log("combine two strings using variables = " + s1 + ' ' + s2);

// type coercion in JavaScript, we can use + operator to concatenate string and number,
//  ex: 'myName + myAge' to concatenate string and number, and JavaScript will automatically convert the number to string and concatenate them.
console.log('type coercion in JavaScript');
console.log(myName + myAge); // 'akash43' - number is converted to string and concatenated
console.log(myName + ' ' + myAge); // 'akash 43' - number is converted to string and concatenated with a space in between