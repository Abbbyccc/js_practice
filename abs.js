const isPositive = (num) => {
    if (Number.isInteger(num) && num > 0) {
        return true
    } else {
        return false
    }
}

const abs = (num) => num < 0 ? -num : num

// const isPositive = (num) => {
//     if (Number.isInteger(num) && num > 0) {
//         return true
//     } else {
//         return false
//     }
// }

// const abs = (integer) => {
//     return integer < 0 ? -integer : integer;
// }