const pick = (obj, arr) => {
    let result = {}
    let strArray
    if (typeof arr == 'string') {
        strArray = arr.split()
    } else {
        strArray = arr
    }
    for (let [key, value] of Object.entries(obj)) {
        for (let i of strArray) {
            if (i === key) {
                result[i] = value
            }
        }
    }
    return result
}

const omit = (obj, arr) => {
    let result = {}
    let strArray
    if (typeof arr == 'string') {
        strArray = arr.split()
    } else {
        strArray = arr
    }

    for (let [key, value] of Object.entries(obj)) {

        if (!strArray.includes(key)) {
            result[key] = value
        }
    }
    return result
}

