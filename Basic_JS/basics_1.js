
/*
let a =5;
console.log('a=> '+ a + ' typeof: ' + typeof a ); // 5

a = 10;
console.log('a=> '+ a + ' typeof: ' + typeof a ); // 10


const flag = true;

if(!flag){
    console.log('flag is true');
}else{
    console.log('Exactly, flag is true');
    console.log('flag is false');
}
    


let i = 0;
while(i>5){
    i++;
    console.log('i=> ' + i);
    // i--;
    
}

do{
    i++;
}while(i<5){

console.log('i=> ' + i);
i++;
}



const even = [];
const odd = [];

for(let i=0; i<=10; i++){
    if(i%2 === 0){
        // console.log('this number is divisible by 2: ' + i);
        even.push(i);
    }else{
        // console.log('this number not completely divisible by 2: ' + i);
        odd.push(i);
    }
}
console.log('Even numbers: ' + even);
console.log('Odd numbers: ' + odd);


const num =[2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const evenNum = [];
const oddNum = [];

for(let i=0; i<=num.length; i++){
    if(num[i]%2 === 0){
        evenNum.push(num[i]);
    }else{
        oddNum.push(num[i]);
    }
}
console.log('Even numbers: ' + evenNum);
console.log('Odd numbers: ' + oddNum);
*/

const { log } = require("node:console");


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter name, age, class, height: ', input=>{
//     const [name, age, className, height] = input.split(',').map(item => item.trim());
//     console.log(`Name: ${name}, Age: ${age}, Class: ${className}, Height: ${height}`);
//     readline.close();
// })

let array = [1, 2, 3, 4, 5];
console.log('Original array: ' + array);
array.push(6); // add value 6 at the end of the array
console.log('Array after push: ' + array); //1,2,3,4,5,6

console.log('Array length: ' + array.length); //6
console.log('Array index of 3: ' + array.indexOf(3)); //2
console.log('Array includes 4: ' + array.includes(4)); //true because the includes() method checks if the array contains the specified element and returns true if it does, otherwise it returns false.
console.log('array value on index 2:'+array[2]); //3 because array index starts from 0, so array[2] will return the value at index 2 which is 3.
array[2] = 5; //update the array value of index 2 to 5
console.log('Array after update index 2 to 5 value: ' + array); //1,2,5,4,5,6
array.pop(); // remove the last element of the array
console.log('Array after pop: ' + array); //1,2,5,4,5 because the pop() method removes the last element of the array and returns that element, so the array becomes [1,2,5,4,5]
array.shift(); // remove the first element of the array
console.log('Array after shift: ' + array); //2,5,4,5 because the shift() method removes the first element of the array and shifts all the other elements to a lower index, so the array becomes [2,5,4,5]
array.unshift(0); // add value 0 at the beginning of the array
console.log('Array after unshift: ' + array);
array.splice(2, 0, 3); // add value 3 on index 2 without removing any element
console.log('Array after splice: ' + array);
const slicedArray = array.slice(2, 5); // return a new array with elements from index 2 to 4 (5 is not included)
console.log('Sliced array: ' + slicedArray);


for(let i=0; i<array.length; i++){
    console.log('Array value on index ' + i + ': ' + array[i]);
}

let a = [22,55,66,77,88];
array.push(a);
console.log('Array after push: ' + array);






