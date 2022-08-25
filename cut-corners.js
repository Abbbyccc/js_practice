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
    let q = divide(a, b);
    let p = multiply(q, b);
    return a - p
}


// function round(num) {
//     if (num > 0) {
//         if (modulo(num, 1) >= 0.5) {
//             return num - (modulo(num, 1)) + 1
//         }
//         return num - (modulo(num, 1))
//     } else {
//         if (modulo(num, 1) <= -0.5) {
//             return num - (modulo(num, 1)) - 1
//         }
//         return num - (modulo(num, 1))
//     }
// }

// function ceil(num) {
//     if (round(num) >= num) {
//         return round(num)
//     } else {
//         return round(num) + 1
//     }
// }

// function floor(num) {
//     if (round(num) <= num) {
//         return round(num)
//     } else {
//         return round(num) - 1
//     }
// }

// function trunc(num) {
//     return num - modulo(num, 1)
// }

const round = (num) => {
    let a = modulo(num, 1);
    if (num >= 0) {
        if (a >= 0.5) {
            return num + 1 - a;
        } else {
            return num - a;
        }

    } else if (num < 0) {
        if (a > -0.5) {
            return num - a;
        } else {
            return num - a - 1;
        }
    } else {
        return num + a
    }
}


const ceil = (num) => {
    let a = modulo(num, 1);
    if (num > 0) {
        return num + 1 - a

    } else if (num < 0) {

        return num + 1 - a - 1
    } else {
        return 0
    }
}

const floor = (num) => {
    let a = modulo(num, 1);
    if (num >= 0) {
        return num - a
    } else {
        return num - 1 - a
    }
}


const trunc = (num) => {
    if (num > 0xfffffffff) {
        var n = num - 0xfffffffff;
        if (n > 0 && modulo(n, 1) === 0) {
            return n + 0xfffffffff;
        } else if (n > 0 && modulo(n, 1) !== 0) {
            return n - modulo(n, 1) + 0xfffffffff;
        } else if (n < 0) {
            n = Math.abs(n);
            if (modulo(n, 1) === 0) {
                return -Math.abs(n) + 0xfffffffff;
            } else if (modulo(n, 1) !== 0) {
                return -Math.abs(n - modulo(n, 1)) + 0xfffffffff;
            }
        }
    }

    if (num === 0) {
        return 0;
    } else if (modulo(num, 1) === 0 && num > 0) {
        return num;
    } else if (modulo(num, 1) !== 0 && num > 0) {
        return num - modulo(num, 1);
    } else if (num < 0) {
        num = Math.abs(num);
        return -Math.abs(num - modulo(num, 1));
    }
}