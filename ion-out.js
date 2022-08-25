function ionOut(str) {
    let obj
    if (/,/.test(str)) {
        obj = str.split(', ')
    } else {
        obj = str.split(' ')
    }
    let regex = /(?<=t)(ion)/
    let result = []
    for (let i = 0; i < obj.length; i++) {
        if (/tion/.test(obj[i])) {
            let result2 = obj[i].replace(regex, '')
            result.push(result2)
        }
    }
    return result
}