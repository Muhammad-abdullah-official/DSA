// q1:

let n1 = 5
for (let i = 1; i <= n1; i++) {
    console.log(i)    
}
console.log('q1')
//q2:
let n2 = 5
for (let i = 0; i <n2; i++) {
    console.log(n2 - i)    
}
console.log('q2')

//q3:
let n3 = 10
for (let i = 2; i <= n3; i+=2) {
        console.log(i)    
}
console.log('q3')
//q4:
let sum =0
for(let i =0; i<=5; i++){
 sum +=i
}
console.log('sum ', sum)
console.log('q4')

//q5:
let fac = 1
let n5= 5

for(let i =1; i<=n5; i++){
    fac *= i
}
console.log('fac ',fac)
console.log('q5')

//q6:
let n6 = 10
let sum6 = 0
for(let i=0; i<=n6; i++){
    if(i%2===0){
        sum6 += i
    }
}
console.log('sum even: ', sum6)
console.log('q6')

//q7:
let n7 = 5
for(let i=1; i<=n7; i++){
    console.log('sq of: ', i, " is ", i*i)
}
console.log('q7')

//q8:
let n8 = 30
for(let i =1; i<=n8; i++){
    if(i%3==0 && i%5==0){
        console.log(i)
    }
}
console.log('q8')

// q9:
let n9 = 10
let sum9 =0
for(let i=1; i<=n9; i++){
    if(i % 2 !== 0){
 sum9 += i
    }
        
}
console.log(sum9)
console.log('q9')

// q10:
let n10 = 5
for(let i=1;i<=n10; i++){
    console.log(i*i*i)
}
console.log('q10')

//q11:
let n11 = 20
let sqrt = 1
for (let i = 1; i <= n11; i++) {
    sqrt = i*i
    if(i % 2 ==0 && sqrt %2 ==0){
        console.log(i)
    }
    if(sqrt >n11){
        break
    }
}
console.log('q11')
