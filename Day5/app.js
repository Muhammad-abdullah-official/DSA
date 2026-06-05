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

console.log('-------------- Q8 --------------')
let num8 = 123
let temp8 = num8
let sum8 =0

while (temp8 > 0){
    sum8 += temp8 % 10
    temp8 = Math.floor(temp8/ 10)
}

console.log(sum8)

console.log('-------------- Q9 --------------')
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

console.log('-------------- Q10 --------------')
let num10 = 9483
let temp10 =num10
let max = 0
let min = 0

while(temp10 > 0){
    max = temp10 % 10
    
}
