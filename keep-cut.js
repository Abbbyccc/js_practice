const cutFirst = (str) => {
    let result = ""
    for (let i = 2; i < str.length; i++) {
        result += str[i]
    }
    return result
}

const cutLast = (str) => {
    let result = ""
    for (let i = 0; i < str.length - 2; i++) {
        result += str[i]
    }
    return result
}

const cutFirstLast = (str) => {
    if (str.length > 4) {
        return str.substring(2, str.length - 2)
    } else {
        return ''
    }
}

const keepFirst = (str) => str.substring(0, 2)
const keepLast = (str) => str.substring(str.length - 2, str.length)
const keepFirstLast = (str) => {
    let result = ""
    let result2 = ""
    if (str.length > 4) {
        result = keepFirst(str)
        result2 = keepLast(str)
        return result + result2
    } else {
        return str
    }
}