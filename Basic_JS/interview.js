


// let arr = [1, 2, 3, 2, 4, 1, 5, 1];

// let obj ={};
// let uniqueArr = [];
// for(let i=0; i<arr.length; i++){
//     // console.log(arr[i]);
//     if(!obj[arr[i]]){
//         obj[arr[i]] = true;
//         uniqueArr.push(arr[i]);
        
//     }
    
// }

// console.log(obj);
// console.log(uniqueArr);


// const fName = 'akash bhanu tiwari';
// const letter = fName.split('');

// const obj_1 ={};
// const uniqueLetter = [];

// for(let i=0; i<letter.length; i++){
//     // console.log('letter: '+letter[i]);
//     const char = letter[i];
//     console.log(char);

//     if(!obj_1[char]){
//         obj_1[char] = true;
//         uniqueLetter.push(char);
//     }

// }

// console.log(uniqueLetter.join(''));

// // const name_1 = "akash bhanu";
// // const letters = name_1.split(''); // Ek baar array ban gayi

// // const obj_1 = {}; // Khali object
// // const uniqueLetters = []; // Khali array

// // for(let i=0; i < letters.length; i++) {
// //     const char = letters[i]; // Har baar naya constant 'char' banega

// //     if(!obj_1[char]) {
// //         obj_1[char] = true;         // ✅ Allowed: Object ke andar data dalna
// //         uniqueLetters.push(char); // ✅ Allowed: Array mein naya item push karna
// //     }
// // }

// // console.log(uniqueLetters.join('')); // Output: "aksh bnu"

// let arr_1 = [1, 2, 3, 2, 4, 1, 5, 1];

// let count={};

// for (let i=0; i<arr_1.length; i++){
//     console.log('arr_1 value: '+arr_1[i]);

//     if(!count[arr_1[i]]){
//         count[arr_1[i]]=0;
        
//     }
//     count[arr_1[i]]=count[arr_1[i]]+1;
// }
// console.log(count);


// const nm = "akash bhanu tiwari";

// const count_1={};
// const letterCount =[];

// for (let i=0; i<nm.length; i++){
//     // const c = nm[i];
//     // console.log('nm value: '+nm[i]);
//     if(!count_1[nm[i]]){
//         count_1[nm[i]]=0;
        
//     }
//     console.log('ccccc:   '+nm[i]);
//     count_1[nm[i]]=count_1[nm[i]]+1;
//     letterCount.push(nm[i]+':'+count_1[nm[i]]);

// }
// console.log('COUNT:   ', count_1);
// console.log('LETTER COUNT:   ', letterCount);




// let arr = [1,2,1,3,4,2,5,1];

// let count = {};

// for(let i=0; i<arr.length; i++){

//     count[arr[i]]=0;
//     count[arr[i]]=count[arr[i]]+1;
    

// }
// console.log('count:  ', count);



// let arr = "akash bhanu tiwari";

// let count = {};
// let nm = [];

// for(let i=0; i<arr.length; i++){
//     if(!count[arr[i]]){
//     count[arr[i]]=0;
    
//     // nm.push(arr[i]+':'+count[arr[i]]);
//     }
//     count[arr[i]]=count[arr[i]]+1;
// }

// for(let key in count){
//     nm.push(key+':'+count[key]);
// }

// console.log('count:  ', count);
// console.log('NAME:  ', nm);



// let a = [5, 12, 8, 20, 3];
// let badaContainer=[];
// let chotaContainer=[];

// for(let i=0; i<a.length; i++){
//     if(a[i]>10){
//         badaContainer.push(a[i]);
//     }else{
//         chotaContainer.push(a[i]);
//     }
// }

// console.log('BADA CONTAINER:  ', badaContainer , 'CHOTA CONTAINER:  ', chotaContainer);




// const nm ="akash bhanu tiwari";

// const count={};
// const letterCount =[];
// for(let i=0; i<nm.length; i++){
//     const char=nm[i];

//     if(!char ==" "){
//         if(!count[char]){
//             count[char]=0;
//         }
//         count[char]=count[char]+1;
//     }
//     letterCount.push(char+':'+count[char]);
// }

// console.log('count: ', count);
// console.log('letterCount: ', letterCount);



// let numbers = [5, 12, 8, 7, 20];

// let even=[];
// let odd=[];

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]%2===0){
//         even.push(numbers[i]);
//     }else{
//         odd.push(numbers[i]);
//     }
// }

// console.log('ODD:  ', odd, 'EVEN:  ', even);



// let prices = [500, 1200, 800, 2500, 950, 1000];
// let budgetFreindly =[];
// let overBudget =[];


// for(let i=0; i<prices.length; i++){
//     if(prices[i]<=1000){
//         budgetFreindly.push(prices[i]);
//     }else{
//         overBudget.push(prices[i]);
//     }

// }console.log('BUDGET FREINDLY:  ', budgetFreindly, 'OVER BUDGET:  ', overBudget);



// let fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];

// let appleContainer = [];
// let otherFruits = [];
// let appleCount=0;
// for(let i=0; i<fruits.length; i++){
//     if(fruits[i] !== "apple"){
//         otherFruits.push(fruits[i]);
//     }else{
//         appleContainer.push(fruits[i]);
//         appleCount=appleCount+1;
//     }
// }

// console.log("appleContainer:  ", appleContainer , appleContainer.length);
// console.log("appleCount:  ", appleCount);



// let books = ["Math", "Science", "Math", "English", "Math", "Science"];

// let uniqueBooks = []; // Step 1 wala dabba
// let reportCard = {};  // Step 2 wala register (Counting ke liye)

// for(let i=0; i<books.length; i++){
//     const currentBook = books[i];

//     if(!reportCard[currentBook]){
//         uniqueBooks.push(currentBook);
//         reportCard[currentBook] = 0; // Register mein naya entry banao
//     }
//     reportCard[currentBook] = reportCard[currentBook]+1;
// }

// console.log('Unique Book: ', uniqueBooks);
// console.log('Report Card: ', reportCard);


