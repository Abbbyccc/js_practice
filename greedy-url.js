function getURL(str) {
    let obj = str.split(' ')
    console.log(obj)
    let result
    for (let i = 0; i < obj.length; i++) {
        if (/http/.test(obj[i]) || /https/.test(obj[i])) {
            console.log(obj[i])
        }
    }
    return result

}