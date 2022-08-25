
const sign = (arg) => {
    if (arg > 0) {
        return 1
    } else if (arg < 0) {
        return -1
    } else if (arg == 0) {
        return 0
    }
}

const sameSign = (arg1, arg2) => {
    if (sign(arg1) == sign(arg2)) {
        return true
    } else {
        return false
    }
}


// const sign = (arg) => {
//     if (arg > 1) {
//         return 1
//     } else if (arg < 0) {
//         return -1
//     } else if (arg == 0) {
//         return 0
//     }
// }

// const sameSign=(a,b)=>{
//     if (sign(a)==sign(b)){
//         return true
//     }else{
//         return false
//     }
// }