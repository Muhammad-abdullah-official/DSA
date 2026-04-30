// question 1
console.log('-------------Q NO 1-----------')
for (let i = 1; i <= 5; i++) {
    let line = ''
    // for (let j = 0; j <= i; j++) {
    //     // console.log('j',j)
    //     line += '*'
    // }

console.log(`*`.repeat(i))
// console.log(line)
}

console.log('-------------Q NO 2-----------')

for (let i = 5; i > 0; i--) {
    let line = ''
    // for (let j = 0; j < i; j++) {
    //     line += '*'
    // }
console.log('*'.repeat(i))
// console.log(line)
}


console.log('-------------Q NO 3-----------')
for (let i = 0; i < 5; i++) {
    let line = ''
    let space = ''
    // for (let j = 4; j > i; j--) {
    //     space += ' '
    // }
    // for (let k = 0; k < 2 * i +1; k++) {
    //     line += '*'
    // }
    // console.log(space + line) // concate

    console.log(' '.repeat(4-i), '*'.repeat(2*i+1))
    
}

console.log('-------------Q NO 4-----------')
for (let i = 5; i >= 1; i--) {
    let line = ''
    let space = ''
    
    // for (let j = 0; j < 5-i; j++) {
    //     space += ' '
    // }
    // for (let k = 0; k < 2*i -1; k++) {
    //     line += '*'
    // }
    // console.log(space + line)
    console.log(' '.repeat(5-i), '*'.repeat(2*i-1))
}

console.log('-------------Q NO 5-----------')
for (let i = 0; i<5 ; i++) {
    let space = '   '
    if(i==0 || i ==4){
        console.log('*'.repeat(5));
    }
    else{
        // console.log('*'+space +'*')
        console.log('*' + ' '.repeat(5 - 2) + '*');
    }
}

console.log('-------------Q NO 6-----------')
let n6 = 5;

for (let i = 0; i < n6; i++) {
    let row = '';

    // spaces
    row += ' '.repeat(n6 - i - 1);

    for (let j = 0; j < 2 * i + 1; j++) {
        if (j === 0 || j === 2 * i || i === n6 - 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}

console.log('-------------Q NO 7-----------')


for (let i = 0; i < 5; i++) {
    let row = '';

    for (let j = 0; j <= i; j++) {
        row += (i + j) % 2 === 0 ? '1 ' : '0 ';
    }

    console.log(row.trim());
}

console.log('-------------Q NO 8-----------')
let n8 = 5;

for (let i = n8; i > 0; i--) {
    let row = '';

    row += ' '.repeat(n8 - i);

    for (let j = 0; j < 2 * i - 1; j++) {
        if (j === 0 || j === 2 * i - 2 || i === n8) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}

console.log('-------------Q NO 9-----------')
let n9 = 5;

// upper
for (let i = 1; i <= n9; i++) {
    console.log(
        '*'.repeat(i) +
        ' '.repeat(2 * (n9 - i)) +
        '*'.repeat(i)
    );
}

// lower
for (let i = n9 - 1; i >= 1; i--) {
    console.log(
        '*'.repeat(i) +
        ' '.repeat(2 * (n9 - i)) +
        '*'.repeat(i)
    );
}

console.log('-------------Q NO 10-----------')
for (let i = 0; i <3 ; i++) {
    let space = ''
    let strr = ''
    for (let j = 2; j > i; j--) {
        space += ' '
    }
    for (let k = 0; k < 2*i+1; k++) {
        strr += '*'
    }
    console.log(space + strr)
}
for (let i = 2; i >0; i--) {
    let space = ''
    let strr = ''
    for (let j = 0; j <= 2-i; j++) {
        space += ' '
    }
    for (let k = 0; k < 2*i-1; k++) {
        strr += '*'
    }
    console.log(space + strr)
}

// let n = 3;

// for (let i = 0; i < n; i++) {
//     console.log(' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1));
// }
// for (let i = n - 2; i >= 0; i--) {
//     console.log(' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1));
// }

console.log('-------------Q NO 11-----------')

for (let i = 5; i >0; i--) {
    let space = ''
    let strr = ''
    for (let j = 0; j <= 5-i; j++) {
        space += ' '
    }
    for (let k = 0; k < 2*i-1; k++) {
        strr += '*'
    }
    console.log(space + strr)
}
for (let i = 1; i <5 ; i++) {
    let space = ''
    let strr = ''
    for (let j = 5; j > i; j--) {
        space += ' '
    }
    for (let k = 0; k < 2*i+1; k++) {
        strr += '*'
    }
    console.log(space + strr)
}

console.log('-------------Q NO 12-----------')
let n12 = 3;

// upper
for (let i = 0; i < n12; i++) {
    let row = ' '.repeat(n12 - i - 1);

    for (let j = 0; j < 2 * i + 1; j++) {
        if (j === 0 || j === 2 * i) row += '*';
        else row += ' ';
    }

    console.log(row);
}

// lower
for (let i = n12 - 2; i >= 0; i--) {
    let row = ' '.repeat(n12 - i - 1);

    for (let j = 0; j < 2 * i + 1; j++) {
        if (j === 0 || j === 2 * i) row += '*';
        else row += ' ';
    }

    console.log(row);
}

console.log('-------------Q NO 13-----------')
for (let i = 0; i < 5; i++) {
    let space = ''
    let line = '*****'
    for (let j = 0; j < 4-i; j++) {
        space += ' '
    }
    console.log(space + line)   
}

// let n = 5;

// for (let i = 0; i < n; i++) {
//     console.log(' '.repeat(n - i - 1) + '*'.repeat(n));
// }

console.log('-------------Q NO 14-----------')
    let num = 9
    let limit = 10
    let res   
for (let i = 1; i <= limit; i++) {
    
    res = num * i
    console.log(num ,' x ',i , ' = ' ,res)
}

let upto = 3;

for (let i = 1; i <= upto; i++) {
    console.log(`Table of ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}