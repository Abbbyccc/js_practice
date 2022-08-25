function slice(collection, start, end = collection.length) {
    let a = start;
    let b = end;
    if (start < 0) {
        a = collection.length + start;
    }
    if (end < 0) {
        b = collection.length + end;
    }
    if (typeof collection === 'string') {
        let result = ''
        for (let i = a; i < b; i++) {
            result += (collection[i])
        }
        return result
    } else {
        let result = []
        for (let i = a; i < b; i++) {
            result.push(collection[i])
        }
        return result
    }
}