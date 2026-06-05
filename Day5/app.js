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