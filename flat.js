const flat = (arr, depth = 1) => {
    if (depth > 0) {
        return arr.reduce((prev, current) => prev.concat(Array.isArray(current) ? flat(current, depth - 1) : current), [])
    } else {
        return arr.slice()
    }

};
