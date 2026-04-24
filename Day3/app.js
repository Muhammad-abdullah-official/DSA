// question 1
console.log('-------------Q NO 1-----------')
for (let i = 0; i < 5; i++) {
    let line = ''
    for (let j = 0; j <= i; j++) {
        line += '*'
    }
console.log(line)
}

console.log('-------------Q NO 2-----------')

for (let i = 5; i >= 0; i--) {
    let line = ''
    for (let j = 0; j <= i; j++) {
        line += '*'
    }
console.log(line)
}


console.log('-------------Q NO 3-----------')
for (let i = 0; i < 5; i++) {
    let line = ''
    let space = ''
    for (let j = 4; j > i; j--) {
        space += ' '
    }
    for (let k = 0; k < 2 * i +1; k++) {
        line += '*'
    }
    console.log(space + line) // concate
    
}

console.log('-------------Q NO 4-----------')
for (let i = 5; i > 0; i--) {
    let line = ''
    let space = ''
    
    for (let j = 0; j < 5-i; j++) {
        space += ' '
    }
    for (let k = 0; k < 2*i -1; k++) {
        line += '*'
    }
    console.log(space + line)
}

console.log('-------------Q NO 4-----------')
for (let i = 5; i > 0; i--) {
    let line = ''
    let space = ''
    
    for (let j = 0; j < 5-i; j++) {
        space += ' '
    }
    for (let k = 0; k < 2*i -1; k++) {
        line += '*'
    }
    console.log(space + line)
}

console.log('-------------Q NO 5-----------')
for (let i = 5; i > 0; i--) {
    let line = ''
    let space = ''
    
    for (let j = 0; j < 5-i; j++) {
        space += ' '
    }
    for (let k = 0; k < 2*i -1; k++) {
        line += '*'
    }
    console.log(space + line)
}