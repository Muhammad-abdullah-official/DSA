// question1 
console.log('--------Q1 ANS-------')
let arr1 = [10, 20, 5]
let max = arr1[0]

for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]>max){
        max = arr1[i]
    }
}
console.log('QUESTION 1 ARRAY MAX: ', max)
// other way
let a = 10, b = 20, c = 5;

let max1 = a;

if (b > max1) max1 = b;
if (c > max1) max1 = c;

console.log('QUESTION 1 ARRAY MAX without loop: ',max);
//question 2
console.log('--------Q2 ANS-------')
let num2 = -9
if(Number(num2)<0){
console.log('Negative')
}
else if(Number(num2)===0){
    console.log('Zero')
}
else{
    console.log('Positive')
}

//question 3
console.log('--------Q3 ANS-------')
let units3 = 230
let total3
if(units3 >0 && units3 <101){
 total3 = units3 *15
}
else if(units3 >100 && units3 <201){
 total3 = units3 *20
}
if(units3 >200 && units3 <301){
 total3 = units3 *30
}
if(units3 >300){
 total3 = units3 *40
}

console.log('Total Bill is: ', Math.floor(total3))

// other way
let units = 230;
let total = 0;

if (units <= 100) {
    total = units * 15;
} 
else if (units <= 200) {
    total = (100 * 15) + (units - 100) * 20;
} 
else if (units <= 300) {
    total = (100 * 15) + (100 * 20) + (units - 200) * 30;
} 
else {
    total = (100 * 15) + (100 * 20) + (100 * 30) + (units - 300) * 40;
}

console.log(total);

//question 4
console.log('--------Q4 ANS-------')
let vowels4 = ['a','e','i','o','u']
let check4 = 'b'
let isTrue = false
for (let i = 0; i < vowels4.length; i++) {
    if (vowels4[i] == check4) {
        isTrue = true  
    }
}
if(!isTrue){
    console.log('Not a Vowel')
}
else{
    console.log('Yes Vowel')
}

// other way
let ch = 'e'.toLowerCase();
if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    console.log('Vowel');
} else {
    console.log('Consonant');
}

if('aeiou'.includes(ch)){
    console.log('Vowel');
}
else{
    console.log('Consonant');
}

//question 5
console.log('--------Q5 ANS-------')
let checkLeap5 = 2024
if((checkLeap5 % 4 === 0 && checkLeap5 %100 !== 0) || (checkLeap5 %400 ===0)){
    console.log('Leap year')
}
else{
    console.log('Not a Leap year')
}

//question 6
console.log('--------Q6 ANS-------')

let checkAscii6 = '9'

let code = checkAscii6.charCodeAt(0);

if (code >= 48 && code <= 57) {
    console.log('Digit');
}
else if (code >= 65 && code <= 90) {
    console.log('Uppercase Letter');
}
else if (code >= 97 && code <= 122) {
    console.log('Lowercase Letter');
}
else {
    console.log('Special Character');
}

//question 7
console.log('--------Q7 ANS-------')
let side1 = 4;
let side2 = 4;
let side3 = 4;

// Step 1: sort sides
let sides = [side1, side2, side3].sort((a, b) => a - b);

let a = sides[0];
let b = sides[1];
let c = sides[2];

// Step 2: check right angle FIRST
if (a * a + b * b === c * c) {
    console.log('Right-Angled Triangle');
}
else if (a === b && b === c) {
    console.log('Equilateral Triangle');
}
else if (a === b || b === c || a === c) {
    console.log('Isosceles Triangle');
}
else {
    console.log('Scalene Triangle');
}

//question 8
console.log('--------Q8 ANS-------')
let income8 = 750000
let tax
if(income8<=600000){
    tax = 0
}
else if(income8 >600000 && income8 < 1200001){
    tax = (income8 - 600000) * 0.5
}
else if(income8 >1200000 && income8 < 2400001){
    tax = (600000 * 0.5) + ((income8 - 1200000) * 0.15)
}
else if(income8 >2400000 ){
    tax = ( 600000 * 0.5) + (1200000 * 0.15) + ((income8 - 2400000) * 0.25)
}

console.log('TAX is: ', tax)