const fusion = (obj1, obj2) => {
    let newObj = {}
    Object.keys(obj1).forEach(key => {
        newObj[key] = obj1[key]
    })

    Object.keys(obj2).forEach(key => {
        if (typeof newObj[key] !== typeof obj2[key]) {
            newObj[key] = obj2[key]
        } else if ((Array.isArray(newObj[key]) && Array.isArray(obj2[key]))) {
            newObj[key] = newObj[key].concat(obj2[key])
        } else if (typeof newObj[key] === 'string') {
            newObj[key] += ' ' + (obj2[key])
        } else if (typeof newObj[key] === 'number') {
            newObj[key] += obj2[key]
        } else if (typeof newObj[key] === 'object') {
            newObj[key] = fusion(newObj[key], obj2[key])
        }
    })
    return newObj
}
