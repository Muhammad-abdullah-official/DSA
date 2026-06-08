console.log('-------------- Q1 --------------')
let n1 = 12345
let temp = n1
let digit = []
if(temp ==0){
   digit.push(temp)
}
while (temp >0){
    digit.push(temp%10)
    temp = Math.floor(temp/10)
}

console.log(digit.reverse())

console.log('-------------- Q2 --------------')

let n2 = 1234
let temp1 = n2
let reverse = 0

while (temp1 >0){
    reverse = reverse *10 + temp1 % 10
    temp1 = Math.floor(temp1/10)
}
console.log(reverse)

console.log('-------------- Q3 --------------')
let n3 = 12.34
while (n3%1 !==0){ // %1 check kre ga k koi decimal hei ya nhi
    n3 *=10 // *10 aik aik decimal kam krta jae ga hr iteration me
}
console.log(n3)

console.log('-------------- Q4 --------------')
let n4 = 5.75
let whole = n4 - (n4 %1)
let fraction = n4 % 1
console.log(whole)
console.log(fraction)

console.log('-------------- Q5 --------------')
let whole1 = [1,2]
let fraction1 = [3,4]
let no = 0
for (let i = 0; i < whole1.length; i++) {
    no = no*10 + whole1[i]
}

let divisor = 1
let no1= 0
for (let i = 0; i < fraction1.length; i++) {
    no1 = no1*10 + fraction1[i]
    divisor *= 10 
}
let result5 = no + no1 / divisor
console.log(result5)

console.log('-------------- Q6 --------------')
let n6 = 121
let temp2 = n6
let reverse1 = 0
while (temp2 >0){
    reverse1 = reverse1 * 10 + temp2 % 10
    temp2 = Math.floor(temp2/10)
}
console.log(reverse1)
if(n6 === reverse1){
    console.log('palindrome');
}
else{
    console.log('not a palindrome');
}

console.log('-------------- Q7 --------------')
let num7 = 153
let temp3 = num7
let cc =0
let count = 0
while(temp3 >0 ){
    count++
    cc = temp3 % 10
    temp3 = Math.floor(temp3/10)

}

console.log(count)
let sum =0
 temp3 = num7

    while(temp3>0){
        num = temp3 % 10
        let power = 1
        for(let i=1; i<= count; i++){
            power *=num
        }
        sum += power
        power =1
        temp3 = Math.floor(temp3 /10)
        
    }

    if (sum == num7){
        console.log('Armstrong Number', sum)
    }
    else{
        console.log('Not Armstrong Number', num7)

    }

console.log('-------------- Q8, 1 --------------')
let num8 = 123
let temp8 = num8
let sum8 =0

while (temp8 > 0){
    sum8 += temp8 % 10
    temp8 = Math.floor(temp8/ 10)
}

console.log(sum8)

console.log('-------------- Q9, 2 --------------')
let num9 = 1234
let temp9 = num9
let sum9 =0
let avg9 =0
let count9 =0
while (temp9 > 0){
    count9 ++
    sum9 += temp9 % 10
    temp9 = Math.floor(temp9 /10)
}

avg9 = sum9 /count9
console.log(avg9)

console.log('-------------- Q10, 3 --------------')
let num10 = 48193
let temp10 =num10
let max = 0
let min = 0
let num11 =0 

while(temp10 > 0){
    num11 = temp10 % 10
    
    if(num11 > max){
        max = num11
    }
    if( num11 < min || min ==0){
        min = num11
    }
    temp10 = Math.floor(temp10 / 10)
    
}

console.log(max)
console.log(min)

console.log('-------------- Q11, 4 --------------')
let num114 = 145
let temp114 = num114
let no114 =0
let sum114 =0

function factorial (n){
    if(n==0 || n==1){
        return 1    
    }
    else{
        return n*factorial(n-1)
    }
}

while(temp114 > 0){
    no114 = temp114 % 10
    sum114+= factorial(no114)
    temp114 = Math.floor(temp114 / 10)
}

if(sum114 == num114){
    console.log('Strong number', num114)
}
else{
    console.log('Not Strong number', num114)
}

console.log('-------------- Q11, 4,2 --------------')
let num1142 = 165
let temp1142 = num1142
let no1142 =0
let sum1142 =0


while(temp1142 > 0){
    no1142 = temp1142 % 10
    let fac = 1
    for (let i = 1; i <= no1142; i++) {
        fac *=i
    }

    sum1142+=fac
    temp1142 = Math.floor(temp1142 / 10)
}
if(sum1142 == num1142){
    console.log('Strong number', num1142)
}
else{
    console.log('Not Strong number', num1142)
}

console.log('-------------- Q12, 5 --------------')
let num125 = 25
let temp125 = num125
let sq125 = num125 * num125
let count125 =0
while (temp125 >0){
    count125++
    let num = temp125 %10
    temp125 = Math.floor(temp125/10)
}
let multiplier = 1
for (let i = 0; i < count125; i++) {
    multiplier *= 10
    
}
let check125 = sq125 % multiplier
if(check125 == num125){
    console.log('Automorphic Number', num125)
}
else{
    console.log('Not Automorphic Number', num125)
}

console.log('-------------- Q13, 6 --------------')
let num136 = 112233224
let temp136 = num136
let count136 = 0
let arr = []
let freq = {}

while(temp136 >0 ){
    let digit = temp136 % 10
    arr.push(digit)
    if(freq[digit] ){
        freq[digit] ++
    }
    else{
        freq[digit] = 1
    }
    temp136 = Math.floor(temp136 / 10)
}

console.log(freq)

console.log('-------------- Q14, 7 --------------')
let num147 = 18
let temp147 = num147
let res = 0

while(temp147 > 0){
    let digit = temp147 %10
    res += digit
    temp147 = Math.floor(temp147 / 10)
}

if(num147 % res ==0){
    console.log('Harshad Number', num147)
}
else{
    console.log('Not Harshad Number', num147)
}
