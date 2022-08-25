const multiply = (a, b) => {
    if (a == 0 || b == 0) {
        return 0
    } else if (a > 0 && b > 0) {
        let result = a
        for (let i = 1; i < b; i++) {
            result += a
        }
        return result
    } else if (a < 0 && b < 0) {
        let result = -a
        for (let i = 1; i < -b; i++) {
            result += -a
        }
        return result
    } else if (a < 0) {
        let result = -a
        for (let i = 1; i < b; i++) {
            result += -a
        }
        return -result
    } else if (b < 0) {
        let result = -b
        for (let i = 1; i < a; i++) {
            result += -b
        }
        return -result
    }
}

const divide = (a, b) => {
    if (a == 0) {
        return 0
    }
    if (b == 0) {
        return Infinity
    }
    let negResult = false
    if (a < 0 && b < 0) {
        a = -a
        b = -b
        negResult = false
    } else if (a < 0) {
        a = -a
        negResult = true
    } else if (b < 0) {
        b = -b
        negResult = true
    }
    let count = 0
    while (a >= b) {
        a = a - b
        count++
    }
    if (negResult) {
        return -count
    } else {
        return count
    }
}

function modulo(a, b) {
    let q = parseInt(divide(a, b));
    let p = multiply(q, b);
    return a - p
}









// function multiply(a, b) {
//     if (a === 0 || b === 0) {
//         return 0
//     } else if (a > 0 && b > 0) {
//         let num = a
//         for (let i = 1; i < b; i++) {
//             num += a
//         }
//         return num
//     } else if (a < 0 && b < 0) {
//         let num = -a
//         for (let i = 1; i < -b; i++) {
//             num += -a
//         }
//         return num
//     } else if (a < 0) {
//         let num = -a
//         for (let i = 1; i < b; i++) {
//             num += -a
//         }
//         return -num
//     } else if (b < 0) {
//         let num = -b
//         for (let i = 1; i < a; i++) {
//             num += -b
//         }
//         return -num
//     }
// }


// function divide(a, b) {
//     if (b === 0) {
//         return
//     }
//     let sign = 1;
//     if (a < 0) {
//         a = -a;
//         sign = -sign;
//     }
//     if (b < 0) {
//         b = -b;
//         sign = -sign;
//     }
//     let result = 0;
//     while (a >= 0) {
//         a -= b;
//         result++;
//     }
//     return multiply((result - 1), sign);
// }


// function modulo(a, b) {
//     let q = parseInt(divide(a, b));
//     let p = multiply(q, b);
//     return a - p
// }