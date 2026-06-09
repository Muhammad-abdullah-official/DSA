console.log('-------------- Q1 --------------')

let n1 = 24
let arr = []
for (let i = 1; i <= 24; i++) {
    if(n1 % i == 0){
        arr.push(i)
    }
}

console.log(arr)

console.log('-------------- Q2 --------------')

let n2 = 4
let limit2 = 30

let arr2 = []
for (let i = 4; i <= limit2; i++) {
    if(i % 4 == 0){
        arr2.push(i)
    }
}
console.log(arr2)

console.log('-------------- Q3 --------------')

let n31 = 12
let n32 = 18

while(n32 != 0){
    let remainder = n31 % n32
    n31 = n32
    n32 = remainder
}

console.log(n31)

console.log('-------------- Q4 --------------')

let n41 = 12
let n42 = 18
let hcf = 0
while (n42 != 0 ){
    let remainder = n41 % n42
    n41 = n42
    hcf = n42
    n42 = remainder
}

n41 = 12
n42 = 18

let lcm = (n41 * n42) / hcf
console.log(lcm)

console.log('-------------- Q5 --------------')
let n5 = 24
let arr5 = []
for (let i = 1; i <= n5; i++) {
    if(n5 % i == 0){
        arr5.push(i)
    }
}

console.log(arr5.length)

console.log('-------------- Q6 --------------')

let n6 = 12
let sum =0
let arr6 = []

for (let i = 1; i <= n6; i++) {
    if(n6 % i == 0){
        arr6.push(i)
    }
}

for (let i = 0; i < arr6.length; i++) {
   sum += arr6[i]
}

console.log(sum)

console.log('-------------- Q7 --------------')

let n7 = 36
let ans = 1

for (let i = 2; i <= n7 ; i++) {
    if(n7 % i == 0){ // smallest divisor se divide krein kisi b number k liye
        ans = n7 / i // yahan 25 ka smallest divisor 5 hei
        break
    }
}

console.log(ans)

console.log('-------------- Q8 --------------')

let n8 = 28
let sum8 = 0

for (let i = 1; i < n8; i++) {
    if(n8 % i == 0){
        sum8 += i
    }
}
console.log(sum8)
if(sum8 == n8){
    console.log('Perfect Number ', n8)
}
else{
    console.log('Not Perfect Number ', n8)

}

console.log('-------------- Q9 --------------')
function hcff (a,b){
    while(b!=0){
        let remainder = a % b
        a = b
        b = remainder
    }
    return a
}

function lcmm (a,b){
    return ((a*b)/hcff(a,b)) // for multiple numbers
}

let n91 = 8
let n92 = 12
let n93 = 16

let hcf91 = hcff(hcff(n91, n92), n93)

let lcm91 = lcmm(lcmm(n91,n92),n93)

console.log('HCF: ', hcf91)
console.log('LCM: ', lcm91)
