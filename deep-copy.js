const deepCopy = (obj) => {
    if (typeof obj !== 'object' || Object.keys(obj).length === 0) return obj

    let result = {}
    if (Array.isArray(obj)) {
        result = []
    }
    for (const key in obj) {
        result[key] = deepCopy(obj[key])

        if (Object.isFrozen(obj[key]))
            Object.freeze(result[key])
    }
    return result
}