console.log('-------------Q NO 01-----------')

let n1 = 12345;
let temp = n1;
let digits = [];

if (temp === 0) {
    digits.push(0);
}

while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
}

digits.reverse();
console.log(digits);

console.log('-------------Q NO 02-----------')
let n2 = 12.34
while(n2%1 !==0){
        n2*=10
}
console.log(n2)

console.log('-------------Q NO 03-----------')
let n3 = 5.75
let whole = (n3-(n3%1))
let fraction = n3 %1
console.log('whole: ', whole)
console.log('fraction: ', fraction)

console.log('-------------Q NO 04-----------')
let n4 = 12.345
let whole1 = (n4 - (n4%1))
let fraction1 = n4 % 1

let wholeCount = 0;
let tempWhole = whole1;

while (tempWhole > 0) {
    wholeCount++;
    tempWhole = (tempWhole - (tempWhole % 10)) / 10;
}

let fractionCount = 0;
let tempFraction = fraction1;

while (tempFraction % 1 !== 0) {
    tempFraction *= 10;
    fractionCount++;
}

console.log("Whole Count =", wholeCount);
console.log("Fraction Count =", fractionCount);

console.log('-------------Q NO 05-----------')
let whole2 = [1,2]
let fraction2 = [3,4]

let wholeNo = 0
for (let i = 0; i < whole2.length; i++) {
        wholeNo = wholeNo * 10 + whole2[i];
}
// 10 se is liye multiplt krein ge q k single digit ko merge krna

let fractionNo = 0
let divisor = 1
for (let i = 0; i < fraction2.length; i++) {
        fractionNo = fractionNo * 10 + fraction2[i];
        divisor *=10
}
// fraction me divisor is liye add krein ge ta k decimal k bad ki length pata ho

let result = wholeNo + fractionNo / divisor
console.log(result)

