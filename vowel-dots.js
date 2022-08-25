
const vowels = /[aeiou]/gi
function vowelDots(str) {
    for (let i = 0; i < str.length; i++) {
        if (vowels.test(str[i])) {
            str = str.replace(str[i], str[i] + '.')
        }

    }
    return str
}