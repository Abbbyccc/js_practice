const RNA = (str) => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'G') {
            result = result + 'C'
        } else if (str[i] == 'C') {
            result = result + 'G'
        } else if (str[i] == 'T') {
            result = result + 'A'
        } else if (str[i] == 'A') {
            result = result + 'U'

        }
    }
    return result
}
const DNA = (str) => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'C') {
            result = result + 'G'
        } else if (str[i] == 'G') {
            result = result + 'C'
        } else if (str[i] == 'A') {
            result = result + 'T'
        } else if (str[i] == 'U') {
            result = result + 'A'

        }
    }
    return result
}
