function filterValues(obj, func) {
    let res = {}
    for (let [key, value] of Object.entries(obj)) {
        if (func(value)) {
            res[key] = value
        }
    }
    return res
}

function mapValues(obj, func) {
    let res = {}
    for (let [key, value] of Object.entries(obj)) {
        res[key] = func(value)
    }
    return res
}

function reduceValues(obj, func, acc) {
    if (acc == undefined) {
        return Object.values(obj).reduce(func)
    }
    return Object.values(obj).concat(acc).reduce(func)
}


