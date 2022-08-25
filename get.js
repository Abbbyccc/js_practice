const get = (src, path) => {
    let arr = path.split('.')
    let currentSrc = src
    arr.forEach((ele) => {
        if (currentSrc === undefined) {
            return undefined
        } else {
            currentSrc = currentSrc[ele]
        }
    })
    return currentSrc
}
