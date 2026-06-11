
/*
// using ternary operator
let temp = 40

let result = temp < 45 ? "goto beach" : "stay home";
console.log(result);

// using if else

    console.log("using if else");
if(temp < 45){
    console.log("goto beach");
} else if(temp > 45 && temp < 50) {
    console.log("stay home");
}

*/

const { log } = require("console");


/*
// if the person is 18 years old or above, and a citizen registered to vote, display a message 'eligible to vote', otherwise display 'not eligible to vote'

let age =18;
let citizen = true;
let registered = false;

if(age >= 18 && citizen && registered){
    console.log("eligible to vote");
} else if( age>= 18 && !citizen && registered){
    console.log("not a citizen, not eligible to vote");
} else if(age >= 18 && citizen && !registered){
    console.log("not a registered voter, not eligible to vote");
} else if ( age < 18 && citizen && registered){
    console.log("AGE is less than 18, not eligible to vote");
}

else {
    console.log("not eligible to vote");
}

console.log("using teranary operator ");

const result = age >= 18 && citizen && registered ? "Eligible to vote" : "Not eligible to vote";
console.log(result);

*/


// switch statement for calculate area of circle, square, rectangle

let shape = "circle";
let area;

switch(shape){
    case "circle":
        let radius = 5;
        area = Math.PI * radius * radius;
        break;
    case "square":
        let side = 10;
        area = side * side;
        break;
    case "rectangle":
        let length = 10;
        let width = 5;
        area = length * width;
        break;
    default:
        console.log("Invalid shape");
}
console.log("Area of " + shape + " is: " + area);






