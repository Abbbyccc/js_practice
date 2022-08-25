function filterKeys(obj, func) {
    let newObj = {}
    for (let [key, value] of Object.entries(obj)) {
        if (func(key)) {
            newObj[key] = value
        }
    }
    return newObj
}

function mapKeys(obj, func) {
    let newObj = {}
    for (let [key, value] of Object.entries(obj)) {
        newObj[func(key)] = value
    }
    return newObj
}

function reduceKeys(obj, ...args) {
    return Object.keys(obj).reduce(...args)
}