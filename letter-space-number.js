function letterSpaceNumber(str) {
    let arr = []

    for (let i = 0; i < str.length; i++) {
        if ((/\s/.test(str[i]) && /[a-z]/.test(str[i - 1]) && /[0-9]/.test(str[i + 1])) && (/\s/.test(str[i + 2]) || /\W/.test(str[i + 2]) || str[i + 2] == null)) {

            arr.push(str[i - 1] + str[i] + str[i + 1])
        }
    }
    return arr
}