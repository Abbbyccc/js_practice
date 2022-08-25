const map = (arr, fn) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i, arr))
    }
    return newArr
}

const flatMap = (arr, fn) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatMap(arr[i], fn)
        }
        newArr = newArr.concat(fn(arr[i], i, arr))
    }
    return newArr
}
