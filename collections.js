const arrToSet = (arr) => new Set(arr)
const arrToStr = (arr) => {
    let str = arr.toString()
    return str.replaceAll(',', '')
}
const setToArr = (set) => Array.from(set)
const setToStr = (set) => {
    let arr = Array.from(set)
    return arrToStr(arr)
}

const strToArr = (str) => Array.from(str)
const strToSet = (str) => {
    let arr = strToArr(str)
    return arrToSet(arr)
}
const mapToObj = (map) => {
    const entries = new Map(map)
    return Object.fromEntries(entries)
}

const objToArr = (obj) => {
    let arr = []
    for (const [key, value] of Object.entries(obj)) {
        arr.push(value)
    }
    return arr
}

const objToMap = (obj) => new Map(Object.entries(obj))
const arrToObj = (arr) => Object.assign({}, arr)
const strToObj = (str) => {
    const arr = strToArr(str)
    return arrToObj(arr)
}

const superTypeOf = (arg) => {
    if (arg instanceof Map) {
        return 'Map'
    } else if (arg instanceof Set) {
        return 'Set'
    } else if (Array.isArray(arg)) {
        return 'Array'
    } else if (arg === null) {
        return 'null'
    } else if (typeof arg == 'undefined') {
        return 'undefined'
    } else {
        const type = typeof arg
        return type[0].toUpperCase() + type.slice(1)
    }
}





// const arrToSet = (arr) => {
//     let set = new Set
//     for (let i = 0; i < arr.length; i++) {
//         set.add(arr[i])
//     }
//     return set
// }
// const arrToStr = (arr) => {
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         str += arr[i]
//     }
//     return str
// }
// const setToArr = (set) => {
//     let arr = Array.from(set)
//     return arr
// }
// const setToStr = (set) => {
//     let str = ''
//     for (let item of set.values()) str += item;
//     return str
// }
// const strToArr = (str) => {
//     let arr = Array.from(str)
//     return arr
// }
// const strToSet = (str) => {
//     let set = new Set
//     for (let i = 0; i < str.length; i++) {
//         set.add(str[i])
//     }
//     return set
// }
// const mapToObj = (map) => {
//     let obj = {}
//     for (var [key, value] of map.entries()) {
//         obj[key] = value
//     }
//     return obj
// }
// const objToArr = (obj) => {
//     let arr = []
//     for (const [key, value] of Object.entries(obj)) {
//         arr.push(value)
//     }
//     return arr
// }
// const objToMap = (obj) => {
//     let map = new Map
//     for (let key in obj) {
//         map.set(key, obj[key])
//     }
//     return map
// }
// const arrToObj = (arr) => {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         obj[i] = arr[i]
//     }
//     return obj
// }
// const strToObj = (str) => {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         obj[i] = str[i]
//     }
//     return obj
// }
// const superTypeOf = (e) => {
//     if (e === null) return 'null'

//     let instances = { Set, Map, Array, Function }

//     for (let key in instances) {

//         if (e instanceof instances[key]) return key
//     }

//     let types = { Number: 'number', String: 'string', Object: 'object' }
//     for (let key in types) {
//         if (typeof e === types[key]) return key
//     }

//     return typeof e
// }