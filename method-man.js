const words = (str) => str.split(' ')
const sentence = (arr) => arr.join(' ')
const yell = (str) => str.toUpperCase()
const whisper = (str) => `*${str.toLowerCase()}*`
const capitalize = (str) => {
    let lowered = str.toLowerCase()
    return lowered[0].toUpperCase() + lowered.slice(1)
}

// const words = (str) => {
//     return str.split(' ')
// }

// const sentence = (str) => {
//     return str.join(' ')
// }

// const yell = (str) => {
//     return str.toUpperCase()
// }

// const whisper = (str) => {
//     let lowered = str.toLowerCase()
//     return `*${lowered}*`
// }

// const capitalize = (str) => {
//     let lowered = str.toLowerCase()
//     return str.charAt(0).toUpperCase() + lowered.slice(1)
// }