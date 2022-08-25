const adder = (arr, initialV = 0) => arr.reduce((a, b) => a + b, initialV)

const sumOrMul = (arr, initialV = 0) => arr.reduce((a, b) => {
    if (b % 2 == 0) {
        return a * b
    } else if (b % 2 !== 0) {
        return a + b
    }
}, initialV
)

const funcExec = (arrfun, initialV = 0) => arrfun.reduce((a, func) => {
    return func(a)
}, initialV)